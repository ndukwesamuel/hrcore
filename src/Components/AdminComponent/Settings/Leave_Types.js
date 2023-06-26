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

import { Headbar } from '../../../Components/Headbar/Headbar';

import Table from '../../../Components/Table/Table';
import Svgicons from '../../../assets/Svgicons';
import {
  getAdminEmployeeListAction,
  getAdminNextEmployeeListAction,
} from '../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import { CompanyGrade, companyAdmin } from '../../../Page/Admin/Settings/data';
import Settings_modal, { Settings } from './Settings_modal';
import { GetLeaveTypesFun } from '../../../Feature/Admin/Settings/BranchSlice';

const Leave_Types = () => {
  const [showmodal, setShowmodal] = useState(false);

  const { GetLeaveTypes } = useSelector((state) => state.reducer.BranchSlice);

  console.log(GetLeaveTypes);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState('');

  useEffect(() => {
    dispatch(GetLeaveTypesFun());
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
    // dispatch(getAdminNextEmployeeListAction(selected));
    setCurrentPage(selected + 1);
  };

  let result = [];

  if (GetLeaveTypes?.data) {
    result = Object.entries(GetLeaveTypes.data).map(([name, des]) => ({
      name,
      des,
    }));
  }

  console.log(result);

  // result.map( item => console.log(item))

  const employeeDirectory = [
    // { name: 'Check', size: '72px' },

    {
      name: 'SN',
      title: 'S/N',
      size: '72px',
    },

    {
      name: 'Leave_Type',
      error: 'No Name',
      title: 'Leave Type',
      data: 'name',
    },
    {
      name: 'Description',
      data: 'des',
      error: 'No Id',
      title: 'Description',
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

  let test = [];

  return (
    <div className="employeedirtable__body">
      <>
        {showmodal && (
          <Settings_modal
            showmodal={showmodal}
            setShowmodal={setShowmodal}
            type={'Leave_Types'}
            title={'Add Leave Type '}
          />
        )}
      </>
      <header className="employeedirtable__header">
        <span
          onClick={() => setShowmodal(true)}
          className="bg-[#2A72A8] text-white  text-base  px-4 py-1 rounded cursor-pointer"
        >
          Add Grades
        </span>
      </header>
      <Table
        linkTo={`/admin/employee`}
        type={`companyAdmin`}
        data={result}
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

export default Leave_Types;
