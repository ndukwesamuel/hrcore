import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ManageResignation from '../../../Components/AdminComponent/AdminOffboarding/ManageResignation';
import Resign from '../../../Components/AdminComponent/AdminOffboarding/Resign';
import { Headbar } from '../../../Components/Headbar/Headbar';
import Mobile from '../../../Components/Sidebar/Mobile';
import OffBoardingList from './OffBoardingList';
import OffboardingReviewPage from './OffboardingReviewPage';
import Resignation from './Resignation/Resignation';
import ResignButton from './ResignButton/ResignButton';
import Aside from '../../../Components/Sidebar/Aside';

function AdminOffboardingRoute() {
  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col flex-1 w-full" style={{ backgroundColor: '#eff6fc' }}>
        <Headbar />
          <div>
              <Routes>
                  <Route path="/" element={<OffBoardingList />} />
                  <Route path="/:id" element={<OffboardingReviewPage />} />
                  <Route path="resignform" element={<ResignButton />} />
                  <Route path="resignation" element={<Resignation />} />
                  <Route path="resign" element={<Resign />} />
                  <Route path="manageresignation" element={<ManageResignation />} />
              </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminOffboardingRoute;
