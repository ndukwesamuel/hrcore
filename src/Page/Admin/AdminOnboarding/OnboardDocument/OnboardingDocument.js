import React, { useState } from 'react';
import Mobile from '../../../../Components/Sidebar/Mobile';
import { Headbar } from '../../../../Components/Headbar/Headbar';
import { NavLink, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Aside from '../../../../Components/Sidebar/Aside';

const OnboardingDocument = () => {
  // let url1 = '/admin/documents/docs';
  // let url2 = '/admin/documents/office-tools';
  // const location = useLocation();
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div class="app-view-screen">
      <aside
        className=" sidebar-color z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
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
        <Headbar name="Onboarding" />

        <div className="flex justify-center w-full ">
          <div className="w-full  xl:w-[90%]  2xl:w-[50%]">
            <ul className="w-full flex px-4 gap-2">
              <li
                className={` basis-3/12  rounded  py-1
font-['Inter'] text-center font-semibold    ${
                  activeTab === 1
                    ? 'bg-[#2A72A8] text-white'
                    : 'bg-white text-[#667085] '
                } `}
              >
                <NavLink
                  to="/admin/documents/docs"
                  onClick={() => handleTabClick(1)}
                >
                  Documents
                </NavLink>
              </li>

              <li
                className={` basis-3/12  rounded  py-1
font-['Inter'] text-center font-semibold    ${
                  activeTab === 2
                    ? 'bg-[#2A72A8] text-white'
                    : 'bg-white text-[#667085] '
                } `}
              >
                <NavLink
                  to="/admin/documents/office-tools"
                  onClick={() => handleTabClick(2)}
                >
                  Office Tools
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingDocument;
