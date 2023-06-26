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
import { Role_Permissions_Fun } from '../../../Feature/Admin/Settings/Role_Permissions_Slice';

const Role = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState('');
  const [showmodal, setShowmodal] = useState(false);

  const {
    Role_Permissions,
    Role_Permissions_isError,
    Role_Permissions_message,
    Role_Permissions_isLoading,
    Role_Permissions_isSuccess,

    Create_Role_Permissions_isSuccess,
  } = useSelector((state) => state.reducer.Role_Permissions_Slice);

  console.log(Role_Permissions.data);
  useEffect(() => {
    dispatch(Role_Permissions_Fun());
  }, [Create_Role_Permissions_isSuccess]);

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

  const Handle_Delete = (data) => {
    console.log(data);
  };

  const employeeDirectory = [
    {
      name: 'SN',
      title: 'S/N',
      //   size: '60px',
    },
    {
      name: 'roleName',
      error: 'No Name',
      title: 'Role Name',
      data: 'name',
      //   size: '100px',
    },
    {
      name: 'description',
      data: 'description',
      error: 'No Id',
      title: 'Description',
    },

    {
      name: 'numAssignedUsers',
      data: 'numAssignedUsers',
      error: 'No Id',
      title: 'Assigned',
    },
    { name: 'Empty', size: '10px' },
  ];

  const rowMenu = [
    { value: 'Delete', type: 'delete_Role' },
    { value: 'Update', type: 'update_Role' },

    { value: 'Reset Password' },
    { value: 'Update Profile' },
    { value: 'Audit ' },
    { value: 'Disable' },
  ];

  return (
    <div className="employeedirtable__body">
      <header className="employeedirtable__header">
        <span
          onClick={() => navigate('/admin/settings/role&permissions')}
          // onClick={() => console.log('slkdsdkldsdlk')}
          Permissions
          className="bg-[#2A72A8]    text-white  text-base  px-4 py-1 rounded cursor-pointer"
        >
          Add Role with Permissions
        </span>
      </header>
      <Table
        linkTo={`/admin/settings`}
        type={`role`}
        data={Role_Permissions?.data}
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

export default Role;
