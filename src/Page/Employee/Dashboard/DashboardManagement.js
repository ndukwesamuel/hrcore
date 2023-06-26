import { useEffect, useState } from 'react';
import Aside from '../../../Components/Sidebar/Aside';
import AsideAdmin from '../../../Components/Sidebar/AsideAdmin';
import Mobile from '../../../Components/Sidebar/Mobile';
import Header from '../../../Components/Sidebar/Header';
import Dashboard from './Dashboard';
import store from '../../../app/store';
import { Headbar } from '../../../Components/Headbar/Headbar';

// const isAdminOrNot = store.getState().reducer.loginReducer.extra;

const DashboardManagement = () => {
  const isAdminOrNot = store.getState().reducer.loginReducer.extra;

  return (
    <div class="app-view-screen">
      <aside
        class=" sidebar-color z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
        style={{ borderRight: '1px solid #cec5c5' }}
      >
        <Aside />
      </aside>

      {/* <div class="fixed inset-0 z-10 flex items-end sm:items-center sm:justify-center">
            </div> */}

      <aside
        class=" sidebar-color  fixed inset-y-0 z-20 flex-shrink-0 w-64 hidden overflow-y-auto bg-white dark:bg-gray-800 mouseleav md:hidden"
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

        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardManagement;
