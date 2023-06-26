import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  getLeaveAction,
  getRelieversAction,
  reset_request,
  reset_sucess,
} from '../../Feature/Leave/LeaveRequestSlice';
import { Link } from 'react-router-dom';
import UseTable from '../EmployeeDirTable/UseTable';
import './employeeleavecomponent.style.css';
import calendarcheck from '../../assets/CalendarCheck.png';
import LeaveRequest from './LeaveRequest/LeaveRequest';
import ReactPaginate from 'react-paginate';

import Table from '../../Components/Table/Table';

const columns = [
  { path: 'checkbox', name: 's/n' },
  { path: 'profile', name: '' },
  { path: 'reliever', name: 'Reliever' },
  { path: 'created_at', name: 'date sent' },
  { path: 'type', name: 'leave type' },
  { path: 'start_date', name: 'From-To' },
  { path: 'days_requested', name: 'days left' },

  { path: 'status', name: 'status' },
];

const employeeDirectory = [
  { name: 'Check', size: '72px' },

  {
    name: 'Admin_Name',
    error: 'No Name',
    title: 'Name',
    data: 'name',
  },
  {
    name: 'Admin Type',
    data: 'admin_type',
    error: 'No Id',
    title: 'Admin Type',
  },
  {
    name: 'Employee Id',
    data: 'employee_id',
    error: 'No Id',
    title: 'Employee ID',
  },
  {
    name: 'Company',
    error: 'No Branch',
    data: 'company',
    title: 'Company',
  },

  {
    name: 'Email Address',
    error: 'No Email',
    data: 'email',
    title: 'Email Address',
  },
];

const rowMenu = [
  { value: 'View Profile', type: 'link' },
  { value: 'Reset Password' },
  { value: 'Update Profile' },
  { value: 'Audit ' },
  { value: 'Disable' },
];

export const EmployeeLeaveComponent = () => {
  const dispatch = useDispatch();
  const [manage, setManage] = useState(true);
  const [request, setRequest] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const togglingRequest = () => {
    setManage(false);
    setRequest(true);
  };

  const getRequest = useSelector(
    (state) => state.reducer.leaveReducer.getRequest
  );

  // const getReques = useSelector((state) => state.reducer.leaveReducer);

  // console.log(getReques);

  const managePage = () => {
    setManage(true);
    setRequest(false);
  };
  useEffect(() => {
    dispatch(getLeaveAction());
    dispatch(getRelieversAction());
    dispatch(reset_request());
  }, [request]);

  const Previous = () => {
    return (
      <p className="text-[#344054] text-[13px] font-['Inter'] font-medium">
        &#8592; previous
      </p>
    );
  };
  const Next = () => {
    return (
      <p className="text-[#344054] text-[13px] font-['Inter'] font-medium">
        Next &rarr;
      </p>
    );
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = getRequest.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div
      className="employeeleavecomponent px-5"
      style={{ scrollBehavior: 'auto' }}
    >
      {manage && (
        <section className="employeeleavecomponent__section">
          <div className="employeeleavecomponent__body">
            <div className="employeeleavecomponent__top">
              <div className="employeeleavecomponent__left">
                my leave request
                <span className="number_of_request">{getRequest.length}</span>
              </div>
              <div className="employeeleavecomponent__right">
                <button
                  className="leaverequest-button"
                  onClick={togglingRequest}
                >
                  <div>
                    <img src={calendarcheck} alt="calendar-check" />
                  </div>
                  <div>create </div>
                </button>
              </div>
            </div>
            {/* <UseTable id="id" columns={columns} data={currentPosts} /> */}

            <Table
              linkTo={`/employee/leave`}
              type={`EmployeeLeaveRequests`}
              data={currentPosts}
              columns={employeeDirectory}
              menu={rowMenu}
            />
          </div>
          <div>
            <ReactPaginate
              onPageChange={paginate}
              pageCount={Math.ceil(getRequest.length / postsPerPage)}
              previousLabel={<Previous />}
              nextLabel={<Next />}
              containerClassName={'pagination'}
              pageLinkClassName={'page-number'}
              previousLinkClassName={'page-number'}
              nextLinkClassName={'page-number'}
              activeLinkClassName={'active'}
            />
          </div>
        </section>
      )}
      {request && <LeaveRequest managePage={managePage} />}
    </div>
  );
};
