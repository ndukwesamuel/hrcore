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
import Settings_modal from './Settings_modal';
import { GetGradeFun } from '../../../Feature/Admin/Settings/BranchSlice';

const Grades = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState('');
  const [showmodal, setShowmodal] = useState(false);

  const { GetGrade } = useSelector((state) => state.reducer.BranchSlice);

  let GradeData = [];

  if (GetGrade?.data.length > 0) {
    GradeData = GetGrade?.data;
  }

  useEffect(() => {
    dispatch(GetGradeFun());
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
    {
      name: 'SN',
      title: 'S/N',
      size: '60px',
    },
    {
      name: 'Grade_Name',
      error: 'No Name',
      title: 'Grade Name',
      data: 'name',
      size: '100px',
    },
    {
      name: 'leave_structure',
      data: 'leave_structure',
      error: 'No Id',
      title: 'Leave Days',
    },

    {
      name: 'Salary_Structure',
      data: 'salary_structure',
      error: 'No Id',
      title: 'Salary Structure',
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
    <div className="employeedirtable__body">
      <>
        {showmodal && (
          <Settings_modal
            showmodal={showmodal}
            setShowmodal={setShowmodal}
            type={'Grades'}
            title={'Add Grade '}
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
        data={GradeData}
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

export default Grades;
