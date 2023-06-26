import React, { useEffect } from 'react';
import ProfileBody from './ProfileBody';
import ProfileHeader from './ProfileHeader';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../../../app/service/thunk/employee/profileThunk';

function ProfileComponent() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserProfile(id));
  }, []);

  const profile = useSelector(
    (state) => state.reducer.employeeDetailSliceReducer.data
  );

  console.log(profile);

  return (
    profile && (
      <div className="flex justify-center w-full  ">
        <div className="px-5   w-full xl:w-[75%]">
          <div className="">
            <ProfileHeader profile={profile} id={id} />
          </div>
          <div className="bg-white py-10">
            <ProfileBody profile={profile} />
          </div>
        </div>
      </div>
    )
  );
}

export default ProfileComponent;
