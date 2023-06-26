import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './hrlogin.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Loginauth } from '../../Feature/Authentication/LoginSlice';
import PageLoader from '../../utilities/PageLoader';

const AdminLogin = ({ prevStep, handleAdminToggle }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const { success, resetPassword, userData } = useSelector(
    (state) => state.reducer.loginReducer
  );
  const handleCheck = (event) => {
    setRememberMe(event.target.checked);
  };

  const onFormSubmit = async (data) => {
    data.admin = 1;
    setOpen(true);

    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('user', rememberMe ? data : '');
    await dispatch(Loginauth(data, navigate));
    setOpen(false);
  };

  useEffect(() => {
    if (resetPassword) {
      return navigate('/auth/resetpassword');
    }

    if (userData && userData.is_admin) {
      return navigate('/admin/dashboard');
    }
  }, [userData, navigate, resetPassword]);

  const onErrors = (errors) => console.error(errors);

  const registerOptions = {
    name: { required: 'Name is required' },
    email: { required: 'Email is required' },
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters',
      },
    },
  };

  return (
    <div>
      {open && <PageLoader />}

      <div className="login-right-container">
        <h2 className="login-right-tittle">
          Welcome Back
          <span className=" highlight ">
            <wbr /> - Admin
          </span>
        </h2>
        <p className="login-right-subtitle ">
          Why did the HR manager's computer use HR Core? Because it needed a
          human resource.
        </p>
        <form
          onSubmit={handleSubmit(onFormSubmit, onErrors)}
          className="w-[475px] login-right-form"
        >
          <div className="form-element">
            <label className="login-right-label" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              {...register('email', registerOptions.email)}
              className="login-right-input"
            />
            <p className="error_loginmsg">
              {errors?.email && errors.email.message}
            </p>
          </div>
          <div className="form-element">
            <label htmlFor="password" className="login-right-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              {...register('password', registerOptions.password)}
              className="login-right-input"
            />
            <p className="error_loginmsg">
              {errors?.password && errors.password.message}
            </p>
          </div>
          <div className="login-right-forgot_password">
            <p className="text-xs">
              <Link
                to="/auth/forgotpassword"
                className="text-[#F72585] text-xs font-normal font-['Poppins']"
              >
                Forgot password?
              </Link>
            </p>
          </div>

          <button className="login-right-button">Sign in</button>
          <p className="login-right-switch">
            You are not an Admin?
            <button
              type="button"
              onClick={handleAdminToggle}
              className="text-[#F72585] cursor-pointer border-none outline-none"
            >
              Login from here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
