import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Svgicons from '../../assets/Svgicons';
import './EmployeeDirTable.scss';
import UseTable from './UseTable';
import ReactPaginate from 'react-paginate';
import {
  getAdminEmployeeListAction,
  getAdminNextEmployeeListAction,
} from '../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import { Headbar } from '../Headbar/Headbar';

import Table from '../Table/Table';
const columns = [
  { path: 'checkbox', name: 's/n' },
  { path: 'fname', name: '' },
  { path: 'name', name: 'name' },
  { path: 'employeeid', name: 'employee id' },
  { path: 'branch', name: 'branch' },
  { path: 'sbu', name: 'sbu' },
  { path: 'email', name: 'email address' },
  { path: 'phonenumber', name: 'phone number' },
  { path: 'commands', name: 'view' },
];

const EmployeeDirTable = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState('');

  useEffect(() => {
    dispatch(getAdminEmployeeListAction());
  }, [dispatch]);

  const list = useSelector(
    (state) => state.reducer.adminEmployeeReducer.getAdminEmployee
  );

  console.log(list);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchParams(e.target.value);
  };

  const filteredList = list?.data?.filter((employee) => {
    return (
      employee.first_name.toLowerCase().includes(searchParams.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchParams.toLowerCase())
    );
  });

  const indexOfLastPost = currentPage * list?.per_page;
  const indexOfFirstPost = indexOfLastPost - list?.per_page;

  const currentPosts = searchParams.length > 0 ? filteredList : list?.data;

  const paginate = ({ selected }) => {
    dispatch(getAdminNextEmployeeListAction(selected));
    setCurrentPage(selected + 1);
  };

  const employeeDirectory = [
    { name: 'Check', size: '72px' },
    {
      name: 'Directory',
      error: 'No Name',
      title: 'Name',
    },
    {
      name: 'Employee Id',
      data: 'employee_id',
      error: 'No Id',
      title: 'Employee ID',
    },
    {
      name: 'Branch',
      error: 'No Branch',
      data: 'branch',
      title: 'Branch',
    },
    {
      name: 'SBU',
      error: 'No SBU',
      data: 'sbu',
      title: 'SBU',
    },
    {
      name: 'Email Address',
      error: 'No Email',
      data: 'email',
      title: 'Email Address',
    },
    {
      name: 'Phone ',
      error: 'No Phone Number',
      data: 'phone',
      title: 'Phone Number',
    },
    { name: 'Empty', size: '72px' },
  ];

  const rowMenu = [
    { value: 'View Profile', type: 'link' },
    { value: 'Assign Role', type: 'Assign_Role' },

    { value: 'Reset Password' },
    { value: 'Update Profile' },
    { value: 'Audit ' },
    { value: 'Disable' },
  ];

  const Leg_Leg = (data) => {
    console.log(data);
  };

  return (
    <div className="employeedirtable__section">
      <div className="employeedirtable__body">
        <header className="employeedirtable__header">
          <h4 className="employeedirtable__header--left">
            directory <span className="total-employee"></span>
          </h4>
          <div className="employeedirtable__header--right">
            <button className="addstaff-btn">
              <NavLink
                to="/admin/employee/addstaff "
                className="flex  items-center"
              >
                <Svgicons action="staff" />
                <span className="addstaff-text">add</span>
              </NavLink>
            </button>
            <form className="employeedirtable__search">
              <input
                type="search"
                placeholder="Search by Name or ID"
                onChange={handleChange}
              />
              <button>search</button>
            </form>
          </div>
        </header>
        <Table
          linkTo={`/admin/employee`}
          type={`directory`}
          data={currentPosts}
          columns={employeeDirectory}
          menu={rowMenu}
          Leg_Leg={Leg_Leg}
        />
        <div className=" table-pagination  w-full flex justify-center items-center mt-7">
          <ReactPaginate
            onPageChange={paginate}
            pageCount={list?.last_page}
            previousLabel={'Previous'}
            nextLabel={'Next'}
            containerClassName={'pagination'}
            pageLinkClassName={'page-number'}
            previousLinkClassName={'page-number'}
            nextLinkClassName={'page-number'}
            activeLinkClassName={'active'}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDirTable;
