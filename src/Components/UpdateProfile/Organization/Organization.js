import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './organization.css';
import store from '../../../app/store';
import Aside from '../../Sidebar/Aside';
import AsideAdmin from '../../Sidebar/AsideAdmin';
import Header from '../../Sidebar/Header';
import Mobile from '../../Sidebar/Mobile';

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import {
  updateBranch,
  updateDepartment,
  updateEmployeeId,
  updateGrade,
  updateHmo,
  updateHmoHospital,
  updateHmoNumber,
  updateHmoPlan,
  updateHmoStatus,
  updateOnHmo,
  updatePension,
  updatePensionNumber,
  updatePosition,
  updateRole,
} from '../../../Feature/Employee/Organization';
import { Headbar } from '../../Headbar/Headbar';
import { getRoles } from '../../../Feature/Admin/Roles/RoleSlice';
import UpdateProfileTab from '../UpdateProfileTab';
import { useNavigate } from 'react-router-dom';

const Organization = ({
  prevStep,
  nextStep,
  nextStep_title_clickTab,
  showData,
  profile,
}) => {
  const [systemSettings, setSystemSettings] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setSystemSettings(store.getState().reducer.roleSliceReducer);
  }, []);

  const dispatch = useDispatch();
  const isAdminOrNot = store.getState().reducer.loginReducer.extra;
  const config = useSelector(
    (state) => state.reducer.SettingSliceReducer
  )?.data;

  const isOnHmo = (x) => {
    let hideOrShowHmo = document.getElementById('about_hmo');
    switch (x) {
      case 'yes':
        if (hideOrShowHmo.classList.contains('hidden')) {
          hideOrShowHmo.classList.remove('hidden');
        }
        break;
      case 'no':
        if (!hideOrShowHmo.classList.contains('hidden')) {
          hideOrShowHmo.classList.add('hidden');
        }
        break;
      default:
        return false;
    }
  };

  return (
    // <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    //   <aside
    //     class="z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
    //     style={{ borderRight: '1px solid #cec5c5' }}
    //   >
    //     {!isAdminOrNot ? <Aside /> : <AsideAdmin />}
    //   </aside>

    //   <aside
    //     class="fixed inset-y-0 z-20 flex-shrink-0 w-64 hidden overflow-y-auto bg-white dark:bg-gray-800 mouseleav md:hidden"
    //     id="mobile-menu"
    //   >
    //     <Mobile />
    //   </aside>

    //   <div
    //     class="flex flex-col flex-1 w-full overflow-y-auto"
    //     style={{ backgroundColor: '#eff6fc' }}
    //   >
    //     {/* <Header/> */}
    //     <Headbar />

    //     <div className="whole_basicinfo">
    //       <div className="formupdate">
    //         <p className="profile_basicinfo">
    //           Profile
    //           <span className="nexttab_movement"></span>
    //           <span className="update_text"> Update Profile</span>
    //         </p>

    //         <div
    //           className="forminput_details"
    //           class="bg-white mt-2"
    //           style={{
    //             boxShadow:
    //               '0px 3.73684px 7.47368px -1.86842px rgba(16, 24, 40, 0.1), 0px 1.86842px 3.73684px -1.86842px rgba(16, 24, 40, 0.06)',
    //           }}
    //         >
    //           <div className="headerspacing">
    //             <p className="updateprofile_text">Update Profile</p>

    //             <UpdateProfileTab
    //               nextStep_title_clickTab={nextStep_title_clickTab}
    //               showData={showData}
    //             />

    //             <form className="formfield_update">
    //               <div style={{ width: '100%', marginTop: '10px' }}>
    //                 <p className="fonttext_updateprofile">Employee ID</p>
    //                 <input
    //                   type="text"
    //                   className="firstname_upload"
    //                   id="employee_id"
    //                   name="employee_id"
    //                   defaultValue={profile?.employee_id}
    //                   onChange={(e) => {
    //                     dispatch(updateEmployeeId(e.target.value));
    //                   }}
    //                 />

    //                 <p className="fonttext_updateprofile">Grade</p>
    //                 <select
    //                   className="firstname_upload"
    //                   id="grade"
    //                   name="grade"
    //                   value={profile?.position?.name}
    //                   onChange={(e) => {
    //                     dispatch(updateGrade(e.target.value));
    //                   }}
    //                 >
    //                   <option key={1} value="-1">- Select Grade -</option>
    //                   <option key="entry" value="Entry">Entry</option>
    //                   <option key="junior" value="Junior">Junior</option>
    //                 </select>

    //                 <p className="fonttext_updateprofile">Position</p>
    //                 <select
    //                   className="firstname_upload"
    //                   id="position"
    //                   name="position"
    //                   defaultValue={profile?.profile?.designation}
    //                   onChange={(e) => {
    //                     dispatch(updatePosition(e.target.value));
    //                   }}
    //                 >
    //                   <option key={1} value="-1">- Select Position -</option>
    //                   {config?.roles?.map((role) => (
    //                       <option key={role.name} value={role?.name}>{role?.name}</option>
    //                   ))}
    //                 </select>

    //                 <p className="fonttext_updateprofile">Department</p>
    //                 <select
    //                   className="firstname_upload"
    //                   id="department"
    //                   name="department"
    //                   defaultValue={profile?.profile?.department}
    //                   onChange={(e) => {
    //                     dispatch(updateDepartment(e.target.value));
    //                   }}
    //                 >
    //                   <option key="1" value="-1">- Select Department -</option>
    //                   {config?.departments?.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
    //                 </select>

    //                 <p className="fonttext_updateprofile">Branch</p>
    //                 <select
    //                   className="firstname_upload"
    //                   id="branch"
    //                   name="branch"
    //                   defaultValue={profile?.company?.branch}
    //                   onChange={(e) => {
    //                     dispatch(updateBranch(e.target.value));
    //                   }}
    //                 >

    //                 <option key={1} value="-1">- Select Branch -</option>
    //                 {config?.companies?.map((comp) => (
    //                   <option key={comp?.branch} value={comp?.branch}>{comp?.branch}</option>
    //                 ))}
    //                 </select>

    //                 <hr style={{ margin: '10px' }} />

    //                 <p className="fonttext_updateprofile">Pension</p>
    //                 <input
    //                   type="text"
    //                   className="firstname_upload"
    //                   id="pension"
    //                   name="pension"
    //                   defaultValue={profile?.profile?.pension_company}
    //                   onChange={(e) => {
    //                     dispatch(updatePension(e.target.value));
    //                   }}
    //                 />

    //                 <p className="fonttext_updateprofile">Pension number</p>
    //                 <input
    //                   type="text"
    //                   className="firstname_upload"
    //                   id="pension_number"
    //                   name="pension_number"
    //                   defaultValue={profile?.profile?.pension_number}
    //                   onChange={(e) => {
    //                     dispatch(updatePensionNumber(e.target.value));
    //                   }}
    //                 />

    //                 <p className="fonttext_updateprofile">On HMO?</p>
    //                 <select
    //                   className="firstname_upload"
    //                   id="on_hmo"
    //                   name="on_hmo"
    //                   onChange={(e) => isOnHmo(e.target.value)}
    //                 >
    //                   <option key={1} value="-1">- Are you already on HMO -</option>
    //                   <option key="yes" value="yes">Yes</option>
    //                   <option key="no" value="no">No</option>
    //                 </select>

    //                 <div
    //                   id="about_hmo"
    //                   className="hidden mb-5"
    //                   style={{ marginBot: '40px' }}
    //                 >
    //                   {/* <p className="fonttext_updateprofile">HMO</p>
    //                   <input
    //                     type="text"
    //                     className="firstname_upload"
    //                     id="provider"
    //                     name="provider"
    //                     value={organization?.provider}
    //                     onChange={(e) => {
    //                       dispatch(updateHmo(e.target.value));
    //                     }}
    //                   /> */}

    //                   <p className="fonttext_updateprofile">HMO Number</p>
    //                   <input
    //                     type="text"
    //                     className="firstname_upload"
    //                     id="hmo_id"
    //                     name="hmo_id"
    //                     defaultValue={profile?.hmo?.hmo_id}
    //                     onChange={(e) => {
    //                       dispatch(updateHmoNumber(e.target.value));
    //                     }}
    //                   />

    //                   <p className="fonttext_updateprofile">HMO Plan</p>
    //                   <input
    //                     type="text"
    //                     className="firstname_upload"
    //                     id="plan"
    //                     name="plan"
    //                     defaultValue={profile?.hmo?.provider}
    //                     onChange={(e) => {
    //                       dispatch(updateHmoPlan(e.target.value));
    //                     }}
    //                   />

    //                   <p className="fonttext_updateprofile">HMO Hospital</p>
    //                   <input
    //                     type="text"
    //                     className="firstname_upload"
    //                     id="hospital"
    //                     name="hospital"
    //                     defaultValue={profile?.hmo?.hospital}
    //                     onChange={(e) => {
    //                       dispatch(updateHmoHospital(e.target.value));
    //                     }}
    //                   />

    //                   <p className="fonttext_updateprofile">HMO Status</p>
    //                   <input
    //                     type="text"
    //                     className="firstname_upload"
    //                     id="status"
    //                     name="status"
    //                     value={profile?.hmo?.status}
    //                     onChange={(e) => {
    //                       dispatch(updateHmoStatus(e.target.value));
    //                     }}
    //                   />
    //                 </div>

    //                 <div className="space_buttonholder">
    //                   <button className="next_updatebutton" onClick={prevStep}>
    //                     <AiOutlineArrowLeft style={{ marginRight: '10px' }} />{' '}
    //                     Prev
    //                   </button>

    //                   <button
    //                     className="next_updatebutton mb-5"
    //                     onClick={nextStep}
    //                   >
    //                     Next{' '}
    //                     <AiOutlineArrowRight style={{ marginLeft: '10px' }} />
    //                   </button>
    //                 </div>
    //               </div>
    //             </form>

    //             <span style={{ padding: '20px' }}></span>
    //           </div>
    //         </div>

    //         <span style={{ padding: '50px' }}></span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="whole_basicinfo">
      <div className="formupdate">
        <p className="profile_basicinfo" onClick={() => navigate(-1)}>
          Profile
          <span className="nexttab_movement"></span>
          <span className="update_text"> Update Profile</span>
        </p>

        <div
          className="forminput_details"
          class="bg-white mt-2"
          style={{
            boxShadow:
              '0px 3.73684px 7.47368px -1.86842px rgba(16, 24, 40, 0.1), 0px 1.86842px 3.73684px -1.86842px rgba(16, 24, 40, 0.06)',
          }}
        >
          <div className="headerspacing">
            <p className="updateprofile_text">Update Profile</p>

            <UpdateProfileTab
              nextStep_title_clickTab={nextStep_title_clickTab}
              showData={showData}
            />

            <form className="formfield_update">
              <div style={{ width: '100%', marginTop: '10px' }}>
                <p className="fonttext_updateprofile">Employee ID</p>
                <input
                  type="text"
                  className="firstname_upload"
                  id="employee_id"
                  name="employee_id"
                  defaultValue={profile?.employee_id}
                  onChange={(e) => {
                    dispatch(updateEmployeeId(e.target.value));
                  }}
                />

                <p className="fonttext_updateprofile">Grade</p>
                <select
                  className="firstname_upload"
                  id="grade"
                  name="grade"
                  value={profile?.position?.name}
                  onChange={(e) => {
                    dispatch(updateGrade(e.target.value));
                  }}
                >
                  <option key={1} value="-1">
                    - Select Grade -
                  </option>
                  <option key="entry" value="Entry">
                    Entry
                  </option>
                  <option key="junior" value="Junior">
                    Junior
                  </option>
                </select>

                <p className="fonttext_updateprofile">Position</p>
                <select
                  className="firstname_upload"
                  id="position"
                  name="position"
                  defaultValue={profile?.profile?.designation}
                  onChange={(e) => {
                    dispatch(updatePosition(e.target.value));
                  }}
                >
                  <option key={1} value="-1">
                    - Select Position -
                  </option>
                  {config?.roles?.map((role) => (
                    <option key={role.name} value={role?.name}>
                      {role?.name}
                    </option>
                  ))}
                </select>

                <p className="fonttext_updateprofile">Department</p>
                <select
                  className="firstname_upload"
                  id="department"
                  name="department"
                  defaultValue={profile?.profile?.department}
                  onChange={(e) => {
                    dispatch(updateDepartment(e.target.value));
                  }}
                >
                  <option key="1" value="-1">
                    - Select Department -
                  </option>
                  {config?.departments?.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <p className="fonttext_updateprofile">Branch</p>
                <select
                  className="firstname_upload"
                  id="branch"
                  name="branch"
                  defaultValue={profile?.company?.branch}
                  onChange={(e) => {
                    dispatch(updateBranch(e.target.value));
                  }}
                >
                  <option key={1} value="-1">
                    - Select Branch -
                  </option>
                  {config?.companies?.map((comp) => (
                    <option key={comp?.branch} value={comp?.branch}>
                      {comp?.branch}
                    </option>
                  ))}
                </select>

                <hr style={{ margin: '10px' }} />

                <p className="fonttext_updateprofile">Pension</p>
                <input
                  type="text"
                  className="firstname_upload"
                  id="pension"
                  name="pension"
                  defaultValue={profile?.profile?.pension_company}
                  onChange={(e) => {
                    dispatch(updatePension(e.target.value));
                  }}
                />

                <p className="fonttext_updateprofile">Pension number</p>
                <input
                  type="text"
                  className="firstname_upload"
                  id="pension_number"
                  name="pension_number"
                  defaultValue={profile?.profile?.pension_number}
                  onChange={(e) => {
                    dispatch(updatePensionNumber(e.target.value));
                  }}
                />

                <p className="fonttext_updateprofile">On HMO?</p>
                <select
                  className="firstname_upload"
                  id="on_hmo"
                  name="on_hmo"
                  onChange={(e) => isOnHmo(e.target.value)}
                >
                  <option key={1} value="-1">
                    - Are you already on HMO -
                  </option>
                  <option key="yes" value="yes">
                    Yes
                  </option>
                  <option key="no" value="no">
                    No
                  </option>
                </select>

                <div
                  id="about_hmo"
                  className="hidden mb-5"
                  style={{ marginBot: '40px' }}
                >
                  {/* <p className="fonttext_updateprofile">HMO</p>
                <input
                  type="text"
                  className="firstname_upload"
                  id="provider"
                  name="provider"
                  value={organization?.provider}
                  onChange={(e) => {
                    dispatch(updateHmo(e.target.value));
                  }}
                /> */}

                  <p className="fonttext_updateprofile">HMO Number</p>
                  <input
                    type="text"
                    className="firstname_upload"
                    id="hmo_id"
                    name="hmo_id"
                    defaultValue={profile?.hmo?.hmo_id}
                    onChange={(e) => {
                      dispatch(updateHmoNumber(e.target.value));
                    }}
                  />

                  <p className="fonttext_updateprofile">HMO Plan</p>
                  <input
                    type="text"
                    className="firstname_upload"
                    id="plan"
                    name="plan"
                    defaultValue={profile?.hmo?.provider}
                    onChange={(e) => {
                      dispatch(updateHmoPlan(e.target.value));
                    }}
                  />

                  <p className="fonttext_updateprofile">HMO Hospital</p>
                  <input
                    type="text"
                    className="firstname_upload"
                    id="hospital"
                    name="hospital"
                    defaultValue={profile?.hmo?.hospital}
                    onChange={(e) => {
                      dispatch(updateHmoHospital(e.target.value));
                    }}
                  />

                  <p className="fonttext_updateprofile">HMO Status</p>
                  <input
                    type="text"
                    className="firstname_upload"
                    id="status"
                    name="status"
                    value={profile?.hmo?.status}
                    onChange={(e) => {
                      dispatch(updateHmoStatus(e.target.value));
                    }}
                  />
                </div>

                <div className="space_buttonholder">
                  <button className="next_updatebutton" onClick={prevStep}>
                    <AiOutlineArrowLeft style={{ marginRight: '10px' }} /> Prev
                  </button>

                  <button className="next_updatebutton mb-5" onClick={nextStep}>
                    Next <AiOutlineArrowRight style={{ marginLeft: '10px' }} />
                  </button>
                </div>
              </div>
            </form>

            <span style={{ padding: '20px' }}></span>
          </div>
        </div>

        <span style={{ padding: '50px' }}></span>
      </div>
    </div>
  );
};

export default Organization;
