import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Headbar } from '../../../../Components/Headbar/Headbar';
import AsideAdmin from '../../../../Components/Sidebar/AsideAdmin';
import Mobile from '../../../../Components/Sidebar/Mobile';

const Resignation = () => {
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
        <ul className="w-full flex px-4">
          <li
            className=" basis-3/12 bg-[#2A72A8] rounded text-white py-1
      font-['Inter'] text-center font-semibold "
          >
            <NavLink to="/admin/offboarding/resignation/resign">
              Resignation
            </NavLink>
          </li>
          <li
            className=" basis-3/12 bg-white rounded py-1 text-center font-['Inter'] 
          font-semibold text-[#667085]"
          >
            <NavLink to="/admin/offboarding/resignation/manageresignation">
              Manage
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default Resignation;
