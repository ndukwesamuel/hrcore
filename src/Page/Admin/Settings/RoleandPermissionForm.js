import React, { useEffect, useState } from 'react';
import Basicinfo from '../../../Components/UpdateProfile/Basicinfo/Basicinfo';
import Organization from '../../../Components/UpdateProfile/Organization/Organization';
import Qualifications from '../../../Components/UpdateProfile/Qualifications/Qualifications';
import Pensionhmo from '../../../Components/UpdateProfile/Pensionhmo/Pensionhmo';
import { getUserProfile } from '../../../app/service/thunk/employee/profileThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import pageLoader, {
  loaderReset,
  setLoading,
} from '../../../utilities/PageLoader';
import { Headbar } from '../../../Components/Headbar/Headbar';
import ProfileComponent from '../../../Components/Employee/Onboarding/Profile/ProfileComponent';
import Basic_Info, {
  FFF,
  Permission_Info,
} from '../../../Components/AdminComponent/Settings/Basic_Info';
import { SettingsNav } from '../../../Components/AdminComponent/Settings/SettingsNav';
import {
  Create_Role_Permissions_Fun,
  Permissions_Fun,
} from '../../../Feature/Admin/Settings/Role_Permissions_Slice';

import { useLocation } from 'react-router-dom';

function RoleandPermissionForm() {
  const location = useLocation();

  // Access the data object passed from the previous page
  const new_Role_permision_data_Update = location.state;

  // Access the data object passed from the previous page

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Permissions_Fun());
    return () => {};
  }, []);

  const {
    Role_Permissions,
    Role_Permissions_isError,
    Role_Permissions_message,
    Role_Permissions_isLoading,
    Role_Permissions_isSuccess,

    Permissions_Data,
  } = useSelector((state) => state.reducer.Role_Permissions_Slice);

  const [shown, setShown] = useState('basic');

  const [basicInfoData, setBasicInfoData] = useState({
    name: new_Role_permision_data_Update?.name || '',

    description: new_Role_permision_data_Update?.description || '',
  });

  const handleInputChangebasicInfoData = (e) => {
    const { name, value } = e.target;
    setBasicInfoData((prevState) => ({ ...prevState, [name]: value }));
  };

  // this is the multiCjoice form

  // let data_permision = []
  // if (condition) {

  // }

  // if (condition) {

  // }

  const [selectedPermissions, setSelectedPermissions] = useState([]);

  // useEffect(() => {
  //   const permissionIds = data_game.permissions.map(permission => permission.id);
  //   setSelectedPermissions(permissionIds);
  // }, [data_game.permissions]);

  useEffect(() => {
    return () => {};
  }, []);

  const handlePermissionChange = (permissionId) => {
    if (selectedPermissions.includes(permissionId)) {
      setSelectedPermissions(
        selectedPermissions.filter((id) => id !== permissionId)
      );
    } else {
      setSelectedPermissions([...selectedPermissions, permissionId]);
    }
  };

  const nextStep = () => {
    setShown('permissions');

    console.log(basicInfoData);
  };

  const handleSubmit = () => {
    let data = {
      name: basicInfoData.name,
      description: basicInfoData.description,
      permissions: selectedPermissions,
      id: new_Role_permision_data_Update,
    };

    // console.log(data);

    dispatch(Create_Role_Permissions_Fun(data));
  };
  return (
    <div className="lg:flex lg:justify-center">
      <div className="lg:w-[90%]  ">
        <div className="lg:ml-[50px] ">
          <SettingsNav />
        </div>

        <div className="  md:flex md:justify-center    h-full ">
          <div className="bg-white md:w-[90%] ">
            <div>
              <div className="bg-white ">
                <div className="flex justify-center pb-4 ">
                  <div className=" w-[90%]">
                    <p className="text-[13px] font-normal font-inter mb-6">
                      Provide basic informations for the role
                    </p>

                    <div className="mb-3">
                      <label htmlFor="" className=" font-medium text-sm">
                        Role Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={basicInfoData.name}
                        onChange={handleInputChangebasicInfoData}
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
  px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
  font-['Manrope']"
                      />
                    </div>

                    <div>
                      <label htmlFor="" className=" font-medium text-sm">
                        Role Description
                      </label>
                      <textarea
                        onChange={handleInputChangebasicInfoData}
                        value={basicInfoData.description}
                        name="description"
                        id=""
                        className="w-full rounded-lg border border-solid border-[#D0D5DD]
              px-2 py-2 shadow bg-white outline-none mt-2 mb-2 text-base text-[#667085] 
              font-['Manrope']"
                      ></textarea>
                    </div>

                    <div>
                      {Permissions_Data?.data.map((permission) => (
                        <div
                          key={permission.id}
                          className="flex items-center mb-5"
                        >
                          <input
                            type="checkbox"
                            id={`permission-${permission.id}`}
                            name={`permission-${permission.id}`}
                            value={permission.id}
                            checked={selectedPermissions.includes(
                              permission.id
                            )}
                            onChange={() =>
                              handlePermissionChange(permission.id)
                            }
                            className="form-checkbox h-5 w-5 text-blue-600"
                          />
                          <label
                            htmlFor={`permission-${permission.id}`}
                            className="ml-2 block  font-medium text-gray-700 text-[1rem]"
                          >
                            {permission.name} :: {permission.description}
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <button
                        className="next_updatebutton"
                        onClick={handleSubmit}
                      >
                        Submit
                        {/* <AiOutlineArrowRight style={{ marginLeft: '10px' }} /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="title flex justify-center gap-3"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleandPermissionForm;
