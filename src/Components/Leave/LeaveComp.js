import React, { useState, useEffect } from 'react';
import {
  getLeaveRequestAdminAction,
  reset_aprove_deline_data,
} from '../../Feature/Admin/LeaveAdmin/LeaveAdminSlice';
import UseTable from '../EmployeeDirTable/UseTable';
import { useDispatch, useSelector } from 'react-redux';
import './leavecomp.styles.css';
import ReactPaginate from 'react-paginate';
import { Headbar } from '../Headbar/Headbar';
import Table from '../Table/Table';

const columns = [
  { path: 'checkbox', name: 's/n' },
  { path: 'profile', name: '' },
  { path: 'reliever', name: 'Reliever' },
  { path: 'created_at', name: 'date sent' },
  { path: 'type', name: 'leave type' },
  { path: 'start_date', name: 'From-To' },
  { path: 'days_requested', name: 'days left' },
  { path: 'commands', name: 'decline, approve' },
];

function LeaveComp() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(5);
  const [searchParams, setSearchParams] = useState('');

  const leave = useSelector(
    (state) => state.reducer.leaveAdminReducer.getLeaveListAdmin
  );

  const { aprove_deline_isSuccess } = useSelector(
    (state) => state.reducer.leaveAdminReducer
  );

  useEffect(() => {
    dispatch(getLeaveRequestAdminAction());
    dispatch(reset_aprove_deline_data());
  }, [aprove_deline_isSuccess, dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchParams(e.target.value);
  };
  const filteredList = leave?.data?.filter((leave) => {
    return (
      leave?.reliever?.first_name
        .toLowerCase()
        .includes(searchParams.toLowerCase()) ||
      leave?.reliever.last_name
        .toLowerCase()
        .includes(searchParams.toLowerCase())
    );
  });

  const Prev = () => {
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

  const indexOfLastPost = currentPage * leave?.per_page;
  const indexOfFirstPost = indexOfLastPost - leave?.per_page;
  const currentPosts = searchParams.length > 0 ? filteredList : leave?.data;

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <div className="leavecomponent">
      <Headbar name="Leave Management" total={leave?.total} text="Requests" />
      <section className="leavecomponent__section ">
        <div className="leavecomponent__body ">
          <div className=" bg-white flex py-5 items-center   justify-between  px-4">
            <div className="   ml-1 lg:ml-1">
              <form className="approval-selection">
                <select placeholder="bulk commans">
                  <option>approve</option>
                  <option>Decline</option>
                </select>
              </form>
            </div>
            <div className="">
              <form className="search-field">
                <input
                  type="search"
                  placeholder="Search by Name or ID"
                  onChange={handleChange}
                />
                <input type="submit" value="search" />
              </form>
            </div>
          </div>
          {/* <UseTable id="id" columns={columns} data={currentPosts} /> */}
          <Table
            linkTo={`/admin/employee`}
            type={`directory`}
            data={currentPosts}
            columns={fileHeader}
            menu={rowMenu}
          />
        </div>
        <div className="w-full flex justify-center items-center mt-7 px-4 mb-3">
          <ReactPaginate
            onPageChange={paginate}
            pageCount={leave?.last_page}
            previousLabel={<Prev />}
            nextLabel={<Next />}
            containerClassName={'pagination'}
            pageLinkClassName={'page-number'}
            previousLinkClassName={'page-number'}
            nextLinkClassName={'page-number'}
            activeLinkClassName={'active'}
          />
        </div>
      </section>
    </div>
  );
}

export default LeaveComp;
