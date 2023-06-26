import React from 'react';
import { useSelector } from 'react-redux';
import ProfileComponent from '../../../Components/Employee/Onboarding/Profile/ProfileComponent';
import Sidebar from '../../../Components/Sidebar/Sidebar';

function Profile() {
  return (
    <div className="employeedirectory">
      <section className="employeedirectory__left">
        <Sidebar />
      </section>
      <section className="employeedirectory__right">
        <ProfileComponent />
      </section>
    </div>
  );
}

export default Profile;
