import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopBar from './TopBar';
import { getFoldersAction } from '../../../Feature/Admin/Onboarding/DocumentSlice';
// import Table Component
import Table from '../../Table/Table';

const AdminOnboardingDocument = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoldersAction());
  }, []);

  const { folders } = useSelector((state) => state.reducer.folderReducer);

  const fileHeader = [
    {
      name: 'SN',
      title: 'S/N',
      size: '72px',
    },
    {
      name: 'File',
      error: 'No Name',
      title: 'Name',
      data: 'name',
    },
    {
      name: 'Description',
      error: 'No Name',
      title: 'Description',
      data: 'description',
    },
    {
      name: 'Tags',
      data: 'sharing',
      error: 'None',
      title: 'Sharing',
    },
    {
      name: 'Modified',
      error: 'None',
      data: 'updated_at',
      title: 'Modified',
      date: 'created_at',
      size: '15%',
    },
    { name: 'Empty', size: '72px' },
  ];

  const rowMenu = [
    { value: 'View Details', type: 'link' },
    { value: 'Update' },
    { value: 'Delete' },
  ];

  const viewAction = (id) => {};
  return (
    <div className="px-4 mt-5">
      {/* <FileRecommendation pageName="admin" /> */}

      <TopBar pageName="File Folder" icon="+" title="Add New" color="white" />
      {/* <UseTable
        id="id"
        link="/admin/documents"
        columns={columns}
        data={folders?.data}
        viewAction={viewAction}
      /> */}
      <Table
        linkTo={`/admin/documents`}
        type={`directory`}
        data={folders?.data}
        columns={fileHeader}
        menu={rowMenu}
      />
    </div>
  );
};

export default AdminOnboardingDocument;
