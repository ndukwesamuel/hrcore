// import { useEffect, useState } from 'react';

// import ProfileHeader from '../../../Components/Employee/Onboarding/EmployeProfile/ProfileHeader';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserProfile } from '../../../app/service/thunk/employee/profileThunk';
// import { TableHeader } from '../../Admin/Dahboard/DashboardElements';

// import styles from '../../Admin/Dahboard/Dashboard.module.scss';

// // ./Dashboard.module.scss';

// const Dashboard = () => {
//   let PageName = 'employee';
//   const { userData } = useSelector((state) => state.reducer.loginReducer);

//   const dispatch = useDispatch();
//   // const { id } = useParams();
//   useEffect(() => {
//     dispatch(getUserProfile(userData?.id));
//   }, []);
//   const profile = useSelector(
//     (state) => state.reducer.employeeDetailSliceReducer.data
//   );
//   return (
//     <>
//       <div className="flex justify-center w-full  ">
//         <div className="px-5   w-full xl:w-[75%]">
//           <div className="">
//             <ProfileHeader profile={profile} PageName={PageName} />
//           </div>

//           <div className={styles.tables}>
//             <TableHeader name="Leave Requests" />
//           </div>
//         </div>
//       </div>

//       <main class="h-full" style={{ backgroundColor: '#eff6fc' }}>
//         <div class="container px-6 mx-auto grid">
//           <h3 class="my-6 text-xl font-semibold text-gray-700 dark:text-gray-200">
//             <a href="/employee/dashboard">Dashboard</a>
//           </h3>

//           <div class="grid gap-6 mb-8 md:grid-cols-1 xl:grid-cols-4">
//             <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 shadow-md">
//               <div class="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
//                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
//                 </svg>
//               </div>
//               <div>
//                 <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
//                   Clients
//                 </p>
//                 <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
//                   6389
//                 </p>
//               </div>
//             </div>
//             <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 shadow-md">
//               <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
//                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//               </div>
//               <div>
//                 <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
//                   Admins
//                 </p>
//                 <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
//                   6,760.89
//                 </p>
//               </div>
//             </div>
//             <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 shadow-md">
//               <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
//                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
//                 </svg>
//               </div>
//               <div>
//                 <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
//                   Employees
//                 </p>
//                 <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
//                   376, 872
//                 </p>
//               </div>
//             </div>
//             <div class="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 shadow-md">
//               <div class="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
//                 <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                   <path
//                     fill-rule="evenodd"
//                     d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//               </div>
//               <div>
//                 <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
//                   Managers
//                 </p>
//                 <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
//                   35
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Dashboard;

import React, { useEffect, useRef } from 'react';

import styles from '../../Admin/Dahboard/Dashboard.module.scss';

// import {
//   StatsCard,
//   Announcement,
//   Analytics,
//   TableHeader,
// } from './DashboardElements';

import {
  StatsCard,
  Announcement,
  Analytics,
  TableHeader,
  EmployeeTableHeader,
} from '../../Admin/Dahboard/DashboardElements';
import Icon from '../../../assets/Icons';
import birthDayAvatar from '../../../assets/Avatar.png';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../../../app/service/thunk/employee/profileThunk';
import ProfileHeader from '../../../Components/Employee/Onboarding/EmployeProfile/ProfileHeader';

ChartJS.defaults.font.family = 'Manrope';

const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#2A72A8', '#F72585'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
        borderWidth: 0,
      },
    ],
  },
  options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context?.raw}%`;
          },
        },
        displayColors: false,
      },
    },
  };

const dataBar = {
    labels: [
      'People Management',
      'Recruitment',
      'Logistics',
      'Dispatch',
      'Legal',
      'Account',
      'IT',
      'Business Development',
      'HR',
      'Admin',
    ],
    datasets: [
      {
        data: [60, 40, 30, 50, 20, 10, 38, 70, 12, 18],
        backgroundColor: ['#2A72A8', '#F72585'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],

        borderWidth: 0,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  },
  optionsBar = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context?.raw} Staffs`;
          },
        },
        yAlign: 'bottom',
        displayColors: false,
        bodyFont: {
          size: 18,
        },
        titleFont: {
          size: 12,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
        },
        border: {
          display: false,
        },
      },

      y: {
        grid: {
          drawTicks: false,
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

const Dashboard = () => {
  const navigate = useNavigate();

  let PageName = 'employee';
  const { userData } = useSelector((state) => state.reducer.loginReducer);

  const dispatch = useDispatch();

  return (
    <main className={`${styles.container} ${styles.dashboard_layout}  `}>
      <div className="content">
        <div className="">
          <ProfileHeader profile={userData} PageName={PageName} />
        </div>
        <div className={styles.tables}>
          <EmployeeTableHeader name="Leave Requests" page="employee" />
        </div>
      </div>
      <aside>
        <Announcement />
      </aside>
    </main>
  );
};

export default Dashboard;
