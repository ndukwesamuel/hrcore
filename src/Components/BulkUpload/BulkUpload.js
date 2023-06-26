import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CreateMultipleStaffAction,
  SampleFileDownloadAction,
} from '../../Feature/Admin/AddStaff/AddMUltipleStaff';
import { CircularProgress } from '@mui/material';
import PopContent from '../AddStaff/PopContent';
import PopModal2 from '../AddStaff/PopModal2';
import { toast } from 'react-toastify';

import { BulkSuccess } from './BulkSuccess';

const BulkUpload = () => {
  const [see, setSee] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData(e.target.files[0]);
  };

  const { multiplestaff, IsError, isLoading, isSuccess, message } = useSelector(
    (state) => state.reducer.multipleStaffReducer
  );

  const Submitted = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('file', data);
    await dispatch(CreateMultipleStaffAction(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (IsError) {
      toast.error(`${message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        className: 'Forbidden403',
      });
    }

    if (isSuccess) {
      // setSee(true);
    }
  }, [IsError, message, isSuccess, dispatch]);

  return (
    <>
      {/* {see ? (
        <BulkSuccess see={see} />
      ) : ( */}
      <div className="w-full flex flex-col justify-center items-start p-2">
        <p className="text-black font-['Manrope'] text-xl font-bold m-0">
          Upload Bulk List
        </p>
        <div className="my-6 flex flex-col items-start gap-y-2">
          <p className="m-0 text-lg font-['Inter'] font-normal capitalize">
            step 1: sample Template
          </p>
          <a
            className="focus:outline-none"
            href={`${process.env.REACT_APP_BASEURL}utils/sample/import/user`}
            download
          >
            <button
              className="inline-block bg-[#2A72A8] text-white text-base font-normal
             rounded-lg py-2 px-5 capitalize font-['Inter'] w-[13rem] 
              cursor-pointer box-border outline-none"
            >
              Download
            </button>
          </a>
        </div>
        <form className="my-6 flex flex-col items-start gap-y-2 w-full">
          <p className="m-0 text-lg font-['Inter'] font-normal capitalize">
            step 2: upload document
          </p>
          <label
            for="bulk_upload"
            className="rounded w-full flex box-border border gap-x-3 border-solid  border-stone-200 px-2 py-2 font-['Inter']"
          >
            {data ? (
              <>
                <p className="text-black text-base font-light">{data?.name}</p>
                <p className=" rounded text-[#52525C] text-base font-normal">
                  {data?.size}
                </p>
              </>
            ) : (
              <>
                <p className="bg-[#EAECF0] rounded text-[#52525C] text-base font-normal">
                  browse...
                </p>
                <p className="text-black text-base font-light">
                  No file selected
                </p>
              </>
            )}
          </label>
          <input
            type="file"
            id="bulk_upload"
            className="hidden"
            onChange={handleChange}
          />
          <div className="w-full flex  items-center justify-end gap-x-4 cursor-pointer mt-2">
            <button className="font-['Inter'] font-medium text-base text-black cursor-pointer">
              cancel
            </button>
            <button
              type="submit"
              className="w-[6rem] bg-[#2A72A8] rounded text-white font-['Inter']
              font-medium text-base box-border p-2 cursor-pointer"
              onClick={Submitted}
            >
              {/* submit */}
              {loading ? <CircularProgress /> : 'submit'}
            </button>
          </div>
        </form>
      </div>
      {/* )} */}
    </>
  );
};

export default BulkUpload;
