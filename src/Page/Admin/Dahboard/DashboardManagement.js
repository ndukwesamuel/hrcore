import React from 'react';
import AsideAdmin from '../../../Components/Sidebar/AsideAdmin';
import Aside from '../../../Components/Sidebar/Aside';
import Mobile from '../../../Components/Sidebar/Mobile';
import Header from '../../../Components/Sidebar/Header';
import './dashboard.styles.css';
import Dashboard from './Dashboard';
import { Headbar } from '../../../Components/Headbar/Headbar';
import { useSelector } from 'react-redux';

const DashboardManagement = () => {
  const { permissions, userData, extra } = useSelector(
    (state) => state.reducer.loginReducer
  );

  return (
    <div class="app-view-screen">
      <aside
        class=" sidebar-color z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
        style={{ borderRight: '1px solid #cec5c5' }}
      >
        <Aside />
      </aside>

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
        <Headbar name={`Good Morning, ${userData?.first_name}`} />
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardManagement;
