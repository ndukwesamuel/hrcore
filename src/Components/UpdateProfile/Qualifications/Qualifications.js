import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../app/store';
import uuid from 'react-uuid';
import './qualifications.css';
import Aside from '../../Sidebar/Aside';
import AsideAdmin from '../../Sidebar/AsideAdmin';
import Mobile from '../../Sidebar/Mobile';

import {
  changeQualifications,
  queueQualifications,
  updateQualifications,
} from '../../../Feature/Employee/Qualifications';
import { Headbar } from '../../Headbar/Headbar';
import UpdateProfileTab from '../UpdateProfileTab';
import FormNav from '../formNav';
import YearDropdown from '../../../utilities/YearDropdown';

const Qualifications = ({
  prevStep,
  nextStep,
  nextStep_title_clickTab,
  showData,
  profile,
}) => {
  const dispatch = useDispatch();

  const isAdminOrNot = store.getState().reducer.loginReducer.extra;
  const [eduList, setEduList] = useState(profile?.education);
  const [institution, whichInstitution] = useState('');
  const [award, degreeObtained] = useState('');
  const [year_completed, when] = useState('');
  const [update, setUpdate] = useState(false);
  const [eduId, setId] = useState(false);
  const qualifications = useSelector((state) => state.reducer.qualificate);

  useEffect(() => {
    profile?.education?.map((item) => dispatch(queueQualifications(item)));
  }, [profile?.education]);

  useEffect(() => {
    setEduList(qualifications);
  }, [qualifications]);

  const qualificationsObtained = {};

  const addQualification = (e) => {
    e.preventDefault();
    qualificationsObtained.id = uuid().substring(1, 5);
    qualificationsObtained.institution = institution;
    qualificationsObtained.award = award;
    qualificationsObtained.year_completed = year_completed;
    dispatch(queueQualifications(qualificationsObtained));
    clearAddForm();
  };

  const deleteRow = (e, id) => {
    e.preventDefault();
    dispatch(updateQualifications(id));
  };

  const text = (e) => {
    setId(e.id);
    whichInstitution(e.institution);
    degreeObtained(e.award);
    when(e.year_completed);
    setUpdate(true);
  };

  const editQualification = (e) => {
    e.preventDefault();
    qualificationsObtained.id = eduId;
    qualificationsObtained.institution = institution;
    qualificationsObtained.award = award;
    qualificationsObtained.year_completed = year_completed;
    dispatch(changeQualifications(qualificationsObtained));
    clearAddForm();
    setUpdate(false);
  };

  const clearAddForm = () => {
    whichInstitution('');
    degreeObtained('');
    when('');
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
    //               <thead>
    //                 <tr>
    //                   <th>School</th>
    //                   <th>Degree</th>
    //                   <th>Year Completed</th>
    //                   <th>Edit</th>
    //                   <th>Delete</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 {eduList.map(
    //                   (result) => (
    //                     <tr key={result.id}>
    //                       <td style={{ padding: 10 }}>{result.institution}</td>
    //                       <td style={{ padding: 10 }}>{result.award}</td>
    //                       <td style={{ padding: 10 }}>
    //                         {result.year_completed}
    //                       </td>
    //                       <td style={{ padding: 10 }}>
    //                         <p
    //                           style={{
    //                             textDecoreation: 'underline',
    //                             color: 'blue',
    //                             cursor: 'pointer'
    //                           }}
    //                           onClick={(e) => text(result)}
    //                         >
    //                           edit
    //                         </p>
    //                       </td>
    //                       <td style={{ padding: 10 }}>
    //                         <a
    //                           onClick={(e) => {
    //                             deleteRow(e, result.id);
    //                           }}
    //                           style={{
    //                             textDecoreation: 'underline',
    //                             color: 'blue',
    //                             cursor: 'pointer'
    //                           }}
    //                           href="/"
    //                         >
    //                           delete
    //                         </a>
    //                       </td>
    //                     </tr>
    //                   )
    //                 )}
    //               </tbody>
    //             </table>

    //             <form className="formfield_update">
    //               <div style={{ width: '100%', marginTop: '50px' }}>
    //                 <div className="education">Education History</div>

    //                 <p className="fonttext_updateprofile">School</p>
    //                 <input
    //                   type="text"
    //                   className="firstname_upload"
    //                   id="institution"
    //                   name="institution"
    //                   value={institution}
    //                   onChange={(e) => {
    //                     dispatch(whichInstitution(e.target.value));
    //                   }}
    //                 />

    //                 <p className="fonttext_updateprofile">Degree & Course</p>
    //                 <input
    //                   type="text"
    //                   className="firstname_upload"
    //                   id="award"
    //                   name="award"
    //                   value={award}
    //                   onChange={(e) => {
    //                     dispatch(degreeObtained(e.target.value));
    //                   }}
    //                 />

    //                 <p className="fonttext_updateprofile">
    //                   Year Completed / Projected completion year - {year_completed}
    //                 </p>
    //                 <select
    //                   type="string"
    //                   className="firstname_upload"
    //                   id="year_completed"
    //                   name="year_completed"
    //                   value={year_completed}
    //                   onChange={(e) => {
    //                     dispatch(when(e.target.value));
    //                   }}
    //                 >
    //                   <option value="">-Select Year-</option>
    //                   <YearDropdown />
    //                 </select>

    //                 {update ? (
    //                   <button
    //                     className="save_update"
    //                     onClick={editQualification}
    //                   >
    //                     Update
    //                   </button>
    //                 ) : (
    //                   <button
    //                     className="save_update"
    //                     onClick={addQualification}
    //                   >
    //                     Save
    //                   </button>
    //                 )}

    //                 <FormNav prevStep={prevStep} nextStep={nextStep} isLast={true} />
    //               </div>
    //             </form>

    //             <span style={{ padding: '30px' }}></span>
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
              <thead>
                <tr>
                  <th>School</th>
                  <th>Degree</th>
                  <th>Year Completed</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {eduList.map((result) => (
                  <tr key={result.id}>
                    <td style={{ padding: 10 }}>{result.institution}</td>
                    <td style={{ padding: 10 }}>{result.award}</td>
                    <td style={{ padding: 10 }}>{result.year_completed}</td>
                    <td style={{ padding: 10 }}>
                      <p
                        style={{
                          textDecoreation: 'underline',
                          color: 'blue',
                          cursor: 'pointer',
                        }}
                        onClick={(e) => text(result)}
                      >
                        edit
                      </p>
                    </td>
                    <td style={{ padding: 10 }}>
                      <a
                        onClick={(e) => {
                          deleteRow(e, result.id);
                        }}
                        style={{
                          textDecoreation: 'underline',
                          color: 'blue',
                          cursor: 'pointer',
                        }}
                        href="/"
                      >
                        delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <form className="formfield_update">
              <div style={{ width: '100%', marginTop: '50px' }}>
                <div className="education">Education History</div>

                <p className="fonttext_updateprofile">School</p>
                <input
                  type="text"
                  className="firstname_upload"
                  id="institution"
                  name="institution"
                  value={institution}
                  onChange={(e) => {
                    dispatch(whichInstitution(e.target.value));
                  }}
                />

                <p className="fonttext_updateprofile">Degree & Course</p>
                <input
                  type="text"
                  className="firstname_upload"
                  id="award"
                  name="award"
                  value={award}
                  onChange={(e) => {
                    dispatch(degreeObtained(e.target.value));
                  }}
                />

                <p className="fonttext_updateprofile">
                  Year Completed / Projected completion year - {year_completed}
                </p>
                <select
                  type="string"
                  className="firstname_upload"
                  id="year_completed"
                  name="year_completed"
                  value={year_completed}
                  onChange={(e) => {
                    dispatch(when(e.target.value));
                  }}
                >
                  <option value="">-Select Year-</option>
                  <YearDropdown />
                </select>

                {update ? (
                  <button className="save_update" onClick={editQualification}>
                    Update
                  </button>
                ) : (
                  <button className="save_update" onClick={addQualification}>
                    Save
                  </button>
                )}

                <FormNav
                  prevStep={prevStep}
                  nextStep={nextStep}
                  isLast={true}
                />
              </div>
            </form>

            <span style={{ padding: '30px' }}></span>
          </div>
        </div>

        <span style={{ padding: '50px' }}></span>
      </div>
    </div>
  );
};

export default Qualifications;
