import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { SettingsNav } from '../../../Components/AdminComponent/Settings/SettingsNav';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { resetCreateLeaveTypes } from '../../../Feature/Admin/Settings/BranchSlice';
import { getAdminEmployeeListAction } from '../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import { Role_Permissions_Fun } from '../../../Feature/Admin/Settings/Role_Permissions_Slice';

function CreateAdmin({}) {
  const dispatch = useDispatch();

  const list = useSelector(
    (state) => state.reducer.adminEmployeeReducer.getAdminEmployee
  );
  console.log(list);
  const {
    Role_Permissions,
    Role_Permissions_isError,
    Role_Permissions_message,
    Role_Permissions_isLoading,
    Role_Permissions_isSuccess,

    Create_Role_Permissions_isSuccess,
  } = useSelector((state) => state.reducer.Role_Permissions_Slice);

  console.log(Role_Permissions);

  useEffect(() => {
    dispatch(Role_Permissions_Fun());
  }, [Create_Role_Permissions_isSuccess]);

  const [shown, setShown] = useState('basic');

  const [basicInfoData, setBasicInfoData] = useState({
    role_name: '',
    role_decription: '',
  });

  const handleInputChangebasicInfoData = (e) => {
    const { name, value } = e.target;
    setBasicInfoData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeave_and_day((prevState) => ({ ...prevState, [name]: value }));
  };

  const nextStep = () => {
    setShown('permissions');

    console.log(basicInfoData);
  };

  const prevStep = () => {
    setShown('basic');
  };

  const [searchText, setSearchText] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [admins, setAdmins] = useState([]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleAddAdmin = () => {
    if (selectedEmployee) {
      setAdmins([...admins, selectedEmployee]);
      setSelectedEmployee(null);
      setSearchText('');
    }
  };

  const filteredEmployees = list?.data.filter((employee) => {
    return employee.first_name.toLowerCase().includes(searchText.toLowerCase());
  });

  // this is for the leave type

  const {
    CreateLeaveTypes_isSuccess,

    GetallPosition,
    GetLeaveTypes,
  } = useSelector((state) => state.reducer.BranchSlice);

  let leaveType_name = [];
  let new_leavetype = GetLeaveTypes?.data;
  for (const l in new_leavetype) {
    leaveType_name.push(l);
  }

  const [leave_and_day, setLeave_and_day] = useState({
    leave: leaveType_name,
    day: '',
  });

  const [leaveType, setLeaveType] = useState({
    name: '',
    description: '',
  });

  const handleInputChangeLeavetype = (e) => {
    const { name, value } = e.target;
    setLeaveType((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    dispatch(getAdminEmployeeListAction());
    return () => {
      dispatch(resetCreateLeaveTypes());
    };
  }, [CreateLeaveTypes_isSuccess]);

  const handleFormSubmitLeavetype = (e) => {
    e.preventDefault();

    let data = {
      name: leaveType.name,
      days: 10,
      description: leaveType.description,
    };

    // dispatch(CreateLeaveTypesFun(data));
  };

  return (
    <>
      <div className="lg:flex lg:justify-center">
        <div className="lg:w-[90%]  ">
          <div className="lg:ml-[50px] ">
            <SettingsNav />
          </div>
          <div className="  md:flex md:justify-center    h-full  mt-3">
            <div className="bg-white md:w-[90%] pt-5 rounded-md">
              <div className="flex justify-center pb-10 ">
                <div className=" w-[90%]">
                  <div>
                    <div className="bg-white ">
                      <div className="flex justify-center pb-4 ">
                        <div className=" w-[90%]">
                          <p className="text-[13px] font-normal font-inter mb-6">
                            Create Admin
                          </p>

                          <p className="w-[70%]">
                            An Admin is created from an employee account. The
                            Employee would use their already existing password
                            to login to their Admin account
                          </p>

                          <div className="mb-3">
                            <label htmlFor="" className=" font-medium text-sm">
                              Role Name
                            </label>

                            <input
                              type="text"
                              id="search-input"
                              value={searchText}
                              onChange={handleSearchChange}
                              name="role_name"
                              className="w-full rounded-lg border border-solid border-[#D0D5DD]
px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085]
font-['Manrope']"
                            />

                            <ul className="mt-2 divide-y divide-gray-200">
                              {filteredEmployees.map((employee) => {
                                return (
                                  <li
                                    key={employee.id}
                                    onClick={() =>
                                      handleSelectEmployee(employee)
                                    }
                                    className="py-2 cursor-pointer hover:bg-gray-100"
                                  >
                                    <p className="font-medium text-gray-900">
                                      {employee.first_name}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      {employee.last_name}, {employee.email}
                                    </p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                          <div>
                            <label htmlFor="" className=" font-medium text-sm">
                              Role Description
                            </label>

                            <select
                              name="leave"
                              value={leave_and_day.leave}
                              onChange={handleInputChange}
                              className="w-full rounded-lg border border-solid border-[#D0D5DD] px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] font-['Manrope']"
                            >
                              <option value="">Select a Role</option>
                              {Role_Permissions?.data.map((name) => (
                                // <option
                                //   key={name}
                                //   value={name}
                                //   className="option-style"
                                // >
                                //   {name}
                                // </option>
                                <></>
                              ))}
                            </select>
                          </div>

                          <div className="flex justify-end">
                            <div className="p-4">
                              {selectedEmployee && (
                                <div>
                                  <p className="text-gray-700">
                                    Selected Employee: {selectedEmployee.email}
                                  </p>
                                  <button
                                    // onClick={}
                                    className="mt-2 mr-3 px-4 py-2 bg-white text-black font-medium rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    Cancle
                                  </button>

                                  <button
                                    onClick={handleAddAdmin}
                                    className="mt-2 px-4 py-2 bg-[#2A72A8] text-white font-medium rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                  >
                                    Create Admin
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAdmin;
