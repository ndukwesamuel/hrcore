import React, { useEffect } from 'react';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminOneEmployeeAction } from '../../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import { getUserProfile } from '../../../../app/service/thunk/employee/profileThunk';
import { Get_User_Profile_fun } from '../../../../Feature/Admin/UpdateProfile/UpdateProfileSlice';

function ProfileComponent({ PageName }) {
  const {
    Get_User_Profile,
    Get_User_Profile_isError,
    Get_User_Profile_isSuccess,
    Get_User_Profile_message,
    Get_User_Profile_isLoading,
  } = useSelector((state) => state.reducer.UpdateProfileSlice);

  const dispatch = useDispatch();
  // const { id } = useParams();
  // useEffect(() => {
  //   dispatch(getUserProfile(userData?.id));
  // }, []);
  // const profile = useSelector(
  //   (state) => state.reducer.employeeDetailSliceReducer.data
  // );

  // console.log(userData);
  // console.log(profile);

  useEffect(() => {
    dispatch(Get_User_Profile_fun());
    return () => {};
  }, []);

  console.log(Get_User_Profile);

  return (
    Get_User_Profile && (
      <div className="flex justify-center w-full  ">
        <div className="px-5   w-full xl:w-[75%]">
          <div className="">
            <ProfileHeader
              profile={Get_User_Profile?.data}
              PageName={PageName}
            />
          </div>
          <div className="bg-white py-10">
            <ProfileBody profile={Get_User_Profile?.data} PageName={PageName} />
          </div>
        </div>
      </div>
    )
  );
}

export default ProfileComponent;
