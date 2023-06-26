import React, { useEffect, useState } from 'react';
import nigeria from './nigerian_states_lga.json';
import './basicinfo.css';
import clientimg from '../../assets/clientimg.png';

import store from '../../app/store';
import axios, { all } from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDob,
  updateEmail,
  updateFirstname,
  updateGender,
  updateLastname,
  updateOriginLga,
  updateMaritalStatus,
  updateOriginState,
  updateResidenceState,
} from '../../Feature/Employee/BasicInfoSlice';
import {} from '../../Feature/Config/settingSlice';
import UpdateProfileTab from '../UpdateProfile/UpdateProfileTab';
import FormNav from '../UpdateProfile/formNav';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { CircularProgress } from '@mui/material';
import {
  Basic_Information_data_fun,
  Organization___data_fun,
  Qualifications_fun,
  RealUpdateFun,
} from '../../Feature/Admin/UpdateProfile/UpdateProfileSlice';
import { exact } from 'prop-types';
import { FamilyRestroomOutlined } from '@mui/icons-material';
import { userProfile } from './data';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
  },
  image: { maxWidth: '40%', maxHeight: 320 },
  delete: {
    cursor: 'pointer',
    padding: 15,
    background: 'red',
    color: 'white',
    border: 'none',
    maxWidth: '40%',
  },
};

export const Basic_Information = ({
  setShown,
  Admin_user_,
  id,
  NewUserdata,
}) => {
  const { userData } = useSelector((state) => state.reducer.loginReducer);

  const { Basic_Information_data } = useSelector(
    (state) => state.reducer.UpdateProfileSlice
  );

  const [selectedImage, setSelectedImage] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let userProfileData;

  if (Basic_Information_data === null) {
    userProfileData = NewUserdata;
  } else {
    userProfileData = Basic_Information_data;
  }

  const [username, setUsername] = useState({
    first_name: userProfileData?.first_name,
    last_name: userProfileData.last_name,
    middle_name: userProfileData.middle_name,
    email: userProfileData.email,
    gender: userProfileData.gender,
    marital_status: userProfileData.marital_status,
    dob: userProfileData.dob,
  });
  const [selectedState, setSelectedState] = useState(
    userProfileData.origin_state
  );
  const [selectedLga, setSelectedLga] = useState(userProfileData.lga);
  const [residence_state, set_residence_state] = useState(
    userProfileData.residence
  );

  const handleInputChangeBasic_one = (e) => {
    const { name, value } = e.target;
    setUsername({ ...username, [name]: value });
  };

  const handleChange_selectedState = (event) => {
    setSelectedState(event.target.value);
    setSelectedLga('');
  };

  const NextMove = () => {
    let data = {
      first_name: username.first_name,
      last_name: username.last_name,
      middle_name: username.middle_name,
      email: username.email,
      gender: username.gender,
      marital_status: username.marital_status,
      dob: username.dob,
      origin_state: selectedState,
      lga: selectedLga,
      residence: residence_state,
    };

    dispatch(Basic_Information_data_fun(data));
    setShown('Organization');
  };

  const allStatesInNigeria = nigeria.states.map((ng) => ng.name);

  const LGAObj = nigeria.states.find((state) => state.name === selectedState);

  return (
    <div className="whole_basicinfo" class="scroll-smooth">
      <div className="">
        <div className="update_image ">
          <div style={{ margin: 'auto' }}>
            {selectedImage ? (
              <div class="grid grid-cols-3 gap-4">
                <div class="col-start-2 col-span-3 col-end-4">
                  <img
                    src={
                      localStorage.getItem('userImage')
                        ? localStorage.getItem('userImage')
                        : URL.createObjectURL(selectedImage)
                    }
                    style={styles.image}
                    alt="Thumb"
                  />
                  <div class="mt-4">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-start-1 col-span-2 col-end-4"
                      //   onClick={removeSelectedImage}
                      style={styles.delete}
                    >
                      Change Passport
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div class="grid ">
                <div class="grid-cols-3 ">
                  <div class="flex justify-center mt-4">
                    <img
                      src={NewUserdata?.profile_image ?? clientimg}
                      width="90px"
                      height=" 90px"
                      class="col-start-3 col-span-4 col-end-4 profileImg"
                    />
                  </div>
                  {/* <label for="formFile" class="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Default file input example</label> */}

                  {!Admin_user_ && (
                    <div className="flex justify-center">
                      <input
                        class="relative mt-4 debug block w-11 col-start-3 col-span-2 col-end-4 m-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
                        type="file"
                        id="photo"
                        name="photo"
                        // onChange={imageChange}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="formfield_update">
          <div className="justify-between  flex  w-full  Up_input gap-2 ">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">First name</p>

              <input
                className="firstname_upload"
                type="text"
                name="first_name"
                value={username.first_name}
                onChange={handleInputChangeBasic_one}
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>

            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Last name</p>

              <input
                className="firstname_upload"
                type="text"
                name="last_name"
                value={username.last_name}
                onChange={handleInputChangeBasic_one}
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>
          </div>

          <div className="justify-between  flex  w-full  Up_input gap-2">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Email</p>

              <input
                className="firstname_upload"
                name="email"
                value={username.email}
                onChange={handleInputChangeBasic_one}
                type="email"
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>

            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Gender</p>

              <select
                name="gender"
                value={username.gender}
                onChange={handleInputChangeBasic_one}
                className="firstname_upload"
                disabled={Admin_user_ === 1 ? true : false}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="justify-between  flex  w-full  Up_input gap-2">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Date Of Birth </p>

              <input
                type="date"
                name="dob"
                value={username.dob}
                onChange={handleInputChangeBasic_one}
                className="firstname_upload"
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>

            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Marital status</p>

              <select
                name="marital_status"
                value={username.marital_status}
                onChange={handleInputChangeBasic_one}
                className="firstname_upload"
                disabled={Admin_user_ === 1 ? true : false}
              >
                <option value=""> Rather not say</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
          </div>

          <div className="justify-between  flex  w-full  Up_input gap-2">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">State of Origin</p>

              <select
                name="state_of_origin"
                id="state_of_origin"
                value={selectedState}
                onChange={handleChange_selectedState}
                className="firstname_upload"
                disabled={Admin_user_ === 1 ? true : false}
              >
                <option value="">Select a state</option>
                {allStatesInNigeria.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">LGA of Origin</p>

              <select
                name="state_of_origin"
                id="state_of_origin"
                value={selectedLga}
                onChange={(event) => setSelectedLga(event.target.value)}
                className="firstname_upload"
                disabled={Admin_user_ === 1 ? true : false}
              >
                <option value="">Select a LGA</option>
                {LGAObj?.lga.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="justify-between  flex  w-full  Up_input gap-2">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">State of Residence</p>

              <select
                name="state_of_origin"
                id="state_of_origin"
                value={residence_state}
                onChange={(event) => set_residence_state(event.target.value)}
                className="firstname_upload"
                disabled={Admin_user_ === 1 ? true : false}
              >
                <option value="">Select a state</option>
                {allStatesInNigeria.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex  w-full  Up_input gap-2 justify-end ">
            <div>
              <button
                type="button"
                className="next_updatebutton "
                onClick={NextMove}
              >
                Next
                <AiOutlineArrowRight style={{ marginLeft: '10px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Organization__ = ({
  Global__Settings,
  setShown,
  Admin_user_,
  GetGrade,
  id,
  NewUserdata,
}) => {
  const { userData } = useSelector((state) => state.reducer.loginReducer);

  const { Basic_Information_data, Organization___data } = useSelector(
    (state) => state.reducer.UpdateProfileSlice
  );

  console.log(NewUserdata);

  let userProfileData2;
  if (Organization___data === null) {
    userProfileData2 = NewUserdata;
  } else {
    userProfileData2 = Organization___data;
  }

  console.log(userProfileData2);

  const [selectedImage, setSelectedImage] = useState();
  const [localGovernments, setLocalGovernmentArea] = useState([]);
  const [employeeImage, setImage] = useState('');
  const [uploaded, isUploaded] = useState(false);
  const [profiledata, setUrofiledata] = useState(userData);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [organisation_Data, setOrganisation_Data] = useState({
    employee_id: userProfileData2.employee_id,
    grade: userProfileData2.position_level_id,
    role: userProfileData2.role,
    department: userProfileData2.department_id,
    position: userProfileData2.position,
    branch: userProfileData2.branch,
    pension: userProfileData2.pension,
    pension_number: userProfileData2.pension_number,
  });

  const [hom_data, setHom_data] = useState({
    provider: userProfileData2?.hmo?.provider || null,
    hmo_id: userProfileData2?.hmo?.hmo_id || '',
    hospital: userProfileData2?.hmo?.hospital || '',
    status: userProfileData2?.hmo?.status || '',
    plan: userProfileData2?.hmo?.plan || '',
  });

  console.log(organisation_Data);

  const handleInputChange_Organisation = (e) => {
    const { name, value } = e.target;
    setOrganisation_Data({ ...organisation_Data, [name]: value });
  };

  const handleInputChange_OrganisationHMO = (e) => {
    const { name, value } = e.target;
    setHom_data({ ...hom_data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const NextMove = () => {
  //   // dispatch(Basic_Information_data_fun(username));
  //   setShown('Qualifications');
  // };

  const NextMove = () => {
    let data = {
      employee_id: organisation_Data.employee_id,
      grade: organisation_Data.grade,
      role: organisation_Data.role,
      department: organisation_Data.department,
      position: organisation_Data.position,
      branch: organisation_Data.branch,
      pension: organisation_Data.pension,
      pension_number: organisation_Data.pension_number,
      hmo: {
        provider: hom_data.provider,
        hmo_id: hom_data.hmo_id,
        hospital: hom_data.hospital,
        status: hom_data.status,
        plan: hom_data.plan,
      },
    };

    dispatch(Organization___data_fun(data));
    setShown('Qualifications');
  };

  const BackMove = () => {
    // dispatch(Basic_Information_data_fun(username));
    setShown('Organization');
  };

  return (
    <div className="whole_basicinfo" class="scroll-smooth">
      <div className="">
        <div className="formfield_update">
          <div className="justify-between  flex  w-full  Up_input gap-2 ">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Employee ID</p>

              <input
                className="firstname_upload"
                type="text"
                name="employee_id"
                value={organisation_Data.employee_id}
                disabled={Admin_user_ === 1 ? false : true}
                onChange={handleInputChange_Organisation}
              />
            </div>

            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Role</p>

              <input
                className="firstname_upload"
                type="text"
                name="role"
                value={organisation_Data.role}
                disabled={Admin_user_ === 1 ? false : true}
                onChange={handleInputChange_Organisation}
              />
            </div>
          </div>

          <div className="justify-between  flex  w-full  Up_input gap-2 ">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Grade</p>

              {/* <input
                className="firstname_upload"
                type="text"
                name="grade"
                value={organisation_Data.grade}
                disabled={Admin_user_ === 1 ? false : true}
              /> */}

              <select
                disabled={Admin_user_ === 1 ? false : true}
                className="firstname_upload"
                // name="gradename"
                name="grade"
                value={organisation_Data.grade}
                onChange={handleInputChange_Organisation}

                // onChange={(event) => setGradename(event.target.value)}
                // className="w-full rounded-lg border border-solid border-[#D0D5DD] px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] font-['Manrope']"
              >
                <option value="">Select a grade</option>
                {GetGrade?.data.map((item) => (
                  <option key={item.id} value={item.id} className=" w-24">
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Position</p>

              <input
                className="firstname_upload"
                type="text"
                name="position"
                value={organisation_Data.position}
                disabled={Admin_user_ === 1 ? false : true}
                onChange={handleInputChange_Organisation}
              />
            </div>
          </div>

          <div className="justify-between  flex  w-full  Up_input gap-2 ">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Department</p>

              {/* <input
                className="firstname_upload"
                type="text"
                name="department"
                value={organisation_Data.department}
                disabled={Admin_user_ === 1 ? false : true}
              /> */}

              <select
                disabled={Admin_user_ === 1 ? false : true}
                className="firstname_upload"
                name="department"
                value={organisation_Data.department}
                onChange={handleInputChange_Organisation}
              >
                <option value="">Select a Department</option>
                {Global__Settings?.data?.departments.map((item) => (
                  <option key={item.id} value={item.id} className=" w-24">
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Branch</p>

              <input
                className="firstname_upload"
                type="text"
                name="branch"
                value={organisation_Data.branch}
                disabled={Admin_user_ === 1 ? false : true}
              />
            </div>
          </div>

          <div className="justify-between  flex  w-full  Up_input gap-2 ">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Pension</p>

              <input
                className="firstname_upload"
                type="text"
                name="pension"
                value={organisation_Data.pension}
                onChange={handleInputChange_Organisation}
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>

            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">Pension number</p>

              <input
                className="firstname_upload"
                type="text"
                name="pension_number"
                value={organisation_Data.pension_number}
                onChange={handleInputChange_Organisation}
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>
          </div>

          <div className="justify-between  flex  w-full  Up_input gap-2 ">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">On HMO?</p>

              <select
                name="gender"
                value={organisation_Data.gender}
                onChange={handleInputChange_OrganisationHMO}
                className="firstname_upload"
                disabled={Admin_user_ === 1 ? true : false}
              >
                <option value="">- Are you already on HMO</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">HMO Provider</p>

              <input
                className="firstname_upload"
                type="text"
                name="provider"
                value={hom_data.provider}
                onChange={handleInputChange_OrganisationHMO}
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>
          </div>

          <div className="justify-between  flex  w-full  Up_input gap-2 ">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">HMO Hospital</p>

              <input
                className="firstname_upload"
                type="text"
                name="hospital"
                value={hom_data.hospital}
                onChange={handleInputChange_OrganisationHMO}
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>

            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">HMO Number</p>

              <input
                className="firstname_upload"
                type="text"
                name="hmo_id"
                value={hom_data?.hmo_id || ''}
                onChange={handleInputChange_OrganisationHMO}
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>
          </div>

          <div className="justify-between  flex  w-full  Up_input gap-2 ">
            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">HMO Plan</p>

              <input
                className="firstname_upload"
                type="text"
                name="plan"
                value={hom_data.plan}
                onChange={handleInputChange_OrganisationHMO}
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>

            <div className="div_input  w-[50%]  ">
              <p className="fonttext_updateprofile">HMO Status</p>

              <input
                className="firstname_upload"
                type="text"
                name="status"
                value={hom_data.status}
                onChange={handleInputChange_OrganisationHMO}
                disabled={Admin_user_ === 1 ? true : false}
              />
            </div>
          </div>

          <div className="w-full  ">
            <div className="flex justify-between  mt-5">
              <div>
                <button className="next_updatebutton" onClick={BackMove}>
                  <AiOutlineArrowLeft style={{ marginLeft: '10px' }} />
                  Back
                </button>
              </div>

              <div>
                <button className="next_updatebutton" onClick={NextMove}>
                  Next
                  <AiOutlineArrowRight style={{ marginLeft: '10px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Education__ = ({ setShown, id, NewUserdata }) => {
  const { userData } = useSelector((state) => state.reducer.loginReducer);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { Basic_Information_data, Organization___data } = useSelector(
    (state) => state.reducer.UpdateProfileSlice
  );

  console.log(Organization___data);
  const [educationList, setEducationList] = useState(NewUserdata?.education); // Initialize education list

  const [school, setSchool] = useState(''); // Initialize school input value
  const [degree, setDegree] = useState(''); // Initialize degree input value
  const [year, setYear] = useState(''); // Initialize year input value

  const handleSchoolChange = (event) => {
    setSchool(event.target.value); // Update school input value
  };

  const handleDegreeChange = (event) => {
    setDegree(event.target.value); // Update degree input value
  };

  const handleYearChange = (event) => {
    setYear(event.target.value); // Update year input value
  };

  const handleAddEducation = (e) => {
    e.preventDefault();

    const newEducation = {
      institution: school,
      award: degree,
      year_completed: year,
    };
    setEducationList([...educationList, newEducation]); // Add new education to education list
    setSchool(''); // Clear school input value
    setDegree(''); // Clear degree input value
    setYear(''); // Clear year input value
  };

  const handleEditEducation = (index) => {
    const editedEducationList = [...educationList]; // Create a copy of education list
    editedEducationList[index].school = school; // Update school value of education at given index
    editedEducationList[index].degree = degree; // Update degree value of education at given index
    editedEducationList[index].year = year; // Update year value of education at given index
    setEducationList(editedEducationList); // Update education list with edited education
    setSchool(''); // Clear school input value
    setDegree(''); // Clear degree input value
    setYear(''); // Clear year input value
  };

  const handleDeleteEducation = (index) => {
    const filteredEducationList = educationList.filter((_, i) => i !== index); // Remove education at given index from education list
    setEducationList(filteredEducationList); // Update education list
  };

  const NextMove = () => {
    dispatch(Qualifications_fun(educationList));
    setShown('Experience');
  };

  const BackMove = () => {
    // dispatch(Basic_Information_data_fun(username));
    setShown('Qualifications');
  };

  return (
    <>
      <div className="whole_basicinfo" class="scroll-smooth">
        <div className="">
          <div className="formfield_update">
            <div className="education">Education History</div>

            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-[8px]  lg:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    School
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Degree
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Year Completed
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Edit
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  {educationList ? (
                    <>
                      {educationList.map((item, index) => (
                        <tr
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          key={index}
                        >
                          <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {item.institution}
                          </td>
                          <td class="px-6 py-4">{item.award}</td>

                          <td class="px-6 py-4">{item.year_completed}</td>
                          <td class="px-6 py-4">
                            <button
                              type="button"
                              onClick={() => handleEditEducation(index)}
                            >
                              edit
                            </button>
                          </td>
                          <td class="px-6 py-4">
                            <button
                              type="button"
                              onClick={() => handleDeleteEducation(index)}
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <div className="">
                      <button className="flex justify-center">
                        <CircularProgress />
                      </button>
                    </div>
                  )}
                </>
              </tbody>
            </table>

            <div className="div_input  w-full  ">
              <p className="fonttext_updateprofile">School</p>

              <input
                className="firstname_upload"
                type="text"
                id="schoolInput"
                value={school}
                onChange={handleSchoolChange}
              />
            </div>

            <div className="div_input  w-full  ">
              <p className="fonttext_updateprofile">Degree & Course</p>

              <input
                className="firstname_upload"
                name="role"
                type="text"
                id="degreeInput"
                value={degree}
                onChange={handleDegreeChange}
              />
            </div>

            <div className="div_input  w-full  ">
              <p className="fonttext_updateprofile">
                Year Completed / Projected completion year
              </p>

              <input
                className="firstname_upload"
                type="date"
                id="yearInput"
                value={year}
                onChange={handleYearChange}
              />
            </div>
          </div>

          <div className="flex justify-end mr-10 mt-2">
            <button
              className="bg-[#2A72A8] text-white py-3 px-4 rounded"
              onClick={handleAddEducation}
            >
              Save
            </button>
          </div>

          <div className="flex     justify-center">
            <div className=" w-[80%] flex Up_input gap-2  justify-between">
              <div>
                <button className="next_updatebutton" onClick={BackMove}>
                  <AiOutlineArrowLeft style={{ marginLeft: '10px' }} />
                  Back
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="next_updatebutton"
                  onClick={NextMove}
                >
                  Next
                  <AiOutlineArrowRight style={{ marginLeft: '10px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Experience__ = ({ setShown, id, NewUserdata }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    Basic_Information_data,
    Organization___data,
    Qualifications_data,
    UpdateProfile_isLoading,
  } = useSelector((state) => state.reducer.UpdateProfileSlice);

  console.log(Organization___data);
  const [educationList, setEducationList] = useState(NewUserdata.experience); // Initialize education list

  const [school, setSchool] = useState(''); // Initialize school input value
  const [degree, setDegree] = useState(''); // Initialize degree input value
  const [year, setYear] = useState(''); // Initialize year input value
  const [endyear, setEndYear] = useState(''); // Initialize year input value

  const handleSchoolChange = (event) => {
    setSchool(event.target.value); // Update school input value
  };

  const handleDegreeChange = (event) => {
    setDegree(event.target.value); // Update degree input value
  };

  const handleYearChange = (event) => {
    setYear(event.target.value); // Update year input value
  };

  const handleendyearChange = (event) => {
    setEndYear(event.target.value); // Update year input value
  };

  const handleAddEducation = (e) => {
    e.preventDefault();

    const newEducation = {
      organization: school,
      role: degree,
      started: year,
      ended: endyear,
    };
    setEducationList([...educationList, newEducation]); // Add new education to education list
    setSchool(''); // Clear school input value
    setDegree(''); // Clear degree input value
    setYear(''); // Clear year input value
  };

  const handleEditEducation = (index) => {
    const editedEducationList = [...educationList]; // Create a copy of education list
    editedEducationList[index].school = school; // Update school value of education at given index
    editedEducationList[index].degree = degree; // Update degree value of education at given index
    editedEducationList[index].year = year; // Update year value of education at given index
    setEducationList(editedEducationList); // Update education list with edited education
    setSchool(''); // Clear school input value
    setDegree(''); // Clear degree input value
    setYear(''); // Clear year input value
  };

  const handleDeleteEducation = (index) => {
    const filteredEducationList = educationList.filter((_, i) => i !== index); // Remove education at given index from education list
    setEducationList(filteredEducationList); // Update education list
  };

  const NextMove = () => {
    dispatch(Qualifications_fun(educationList));
    setShown('Qualifications');
  };

  const BackMove = () => {
    // dispatch(Basic_Information_data_fun(username));
    setShown('Qualifications');
  };

  const HandleSubmit__ = () => {
    let data = {
      Basic_Information_data,
      Organization___data,
      Qualifications_data,
      educationList,
      id,
    };

    console.log(data);

    dispatch(RealUpdateFun(data));
  };

  return (
    <>
      <div className="whole_basicinfo" class="scroll-smooth">
        <div className="">
          <div className="formfield_update">
            <div className="education">Employment History</div>

            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-[8px]  lg:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Organization
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Role
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Start Year
                  </th>
                  <th scope="col" class="px-6 py-3">
                    End Year
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  {educationList ? (
                    <>
                      {educationList.map((item, index) => (
                        <tr
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                          key={index}
                        >
                          <td
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {item.organization}
                          </td>
                          <td class="px-6 py-4">{item.role}</td>

                          <td class="px-6 py-4">{item.started}</td>
                          <td class="px-6 py-4">{item.ended}</td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <div className="">
                      <button className="flex justify-center">
                        <CircularProgress />
                      </button>
                    </div>
                  )}
                </>
              </tbody>
            </table>

            <div className="div_input  w-full  ">
              <p className="fonttext_updateprofile">Oraganization</p>

              <input
                className="firstname_upload"
                type="text"
                id="schoolInput"
                value={school}
                onChange={handleSchoolChange}
              />
            </div>

            <div className="div_input  w-full  ">
              <p className="fonttext_updateprofile">Role</p>

              <input
                className="firstname_upload"
                name="role"
                type="text"
                id="degreeInput"
                value={degree}
                onChange={handleDegreeChange}
              />
            </div>

            <div className="div_input  w-full  ">
              <p className="fonttext_updateprofile">Start Year</p>

              <input
                className="firstname_upload"
                type="date"
                id="yearInput"
                value={year}
                onChange={handleYearChange}
              />
            </div>

            <div className="div_input  w-full  ">
              <p className="fonttext_updateprofile">End Year</p>

              <input
                className="firstname_upload"
                type="date"
                id="yearInput"
                value={endyear}
                onChange={handleendyearChange}
              />
            </div>
          </div>

          <div className="flex justify-end mr-10 mt-2">
            <button
              className="bg-[#2A72A8] text-white py-3 px-4 rounded"
              onClick={handleAddEducation}
            >
              Save
            </button>
          </div>

          <div className="flex     justify-center mt-5">
            <div className=" w-[80%] flex Up_input gap-2  justify-between">
              <div>
                <button className="next_updatebutton" onClick={BackMove}>
                  <AiOutlineArrowLeft style={{ marginLeft: '10px' }} />
                  Back
                </button>
              </div>

              <div>
                <button
                  onClick={HandleSubmit__}
                  type="button"
                  className="bg-[#2A72A8] text-white py-3 px-4 rounded"
                >
                  {UpdateProfile_isLoading ? (
                    <CircularProgress style={{ color: 'white' }} />
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
