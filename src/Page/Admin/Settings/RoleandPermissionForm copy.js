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

const RoleandPermissionForm = () => {
  const dispatch = useDispatch();

  const [shown, setShown] = useState('basic');

  const [basicInfoData, setBasicInfoData] = useState({
    name: '',
    description: '',
  });

  const handleInputChangebasicInfoData = (e) => {
    const { name, value } = e.target;
    setBasicInfoData((prevState) => ({ ...prevState, [name]: value }));
  };

  const nextStep = () => {
    setShown('permissions');

    console.log(basicInfoData);
  };

  const prevStep = () => {
    setShown('basic');
  };

  return (
    <div className="lg:flex lg:justify-center">
      <div className="lg:w-[90%]  ">
        <div className="lg:ml-[50px] ">
          <SettingsNav />
        </div>
        <div className="  md:flex md:justify-center    h-full ">
          <div className="bg-white md:w-[90%] ">
            <div className="title flex justify-center gap-3">
              <div class="flex justify-evenly mt-5 w-full mb-7">
                <div className="firststep " onClick={() => setShown('basic')}>
                  <span
                    className={`${
                      shown === 'basic' ? 'stepnumber' : '  step_unchosennumber'
                    }  `}
                  >
                    1
                  </span>
                  <p
                    className={` ${
                      shown === 'basic' ? 'font-normal text-sm' : ''
                    }
          `}
                  >
                    Basic Information
                  </p>
                </div>
                <div
                  className="firststep"
                  onClick={() => setShown('permissions')}
                >
                  <span
                    className={`${
                      shown === 'permissions'
                        ? 'stepnumber'
                        : 'step_unchosennumber'
                    }  `}
                  >
                    2
                  </span>
                  <p
                    className={` ${
                      shown === 'permissions' ? 'font-normal text-sm' : ''
                    } 
        `}
                  >
                    Permissions
                  </p>
                </div>
              </div>
            </div>
            {shown === 'basic' && (
              <div className="flex justify-center pb-4 ">
                <div className=" w-[90%]">
                  <Basic_Info
                    nextStep={nextStep}
                    basicInfoData={basicInfoData}
                    handleInputChangebasicInfoData={
                      handleInputChangebasicInfoData
                    }
                  />
                </div>
              </div>
            )}
            {shown === 'permissions' && (
              <div className="pl-3">
                <Permission_Info
                  basicInfoData={basicInfoData}
                  prevStep={prevStep}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Create_Role_Permissions_Fun

export default RoleandPermissionForm;
