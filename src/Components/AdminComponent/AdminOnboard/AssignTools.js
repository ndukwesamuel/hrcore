import React, { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import store from '../../../app/store';
import UseTable from '../../../Components/EmployeeDirTable/UseTable';
import { Headbar } from '../../../Components/Headbar/Headbar';
import Aside from '../../../Components/Sidebar/Aside';
import AsideAdmin from '../../../Components/Sidebar/AsideAdmin';
import Mobile from '../../../Components/Sidebar/Mobile';
import './office.css';

const AssignTools = () => {
  const isAdminOrNot = store.getState().reducer.loginReducer.extra;
  const [open, setOpen] = useState(false);

  const columns = [
    { path: 'checkbox', name: 's/n' },
    { path: 'officetool', name: 'Office Tool' },
    { path: 'description', name: 'Description' },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  const currentPosts = [
    { path: 'checkbox', name: 's/n' },
    { path: 'name', name: 'name' },
    { path: 'employeeid', name: 'employee id' },
  ];

  const handleChange = (e) => {
    e.preventDefault();
  };

  const viewAction = (id) => {};
  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
      <div
        class="flex flex-col flex-1 w-full overflow-y-auto mt-4"
        style={{ backgroundColor: '#eff6fc' }}
      >
        <div className="employeedirtable__section">
          <div className="employeedirtable__body">
            <form className="officetools__header">
              <input
                type="search"
                placeholder="Search by Name"
                onChange={handleChange}
                className="officeassigntools_inputsec"
              />
              <div className="officeassigntoolsdirtable__search">
                <button>Done</button>
              </div>
            </form>
            <UseTable
              id="id"
              link="/admin/onboarding"
              columns={columns}
              data={currentPosts}
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

export default AssignTools;
