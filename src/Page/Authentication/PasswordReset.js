import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginNavbar from '../../Components/LoginNavbar/LoginNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './PasswordReset.css';
import { PasswordResetSchema } from '../../FormValidation/FormValidation';
import { resetPasswordAction } from '../../Feature/Authentication/AuthSlice';
import Popupmodal from '../../Components/Popupmodal/Popupmodal';

const PasswordReset = () => {
  const dispatch = useDispatch();
  const { resetPassword } = useSelector((state) => state.reducer.loginReducer);
  const { success } = useSelector(
    (state) => state.reducer.passwordResetReducer
  );
  const navigate = useNavigate();
  let token = resetPassword;
  const urlParams = window.location.search?.split('=')[1];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PasswordResetSchema),
  });
  const [open, setOpen] = useState(false);
  const onSubmit = async (data) => {
    if (token === '') token = urlParams;
    setOpen(true);
    await dispatch(resetPasswordAction({ ...data, token }));
    setOpen(false);
  };

  useEffect(() => {
    if (success === true) {
      setOpen(false);
      dispatch(dispatch({ type: 'RESET' }));
      window.location.href = '/auth/success';
    }
  }, [success, navigate, dispatch]);

  return (
    <div className="passwordreset">
      <LoginNavbar />
      <Popupmodal open={open} />
      <section className="passwordreset__wrapper">
        <div className="passwordreset__content">
          <p className="passwordreset__heading">Reset your password</p>
          <p className="passwordreset__description">
            You are expected to input a strong password that is at least 8
            characters long
          </p>
          <form
            className="passwordreset__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label for="password">New password</label>
            <br />
            <input type="password" id="password" {...register('password')} />
            {errors.password && (
              <p className="form-error">{errors.password?.message}</p>
            )}
            <br />
            <label for="password_confirmation">Confirm password</label>
            <br />
            <input
              type="password"
              id="password_confirmation"
              {...register('password_confirmation')}
            />
            {errors.password_confirmation && (
              <p className="form-error">
                {errors.password_confirmation?.message}
              </p>
            )}
            <br />
            <input type="submit" value="Reset password" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default PasswordReset;
