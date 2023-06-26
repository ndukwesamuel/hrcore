import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Headbar } from '../../../Components/Headbar/Headbar';
import Aside from '../../../Components/Sidebar/Aside';
import Mobile from '../../../Components/Sidebar/Mobile';

import Resign from './Resign/Resign';
import OffboardSingleReview from './OffboardSingleReview';
import ResignList from './ResignList';

function OffboardingRoute() {
  return (
    <div class="app-view-screen">
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
        style={{ backgroundColor: '#eff6fc', paddingBlockEnd: '6rem' }}
      >
        {/* <Header/> */}
        <Headbar />

        <div>
          <Routes>
            <Route path="/" element={<ResignList />} />
            <Route path="/resign" element={<Resign />} />
            <Route path="/review/:id" element={<OffboardSingleReview />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default OffboardingRoute;
