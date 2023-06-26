import React, { useEffect, useState } from 'react';
import Table from '../../../Components/Table/Table';
import { data } from './data';
import axios from 'axios';
import Settings_modal from '../../../Components/AdminComponent/Settings/Settings_modal';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllBranchFun } from '../../../Feature/Admin/Settings/BranchSlice';
function Company() {
  const { CreateBranch_isLoading, CreateBranch_isSuccess, GetAllBranch } =
    useSelector((state) => state.reducer.BranchSlice);
  const dispatch = useDispatch();

  const [showmodal, setShowmodal] = useState(false);

  console.log(GetAllBranch);

  const fileHeader = [
    {
      name: 'SN',
      title: 'S/N',
      size: '72px',
    },
    {
      name: 'Company_Name',
      error: 'No Name',
      title: 'Name',
      data: 'name',
    },

    {
      name: 'Description',
      data: 'description',
      error: 'No Id',
      title: 'Description',
    },

    {
      name: 'Abrevation',
      data: 'abbr',
      error: 'No Id',
      title: 'Abrevation',
    },
    // {
    //   name: 'Company_Admins',
    //   error: 'No Name',
    //   title: 'Admins',
    //   data: 'admin',
    // },
    // {
    //   name: 'Company_Staff',
    //   data: 'staff',
    //   error: 'None',
    //   title: 'Staff',
    // },

    // {
    //   name: 'Company_Branchess',
    //   data: 'branch',
    //   error: 'None',
    //   title: 'Branchess',
    // },
    { name: 'Empty', size: '72px' },
  ];

  const rowMenu = [
    { value: 'View ', type: 'link' },
    { value: 'Update' },
    { value: 'Delete' },
  ];

  useEffect(() => {
    dispatch(GetAllBranchFun());

    return () => {};
  }, []);

  return (
    <div className="">
      {showmodal && (
        <Settings_modal
          showmodal={showmodal}
          setShowmodal={setShowmodal}
          type={'Branch'}
          title={'Create Branch '}
        />
      )}
      <div className="rounded-lg">
        <div className="bg-white flex  justify-between px-4 py-4 items-center ">
          <h2 className=" text-base font-bold">Branch</h2>
          <button
            onClick={() => setShowmodal(true)}
            className="bg-[#2A72A8] text-white px-2 py-2 rounded  text-xs"
          >
            Create Branch
          </button>
        </div>
        <Table
          linkTo={`/admin/settings`}
          type={`directory`}
          data={GetAllBranch?.data}
          columns={fileHeader}
          menu={rowMenu}
        />
      </div>
    </div>
  );
}

export default Company;
