import React, { useState, useEffect } from 'react';
import AdminProfileBody from './AdminProfileBody';
import ProfileHeader from '../../Employee/Onboarding/Profile/ProfileHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAdminOneEmployeeAction } from '../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import store from "../../../app/store";

function AdminProfileComponent() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getAdminOneEmployeeAction(id));
  }, []);
  const profile = store.getState().reducer.employeeDetailSliceReducer;

  return (
    <div className="px-10 w-full mt-5">
      <div className=" mb-10  ">
        <ProfileHeader profile={profile} />
      </div>
      <div className=" py-10">
        <AdminProfileBody profile={profile} />
      </div>
    </div>
  );
}

export default AdminProfileComponent;
