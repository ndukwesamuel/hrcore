import React, { useEffect } from 'react';

import { Headbar } from '../../../Components/Headbar/Headbar';
import Mobile from '../../../Components/Sidebar/Mobile';
import Aside from '../../../Components/Sidebar/Aside';

import EmployeeOnboardingDocument from './EmployeeOnboardingDocument';
import { Route, Routes } from 'react-router-dom';
import EmployeeOnboardingFile from './EmployeeOnboardingFile';

const OnboardingRoute = () => {
  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
      <aside
        class="z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
        style={{ borderRight: '1px solid #cec5c5' }}
      >
        <Aside />
      </aside>

      <aside
        class="fixed inset-y-0 z-20 flex-shrink-0 w-64 hidden overflow-y-auto bg-white dark:bg-gray-800 mouseleav md:hidden"
        id="mobile-menu"
      >
        <Mobile />
      </aside>

      <div
        class="flex flex-col flex-1 w-full"
        style={{ backgroundColor: '#eff6fc' }}
      >
        {/* <Header/> */}
        <Headbar />

        <>
          <Routes>
            {/* <Route path="/:id" element={<AdminOnboarding />} /> */}

            <Route path="" element={<EmployeeOnboardingDocument />} />
            <Route path=":id" element={<EmployeeOnboardingFile />} />
            {/* <Route path="" element={<OnboardingDocument />}>
        <Route path="docs" element={<AdminOnboardingDocument />} />
        <Route path="office-tools" element={<Office />} />
        <Route path="office-tool/assigned" element={<AssignTools />} />
        <Route path="office-tool/:id" element={<OfficeTools />} />
        
            {/* </Route> */}
          </Routes>
        </>
      </div>
    </div>
  );
};

export default OnboardingRoute;
