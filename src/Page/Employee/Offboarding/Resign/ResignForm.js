import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OffboardingReview from '../../../../Components/Employee/Offboarding/OffboardingReview';
import {
  resetResign,
  ResignStoreData,
} from '../../../../Feature/Employee/ResignSlice';

import axios from 'axios';
import {
  Employee_Create_offboardFun,
  reset_Create_Employee_request,
} from '../../../../Feature/Admin/Offboard/OffboardSlice';
import PageLoader from '../../../../utilities/PageLoader';

let baseURL = process.env.REACT_APP_BASEURL;

function ResignForm({ resignform, setResignform }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { ResignData } = useSelector((state) => state.reducer.ResignSlice);
  const {
    isLoading: offboard_is_loading,
    offboard_isSuccess,
    create_Employee_request,
  } = useSelector((state) => state.reducer.OffboardSlice);

  const [department, setDepartment] = useState('');
  const [reason, setReason] = useState('');
  const [last_working_day, setLast_working_day] = useState('');

  const [returned_work_tools, setreturned_work_tools] = useState('');
  const [current_address, setCurrent_address] = useState('');
  const [personal_email, setPersonal_email] = useState('');
  const [personal_phone_number, setPersonal_phone_number] = useState('');
  const [letter_upload, setLetter_upload] = useState(null);

  const Upload_handwritten_letter = (e) => {
    setLetter_upload(e.target.files[0]);
  };

  const HandleNext = () => {
    const formData = {
      department,
      reason,
      last_working_day,
      returned_work_tools,
      current_address,
      personal_email,
      personal_phone_number,
      letter_upload,
    };

    dispatch(ResignStoreData(formData));
    setResignform('Review');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let returned_work_tools;

    if (ResignData.returned_work_tools === 'Yes') {
      returned_work_tools = 1;
    } else {
      returned_work_tools = 0;
    }

    const formData = new FormData();

    // formData.append('department', ResignData.department);
    formData.append('reason', ResignData.reason);
    formData.append('last_working_day', ResignData.last_working_day);
    formData.append('returned_work_tools', returned_work_tools);
    formData.append('current_address', ResignData.current_address);
    formData.append('personal_email', ResignData.personal_email);
    formData.append('personal_phone_number', ResignData.personal_phone_number);
    formData.append('letter_upload', ResignData.letter_upload);

    dispatch(Employee_Create_offboardFun(formData));
  };

  useEffect(() => {
    if (offboard_isSuccess) {
      dispatch(reset_Create_Employee_request());
      dispatch(resetResign());
      navigate('/employee/exit');
    }
    return () => {};
  }, [dispatch, offboard_isSuccess]);

  return (
    <div className="">
      {offboard_is_loading && <PageLoader />}
      <form action="" method="post">
        {resignform === 'Details' && (
          <div className="">
            <div className="mt-2">
              <label className="" htmlFor="">
                Department
              </label>

              <input
                className="mt-2 w-full border outline-none py-2 px-2 rounded"
                type="text"
                id=""
                placeholder="Which department do you belong to?"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
                name="department"
              />
            </div>

            <div className="mt-2">
              <label className="" htmlFor="">
                Reason For Resignation
              </label>
              <input
                className="mt-2 w-full border outline-none py-2 px-2 rounded"
                type="text"
                id=""
                placeholder="why the separation?"
                // value={resignFormData.reason}
                // name="reason"
                // onChange={handleInputChangeResignForm}

                value={reason}
                onChange={(event) => setReason(event.target.value)}
                name="reason"
              />
            </div>

            <div className="mt-2">
              <label className="" htmlFor="">
                Last Working Day
              </label>
              <input
                className="mt-2 w-full border outline-none py-2 px-2 rounded"
                type="date"
                id=""
                name="last_working_day"
                value={last_working_day}
                onChange={(event) => setLast_working_day(event.target.value)}
              />
            </div>

            <div className="mt-2">
              <label className="" htmlFor="">
                Have You Returned all Your Work Tools
              </label>

              <select
                className="mt-2 w-full border outline-none py-2 px-2 rounded"
                id="select"
                name="returned_work_tools"
                value={returned_work_tools}
                onChange={(event) => setreturned_work_tools(event.target.value)}
              >
                <option className="border-none outline-none">No</option>
                <option className="border-none outline-none">Yes</option>
              </select>
            </div>

            <div className="mt-2">
              <label className="" htmlFor="">
                Current Address
              </label>
              <input
                className="mt-2 w-full border outline-none py-2 px-2 rounded"
                type="text"
                id=""
                placeholder="Location of your current address"
                name="current_address"
                value={current_address}
                onChange={(event) => setCurrent_address(event.target.value)}
              />
            </div>

            <div className="mt-2">
              <label className="" htmlFor="">
                Personal Email
              </label>
              <input
                className="mt-2 w-full border outline-none py-2 px-2 rounded"
                type="email"
                id=""
                placeholder="please provide your personal email"
                name="personal_email"
                value={personal_email}
                onChange={(event) => setPersonal_email(event.target.value)}
              />
            </div>

            <div className="mt-2">
              <label className="" htmlFor="">
                Personal Phone Number
              </label>
              <input
                className="mt-2 w-full border outline-none py-2 px-2 rounded"
                type="number"
                placeholder="please provide your personal number    "
                name="personal_phone_number"
                value={personal_phone_number}
                onChange={(event) =>
                  setPersonal_phone_number(event.target.value)
                }
              />
            </div>

            <div className="mt-2">
              <label className="" htmlFor="">
                Upload handwritten letters (max 2mb)
              </label>

              <input
                className="mt-2 w-full border outline-n one py-2 px-2 rounded"
                type="file"
                onChange={Upload_handwritten_letter}
              />
            </div>
          </div>
        )}

        {resignform === 'Review' && (
          <div>
            <OffboardingReview
              ReviewPage={ResignData}
              dataPage="employee_Form_Review"
            />
          </div>
        )}
      </form>

      <div className="flex justify-end gap-2 mt-5 font-bold lg:text-base">
        {resignform === 'Details' && (
          <button
            className="text-[#2A72A8] bg-white px-4 py-1  rounded"
            onClick={() => navigate('/employee/exit/')}
          >
            Cancel
          </button>
        )}

        {resignform === 'Review' && (
          <button
            className="text-white bg-[#2A72A8] px-4 py-1  rounded "
            onClick={() => setResignform('Details')}
          >
            Back
          </button>
        )}

        {resignform === 'Details' && (
          <button
            className="text-white bg-[#2A72A8] px-4 py-1  rounded "
            onClick={HandleNext}
          >
            Next
          </button>
        )}

        {resignform === 'Review' && (
          <button
            className="text-white bg-[#2A72A8] px-4 py-1  rounded "
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default ResignForm;
