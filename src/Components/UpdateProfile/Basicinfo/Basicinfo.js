import React, { useEffect, useState } from 'react';
import nigeria from './nigerian_states_lga.json';
import './basicinfo.css';
import clientimg from '../../../assets/clientimg.png';
import Aside from '../../Sidebar/Aside';
import AsideAdmin from '../../Sidebar/AsideAdmin';
import Mobile from '../../Sidebar/Mobile';
import store from '../../../app/store';
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
} from '../../../Feature/Employee/BasicInfoSlice';
import {} from '../../../Feature/Config/settingSlice';
import UpdateProfileTab from '../UpdateProfileTab';
import { Headbar } from '../../Headbar/Headbar';
import FormNav from '../formNav';

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

const Basicinfo = ({
  prevStep,
  nextStep,
  nextStep_title_clickTab,
  showData,
  profile,
}) => {
  const [selectedImage, setSelectedImage] = useState();
  const [localGovernments, setLocalGovernmentArea] = useState([]);
  const [employeeImage, setImage] = useState('');
  const [uploaded, isUploaded] = useState(false);
  const [userData, setUserData] = useState();

  const navigate = useNavigate();

  useEffect(() => setUserData(profile), [profile]);

  if (localStorage.getItem('userImage') !== null) {
  }
  const dispatch = useDispatch();

  const basic_info = useSelector(
    (state) => state.reducer.basicInfoSliceReducer
  );
  // const settings = useSelector((state) => state.reducer.SettingSliceReducer);
  const isAdminOrNot = store.getState().reducer.loginReducer.extra;

  const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);

      const passportImage = new FormData();
      passportImage.append('file', e.target.files[0]);

      axios
        .post(
          `${process.env.REACT_APP_BASEURL}utils/upload-file`,
          passportImage,
          {
            headers: headers,
          }
        )
        .then((response) => {
          isUploaded(true);
          setImage(response.data.data);
          localStorage.setItem('userImage', response.data.data);
          alert('Image Successfully uploaded');
        })
        .catch((error) => {
          isUploaded(false);
          setImage('');
        });
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage();
  };
  const allStatesInNigeria = nigeria.states.map((ng) => ng.name);

  const theStates = (e) => {
    dispatch(updateOriginState(e.target.value));
    setLgaList(e.target.value);
  };

  const setLgaList = (state) => {
    const lgaAreaPosition = allStatesInNigeria.indexOf(state);
    if (lgaAreaPosition === 0) {
      alert('Select a valid state');
    }
    if (lgaAreaPosition && !isNaN(lgaAreaPosition)) {
      let localGovernmentArea = nigeria.states[lgaAreaPosition]?.lga;
      setLocalGovernmentArea(localGovernmentArea);

      const setLga =
        basic_info.origin_lga ?? userData?.profile?.origin_lga ?? '';
      if (setLga !== '') dispatch(updateOriginLga(setLga));
    }
  };

  useEffect(() => {
    setLgaList(userData?.profile?.origin_state);
  }, [userData?.profile?.origin_state]);

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
    //     <Headbar />

    //     <div class="pb-20"></div>
    //   </div>
    // </div>

    <div className="whole_basicinfo" class="scroll-smooth">
      <div className="formupdate">
        <p className="profile_basicinfo">
          <span
            className=" cursor-pointer update_text"
            onClick={() => navigate(-1)}
          >
            Profile
          </span>
          {/* <Link to="/employee"> Profile</Link> */}
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
                          onClick={removeSelectedImage}
                          style={styles.delete}
                        >
                          Change Passport
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div class="grid">
                    <div class="grid-cols-3 gap-2">
                      <div class="flex justify-center mt-4">
                        <img
                          src={userData?.profile_image ?? clientimg}
                          width="90px"
                          height=" 90px"
                          class="col-start-3 col-span-4 col-end-4 profileImg"
                        />
                      </div>
                      {/* <label for="formFile" class="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Default file input example</label> */}
                      <input
                        class="relative mt-4 col-start-3 col-span-2 col-end-4 m-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
                        type="file"
                        id="photo"
                        name="photo"
                        onChange={imageChange}
                      />
                    </div>
                  </div>
                )}
                {/* <div class="grid">
                <div class="grid-cols-3 gap-2">
                  <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-20 mt-4 py-2 px-4 rounded col-start-3 ml-50 col-span-4 col-end-4" onChange={dispatch(passport(selectedImage))}>Upload Passport</button>
                </div>
              </div> */}
              </div>
            </form>

            <form className="formfield_update">
              <div className="name_updateinput">
                <div className="nameinput_text">
                  <p className="fonttext_updateprofile">First name</p>
                  <input
                    type="text"
                    className="firstname_upload"
                    id="first_name"
                    name="first_name"
                    defaultValue={userData?.first_name}
                    onChange={(e) => {
                      dispatch(updateFirstname(e.target.value));
                    }}
                  />
                </div>

                <div className="nameinput_text">
                  <p className="fonttext_updateprofile">Last name</p>
                  <input
                    type="text"
                    className="firstname_upload"
                    id="last_name"
                    name="last_name"
                    defaultValue={userData?.last_name}
                    onChange={(e) => {
                      dispatch(updateLastname(e.target.value));
                    }}
                  />
                </div>
              </div>

              <div style={{ width: '100%' }}>
                <p className="fonttext_updateprofile">Gender</p>
                <select
                  className="firstname_upload"
                  id="gender"
                  name="gender"
                  defaultValue={basic_info.gender ?? userData?.gender}
                  onChange={(e) => {
                    dispatch(updateGender(e.target.value));
                  }}
                >
                  <option key={-1} value="-1">
                    - Select your gender -{' '}
                  </option>
                  <option key="male" value="male">
                    Male
                  </option>
                  <option key="female" value="female">
                    Female
                  </option>
                </select>

                <p className="fonttext_updateprofile">Date Of Birth</p>
                <input
                  type="date"
                  className="firstname_upload"
                  id="dob"
                  name="dob"
                  defaultValue={userData?.dob}
                  onChange={(e) => {
                    dispatch(updateDob(e.target.value));
                  }}
                />

                <p className="fonttext_updateprofile">Email</p>
                <input
                  type="email"
                  className="firstname_upload"
                  id="personal_email"
                  name="personal_email"
                  defaultValue={userData?.email}
                  onChange={(e) => {
                    dispatch(updateEmail(e.target.value));
                  }}
                />

                <p className="fonttext_updateprofile">Marital status</p>
                <select
                  className="firstname_upload"
                  id="marital_status"
                  name="marital_status"
                  defaultValue={
                    basic_info.marital_status ?? userData?.marital_status
                  }
                  onChange={(e) => {
                    dispatch(updateMaritalStatus(e.target.value));
                  }}
                >
                  <option key={-1} value="-1">
                    Rather not say
                  </option>
                  <option key="s" value="single">
                    Single
                  </option>
                  <option key="m" value="married">
                    Married
                  </option>
                </select>

                <p className="fonttext_updateprofile">State of Origin</p>
                <select
                  className="firstname_upload"
                  id="origin_state"
                  value={
                    basic_info.origin_state ?? userData?.profile?.origin_state
                  }
                  name="origin_state"
                  onChange={(e) => {
                    theStates(e);
                  }}
                >
                  {allStatesInNigeria.length > 0 ? (
                    allStatesInNigeria.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))
                  ) : (
                    <option key={1} value="">
                      - Retrieving data from server -
                    </option>
                  )}
                </select>

                <p className="fonttext_updateprofile">LGA of Origin</p>
                <select
                  className="firstname_upload"
                  id="lga"
                  name="lga"
                  value={basic_info.origin_lga ?? userData?.profile?.origin_lga}
                  onChange={(e) => {
                    dispatch(updateOriginLga(e.target.value));
                  }}
                >
                  {localGovernments?.length > 0 ? (
                    localGovernments.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))
                  ) : (
                    <option key="nothing" value="">
                      - Select a state -
                    </option>
                  )}
                </select>

                <p className="fonttext_updateprofile">State of Residence</p>
                <input
                  type="text"
                  className="firstname_upload"
                  id="residence"
                  name="residence"
                  defaultValue={
                    basic_info.residence_state ??
                    userData?.profile?.residence_state
                  }
                  onChange={(e) => {
                    dispatch(updateResidenceState(e.target.value));
                  }}
                />

                <div className="next_buttonholder mb-5">
                  <FormNav nextStep={nextStep} isFirst={true} />
                </div>
                <span style={{ padding: '50px' }}></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basicinfo;
