import React, { useEffect, useRef, useState } from 'react';
import LoginNavbar from '../../Components/LoginNavbar/LoginNavbar';
import './Forgotpassword.css';
import { Blocks } from 'react-loader-spinner';

import { useDispatch, useSelector } from 'react-redux';
import {
  ForgotPassword,
  reset as forgetReset,
} from '../../Feature/Authentication/ForgotPassword/ForgotpasswordSlice';
import { toast } from 'react-toastify';
import PopModal from '../../Components/AddStaff/PopModal';
import RecoverySuccessPage from './RecoverySuccessPage';

const cont = () => {
  return (
    <>
      <div className="pop__circle"></div>
      <p className="pop__text">Check your email for reset password link</p>
    </>
  );
};
const Forgotpassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [recovery, setRecovery] = useState(false);

  const [opened, setOpened] = useState(false);
  const { useremail, IsError, isLoading, isSuccess, message } = useSelector(
    (state) => state.reducer.ForgotpasswordReducer
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const useremail = {
      email,
    };
    await dispatch(ForgotPassword(useremail));
  };

  useEffect(() => {
    if (message) {
      toast(`${message}`);
    }

    if (useremail) {
      setRecovery(true);
      toast(`${useremail.message}`);
    }

    return () => {
      dispatch(forgetReset());
    };
  }, [message, useremail, IsError, isLoading, isSuccess, dispatch]);

  return (
    <>
      {recovery ? (
        <RecoverySuccessPage submit={handleSubmit} />
      ) : (
        <>
          <PopModal
            children={cont()}
            isOpened={opened}
            onClose={() => setOpened(false)}
          ></PopModal>
          <div className="hrcorepasswordrecovery_page">
            <LoginNavbar />
            <div className="forgotpassword_form">
              <div className="form_details">
                <div></div>
                <div className="forgotpassword_seg">
                  <p className="forgotpassword_heading">Forgot password?</p>
                  <p className="forgotpassword_description">
                    Enter your email address below to reset your password.
                  </p>
                  <form onSubmit={handleSubmit} className="forgotpassword_form">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="email"
                      className="email_input"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />

                    {isLoading ? (
                      <div className="bg-[#2a72a8] flex justify-center py-1">
                        {/* <CircularProgress /> */}

                        <Blocks
                          visible={true}
                          height="80"
                          width="80"
                          color="#0000"
                          ariaLabel="blocks-loading"
                          wrapperStyle={{}}
                          wrapperClass="blocks-wrapper"
                        />
                      </div>
                    ) : (
                      <input type="submit" value="Submit" />
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Forgotpassword;
