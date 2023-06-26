import React, { useEffect } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate, useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import {
  CloseInvoiceAction,
  GetInvoiceAction,
} from '../../../Feature/Admin/Invoice/InvoiceSlice';
import { DateFormat } from '../../../utilities/FormatDate';

function InvoiceDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  let tableContent = [{}, {}];
  const handleClose = () => {
    dispatch(CloseInvoiceAction(id));
  };
  let tablebody = [
    {
      id: 1,
      Description: 'Server Domain',
      Price: 20,
      Quantity: 3,
      total: 60,
    },
  ];
  useEffect(() => {
    dispatch(GetInvoiceAction(id));
  }, []);
  const invoice = useSelector((state) => state.reducer.InvoiceReducer.invoice);

  return (
    <div className="flex justify-center font-normal text-[13px]">
      <div className="w-[90%]  xl:w-[80%] 2xl:bg-black 2xl:w-[65%]">
        <div className="flex items-center cursor-pointer ml-2">
          <span onClick={() => navigate(-1)}>Invoices</span>
          <KeyboardArrowRightIcon />
          <span>Details</span>
        </div>

        <div className="bg-white border rounded-lg px-5 py-5">
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <p className="text-[28px]">Due Date:</p>
              <p>{`Invoice ID # business/${invoice?.reference}`}</p>
            </div>

            <div className=" lg:text-[28px]">
              <p>{invoice?.due_date}</p>
            </div>
          </div>

          <div className="flex justify-between mb-10">
            <div className="flex flex-col  gap-1">
              <p>Billed To:</p>
              <p>GT Bank</p>
              <p>{invoice?.contact_email}</p>
              <p>{invoice?.contact_address}</p>
            </div>

            <div className="text-right flex flex-col  gap-1">
              <p>Date:</p>
              <p>
                {invoice !== null &&
                  invoice.creates_at !== undefined &&
                  DateFormat(new Date(invoice?.created_at))}
                <span></span>
              </p>
            </div>
          </div>

          <div className="flex flex-col  gap-1 mb-10">
            <p>Account Details:</p>
            <p>Bank: {invoice?.account?.bank_name}</p>
            <p>Account Number: {invoice?.account?.account_number}</p>
            <p>Account Name: {invoice?.account?.account_name}</p>
            <p>Sort Code: {invoice?.account?.short_code}</p>
            <p>TIN: {invoice?.account?.tin}</p>
          </div>

          <div className="invoiceSummary bg-[#F4F4F4] rounded py-5 pl-5 pr-2">
            <h2 className="text-[20px]">Invoice summary</h2>

            <div className="tablehead flex w-full  font-medium my-3">
              <span className=" w-[40%] ">Description</span>
              <span className=" w-[20%] text-center"> Price</span>
              <span className=" w-[20%] text-center">Quantity</span>
              <span className=" w-[20%] text-right">Total</span>
            </div>

            {invoice?.items?.map((item) => (
              <div className="tablehead flex w-full  my-3">
                <span className=" w-[40%] ">{item?.name}</span>
                <span className=" w-[20%] text-center"> {item?.price}</span>
                <span className=" w-[20%] text-center">{item?.qty}</span>
                <span className=" w-[20%] text-right">
                  N{`${Number(item?.price) * Number(item?.qty)}`}
                </span>
              </div>
            ))}

            <div className="TotalSummary flex justify-end  ">
              <div className="flex flex-col  w-[20%] gap-1 text-center">
                <p>Subtotal</p>
                <p>VAT {`${invoice?.vat}%`}</p>
              </div>

              <div className="w-[20%] text-right flex flex-col gap-1">
                <span>40</span>
                <span>3</span>
              </div>
            </div>

            <div className="flex  justify-end  items-center ">
              <p className="w-[20%] text-center">Total</p>
              <p className="w-[20%] text-[28px] text-right">100</p>
            </div>
          </div>

          <div className="flex justify-between mt-4 gap-3 items-end">
            <div>
              <p className="text-base  font-normal pl-4">Payment Status:</p>
              <div>
                <button
                  className="bg-[#2A72A8] text-[#F8F8F8] rounded px-2  lg:px-4 
                py-2 font-medium text-[10px] lg:text-[16px] mr-3"
                  onClick={handleClose}
                >
                  Close Invoice
                </button>
              </div>
              {/* <div className="bg-[#F0F1F1] w-60 px-4 py-[10px] flex justify-between items-center">
                <span className="text-base  font-normal"> Open(Not Paid)</span>

                <KeyboardArrowDownIcon />
              </div> */}
            </div>

            <div className="flex">
              <div>
                <button className="bg-[#F8F8F8] text-[#2A72A8] rounded px-2  lg:px-4 py-2 font-medium text-[10px] lg:text-[16px] mr-3">
                  Download
                </button>
              </div>

              <div>
                <button className="bg-[#2A72A8] text-[#F8F8F8] rounded px-2  lg:px-4 py-2 font-medium text-[10px] lg:text-[16px] mr-3">
                  Send Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;
