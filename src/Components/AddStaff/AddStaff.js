import React, { useEffect, useState } from 'react';
import Svgicons from '../../assets/Svgicons';

import '../../Page/Employee/Onboarding/EmployeeDirectory.styles.css';
import './AddStaff.css';
import { NavLink, useNavigate } from 'react-router-dom';
import PopModal from './PopModal';
import {
  CreateSingleStaff,
  reset as ResetAddemployee,
  reset_CreateSingleStaffSlice,
} from '../../Feature/Admin/AddStaff/AddstaffSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';
import SidebarAdmin from '../Sidebar/SidebarAdmin';
import bulkimg from '../../assets/Images/bulk.png';
import BulkUpload from '../BulkUpload/BulkUpload';
import PopModal2 from './PopModal2';
import PopContent from './PopContent';
import { BulkSuccess } from '../BulkUpload/BulkSuccess';
import {
  GetGradeFun,
  GetallPositionFun,
} from '../../Feature/Admin/Settings/BranchSlice';
import { getGlobalSettings } from '../../Feature/Config/settingSlice';
import { Global_Settings_Fun } from '../../Feature/Admin/Settings/GlobalSettingsSlice';
import { allGlobalSettings } from '../../app/service/thunk/employee/profileThunk';

const AddStaff = () => {


  {social_Data === "twiter" ?  button :  "" } 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [employee_id, setEmployee_id] = useState('');
  const [company_id, setCompany_id] = useState(1);
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [gender, setGender] = useState('');

  const { createUser, IsError, isLoading, isSuccess, message } = useSelector(
    (state) => state.reducer.CreateSingleStaffReducer
  );

  const { GetGrade, GetallPosition } = useSelector(
    (state) => state.reducer.BranchSlice
  );

  const [gradename, setGradename] = useState('');

  const { Global__Settings } = useSelector(
    (state) => state.reducer.GlobalSettingsSlice
  );

  const { departments } = Global__Settings?.data;

  const [department_Data, setDepartment_Data] = useState('');

  useEffect(() => {
    dispatch(Global_Settings_Fun());
    dispatch(GetGradeFun());
    dispatch(Global_Settings_Fun());

    if (isSuccess) {
      setEmail('');
      setEmployee_id('');
      setFirst_name('');
      setGradename('');
      setGender('');
      setLast_name('');
      setDepartment_Data('');
    }

    return () => {
      dispatch(reset_CreateSingleStaffSlice());
    };
  }, [dispatch, isSuccess]);

  const sendInvite = async (e) => {
    e.preventDefault();

    let staffdata = {
      email,
      employee_id,
      first_name,
      last_name,
      gradename,
      department_Data,
      gender,
      company_id,
    };

    dispatch(CreateSingleStaff(staffdata));
  };

  const [isOpened, setIsOpened] = useState(false);
  const [bulk, setBulk] = useState(false);
  const bulkInvite = () => {
    setBulk(true);
  };
  const ClosingBullk = () => {
    setBulk(false);
    return window.location.reload(true);
  };
  const onProceed = () => {};

  return (
    <>
      <section className="addstaff__right">
        <div className="addstaff__content  xl:w-[80%] 2xl:w-[50%]">
          <ul className="addstaff__list">
            <li className="addstaff__item" onClick={() => navigate(-1)}>
              directory
              {/* <NavLink to="/admin/management">directory</NavLink> */}
            </li>
            <li className="addstaff__item">
              <Svgicons action="rightarrow" className="arrow" />
            </li>
            <li className="addstaff__item">add staff</li>
            <li
              onClick={bulkInvite}
              className="capitalize text-white flex ml-auto items-center bg-[#F72585]
              px-4 py-2 rounded text-xs font-medium cursor-pointer"
            >
              <img src={bulkimg} className="mr-0.5" />
              bulk invite
            </li>
          </ul>

          <div className="addstaff__invite-container">
            <p className="addstaff__heading">Add Your Staff</p>
            <span className=" text-xs w-[70%]">
              Please kindly fill out all information to add your staff. if some
              drop down filled are empty please go to settings and create the
              data there. E.g if Grade drop down is empty click on setting and
              select grade, then click on add Grade{' '}
            </span>
            <form className="addstaff__form">
              <div className="addstaff__name">
                <div className="addstaff__firstname">
                  <label for="firstname">first name</label>
                  <br />
                  <input
                    type="text"
                    id="firstname"
                    placeholder="first name"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </div>
                <div className="addstaff__lastname">
                  <label for="lastname">last name</label>
                  <br />
                  <input
                    type="text"
                    id="lastname"
                    placeholder="last name"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                </div>
              </div>

              <div className="addstaff__name">
                <div className="addstaff__firstname">
                  <label for="firstname">employee id number</label>
                  <br />
                  <input
                    type="text"
                    placeholder="identification number"
                    value={employee_id}
                    onChange={(e) => {
                      setEmployee_id(e.target.value);
                    }}
                  />
                </div>
                <div className="addstaff__lastname">
                  <label for="lastname">email address</label>
                  <br />
                  <input
                    type="email"
                    placeholder="email address"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="addstaff__name">
                <div className="addstaff__firstname">
                  <label for="firstname">Grade</label>
                  <br />
                  <select
                    name="gradename"
                    value={gradename}
                    onChange={(event) => setGradename(event.target.value)}
                    className="w-full rounded-lg border border-solid border-[#D0D5DD] px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] font-['Manrope']"
                  >
                    <option value="">Select a grade</option>
                    {GetGrade?.data.map((item) => (
                      <option key={item.id} value={item.id} className=" w-24">
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="addstaff__firstname">
                  <label for="firstname">Department</label>
                  <br />
                  <select
                    name="gradename"
                    value={department_Data}
                    onChange={(event) => setDepartment_Data(event.target.value)}
                    className="w-full rounded-lg border border-solid border-[#D0D5DD] px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] font-['Manrope']"
                  >
                    <option value="">Select a Department</option>
                    {departments.map((item) => (
                      <option key={item.id} value={item.id} className=" w-24">
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>


{  social_Data === "twiter"  ?  


  <button> <a href="/" class="card-link">Get started</a> </button>  : ""}
              <div className="addstaff__name">
                <div className="addstaff__firstname">
                  <label for="firstname">Gender</label>
                  <br />
                  <select
                    name="gender"
                    value={gender}
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                    className="w-full rounded-lg border border-solid border-[#D0D5DD] px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] font-['Manrope']"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="addstaff__action">
                {isLoading ? (
                  <button>
                    <CircularProgress fontSize="small" />
                  </button>
                ) : (
                  <button onClick={sendInvite}>send invite</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddStaff;
