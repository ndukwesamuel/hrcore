import { CircularProgress } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetalloffboardFun } from '../../../Feature/Admin/Offboard/OffboardSlice';
import Table from '../../../Components/Table/Table';

const OffBoardingList = () => {
  const dispatch = useDispatch();
  const { All_Offboading } = useSelector(
    (state) => state.reducer.OffboardSlice
  );

  const fileHeader = [
    {
      name: 'Check',
      title: 'S/N',
      size: '72px',
    },
    {
      name: 'Exit',
      error: 'No Name',
      title: 'Name',
      data: 'employee',
    },
    {
      name: 'Created',
      data: 'employee_id',
      error: 'No Id',
      title: 'Date Sent',
      date: 'created_at',
    },
    {
      name: 'NoticePeriod',
      data: 'employee_id',
      error: 'No Notice',
      title: 'Notice Period',
      align: 'center',
    },
    {
      name: 'Employee Id',
      data: 'employee_id',
      error: 'No Data',
      title: 'Office Tools',
    },
    {
      name: 'Employee Id',
      data: 'employee_id',
      error: 'No Data',
      title: 'Letter Attached	',
    },

    {
      name: 'Status',
      data: 'status',
      error: '00',
      title: 'Status',
    },

    { name: 'Empty', size: '72px' },
  ];

  const rowMenu = [
    { value: 'View Details', type: 'link' },
    { value: 'Approve' },
    { value: 'Decline' },
  ];

  useEffect(() => {
    try {
      dispatch(GetalloffboardFun());
    } catch (error) {
      console.log('Failed to Load');
    }
    return () => {};
  }, [dispatch]);

  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col flex-1 w-full  pt-4"
        style={{ backgroundColor: '#eff6fc' }}
      >
        {/* {All_Offboading?.data ? (

        ) : (
          <div className="flex justify-center items-center">
            <CircularProgress />
          </div>
        )} */}
        <div className="employeedirtable__section">
          <div className="employeedirtable__body">
            <Table
              linkTo={`/admin/employee/exit`}
              type={`directory`}
              data={All_Offboading?.data}
              columns={fileHeader}
              menu={rowMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffBoardingList;
