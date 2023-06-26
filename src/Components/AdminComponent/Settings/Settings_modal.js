import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import {
  CreateBranchFun,
  CreateLeaveTypesFun,
  CreateOfficeToolsFun,
  CreatePositionFun,
  GetLeaveTypesFun,
  GetallPositionFun,
  createGradeFun,
  resetCreateBranch,
  resetCreateLeaveTypes,
  resetCreateOfficeTools,
  resetcreateGrade,
} from '../../../Feature/Admin/Settings/BranchSlice';
import { CircularProgress } from '@mui/material';
import {
  DepartmentSlice_Fun,
  OpenSetting_modalFun,
  reset_department,
} from '../../../Feature/Admin/Settings/DepartmentSlice';
export function Settings_modal({ setShowmodal, type, title }) {
  const dispatch = useDispatch();

  const {
    CreateBranch_isLoading,
    CreateBranch_isSuccess,
    CreateLeaveTypes_isSuccess,
    CreateLeaveTypes_isLoading,
    CreateOfficeTools_isSuccess,
    CreateOfficeTools_isLoading,

    GetallPosition,
    GetLeaveTypes,
  } = useSelector((state) => state.reducer.BranchSlice);

  const {
    department_data,
    department_isError,
    department_isSuccess,
    department_message,
    department_isLoading,

    openSetting_modal_info,

    department_update,
  } = useSelector((state) => state.reducer.DepartmentSlice);

  // this is for the grade structure

  useEffect(() => {
    dispatch(GetallPositionFun());
    dispatch(GetLeaveTypesFun());

    return () => {
      dispatch(resetcreateGrade());
    };
  }, []);

  let grade_name = [];
  let leaveType_name = [];

  // console.log(GetallPosition?.data);

  let new_data = GetallPosition?.data;
  let new_leavetype = GetLeaveTypes?.data;

  for (const property in new_data) {
    grade_name.push(property);
  }

  for (const l in new_leavetype) {
    leaveType_name.push(l);
  }

  const [leave_and_day, setLeave_and_day] = useState({
    leave: leaveType_name,
    day: '',
  });

  const [salary, setSalary] = useState({
    MIN_Amount: '',
    MAX_Amount: '',
  });

  const [gradename, setGradename] = useState(new_data);

  const [leaveData, setLeaveData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLeave_and_day((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleInputChangeSalary = (e) => {
    const { name, value } = e.target;
    setSalary((prevState) => ({ ...prevState, [name]: value }));
  };

  const saveLeave = () => {
    let data = leave_and_day;
    leaveData.push(data);
    setLeaveData(leaveData);
    setLeave_and_day({ leave: '', day: '' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let rearranged_data = {
      name: gradename,
      leave_structure: leaveData,
      salary_structure: salary,
    };

    dispatch(createGradeFun(rearranged_data));
  };

  // this is for department

  const [department, setDepartment] = useState({
    name: department_update?.name,
    description: department_update?.description,
  });

  const handleInputChangedepartment = (e) => {
    const { name, value } = e.target;
    setDepartment((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (department_isSuccess) {
      setShowmodal(false);
      // this was dont incase you want to close the modal
    }
    return () => {
      dispatch(reset_department());
    };
  }, [department_isSuccess]);

  const handleFormSubmitdepartment = (e) => {
    e.preventDefault();

    let data = {
      data_old: department_update || null,
      department,
    };

    dispatch(DepartmentSlice_Fun(data));
  };

  // this is for the leave type

  const [leaveType, setLeaveType] = useState({
    name: '',
    description: '',
  });

  const handleInputChangeLeavetype = (e) => {
    const { name, value } = e.target;
    setLeaveType((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (CreateLeaveTypes_isSuccess) {
      setShowmodal(false);
      // this was dont incase you want to close the modal
    }
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

    dispatch(CreateLeaveTypesFun(data));
  };

  // this is for positions

  const [positionlevel, setPositionlevel] = useState({
    position: '',
    level: '',
  });

  const handleInputChangepositions = (e) => {
    const { name, value } = e.target;
    setPositionlevel((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmitPosotion = (e) => {
    e.preventDefault();
    dispatch(CreatePositionFun(positionlevel));
  };

  // this is for the Branch Creation

  const [branch, setBranch] = useState({
    name: '',
    abbr: '',
    description: '',
  });

  const handleInputChangeBranch = (e) => {
    const { name, value } = e.target;
    setBranch((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    // if (CreateBranch_isSuccess) {
    //   setShowmodal(false);
    // this was dont incase you want to close the modal }
    return () => {
      dispatch(resetCreateBranch());
    };
  }, [CreateBranch_isSuccess]);

  const handleFormSubmitBranch = (e) => {
    e.preventDefault();
    console.log(branch);
    dispatch(CreateBranchFun(branch));
  };

  // office tools

  // this is for the leave type

  const [officetools, setOffice] = useState({
    name: '',
    description: '',
  });

  const handleInputChangeofficetools = (e) => {
    const { name, value } = e.target;
    setOffice((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (CreateOfficeTools_isSuccess) {
      setShowmodal(false);
      // this was dont incase you want to close the modal
    }
    return () => {
      dispatch(resetCreateOfficeTools());
    };
  }, [CreateOfficeTools_isSuccess]);

  const handleFormSubmitsetOffice = (e) => {
    e.preventDefault();

    let data = {
      tools: [
        {
          name: officetools.name,
          description: officetools.description,
        },
      ],
    };

    dispatch(CreateOfficeToolsFun(data));
  };

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto ">
      <div className="flex items-center justify-center min-h-screen  px-4 ">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-25"></div>
        </div>
        <div className="bg-white   rounded-lg overflow-hidden w-[60%] lg:w-[40%]  shadow-xl transform transition-all ">
          <div className="border-b bord   ">
            <div className=" flex justify-between    px-7 py-3 items-center ">
              <div>
                <h3 className="text-[20px] font-semibold ">{title}</h3>
              </div>

              <div>
                <button
                  className="bg-[#B4B4B43D]  py-1 px-2 rounded-sm"
                  onClick={() => {
                    setShowmodal(false);
                    dispatch(OpenSetting_modalFun(false));
                    dispatch(reset_department());
                  }}
                >
                  X
                </button>
              </div>
            </div>
          </div>

          {type === 'Department' && (
            <div className="px-6 py-4 overflow-y-auto ">
              {/* Add your content here */}
              <div className="popmodal__cover">
                <div className="popmodal__content ">
                  <form>
                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        Department Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={department.name}
                        onChange={handleInputChangedepartment}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope']"
                      />
                    </div>

                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        Description
                      </label>

                      <input
                        type="text"
                        name="description"
                        value={department.description}
                        onChange={handleInputChangedepartment}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope']"
                      />
                    </div>

                    <div className="flex justify-end mt-3 mb-3">
                      <button
                        type="button"
                        onClick={handleFormSubmitdepartment}
                        className="bg-[#2A72A8] rounded-lg text-base font-normal text-white 
      capitalize px-8 py-2 border-box font-['Inter'] "
                      >
                        {department_isLoading ? (
                          <CircularProgress style={{ color: 'white' }} />
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {type === 'Positions' && (
            <div className="px-6 py-4 overflow-y-auto ">
              {/* Add your content here */}
              <div className="popmodal__cover">
                <div className="popmodal__content ">
                  <form>
                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
font-['Inter'] mb-4"
                      >
                        position
                      </label>

                      <input
                        type="text"
                        name="position"
                        value={positionlevel.position}
                        onChange={handleInputChangepositions}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
  px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
  font-['Manrope']"
                      />
                    </div>

                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
font-['Inter'] mb-4"
                      >
                        level
                      </label>

                      <input
                        type="text"
                        name="level"
                        value={positionlevel.level}
                        onChange={handleInputChangepositions}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
  px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
  font-['Manrope']"
                      />
                    </div>

                    <div className="flex justify-end mt-3 mb-3">
                      <button
                        type="button"
                        onClick={handleFormSubmitPosotion}
                        className="bg-[#2A72A8] rounded-lg text-base font-normal text-white 
  capitalize px-8 py-2 border-box font-['Inter'] "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {type === 'Grades' && (
            <div className="px-6 py-4 overflow-y-auto ">
              {/* Add your content here */}
              <div className="popmodal__cover">
                <div className="popmodal__content ">
                  <form>
                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        Grade Name
                      </label>

                      <select
                        name="gradename"
                        value={gradename}
                        onChange={(event) => setGradename(event.target.value)}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD] px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] font-['Manrope']"
                      >
                        <option value="">Select a grade</option>
                        {grade_name.map((name) => (
                          <option key={name} value={name} className=" w-24">
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <div className="flex gap-3 w-full items-center ">
                        <div className="w-[50%]">
                          <label
                            className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                          >
                            Leave Type
                          </label>

                          <select
                            name="leave"
                            value={leave_and_day.leave}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-solid border-[#D0D5DD] px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] font-['Manrope']"
                          >
                            <option value="">Select a leave</option>
                            {leaveType_name.map((name) => (
                              <option
                                key={name}
                                value={name}
                                className="option-style"
                              >
                                {name}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="w-[30%]">
                          <label
                            className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                          >
                            Days
                          </label>
                          <input
                            type="text"
                            name="day"
                            value={leave_and_day.day}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope'] "
                          />
                        </div>

                        <div className="  w-[20%]">
                          <button
                            onClick={saveLeave}
                            type="button"
                            className="w-full bg-[#D0D5DD] py-3  mt-4 rounded"
                          >
                            Add
                          </button>
                        </div>
                      </div>

                      {leaveData?.length >= 1 && (
                        <div className="border border-[#C5C5C5] flex py-3 gap-3 flex-wrap px-3">
                          {leaveData.map((item, index) => (
                            <div
                              key={index}
                              className="border border-[#C5C5C5] flex justify-center items-center rounded-[20px] py-1 px-[20px] gap-3"
                            >
                              <span>
                                {item.leave} : {item.day}
                              </span>
                              <span>
                                <CloseIcon />
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="">
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        Salary Structure
                      </label>

                      <div className="flex gap-3 ">
                        <div className=" w-full">
                          <label
                            className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                          >
                            Min
                          </label>
                          <input
                            type="text"
                            name="MIN_Amount"
                            value={salary.MIN_Amount}
                            onChange={handleInputChangeSalary}
                            // onChange={handleChange}
                            className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope'] "
                          />
                        </div>

                        <div className=" w-full">
                          <label
                            className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                          >
                            Max
                          </label>
                          <input
                            type="text"
                            name="MAX_Amount"
                            value={salary.MAX_Amount}
                            onChange={handleInputChangeSalary}
                            // onChange={handleChange}
                            className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope'] "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end mt-3 mb-3">
                      <button
                        type="button"
                        onClick={handleFormSubmit}
                        className="bg-[#2A72A8] rounded-lg text-base font-normal text-white 
      capitalize px-8 py-2 border-box font-['Inter'] "
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {type === 'Leave_Types' && (
            <div className="px-6 py-4 overflow-y-auto ">
              {/* Add your content here */}
              <div className="popmodal__cover">
                <div className="popmodal__content ">
                  <form>
                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        Leave Type
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={leaveType.name}
                        onChange={handleInputChangeLeavetype}
                        //   onChange={handleChange_Leave}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope']"
                      />
                    </div>

                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        Description
                      </label>

                      <input
                        type="text"
                        name="description"
                        value={leaveType.description}
                        onChange={handleInputChangeLeavetype}
                        //   onChange={handleChange_Leave}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope']"
                      />
                    </div>

                    <div className="flex justify-end mt-3 mb-3">
                      <button
                        type="button"
                        onClick={handleFormSubmitLeavetype}
                        className="bg-[#2A72A8] rounded-lg text-base font-normal text-white 
      capitalize px-8 py-2 border-box font-['Inter'] "
                      >
                        {CreateLeaveTypes_isLoading ? (
                          <CircularProgress />
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {type === 'Branch' && (
            <div className="px-6 py-4 overflow-y-auto ">
              {/* Add your content here */}
              <div className="popmodal__cover">
                <div className="popmodal__content ">
                  <form>
                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        Branch Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={branch.name}
                        onChange={handleInputChangeBranch}
                        //   onChange={handleChange_Leave}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope']"
                      />
                    </div>

                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        abbreviation
                      </label>

                      <input
                        type="text"
                        name="abbr"
                        value={branch.abbr}
                        onChange={handleInputChangeBranch}
                        //   onChange={handleChange_Leave}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope']"
                      />
                    </div>

                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        Description
                      </label>

                      <input
                        type="text"
                        name="description"
                        value={branch.description}
                        onChange={handleInputChangeBranch}
                        //   onChange={handleChange_Leave}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope']"
                      />
                    </div>

                    <div className="flex justify-end mt-3 mb-3">
                      <button
                        type="button"
                        onClick={handleFormSubmitBranch}
                        className="bg-[#2A72A8] rounded-lg text-base font-normal text-white 
      capitalize px-8 py-2 border-box font-['Inter'] "
                      >
                        {CreateBranch_isLoading ? (
                          <CircularProgress />
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {type === 'Offics_Tools' && (
            <div className="px-6 py-4 overflow-y-auto ">
              {/* Add your content here */}
              <div className="popmodal__cover">
                <div className="popmodal__content ">
                  <form>
                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={officetools.name}
                        onChange={handleInputChangeofficetools}
                        //   onChange={handleChange_Leave}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope']"
                      />
                    </div>

                    <div>
                      <label
                        className="capitalize text-xs text-[#344054] font-medium 
    font-['Inter'] mb-4"
                      >
                        Description
                      </label>

                      <input
                        type="text"
                        name="description"
                        value={officetools.description}
                        onChange={handleInputChangeofficetools}
                        //   onChange={handleChange_Leave}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
      px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
      font-['Manrope']"
                      />
                    </div>

                    <div className="flex justify-end mt-3 mb-3">
                      <button
                        type="button"
                        onClick={handleFormSubmitsetOffice}
                        className="bg-[#2A72A8] rounded-lg text-base font-normal text-white 
      capitalize px-8 py-2 border-box font-['Inter'] "
                      >
                        {CreateOfficeTools_isLoading ? (
                          <CircularProgress />
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings_modal;
