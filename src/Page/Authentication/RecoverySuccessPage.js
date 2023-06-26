import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import recovery from '../../../src/assets/cuate.png';
import LoginNavbar from '../../Components/LoginNavbar/LoginNavbar';

function RecoverySuccessPage({ submit }) {
  const navigate = useNavigate();

  useEffect(() => {
    startCountdown(20);
  }, []);
  const [counter, setCounter] = useState(0);
  function startCountdown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
      setCounter(counter--);

      if (counter < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-[#e9e9e9] w-full ">
      <LoginNavbar />
      <div className="font-['Manrope']  mt-12 w-[100%]  ">
        <div className=" flex justify-center items-between">
          <div className="bg-white flex w-[70%] 2xl:w-[50%] justify-center py-[70px] rounded-[10px] ">
            <div className="w-full  hidden lg:block">
              <img src={recovery} alt="" className="w-full h-fit " />
            </div>

            <div className="text-center lg:text-left  w-full  flex  flex-col justify-center">
              <div className="p-5 items-center   content-center">
                <h2 className="font-bold font-['Manrope'] text-[30px] mb-5 capitalize">
                  recovery email sent
                </h2>
                <div className="flex justify-center lg:block">
                  <p className="text-[16px]  font-normal text-[#757575] w-[335px] mb-5">
                    Didn’t receive the email? Please check the email address you
                    used to make sure it maches the address on your account,
                    look in your spam email, or request another email below
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-[#757575] text-xs font-['Manrope'] mb-2">
                    {`Wait for: ${counter} s before clicking`}
                  </p>
                  <button
                    disabled={counter !== 0}
                    className="btn-able"
                    onClick={submit}
                  >
                    send again
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecoverySuccessPage;
