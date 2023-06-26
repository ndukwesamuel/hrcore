import React, { useState, useEffect } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import store from '../../../app/store';
import {
  getAdminEmployeeListAction,
  getAdminNextEmployeeListAction,
} from '../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import './office.css';
import Table from '../../Table/Table.js';

const Office = () => {
  const isAdminOrNot = store.getState().reducer.loginReducer.extra;
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState('');
  const dispatch = useDispatch();
  const locate = useLocation();

  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    dispatch(getAdminEmployeeListAction());
  }, [dispatch]);

  const employeetools = useSelector(
    (state) => state.reducer.adminEmployeeReducer.getAdminEmployee
  );

  const filteredList = employeetools?.data?.filter((employee) => {
    return (
      employee.first_name.toLowerCase().includes(searchParams.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchParams.toLowerCase())
    );
  });

  const indexOfLastPost = currentPage * employeetools?.per_page;
  const indexOfFirstPost = indexOfLastPost - employeetools?.per_page;

  const currentPosts =
    searchParams.length > 0 ? filteredList : employeetools?.data;

  const paginate = ({ selected }) => {
    dispatch(getAdminNextEmployeeListAction(selected));
    setCurrentPage(selected + 1);
  };

  const fileHeader = [
    {
      name: 'Check',
      title: 'S/N',
      size: '72px',
    },
    {
      name: 'Directory',
      error: 'No Name',
      title: 'Name',
      data: 'name',
    },
    {
      name: 'Employee Id',
      data: 'employee_id',
      error: 'No Id',
      title: 'Employee ID',
    },
    {
      name: 'Tags',
      data: 'office_tools',
      error: '00',
      title: 'Tools',
    },

    { name: 'Empty', size: '72px' },
  ];

  const rowMenu = [
    { value: 'View Details', type: 'link' },
    { value: 'Remove All Tools' },
  ];

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div
      class="flex h-screen bg-gray-50 dark:bg-gray-900"
      style={{
        height: 'inherit',
      }}
    >
      <div
        class="flex flex-col flex-1 w-full overflow-y-auto pt-4"
        style={{ backgroundColor: '#eff6fc' }}
      >
        <div className="employeedirtable__section">
          <div className="employeedirtable__body">
            <header className="officetools__header">
              <div class="relative" onClick={handleOpen}>
                <p className="selecttypes_onboard">
                  Commands{' '}
                  <AiOutlineDown
                    style={{ marginLeft: '20px', fontSize: '10px' }}
                  />
                </p>
                {open && (
                  <ul class="absolute bg-white w-full mt-1 office_assigntools">
                    <li class="p-1.5">
                      <Link to="/admin/onboarding/document/office-tool/assigned">
                        Assign Tools
                      </Link>
                    </li>
                    <li class="p-1.5">Remove</li>
                  </ul>
                )}
              </div>
              <div className="employeedirtable__header--right">
                <form className="employeedirtable__search">
                  <input
                    type="search"
                    placeholder="Search by Name"
                    onChange={handleChange}
                  />
                  <button>search</button>
                </form>
              </div>
            </header>
            {/* <UseTable
              id="id"
              link="/admin/documents/office-tool"
              columns={columns}
              data={currentPosts}
            /> */}
            <Table
              linkTo={`/admin/documents/office-tool`}
              type={`directory`}
              data={currentPosts}
              columns={fileHeader}
              menu={rowMenu}
            />
            <div className="w-full flex justify-center items-center mt-7">
              <ReactPaginate
                onPageChange={paginate}
                pageCount={employeetools?.last_page}
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
        </div>
      </div>
    </div>
  );
};

export default Office;
