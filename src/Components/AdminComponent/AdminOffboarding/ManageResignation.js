import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import store from '../../../app/store';
import UseTable from '../../EmployeeDirTable/UseTable';
import './resign.css';

const ManageResignation = () => {
  const isAdminOrNot = store.getState().reducer.loginReducer.extra;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const columns = [
    { path: 'checkbox', name: 's/n' },
    { path: 'sentto', name: 'Sent To' },
    { path: 'name', name: 'name' },
    { path: 'datesent', name: 'Date Sent' },
    { path: 'noticeperiod', name: 'Notice Period' },
    { path: 'officetools', name: 'Office Tools' },
    { path: 'letterattached', name: 'Letter Attached' },
    { path: 'status', name: 'Status' },
    { path: '', name: '' },
    { path: 'commands', name: 'detail' },
  ];

  const data = [
    {
      first_name: 'oluwaseun',
      name: 'teyingbo',
      employeeid: 'ics2023',
      tools: 'laptop',
      id: 1,
    },
    {
      id: 2,
      fname: 'oluwatobi',
      name: 'teyingbo',
      employeeid: 'ics2024',
      tools: 'car',
    },
  ];

  const handleChange = (e) => {
    e.preventDefault();
  };

  const viewAction = (id) => {};

  const currentPosts = data;

  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col flex-1 w-full overflow-y-auto pt-4"
        style={{ backgroundColor: '#eff6fc' }}
      >
        <h1>assa</h1>
        <div className="employeedirtable__section">
          <div className="employeedirtable__body">
            <UseTable
              id="id"
              link="/admin/onboarding/document/office-tool/tools"
              columns={columns}
              data={data}
              viewAction={viewAction}
            />
            {/* <div className="w-full flex justify-center items-center mt-7">
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
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageResignation;
