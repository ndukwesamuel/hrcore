// import React from 'react';

// function Leave_Types() {
//   return <div>Leave_Types</div>;
// }

// export default Leave_Types;

import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../../Components/EmployeeDirTable/EmployeeDirTable.scss';
import ReactPaginate from 'react-paginate';

import { Headbar } from '../../Headbar/Headbar';

import Table from '../../Table/Table';
import Svgicons from '../../../assets/Svgicons';
import {
  getAdminEmployeeListAction,
  getAdminNextEmployeeListAction,
} from '../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import { CompanyGrade, companyAdmin } from '../../../Page/Admin/Settings/data';
import Settings_modal, { Settings } from './Settings_modal';

const Department = () => {
  const [showmodal, setShowmodal] = useState(false);

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState('');

  // useEffect(() => {
  //   dispatch(getAdminEmployeeListAction());
  // }, [dispatch]);

  const list = useSelector(
    (state) => state.reducer.adminEmployeeReducer.getAdminEmployee
  );

  const { openSetting_modal } = useSelector(
    (state) => state.reducer.DepartmentSlice
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

  const DDDD = [
    {
      id: 1,
      name: 'Item 1',
      description: 'This is the description for item 1',
    },
  ];
  const employeeDirectory = [
    {
      name: 'SN',
      title: 'S/N',
      size: '60px',
    },
    {
      name: 'Department',
      error: 'No Name',
      title: 'Department ',
      data: 'name',
    },
    {
      name: 'Description',
      data: 'description',
      error: 'No Id',
      title: 'Description',
    },

    // {
    //   name: 'Tags',
    //   data: 'id',
    //   error: 'No Id',
    //   title: 'update',
    // },

    { name: 'Empty', size: '10px' },
  ];

  const rowMenu = [
    { value: 'View Profile', type: 'link' },
    { value: 'Reset Password' },
    { value: 'Update Profile', type: 'setting_update' },
  ];

  const handleSelectChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="employeedirtable__body">
      <>
        {showmodal && (
          <Settings_modal
            showmodal={openSetting_modal}
            setShowmodal={setShowmodal}
            type={'Department'}
            title={'Add Department '}
          />
        )}
      </>
      <header className="employeedirtable__header">
        <span
          onClick={() => setShowmodal(true)}
          className="bg-[#2A72A8] text-white  text-base  px-4 py-1 rounded cursor-pointer"
        >
          Add Department
        </span>
      </header>
      <Table
        linkTo={`/admin/employee`}
        type={`companyAdmin`}
        data={DDDD}
        columns={employeeDirectory}
        menu={rowMenu}
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
  );
};

export default Department;
