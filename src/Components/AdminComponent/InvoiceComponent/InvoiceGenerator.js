import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EmployeeDirTable from '../../EmployeeDirTable/EmployeeDirTable';
import UseTable from '../../EmployeeDirTable/UseTable';
import Svgicons from '../../../assets/Svgicons';
import ReactPaginate from 'react-paginate';
import { getAdminNextEmployeeListAction } from '../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import { useNavigate } from 'react-router-dom';
import { GetInvoicesAction } from '../../../Feature/Admin/Invoice/InvoiceSlice';
import Table from '../../Table/Table';
import { useEffect } from 'react';

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

function InvoiceGenerator() {
  const invoices = useSelector(
    (state) => state.reducer.InvoiceReducer.invoices
  );

  const [searchParams, setSearchParams] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchParams(e.target.value);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(GetInvoicesAction());

    return () => {};
  }, [dispatch]);

  const filteredList = invoices?.filter((employee) => {
    return employee.reference.includes(searchParams);
  });

  const viewAction = (id) => {};

  const InvoiceGeneratorHeader = ({ title, datavalue }) => {
    return (
      <div className="bg-white text-base 2xl:text-[2rem] w-full  text-center lg:py-7 lg:px-6  py-5 px-3  2xl:py-16 2xl:px-10">
        <p className=" font-semibold   2xl:mb-2 text-base "> {title}</p>
        <div className="bg-[#EAEAEA] py-1 border rounded mt-1 2xl:py-4 lg:py-2 lg:px-4 font-semibold  text-base">
          <p className=""> {datavalue}</p>{' '}
        </div>
      </div>
    );
  };

  return (
    <div className="flex  justify-center">
      <div className="  w-[90%] ">
        <h2 className="  font-semibold  text-xl mb-3 2xl:text-[2rem] 2xl:mb-5">
          Invoice
        </h2>
        <div className="flex justify-between gap-2   lg:w-[70%]   2xl:gap-4  ">
          <InvoiceGeneratorHeader
            title="Total Invoices"
            datavalue={invoices?.length}
          />
          <InvoiceGeneratorHeader
            title="Closed Invoices"
            datavalue={invoices?.filter((el) => el.status === 'closed').length}
          />
          <InvoiceGeneratorHeader
            title="Open Invoices"
            datavalue={invoices?.filter((el) => el.status === 'open').length}
          />
        </div>
        <div className="mt-5">
          <div className="employeedirtable__body">
            <header className="employeedirtable__header">
              <form className="employeedirtable__search">
                <input
                  className="border-none outline-none"
                  type="search"
                  placeholder="Search by Name or ID"
                  onChange={handleChange}
                />

                <button>search</button>
              </form>

              <div className="employeedirtable__header--right">
                <button
                  class="bg-[#E6E6E6] text-[10px] py-2 px-2  lg:text-base   lg:py-2  lg:px-4 rounded"
                  onClick={() => navigate('/admin/invoice/settings')}
                >
                  Invoice Settings
                </button>

                <button
                  onClick={() => navigate('/admin/invoice/create')}
                  class="bg-[#2A72A8] text-[10px] py-2 px-2 lg:text-base text-white   lg:py-2  lg:px-4 rounded"
                >
                  Create Invoice
                </button>
              </div>
            </header>
            <Table
              linkTo={`/admin/invoice`}
              type={`directory`}
              data={filteredList}
              columns={fileHeader}
              menu={rowMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceGenerator;
