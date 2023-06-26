import React from 'react';
import AsideAdmin from '../../../../Components/Sidebar/AsideAdmin';
import Mobile from '../../../../Components/Sidebar/Mobile';
import { Headbar } from '../../../../Components/Headbar/Headbar';
import AdminOnboardingDocument from '../../../../Components/AdminComponent/AdminOnboard/AdminOnboardDocument';
import AdminFiles from '../../../../Components/AdminComponent/AdminOnboard/AdminFiles';
const OnboardingFile = () => {
  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
      <AdminFiles />
    </div>
  );
};

export default OnboardingFile;
