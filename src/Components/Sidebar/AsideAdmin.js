import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Svgicons from '../../assets/Svgicons';
import Logo from '../../assets/HRimg.png';

const AsideAdmin = () => {
  const [emp, openEmployee] = useState(false);

  const openEmployeeNav = () => {
    let para = document.getElementById('employex');
    if (para.classList.contains('hidden')) {
      para.classList.remove('hidden');
    } else {
      para.classList.add('hidden');
    }
  };

  const openLeaveNav = () => {
    let para = document.getElementById('leavev');
    if (para.classList.contains('hidden')) {
      para.classList.remove('hidden');
    } else {
      para.classList.add('hidden');
    }
  };

  const openFinanceNav = () => {
    let para = document.getElementById('Finance');
    if (para.classList.contains('hidden')) {
      para.classList.remove('hidden');
    } else {
      para.classList.add('hidden');
    }
  };

  const openPayrollNav = () => {
    let para = document.getElementById('pay');
    if (para.classList.contains('hidden')) {
      para.classList.remove('hidden');
    } else {
      para.classList.add('hidden');
    }
  };

  const openRecruitmentNav = () => {
    let para = document.getElementById('recruit');
    if (para.classList.contains('hidden')) {
      para.classList.remove('hidden');
    } else {
      para.classList.add('hidden');
      let leaveNav = document.getElementById('recuit');
      leaveNav.classList.remove('hidden');
      leaveNav.classList.add('hidden');
      // let leaveNav = document.getElementById('leavev');
      // let payrollNav = document.getElementById('pay');
      // let recruitmentNav = document.getElementById('recruit');
      // let requestNav = document.getElementById('request');
      // let performanceNav = document.getElementById('performance');
      // let engagementNav = document.getElementById('engage');
    }
  };

  const openRequestNav = () => {
    let para = document.getElementById('request');
    if (para.classList.contains('hidden')) {
      para.classList.remove('hidden');
    } else {
      para.classList.add('hidden');
      let employeeNav = document.getElementById('employex');
      employeeNav.classList.remove('hidden');
      employeeNav.classList.add('hidden');
    }
  };

  const openPerformanceNav = () => {
    let para = document.getElementById('performance');
    if (para.classList.contains('hidden')) {
      para.classList.remove('hidden');
    } else {
      para.classList.add('hidden');
    }
  };

  const openEngagementNav = () => {
    let para = document.getElementById('Engagement');
    if (para.classList.contains('hidden')) {
      para.classList.remove('hidden');
    } else {
      para.classList.add('hidden');
    }
  };

  const LogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <img className="px-8 py-2" src={Logo} alt="hrcore-logo" />

      <ul className="mt-7">
        <li class="relative px-6 py-3">
          <span
            class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          ></span>
          <NavLink
            to="/admin/dashboard"
            className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span class="ml-4 text-xs">Dashboard</span>
          </NavLink>
        </li>
        <li className="relative px-6 py-3">
          <NavLink
            onClick={(e) => openRequestNav(true)}
            className="inline-flex items-center justify-between w-full text-sm font-semibold cursor-pointer transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            style={{ fontSize: 13 }}
          >
            <span className="inline-flex items-cente">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <span className="ml-4">Employee</span>
            </span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </NavLink>
          <ul
            className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 shadow-inner bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-900"
            aria-label="submenu"
            id="request"
            style={{ borderLeft: '1px solid gray ' }}
          >
            <li className="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              <NavLink to="/admin/employee">Directory</NavLink>
            </li>
            <li className="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              {/* <NavLink to="/admin/directory">Directory</NavLink> */}
              <NavLink to="/admin/onboarding/document/docs">Onboarding</NavLink>
            </li>
            <li className="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              {/* <NavLink to="/admin/directory">Directory</NavLink> */}
              <NavLink to="/admin/offboard">Offboarding</NavLink>
            </li>
          </ul>
        </li>

        <li className="relative px-6 py-3">
          <NavLink
            onClick={(e) => openEngagementNav(true)}
            className="inline-flex items-center justify-between w-full text-sm font-semibold cursor-pointer transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            style={{ fontSize: 13 }}
          >
            <span className="inline-flex items-cente">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <span className="ml-4">Engagement</span>
            </span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </NavLink>
          <ul
            className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 shadow-inner bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-900"
            aria-label="submenu"
            id="Engagement"
            style={{ borderLeft: '1px solid gray ' }}
          >
            <li className="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              <NavLink to="/admin/Engagement">Announcements</NavLink>
            </li>
            <li className="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              {/* <NavLink to="/admin/directory">Directory</NavLink> */}
              <NavLink to="/admin/onboarding/document/docs">Survey</NavLink>
            </li>
            <li className="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              {/* <NavLink to="/admin/directory">Directory</NavLink> */}
              <NavLink to="/admin/offboard">Feedback</NavLink>
            </li>
          </ul>
        </li>

        <li className="relative px-6 py-3">
          <NavLink
            onClick={(e) => openLeaveNav(true)}
            className="inline-flex items-center justify-between w-full text-sm font-semibold cursor-pointer transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            style={{ fontSize: 13 }}
          >
            <span className="inline-flex items-cente">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>

              <span className="ml-4">Leave </span>
            </span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </NavLink>
          <ul
            className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 shadow-inner bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-900"
            aria-label="submenu"
            id="leavev"
            style={{ borderLeft: '1px solid gray ' }}
          >
            <li className="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              <NavLink to="/admin/leave">Manage </NavLink>
            </li>
          </ul>
        </li>

        <li className="relative px-6 py-3">
          <NavLink
            onClick={(e) => openFinanceNav(true)}
            className="inline-flex items-center justify-between w-full text-sm font-semibold cursor-pointer transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            style={{ fontSize: 13 }}
          >
            <span className="inline-flex items-cente">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>

              <span className="ml-4">Finance </span>
            </span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </NavLink>
          <ul
            className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 shadow-inner bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-900"
            aria-label="submenu"
            id="Finance"
            style={{ borderLeft: '1px solid gray ' }}
          >
            <li className="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              <NavLink to="/admin/invoice">Invoice </NavLink>
            </li>
          </ul>
        </li>

        <li className="relative px-6 py-3">
          <a
            onClick={LogOut}
            className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 cursor-pointer dark:hover:text-gray-200"
            style={{ fontSize: 13 }}
          >
            <span className="inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              <span className="ml-4">Logout</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AsideAdmin;
