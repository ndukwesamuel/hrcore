import React from 'react';
import Svgicons from '../../../assets/Svgicons';
import { FileRecommendation } from '../../../Components/AdminComponent/AdminOnboard/FileRecommendation';
import TopBar from '../../../Components/AdminComponent/AdminOnboard/TopBar';
import UseTable from '../../../Components/EmployeeDirTable/UseTable';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetAllEmployeeFolderFun } from '../../../Feature/Employee/Onboardoing/EmployeeFolderSlice';

import Table from '../../../Components/Table/Table';

function EmployeeOnboardingDocument() {
  const dispatch = useDispatch();
  const { Allfolderdata, isSuccess } = useSelector(
    (state) => state.reducer.EmployeeFolderSlice
  );

  console.log(Allfolderdata);

  useEffect(() => {
    dispatch(GetAllEmployeeFolderFun());
  }, []);

  const datas = [
    {
      id: 2,
      filename: 'Getting started with HrCore software',
      sharing: 'public',
      modified: '12 Feb, 2023',
      action: <Svgicons action="ellipsis" />,
    },
    {
      id: 1,
      filename: "Company's policy",
      sharing: 'management',
      modified: '12 Feb, 2023',
      action: <Svgicons action="ellipsis" />,
    },
  ];

  const columns = [
    { path: 'checkbox', name: 's/n' },
    { path: 'reference', name: 'Unique ID' },
    { path: 'contact_name', name: 'Contact' },
    { path: 'created_at', name: 'Issue Date' },
    { path: 'due_date', name: 'Due_date' },
    { path: 'status', name: 'Status' },
    { path: 'total_amount', name: 'Total' },
    { path: 'commands', name: 'details' },
  ];

  const fileHeader = [
    {
      name: 'SN',
      title: 'S/N',
      size: '72px',
    },
    {
      name: 'name',
      error: 'No Name',
      title: 'Name',
      data: 'reference',
    },
    {
      name: 'Sharing',
      error: 'No Name',
      title: 'Sharing',
      data: 'contact_name',
    },
    {
      name: 'Created',
      data: 'employee_id',
      error: 'No Id',
      title: 'Modified',
      date: 'due_date  ',
    },

    { name: 'Empty', size: '72px' },
  ];

  const rowMenu = [
    { value: 'View Details', type: 'link' },
    { value: 'Approve' },
    { value: 'Decline' },
  ];

  let oooo = [
    {
      id: 1,
      name: 'Shared Playlist',
      Sharing: 'Collective',
      Modified: 'Revamped',
    },
  ];

  const viewAction = (id) => {};
  return (
    <div>
      <div className="px-4">
        {Allfolderdata && (
          <FileRecommendation
            pageName="employee"
            data={Allfolderdata?.extra?.recommended_folders}
          />
        )}

        <TopBar
          pageName="File Folder"
          icon="+"
          // title="Add New"
          color="white"
        />
        {/* 
        {Allfolderdata && (
          <UseTable
            id="id"
            link="/employee/documents"
            columns={columns}
            data={Allfolderdata?.data}
            viewAction={viewAction}
          />
        )} */}

        <Table
          linkTo="/employee/documents"
          type={`directory`}
          data={oooo}
          columns={fileHeader}
          menu={rowMenu}
        />
      </div>
    </div>
  );
}

export default EmployeeOnboardingDocument;
