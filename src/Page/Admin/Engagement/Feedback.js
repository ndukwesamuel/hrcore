// import React from 'react';

// function Feedback() {

//   return <div>Feedback</div>;
// }

// export default Feedback;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import EmployeeDirTable from '../../EmployeeDirTable/EmployeeDirTable';
// import UseTable from '../../EmployeeDirTable/UseTable';
// import Svgicons from '../../../assets/Svgicons';
// import ReactPaginate from 'react-paginate';
// import { getAdminNextEmployeeListAction } from '../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import { useNavigate } from 'react-router-dom';
// import { GetInvoicesAction } from '../../../Feature/Admin/Invoice/InvoiceSlice';
import { useEffect } from 'react';
import UseTable from '../../../Components/EmployeeDirTable/UseTable';
import { GetInvoicesAction } from '../../../Feature/Admin/Invoice/InvoiceSlice';

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

function Feedback() {
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
  }, []);

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
        <div className="mt-5">
          <div className="employeedirtable__body">
            <UseTable
              id="id"
              link="/admin/invoice"
              columns={columns}
              data={filteredList}
              viewAction={viewAction}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
