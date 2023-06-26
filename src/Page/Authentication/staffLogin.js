import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './hrlogin.css';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Loginauth } from '../../Feature/Authentication/LoginSlice';
import hrlogo from '../../assets/hr.png';
import Svgicons from '../../assets/Svgicons';
import AdminLogin from './AdminLogin';
import './staffLogin.scss';

import { allGlobalSettings } from '../../app/service/thunk/employee/profileThunk';
import PageLoader, {
  loaderReset,
  setLoading,
} from '../../utilities/PageLoader';

let url = process.env.REACT_APP_BASEURL;

console.log(url);

const StaffLogin = ({ nextStep }) => {
  const [admin, setAdmin] = useState(false);
  const handleAdminToggle = () => {
    setAdmin(!admin);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { userData, resetPassword } = useSelector(
    (state) => state.reducer.loginReducer
  );

  const [open, setOpen] = useState(false);

  const onFormSubmit = async (data) => {
    setLoading(true);
    data.admin = 0;
    await dispatch(Loginauth(data));
    setLoading(false);
  };

  useEffect(() => {
    dispatch(allGlobalSettings());
    if (resetPassword) {
      return navigate('/auth/resetpassword');
    }

    if (userData) {
      return navigate('/employee');
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
    <section>
      {loading && <PageLoader />}
      <div className="login-container">
        <div className="login-left-item">
          <div className="login-left">
            <div className="login-left-flex">
              <div>
                <h1 className="login-left-h1 ">
                  Transform <wbr /> Your HR Management with HR Core
                </h1>
                <p className="login-left-sub">
                  Experience Increased Efficiency and Compliance with HR Core -
                  The Leading HR Software for Your Business
                </p>
              </div>
              <div className="login-left-testimonials">
                <p className="flex">
                  <Svgicons action="star" />
                  <Svgicons action="star" />
                  <Svgicons action="star" />
                  <Svgicons action="star" />
                  <Svgicons action="star" />
                </p>
                <p
                  className="font-['Manrope'] text-white text-[13.3059px] font-normal
                   leading-[22px] w-[300px]"
                >
                  The onboarding process for new hires is now so much more
                  efficient and streamlined, and the time saved has been
                  invaluable.
                </p>
                <div className="flex justify-between items-center w-[140.13px] mt-3">
                  <div className="w-8 h-8 border-yellow-500 bg-slate-500 rounded-full"></div>
                  <div className="flex flex-col ">
                    <p
                      className="font-[Poppins] font-semibold text-[10.1695px] leading-[18px]
                    text-white"
                    >
                      Devon Lane
                    </p>
                    <p className="font-[Poppins] text-[8.8983px] leading-[14px] text-[#CBD5E1]">
                      Co-Founder, Design.co
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login-right">
          {!admin && (
            <div className="login-right-container">
              <h2 className="login-right-tittle">
                Welcome Back
                <span className=" highlight ">
                  <wbr /> - Employee
                </span>
              </h2>
              <p className="login-right-subtitle ">
                Why did the HR manager's computer use HR Core? Because it needed
                a human resource.
              </p>
              <form
                onSubmit={handleSubmit(onFormSubmit, onErrors)}
                className="w-[475px] login-right-form "
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
                  You are not an Employee?
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
          )}
          {admin && <AdminLogin handleAdminToggle={handleAdminToggle} />}
        </div>
      </div>
    </section>
  );
};

export default StaffLogin;
