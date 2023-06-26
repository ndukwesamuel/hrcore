import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
import {
  CompanyGrade,
  companyAdmin,
  permissions,
} from '../../../Page/Admin/Settings/data';
import Settings_modal from './Settings_modal';
import { GetGradeFun } from '../../../Feature/Admin/Settings/BranchSlice';
import {
  Permissions_Fun,
  Role_Permissions_Fun,
} from '../../../Feature/Admin/Settings/Role_Permissions_Slice';

const Permissions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState('');
  const [showmodal, setShowmodal] = useState(false);

  const {
    Permissions_Data,
    Permissions_Data_isError,
    Permissions_Data_message,
    Permissions_Data_isLoading,
    Permissions_Data_isSuccess,
  } = useSelector((state) => state.reducer.Role_Permissions_Slice);

  console.log(Permissions_Data);

  useEffect(() => {
    dispatch(Permissions_Fun());
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
      // size: '60px',
    },
    {
      name: 'name',
      error: 'No Name',
      title: 'Permisison',
      data: 'name',
      // size: '100px',
    },
    {
      name: 'Description',
      data: 'description',
      error: 'No Id',
      title: 'Description',
    },

    {
      name: 'Slug',
      data: 'slug',
      error: 'No Id',
      title: 'Slug',
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
      <header className="employeedirtable__header"></header>
      <Table
        linkTo={`/admin/employee`}
        type={`companyAdmin`}
        data={Permissions_Data?.data}
        columns={employeeDirectory}
        menu={rowMenu}
      />
      <div className=" table-pagination  w-full flex justify-center items-center mt-7">
        {/* <ReactPaginate
          onPageChange={paginate}
          pageCount={list?.last_page}
          previousLabel={'Previous'}
          nextLabel={'Next'}
          containerClassName={'pagination'}
          pageLinkClassName={'page-number'}
          previousLinkClassName={'page-number'}
          nextLinkClassName={'page-number'}
          activeLinkClassName={'active'}
        /> */}
      </div>
    </div>
  );
};

export default Permissions;
