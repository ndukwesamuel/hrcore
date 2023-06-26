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
import { OfficeToolsFun } from '../../../Feature/Admin/Settings/BranchSlice';

const OfficeTools = () => {
  const [showmodal, setShowmodal] = useState(false);

  const { OfficeTools } = useSelector((state) => state.reducer.BranchSlice);

  console.log(OfficeTools);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState('');

  useEffect(() => {
    dispatch(OfficeToolsFun());
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

  if (OfficeTools?.data) {
    result = Object.entries(OfficeTools?.data).map(([name, des]) => ({
      name,
      des,
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
      name: 'Office_tools',
      error: 'No Name',
      title: 'Office tools',
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

  // let result = [];
  return (
    <div className="employeedirtable__body">
      <>
        {showmodal && (
          <Settings_modal
            showmodal={showmodal}
            setShowmodal={setShowmodal}
            type={'Offics_Tools'}
            title={'Add Offics Tools '}
          />
        )}
      </>
      <header className="employeedirtable__header">
        <span
          onClick={() => setShowmodal(true)}
          className="bg-[#2A72A8] text-white  lg:text-base  px-4 py-1 rounded cursor-pointer"
        >
          Add Offics Tools
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

export default OfficeTools;
