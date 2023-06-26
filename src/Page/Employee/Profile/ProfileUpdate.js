import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../../app/service/thunk/employee/profileThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import pageLoader, {
  loaderReset,
  setLoading,
} from '../../../utilities/PageLoader';
import { Headbar } from '../../../Components/Headbar/Headbar';
import ProfileComponent from '../../../Components/Employee/Onboarding/Profile/ProfileComponent';
import Basic_Info, {
  FFF,
  Permission_Info,
} from '../../../Components/AdminComponent/Settings/Basic_Info';
import { SettingsNav } from '../../../Components/AdminComponent/Settings/SettingsNav';
import {
  Basic_Information,
  Education__,
  Experience__,
  Organization__,
} from '../../../Components/UpdateProfile/Update_component';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import {
  FakeUpdateFun,
  Get_User_Profile_fun,
  reset_UpdateProfile,
} from '../../../Feature/Admin/UpdateProfile/UpdateProfileSlice';

const ProfileUpdate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    Get_User_Profile,
    Get_User_Profile_isError,
    Get_User_Profile_isSuccess,
    Get_User_Profile_message,
    Get_User_Profile_isLoading,
  } = useSelector((state) => state.reducer.UpdateProfileSlice);

  const { userData, extra } = useSelector(
    (state) => state.reducer.loginReducer
  );

  const {
    Basic_Information_data,
    Organization___data,
    UpdateProfile_isSuccess,
  } = useSelector((state) => state.reducer.UpdateProfileSlice);

  console.log(Organization___data);

  const [generaluserdata, setGeneraluserdata] = useState('');
  const [shown, setShown] = useState('basic');

  const [basicInfoData, setBasicInfoData] = useState({
    role_name: '',
    role_decription: '',
  });

  const handleInputChangebasicInfoData = (e) => {
    const { name, value } = e.target;
    setBasicInfoData((prevState) => ({ ...prevState, [name]: value }));
  };

  const nextStep = () => {
    setShown('permissions');
    console.log(basicInfoData);
  };

  const prevStep = () => {
    setShown('basic');
  };

  useEffect(() => {
    if (UpdateProfile_isSuccess) {
      dispatch(reset_UpdateProfile());
    }

    dispatch(Get_User_Profile_fun());

    return () => {
      dispatch(reset_UpdateProfile());
    };
  }, [UpdateProfile_isSuccess]);

  let NewUserdata = Get_User_Profile?.data;

  console.log(NewUserdata);

  return (
    <>
      <div className="lg:flex lg:justify-center">
        <div className="lg:w-[90%]  ">
          <div className="flex justify-center">
            <div className=" mb-3   w-[90%] ">
              {/* <SettingsNav /> */}

              <p className="profile_basicinfo">
                <span
                  className=" cursor-pointer update_text"
                  onClick={() => navigate('/employee/profile')}
                >
                  Profile
                </span>
                {/* <Link to="/employee"> Profile</Link> */}
                <span className="nexttab_movement"></span>
                <span className="update_text"> Update Profile</span>
              </p>
            </div>
          </div>
          <div className="  md:flex md:justify-center    h-full ">
            <div className="bg-white md:w-[90%] ">
              <div className="forminput_details" class="bg-white my-3">
                <div className="headerspacing">
                  <p className="updateprofile_text">Update Profile</p>

                  {Basic_Information_data && (
                    <p
                      className="updateprofile_text "
                      onClick={() => dispatch(reset_UpdateProfile())}
                    >
                      Update not Completed Cancle to clear all update
                    </p>
                  )}
                </div>
              </div>
              <div className="title flex justify-center gap-3">
                <div class="flex  mt-5 w-full mb-7 justify-center gap-4">
                  <div
                    className="firststep "

                    // onClick={() => setShown('basic')}
                  >
                    <span
                      className={`${
                        shown === 'basic'
                          ? 'stepnumber'
                          : '  step_unchosennumber'
                      }  `}
                    >
                      1
                    </span>
                    <p
                      className={` ${
                        shown === 'basic' ? 'font-normal text-sm' : ''
                      }
          `}
                    >
                      Basic Information
                    </p>
                  </div>
                  <div
                    className="firststep"
                    // onClick={() => setShown('Organization')}
                  >
                    <span
                      className={`${
                        shown === 'Organization'
                          ? 'stepnumber'
                          : 'step_unchosennumber'
                      }  `}
                    >
                      2
                    </span>
                    <p
                      className={` ${
                        shown === 'Organization' ? 'font-normal text-sm' : ''
                      }
        `}
                    >
                      Organization
                    </p>
                  </div>

                  <div
                    className="firststep"
                    // onClick={() => setShown('Qualifications')}
                  >
                    <span
                      className={`${
                        shown === 'Qualifications'
                          ? 'stepnumber'
                          : 'step_unchosennumber'
                      }  `}
                    >
                      3
                    </span>
                    <p
                      className={` ${
                        shown === 'Qualifications' ? 'font-normal text-sm' : ''
                      }
        `}
                    >
                      Qualifications
                    </p>
                  </div>

                  <div
                    className="firststep"
                    // onClick={() => setShown('Experience')}
                  >
                    <span
                      className={`${
                        shown === 'Experience'
                          ? 'stepnumber'
                          : 'step_unchosennumber'
                      }  `}
                    >
                      4
                    </span>
                    <p
                      className={` ${
                        shown === 'Experience' ? 'font-normal text-sm' : ''
                      }
        `}
                    >
                      Experience
                    </p>
                  </div>
                </div>
              </div>

              {NewUserdata && (
                <form action="">
                  {shown === 'basic' && (
                    <div className="flex justify-center pb-4 ">
                      <div className=" w-[90%]">
                        <Basic_Information
                          setShown={setShown}
                          Admin_user_={extra}
                          NewUserdata={NewUserdata}
                        />
                      </div>
                    </div>
                  )}

                  {shown === 'Organization' && (
                    <div className="flex justify-center pb-4 ">
                      <div className=" w-[90%]">
                        <Organization__
                          setShown={setShown}
                          Admin_user_={extra}
                          NewUserdata={NewUserdata}
                        />
                      </div>
                    </div>
                  )}

                  {shown === 'Qualifications' && (
                    <div className="flex justify-center pb-4 ">
                      <div className=" w-[90%]">
                        <Education__
                          setShown={setShown}
                          Admin_user_={extra}
                          NewUserdata={NewUserdata}
                        />
                      </div>
                    </div>
                  )}

                  {shown === 'Experience' && (
                    <div className="flex justify-center pb-4 ">
                      <div className=" w-[90%]">
                        <Experience__
                          setShown={setShown}
                          Admin_user_={extra}
                          NewUserdata={NewUserdata}
                        />{' '}
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
