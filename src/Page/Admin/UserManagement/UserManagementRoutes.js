import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddStaffPage from './AddStaffPage';
import EmployeeDirectory from './EmployeeDirectory';
import AdminOnboarding from '../AdminOnboarding/AdminOnboard';
// import Updateprofile from '../../Employee/Onboarding/Updateprofile';
import AdminOffboardingRoute from '../AdminOffboard/AdminOffboardRoute';
import Aside from '../../../Components/Sidebar/Aside';
import Mobile from '../../../Components/Sidebar/Mobile';
import Birthday from './Birthday';
import { Headbar } from '../../../Components/Headbar/Headbar';
import ProfileUpdate from './ProfileUpdate';

function UserManagementRoutes() {
  return (
    <div>
      <div className=" app-view-screen">
        <aside
          className="  sidebar-color  z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
          style={{ borderRight: '1px solid #cec5c5' }}
        >
          <Aside />
        </aside>
        <aside
          className="fixed inset-y-0 z-20 flex-shrink-0 w-64 hidden overflow-y-auto bg-white dark:bg-gray-800 mouseleav md:hidden"
          id="mobile-menu"
        >
          <Mobile />
        </aside>

        <div
          class="flex flex-col flex-1 w-full overflow-y-auto"
          style={{ backgroundColor: '#eff6fc', paddingBlockEnd: '6rem' }}
        >
          <Headbar name="directory" />

          <Routes>
            <Route path="/" element={<EmployeeDirectory />} />
            <Route path="/birthday" element={<Birthday />} />

            <Route path="/exit/*" element={<AdminOffboardingRoute />} />
            <Route path="/:id" element={<AdminOnboarding />} />
            <Route path="/:id/edit" element={<ProfileUpdate />} />
            <Route path="/addstaff" element={<AddStaffPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default UserManagementRoutes;
