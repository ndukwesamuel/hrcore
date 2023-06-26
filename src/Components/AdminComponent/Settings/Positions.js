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
import { GetallPositionFun } from '../../../Feature/Admin/Settings/BranchSlice';

const Positions = () => {
  const [showmodal, setShowmodal] = useState(false);
  const { GetallPosition } = useSelector((state) => state.reducer.BranchSlice);
  console.log(GetallPosition);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState('');

  useEffect(() => {
    dispatch(GetallPositionFun());
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

  if (GetallPosition?.data) {
    result = Object.entries(GetallPosition?.data).map(([name, level]) => ({
      name,
      level,
    }));
  }

  console.log(result);

  const employeeDirectory = [
    {
      name: 'SN',
      title: 'S/N',
      size: '72px',
    },
    {
      name: 'Position',
      error: 'No Name',
      title: 'Position ',
      data: 'name',
    },
    {
      name: 'Level',
      data: 'level',
      error: 'No Id',
      title: 'Level',
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

  let CompanyGrade = [];
  return (
    <div className="employeedirtable__body">
      <>
        {showmodal && (
          <Settings_modal
            showmodal={showmodal}
            setShowmodal={setShowmodal}
            type={'Positions'}
            title={'Add Positions '}
          />
        )}
      </>
      <header className="employeedirtable__header">
        <span
          onClick={() => setShowmodal(true)}
          className="bg-[#2A72A8] text-white  text-base  px-4 py-1 rounded cursor-pointer"
        >
          Add Positions
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

export default Positions;
