import React from 'react';

import download from '../../../../assets/Images/download.png';

import DownloadIcon from '@mui/icons-material/Download';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

let imguser =
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80';
function ProfileHeader({ profile, PageName }) {
  return (
    <div className="bg-white ProfileHeader py-10 px-5 lg:px-10  mb-10   border rounded  lg:rounded-2xl">
      <div className="ProfileHeader_wraper flex  justify-between mb-10">
        <p className="font-bold text-base w-[50%]">Profile</p>
        <div className="flex  w-[50%] justify-end">
          <div className="flex mr-5 items-center">
            <span>
              <img src={download} alt="" />
            </span>
            <span> Download </span>
          </div>

          <div>
            {PageName === 'employee' ? (
              <Link to={`/employee/profile/update`} state={profile}>
                <button className="bg-brand-blue tx-white">Update new </button>
              </Link>
            ) : (
              <Link to={`/admin/employee/${profile.id}/edit`} state={profile}>
                <button className="bg-brand-blue tx-white">Update </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2 font-semibold">
        <div>
          <p className="text-xl">
            {`${profile?.first_name} ${profile?.last_name}`}
          </p>

          <p>
            Role:
            <span className="font-normal">
              {' '}
              {profile?.profile?.designation || 'FakeRole'}
            </span>
          </p>

          <p>
            Email:
            <span className="font-normal">{profile?.email}</span>
          </p>

          <p>
            Employee ID:
            <span className="font-normal">{profile?.employee_id}</span>
          </p>
        </div>

        <div className="userProfile_img">
          <img src={profile.profile_image || imguser} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
