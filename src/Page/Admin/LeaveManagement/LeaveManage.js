import React from 'react';
import LeaveComp from '../../../Components/Leave/LeaveComp';
import './Leave.styles.css';
import AsideAdmin from '../../../Components/Sidebar/AsideAdmin';
import Mobile from '../../../Components/Sidebar/Mobile';
import Header from '../../../Components/Sidebar/Header';
import Aside from '../../../Components/Sidebar/Aside';

const LeaveManage = () => {
  return (
    <div class="app-view-screen">
      <aside
        className=" sidebar-color z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
        style={{ borderRight: '1px solid #cec5c5' }}
      >
        <Aside />
      </aside>

      {/* <div class="fixed inset-0 z-10 flex items-end sm:items-center sm:justify-center">
        </div> */}

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
        <LeaveComp />
      </div>
    </div>
  );
};
//
export default LeaveManage;
