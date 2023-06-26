import React, { useState } from 'react';
import EmployeeDirTable from '../../../Components/EmployeeDirTable/EmployeeDirTable';
import Mobile from '../../../Components/Sidebar/Mobile';

import './EmployeeDirectory.styles.css';
import Aside from '../../../Components/Sidebar/Aside';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import cake from '../../../assets/Cake.png';

// import Table from '../../../Components/Components/Table/Table';

import Table from '../../../Components/Table/Table';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Headbar } from '../../../Components/Headbar/Headbar';

function CustomMonthInput({ selectedMonth, setSelectedMonth }) {
  const handleChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="month"
        value={selectedMonth}
        onChange={handleChange}
        className="block w-full text-xl font-inter font-medium py-2 px-2   leading-5 text-gray-900 placeholder-gray-500 bg-[#EAECF0] border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  );
}

const Birthday = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function getCurrentMonth() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    return `${year}-${month}`;
  }

  function getFullMonthName(dateString) {
    const date = new Date(dateString + '-01');
    const options = { month: 'long' };
    return date.toLocaleString('en-US', options);
  }

  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());

  function handleMonthChange(event) {
    setSelectedMonth(event.target.value);
  }

  const employees = [
    {
      name: 'John Smith',
      birthday: 'Jan 23',

      employeeId: '1234',
      branch: 'New York',
      sbu: 'Finance',
      email: 'john.smith@example.com',
      phone: '555-1234',
    },
    {
      name: 'Jane Doe',
      birthday: 'Jan 23',
      employeeId: '5678',
      branch: 'Chicago',
      sbu: 'Marketing',
      email: 'jane.doe@example.com',
      phone: '555-5678',
    },
    // Add more employees here
  ];

  const employeeDirectory = [
    {
      name: 'SN',
      title: 'S/N',
      size: '60px',
    },
    {
      name: 'Name',
      error: 'No Name',
      title: 'Name',
      data: 'name',
      size: '100px',
    },
    {
      name: 'birthday',
      data: 'birthday',
      error: 'No Id',
      title: 'birthday',
    },

    {
      name: 'employeeId',
      data: 'employeeId',
      error: 'No Id',
      title: 'AssemployeeIdigned',
    },

    {
      name: 'branch',
      data: 'branch',
      error: 'No Id',
      title: 'branch',
    },
    {
      name: 'sbu',
      data: 'sbu',
      error: 'No Id',
      title: 'sbu',
    },
    {
      name: 'email',
      data: 'email',
      error: 'No Id',
      title: 'email',
    },
    {
      name: 'phone',
      data: 'phone',
      error: 'No Id',
      title: 'phone',
    },

    { name: 'Empty', size: '10px' },
  ];

  const rowMenu = [
    { value: 'View Profile', type: 'link' },
    { value: 'Reset Password' },
    { value: 'Update Profile' },
    { value: 'Audit ' },
    { value: 'Disable' },
  ];

  return (
    <div className="">
      <Headbar name="Dashboard" />

      {/* 2xl:w-[1003px] */}

      <div className="employeedirtable__body  ">
        <header className=" flex justify-between items-center  px-4">
          <div className="flex  items-center">
            <div>
              <span className=" font-inter font-medium text-xl ">
                {getFullMonthName(selectedMonth)} Birthday Celebrants
              </span>
            </div>

            <div className="relative top-[-20px]">
              <img src={cake} alt="" />
            </div>
          </div>
          <div className="">
            <CustomMonthInput
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />
          </div>
        </header>
        <div className="w-full ">
          <Table
            linkTo={`/admin/invoice`}
            type={`directory`}
            data={employees}
            columns={employeeDirectory}
            menu={rowMenu}
          />
        </div>
      </div>
    </div>
  );
};

export default Birthday;
