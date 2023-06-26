import React from 'react';
import ProfileComponent from '../../../Components/Employee/Onboarding/Profile/ProfileComponent';
import AsideAdmin from '../../../Components/Sidebar/AsideAdmin';
import Mobile from '../../../Components/Sidebar/Mobile';
import { Headbar } from '../../../Components/Headbar/Headbar';
import { useParams } from 'react-router-dom';

const AdminOnboarding = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col flex-1 w-full"
        style={{ backgroundColor: '#eff6fc', paddingBlockEnd: '6rem' }}
      >
        <ProfileComponent />
      </div>
    </div>
  );
};

export default AdminOnboarding;
