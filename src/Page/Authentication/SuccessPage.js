import React from 'react';
import { useNavigate } from 'react-router-dom';
import popIcon from '../../assets/Images/rafiki.png';
import LoginNavbar from '../../Components/LoginNavbar/LoginNavbar';

function SuccessPage() {
  const navigate = useNavigate();

  const Back_To_Login = () => {
    navigate('/');
  };

  return (
    <div className="passwordreset">
      <LoginNavbar />
      <div className="font-['Manrope']  absolute top-[20%] w-[100%] ">
        <div className="flex justify-center  ">
          <div className="bg-white flex w-[70%] 2xl:w-[50%]   justify-center py-[70px] rounded-[10px]">
            <div className="w-full  hidden lg:block">
              <img src={popIcon} alt="" className="w-full" />
            </div>

            <div className="text-center lg:text-left  w-full  flex  flex-col justify-center">
              <div className="p-5 items-center   content-center">
                <h2 className="font-bold font-['Manrope'] text-[30px] mb-5">
                  Reset Successful
                </h2>
                <div className="flex justify-center lg:block">
                  <p className="text-[16px]  font-normal text-[#757575] w-[335px] mb-5">
                    Congratulations! Your password reset was successful. You can
                    now log in to your account using your new password. Simply
                    click the 'Login' button below to be redirected to the login
                    page.
                  </p>
                </div>

                <div className="mt-10">
                  <button
                    class="bg-[#F72585] hover:bg-[#2A72A8] text-white font-bold py-4 px-20 rounded "
                    onClick={Back_To_Login}
                  >
                    Go to Login
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

export default SuccessPage;
