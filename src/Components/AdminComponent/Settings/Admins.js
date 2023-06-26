import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../../Components/EmployeeDirTable/EmployeeDirTable.scss';
import ReactPaginate from 'react-paginate';

import { Headbar } from '../../../Components/Headbar/Headbar';

import Table from '../../../Components/Table/Table';
import Svgicons from '../../../assets/Svgicons';
import {
  getAdminEmployeeListAction,
  getAdminNextEmployeeListAction,
} from '../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import { companyAdmin } from '../../../Page/Admin/Settings/data';
import { GetAdminFun } from '../../../Feature/Admin/Settings/BranchSlice';

const Admins = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState('');

  const { GetAdmin } = useSelector((state) => state.reducer.BranchSlice);

  console.log(GetAdmin);
  useEffect(() => {
    dispatch(GetAdminFun());
    dispatch(getAdminEmployeeListAction());
  }, [dispatch]);

  const list = useSelector(
    (state) => state.reducer.adminEmployeeReducer.getAdminEmployee
  );

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
      name: 'Admin_Name',
      error: 'No Name',
      title: 'Name',
      data: 'name',
    },
    {
      name: 'Admin Type',
      data: 'admin_type',
      error: 'No Id',
      title: 'Admin Type',
    },
    {
      name: 'Employee Id',
      data: 'employee_id',
      error: 'No Id',
      title: 'Employee ID',
    },
    {
      name: 'Company',
      error: 'No Branch',
      data: 'company',
      title: 'Company',
    },

    {
      name: 'Email Address',
      error: 'No Email',
      data: 'email',
      title: 'Email Address',
    },
  ];

  const rowMenu = [
    { value: 'View Profile', type: 'link' },
    { value: 'Reset Password' },
    { value: 'Update Profile' },
    { value: 'Audit ' },
    { value: 'Disable' },
  ];

  const handleSelectChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="employeedirtable__body ">
      <header className="employeedirtable__header gap-2  lg:justify-between ">
        <form className=" w-[20%]">
          <select
            id="my-select"
            name="my-select"
            onChange={handleSelectChange}
            className="w-full bor text-[8px] border border-[#D0D5DD] h-5"
          >
            <option value="" disabled selected className="">
              Bulk Commands
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </form>

        <div className=" flex gap-2 ">
          <button className="addstaff-btn">
            <NavLink
              to="/admin/settings/createAdmin "
              className="flex  items-center"
            >
              <Svgicons action="staff" />
              <span className="addstaff-text">add</span>
            </NavLink>
          </button>
          <form className="flex justify-between rounded-lg  employeedirtable__search ">
            <input
              type="search"
              placeholder="Search by Name or ID"
              onChange={handleChange}
            />
            <button>search</button>
          </form>
        </div>
      </header>
      <div className="w-full">
        <Table
          linkTo={`/admin/employee`}
          type={`companyAdmin`}
          data={GetAdmin?.data}
          columns={employeeDirectory}
          menu={rowMenu}
        />
      </div>
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
  );
};

export default Admins;
