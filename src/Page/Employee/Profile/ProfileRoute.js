import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Headbar } from '../../../Components/Headbar/Headbar';
import Aside from '../../../Components/Sidebar/Aside';
import Mobile from '../../../Components/Sidebar/Mobile';
import Updateprofile from '../Onboarding/Updateprofile';
import ProfileView from './ProfileView';
import ProfileUpdate from './ProfileUpdate';

// import Updateprofile from './Onboarding/Updateprofile';

function ProfileRoute() {
  return (
    <div>
      <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
        <aside
          className="z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
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
          class="flex flex-col flex-1 w-full overflow-y-auto"
          style={{ backgroundColor: '#eff6fc', paddingBlockEnd: '6rem' }}
        >
          <Headbar name="Profile" />

          <Routes>
            <Route path="/" element={<ProfileView />} />
            <Route path="/update" element={<ProfileUpdate />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default ProfileRoute;
