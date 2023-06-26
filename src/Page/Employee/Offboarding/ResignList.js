import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import store from '../../../app/store';
import UseTable from '../../../Components/EmployeeDirTable/UseTable';
import No_Network from '../../../Components/No_Network';
import { Get_all_Employee_offboard_Fun } from '../../../Feature/Admin/Offboard/OffboardSlice';
// import './resign.css';

const ResignList = () => {
  const { isLoading: offboard_is_loading, isSuccess: offboard_isSuccess } =
    useSelector((state) => state.reducer.OffboardSlice);

  const isAdminOrNot = store.getState().reducer.loginReducer.extra;
  const [open, setOpen] = useState(false);
  const { All_employee_Offbord_data } = useSelector(
    (state) => state.reducer.OffboardSlice
  );

  const navitage = useNavigate();

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };

  const columns = [
    { path: 'checkbox', name: 's/n' },
    { path: 'sentto', name: 'Sent To' },
    { path: 'date', name: 'Date Sent' },
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
  useEffect(() => {
    dispatch(Get_all_Employee_offboard_Fun());

    return () => {};
  }, []);

  const viewAction = (id) => {};

  const currentPosts = data; // searchParams.length > 0 ? filteredList : list?.data;

  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900 ">
      <div
        class="flex flex-col flex-1 w-full overflow-y-auto pt-4"
        style={{ backgroundColor: '#eff6fc' }}
      >
        <div className="employeedirtable__section">
          <div className="employeedirtable__body">
            <header className="officetools__header">
              <div class="relative" onClick={handleOpen}></div>
              <div className="employeedirtable__header--right">
                <div className="resignationtablebutton">
                  <button onClick={() => navitage('/employee/exit/resign')}>
                    Resign
                  </button>
                </div>
              </div>
            </header>

            {All_employee_Offbord_data?.status === 'success' ? (
              <UseTable
                id="id"
                link="/employee/exit/review"
                columns={columns}
                data={All_employee_Offbord_data?.data}
                viewAction={viewAction}
              />
            ) : (
              <>
                <div className="flex justify-center items-center">
                  <CircularProgress />
                </div>
              </>
            )}

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

export default ResignList;
