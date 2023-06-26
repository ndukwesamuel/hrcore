import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import store from '../../../app/store';
import './pensionhmo.css';
import Aside from '../../Sidebar/Aside';
import AsideAdmin from '../../Sidebar/AsideAdmin';
import Header from '../../Sidebar/Header';
import Mobile from '../../Sidebar/Mobile';

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import {
  queueExperiences,
  setLoading,
  changeExperience,
  updateExperience,
} from '../../../Feature/Employee/Experience';
import { updateUserProfile } from '../../../app/service/thunk/employee/profileThunk';
import { Headbar } from '../../Headbar/Headbar';
import UpdateProfileTab from '../UpdateProfileTab';
// import { updateUserProfile } from '../../../app/service/thunk/profileThunk';

const Pensionhmo = ({
  prevStep,
  nextStep,
  nextStep_title_clickTab,
  showData,
  profiles,
}) => {
  const isAdminOrNot = store.getState().reducer.loginReducer.extra;
  const basic_info = useSelector(
    (state) => state.reducer.basicInfoSliceReducer
  );
  const organisation = useSelector(
    (state) => state.reducer.organisationSliceReducer
  );
  const qualification = useSelector((state) => state.reducer.qualificate);

  const profile = {};

  const dispatch = useDispatch();
  const experience = useSelector((state) => state.reducer.experience);
  const rex = experience.filter((item) => item.id !== null);

  const [organization, whichOrganization] = useState('');
  const [role, whichRole] = useState('');
  const [started, yearStarted] = useState('');
  const [ended, yearEnded] = useState('');
  const [update, setUpdate] = useState(false);
  const [userId, setId] = useState(false);

  const candidateExperience = {};
  const addExperience = (e) => {
    e.preventDefault();
    let id = uuid();
    let uid = id.substring(1, 5);
    candidateExperience.id = uid;
    candidateExperience.organization = organization;
    candidateExperience.role = role;
    candidateExperience.started = started;
    candidateExperience.ended = ended;
    dispatch(queueExperiences(candidateExperience));
  };

  const deleteRow = (e, id) => {
    e.preventDefault();
    dispatch(updateExperience(id));
  };

  const submitProfile = (e) => {
    const education = {};
    education.education = qualification;

    const hmo = {};
    hmo.hmo = {
      provider: organisation.provider,
      hmo_id: organisation.hmo_id,
      hospital: organisation.hospital,
      status: organisation.status,
      plan: organisation.plan,
    };

    const exp = {};
    exp.experience = experience;

    e.preventDefault();

    Object.assign(profile, {
      designation: 'Clerk',
      department: organisation.department,
      dob: basic_info.dob,
      first_name: basic_info.first_name,
      gender: basic_info.gender,
      last_name: basic_info.last_name,
      lga: basic_info.lga,
      marital_status: basic_info.marital_status,
      origin_state: basic_info.origin_state,
      personal_email: basic_info.personal_email,
      residence: basic_info.residence,
    });
    Object.assign(profile, { organisation });
    Object.assign(profile, { education: education });
    Object.assign(profile, { experience: exp });
    Object.assign(profile, { hmo: hmo });
    console.log('profileeee in update learn', profile);

    // dispatch(updateUserProfile(profile));
  };

  const text = (e) => {
    document.getElementById('organization').value = e.organization;
    document.getElementById('role').value = e.role;
    document.getElementById('started').value = new Date(e.started);
    document.getElementById('ended').value = new Date(e.ended);
    setId(e.id);
    whichOrganization(e.organization);
    whichRole(e.role);
    yearStarted(e.started);
    yearEnded(e.ended);
    setUpdate(true);
  };

  const editOrganization = (e) => {
    e.preventDefault();

    let organization = document.getElementById('organization').value;
    let role = document.getElementById('role').value;
    let started = document.getElementById('started').value;
    let ended = document.getElementById('ended').value;

    let singleRecord = {};
    singleRecord.id = userId;
    singleRecord.organization = organization;
    singleRecord.role = role;
    singleRecord.started = started;
    singleRecord.ended = ended;

    dispatch(changeExperience(singleRecord));
    document.getElementById('organization').value = '';
    document.getElementById('role').value = '';
    document.getElementById('started').value = '';
    document.getElementById('ended').value = '';
    setUpdate(false);
  };

  return (
    // <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    //   <aside
    //     class="z-20 hidden w-56 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0 border-gray-500"
    //     style={{ borderRight: '1px solid #cec5c5' }}
    //   >
    //     {!isAdminOrNot ? <Aside /> : <AsideAdmin />}
    //   </aside>

    //   {/* <div class="fixed inset-0 z-10 flex items-end sm:items-center sm:justify-center">
    //     </div> */}

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

    //             <table
    //               style={{
    //                 width: '80%',
    //                 margin: 'auto',
    //                 textAlign: 'left',
    //                 marginTop: 20,
    //               }}
    //             >
    //               <tr>
    //                 <th>Organization</th>
    //                 <th>Role</th>
    //                 <th>Started</th>
    //                 <th>Ended</th>
    //                 <th>Edit</th>
    //                 <th>Delete</th>
    //               </tr>
    //               {(rex.length === 0 ? profiles?.experience : rex)?.map(
    //                 (result) => (
    //                   <tr key="{item}">
    //                     <td style={{ padding: 10 }}>{result.organization}</td>
    //                     <td style={{ padding: 10 }}>{result.role}</td>
    //                     <td style={{ padding: 10 }}>{result.started}</td>
    //                     <td style={{ padding: 10 }}>{result.ended}</td>
    //                     <td style={{ padding: 10 }}>
    //                       <a
    //                         style={{
    //                           textDecoreation: 'underline',
    //                           color: 'blue',
    //                         }}
    //                         href="#"
    //                         onClick={(e) => text(result)}
    //                       >
    //                         edit
    //                       </a>
    //                     </td>
    //                     <td style={{ padding: 10 }}>
    //                       <a
    //                         onClick={(e) => {
    //                           deleteRow(e, result.id);
    //                         }}
    //                         style={{
    //                           textDecoreation: 'underline',
    //                           color: 'blue',
    //                         }}
    //                         href="/"
    //                       >
    //                         delete
    //                       </a>
    //                     </td>
    //                   </tr>
    //                 )
    //               )}
    //             </table>

    //             <form className="formfield_update">
    //               <div style={{ width: '100%', marginTop: '10px' }}>
    //                 {/* <div className="education_update">
    //                       <div> Education History</div>
    //                       <div className="employment_title">
    //                           <p className="new">Organization</p>
    //                           <p className="new">Role</p>
    //                           <p className="new">Start Year</p>
    //                           <p className="new">End Year</p>
    //                         </div>

    //                         <div className="employment_details">
    //                           <p>Havard</p>
    //                           <p>HR Manager</p>
    //                           <p>2020</p>
    //                           <p>2023</p>
    //                         </div>
    //                     </div> */}

    //                 <p className="fonttext_updateprofile">Organization</p>
    //                 <input
    //                   type="text"
    //                   className="firstname_upload"
    //                   id="organization"
    //                   name="organization"
    //                   onChange={(e) => {
    //                     whichOrganization(e.target.value);
    //                   }}
    //                 />

    //                 <p className="fonttext_updateprofile">Role</p>
    //                 <input
    //                   type="text"
    //                   className="firstname_upload"
    //                   id="role"
    //                   name="role"
    //                   onChange={(e) => {
    //                     whichRole(e.target.value);
    //                   }}
    //                 />

    //                 <p className="fonttext_updateprofile">Start Year</p>
    //                 <input
    //                   type="date"
    //                   className="firstname_upload"
    //                   id="started"
    //                   name="started"
    //                   onChange={(e) => {
    //                     yearStarted(e.target.value);
    //                   }}
    //                 />

    //                 <p className="fonttext_updateprofile">End Year</p>
    //                 <input
    //                   type="date"
    //                   className="firstname_upload"
    //                   id="ended"
    //                   name="ended"
    //                   onChange={(e) => {
    //                     yearEnded(e.target.value);
    //                   }}
    //                 />

    //                 {update ? (
    //                   <button
    //                     className="save_update"
    //                     onClick={editOrganization}
    //                   >
    //                     Update
    //                   </button>
    //                 ) : (
    //                   <button className="save_update" onClick={addExperience}>
    //                     Save
    //                   </button>
    //                 )}

    //                 <div
    //                   className="space_buttonholder"
    //                   style={{ marginBottom: '150px;' }}
    //                 >
    //                   <button className="next_updatebutton" onClick={prevStep}>
    //                     <AiOutlineArrowLeft style={{ marginRight: '10px' }} />{' '}
    //                     Prev
    //                   </button>
    //                   <button className="submit" onClick={submitProfile}>
    //                     Submit
    //                   </button>
    //                 </div>
    //               </div>
    //             </form>

    //             <span style={{ padding: '35px' }}></span>
    //           </div>
    //         </div>

    //         <span style={{ padding: '50px' }}></span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="whole_basicinfo">
      <div className="formupdate">
        <p className="profile_basicinfo">
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

            <table
              style={{
                width: '80%',
                margin: 'auto',
                textAlign: 'left',
                marginTop: 20,
              }}
            >
              <tr>
                <th>Organization</th>
                <th>Role</th>
                <th>Started</th>
                <th>Ended</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
              {(rex.length === 0 ? profiles?.experience : rex)?.map(
                (result) => (
                  <tr key="{item}">
                    <td style={{ padding: 10 }}>{result.organization}</td>
                    <td style={{ padding: 10 }}>{result.role}</td>
                    <td style={{ padding: 10 }}>{result.started}</td>
                    <td style={{ padding: 10 }}>{result.ended}</td>
                    <td style={{ padding: 10 }}>
                      <a
                        style={{
                          textDecoreation: 'underline',
                          color: 'blue',
                        }}
                        href="#"
                        onClick={(e) => text(result)}
                      >
                        edit
                      </a>
                    </td>
                    <td style={{ padding: 10 }}>
                      <a
                        onClick={(e) => {
                          deleteRow(e, result.id);
                        }}
                        style={{
                          textDecoreation: 'underline',
                          color: 'blue',
                        }}
                        href="/"
                      >
                        delete
                      </a>
                    </td>
                  </tr>
                )
              )}
            </table>

            <form className="formfield_update">
              <div style={{ width: '100%', marginTop: '10px' }}>
                {/* <div className="education_update">
                    <div> Education History</div>
                    <div className="employment_title">
                        <p className="new">Organization</p>
                        <p className="new">Role</p>
                        <p className="new">Start Year</p>
                        <p className="new">End Year</p>
                      </div>

                      <div className="employment_details">
                        <p>Havard</p>
                        <p>HR Manager</p>
                        <p>2020</p>
                        <p>2023</p>
                      </div>
                  </div> */}

                <p className="fonttext_updateprofile">Organization</p>
                <input
                  type="text"
                  className="firstname_upload"
                  id="organization"
                  name="organization"
                  onChange={(e) => {
                    whichOrganization(e.target.value);
                  }}
                />

                <p className="fonttext_updateprofile">Role</p>
                <input
                  type="text"
                  className="firstname_upload"
                  id="role"
                  name="role"
                  onChange={(e) => {
                    whichRole(e.target.value);
                  }}
                />

                <p className="fonttext_updateprofile">Start Year</p>
                <input
                  type="date"
                  className="firstname_upload"
                  id="started"
                  name="started"
                  onChange={(e) => {
                    yearStarted(e.target.value);
                  }}
                />

                <p className="fonttext_updateprofile">End Year</p>
                <input
                  type="date"
                  className="firstname_upload"
                  id="ended"
                  name="ended"
                  onChange={(e) => {
                    yearEnded(e.target.value);
                  }}
                />

                {update ? (
                  <button className="save_update" onClick={editOrganization}>
                    Update
                  </button>
                ) : (
                  <button className="save_update" onClick={addExperience}>
                    Save
                  </button>
                )}

                <div
                  className="space_buttonholder"
                  style={{ marginBottom: '150px;' }}
                >
                  <button className="next_updatebutton" onClick={prevStep}>
                    <AiOutlineArrowLeft style={{ marginRight: '10px' }} /> Prev
                  </button>
                  <button className="submit" onClick={submitProfile}>
                    Submit
                  </button>
                </div>
              </div>
            </form>

            <span style={{ padding: '35px' }}></span>
          </div>
        </div>

        <span style={{ padding: '50px' }}></span>
      </div>
    </div>
  );
};

export default Pensionhmo;
