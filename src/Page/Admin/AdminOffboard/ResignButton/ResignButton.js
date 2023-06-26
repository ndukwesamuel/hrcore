import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ResignStep1 from '../../../../Components/AdminComponent/AdminOffboarding/ResignButton/ResignStep1';
import { Headbar } from '../../../../Components/Headbar/Headbar';
import AsideAdmin from '../../../../Components/Sidebar/AsideAdmin';
import Mobile from '../../../../Components/Sidebar/Mobile';

const ResignButton = () => {
  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
      <aside
        class="z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
        style={{ borderRight: '1px solid #cec5c5' }}
      >
        <AsideAdmin />
      </aside>

      <aside
        class="fixed inset-y-0 z-20 flex-shrink-0 w-64 hidden overflow-y-auto bg-white dark:bg-gray-800 mouseleav md:hidden"
        id="mobile-menu"
      >
        <Mobile />
      </aside>

      <div
        class="flex flex-col flex-1 w-full "
        style={{ backgroundColor: '#eff6fc' }}
      >
        <Headbar name="Offboarding" />

        <ResignStep1 />
      </div>
    </div>
  );
};

export default ResignButton;
