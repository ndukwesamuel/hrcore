import React, { useEffect, useState } from 'react';
import Icons from '../../../assets/Icons';
import Table from '../../Table/Table';
import { useDispatch, useSelector } from 'react-redux';
import { GetInvoicesAction } from '../../../Feature/Admin/Invoice/InvoiceSlice';
import { getFoldersAction } from '../../../Feature/Admin/Onboarding/DocumentSlice';
import { getLeaveRequestAdminAction } from '../../../Feature/Admin/LeaveAdmin/LeaveAdminSlice';
import { getLeaveAction } from '../../../Feature/Leave/LeaveRequestSlice';

const InvoiceDashboard = () => {
  const dispatch = useDispatch();

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
      name: 'Unique ID',
      error: 'No Name',
      title: 'Unique ID',
      data: 'reference',
    },
    {
      name: 'Unique ID',
      error: 'No Name',
      title: 'Contact',
      data: 'contact_name',
    },
    {
      name: 'Created',
      data: 'employee_id',
      error: 'No Id',
      title: 'Date Sent',
      date: 'created_at',
    },
    {
      name: 'Created',
      data: 'employee_id',
      error: 'No Id',
      title: 'Due Date',
      date: 'due_date  ',
    },
    {
      name: 'Invoice Status',
      data: 'status',
      error: 'No Data',
      title: 'Status',
    },
    {
      name: 'Currency',
      data: 'total_amount',
      error: 'total',
      title: 'Total	',
    },

    { name: 'Empty', size: '72px' },
  ];

  const rowMenu = [
    { value: 'View Details', type: 'link' },
    { value: 'Approve' },
    { value: 'Decline' },
  ];

  useEffect(() => {
    dispatch(GetInvoicesAction());
  }, []);

  useEffect(() => {
    dispatch(GetInvoicesAction());

    return () => {};
  }, [dispatch]);

  const invoices = useSelector(
    (state) => state.reducer.InvoiceReducer.invoices
  );

  const sortedInvoices = [...invoices].sort(
    (a, b) => b.created_at - a.created_at
  );
  const filteredList = sortedInvoices.slice(0, 3);
  return (
    <div>
      <Table
        linkTo={`/admin/invoice`}
        type={`directory`}
        data={filteredList}
        columns={fileHeader}
        menu={rowMenu}
      />
    </div>
  );
};

const DocumentDashboard = () => {
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

  let filteredList = [];
  if (folders?.data) {
    // check if the data property is not null or undefined
    const sortedInvoices = [...folders.data].sort(
      (a, b) => b.created_at - a.created_at
    );
    filteredList = sortedInvoices.slice(0, 3);
  }

  return (
    <>
      <Table
        linkTo={`/admin/documents`}
        type={`directory`}
        data={filteredList}
        columns={fileHeader}
        menu={rowMenu}
      />
    </>
  );
};

const LeaveRequestsDashboard = () => {
  const dispatch = useDispatch();

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
      name: 'leaveType',
      data: 'type',
      error: 'No Notice',
      title: 'Leave Type',
    },
    {
      name: 'Employee Id',
      data: 'days_requested',
      error: 'No Data',
      title: 'Days Left	',
    },
    {
      name: 'FromTo',
      data: 'employee_id',
      error: 'No Data',
      title: 'From - To',
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
    { value: 'View Profile', type: 'link' },
    { value: 'Approve' },
    { value: 'Decline' },
  ];
  const leave = useSelector(
    (state) => state.reducer.leaveAdminReducer.getLeaveListAdmin
  );

  useEffect(() => {
    dispatch(getLeaveRequestAdminAction());
  }, []);

  let filteredList = [];
  if (leave?.data) {
    // check if the data property is not null or undefined
    const sortedInvoices = [...leave.data].sort(
      (a, b) => b.created_at - a.created_at
    );
    filteredList = sortedInvoices.slice(0, 3);
  }

  return (
    <>
      <Table
        linkTo={`/admin/employee`}
        type={`directory`}
        data={filteredList}
        columns={fileHeader}
        menu={rowMenu}
      />
    </>
  );
};

const EmployeeLeaveRequestsDashboard = () => {
  const dispatch = useDispatch();

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
      name: 'leaveType',
      data: 'type',
      error: 'No Notice',
      title: 'Leave Type',
    },
    {
      name: 'Employee Id',
      data: 'days_requested',
      error: 'No Data',
      title: 'Days Left	',
    },
    {
      name: 'FromTo',
      data: 'employee_id',
      error: 'No Data',
      title: 'From - To',
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
    { value: 'View Profile', type: 'link' },
    { value: 'Approve' },
    { value: 'Decline' },
  ];
  const leave = useSelector(
    (state) => state.reducer.leaveAdminReducer.getLeaveListAdmin
  );

  const getRequest = useSelector(
    (state) => state.reducer.leaveReducer.getRequest
  );

  console.log(getRequest);

  useEffect(() => {
    dispatch(getLeaveAction());
  }, []);

  let filteredList = [];
  if (leave?.data) {
    // check if the data property is not null or undefined
    const sortedInvoices = [...leave.data].sort(
      (a, b) => b.created_at - a.created_at
    );
    filteredList = sortedInvoices.slice(0, 3);
  }

  return (
    <>
      <Table
        linkTo={`/admin/employee`}
        type={`directory`}
        data={filteredList}
        columns={fileHeader}
        menu={rowMenu}
      />
    </>
  );
};

function TableHeaderComponent({ title, view_all, styles, name, page }) {
  return (
    <>
      {page === 'employee' ? (
        <>{name === 'Leave Requests' && <EmployeeLeaveRequestsDashboard />}</>
      ) : (
        <>
          {name === 'Invoice' && <InvoiceDashboard />}
          {name === 'Recent Documents' && <DocumentDashboard />}
          {name === 'Leave Requests' && <LeaveRequestsDashboard />}
        </>
      )}
    </>
  );
}

export default TableHeaderComponent;
