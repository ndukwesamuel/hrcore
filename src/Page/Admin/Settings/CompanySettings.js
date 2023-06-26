import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { companyNav } from './data';
import { useState } from 'react';
import { useEffect } from 'react';
import Admins from '../../../Components/AdminComponent/Settings/Admins';
import Grades from '../../../Components/AdminComponent/Settings/Grades';
import Settings_modal from '../../../Components/AdminComponent/Settings/Settings_modal';
import Leave_Types from '../../../Components/AdminComponent/Settings/Leave_Types';
import Department from '../../../Components/AdminComponent/Settings/Department';
import Company from './Company';
import OfficeTools from '../../../Components/AdminComponent/Settings/OfficeTools';
import Positions from '../../../Components/AdminComponent/Settings/Positions';
import Permissions from '../../../Components/AdminComponent/Settings/Permissions';
import Role from '../../../Components/AdminComponent/Settings/Role';

function CompanySettings() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const NavigationButtons = ({ item }) => {
    return (
      <>
        <button
          onClick={() => handleButtonClick(1)}
          className={`py-1  lg:text-sm lg:w-[80px]  rounded  px-3  ${
            activeButton === 1 ? 'bg-[#2A72A8] text-white' : ' text-gray-600'
          }`}
        >
          {item[0].navname}
        </button>

        <button
          onClick={() => handleButtonClick(2)}
          className={`py-1 lg:text-sm lg:w-[80px] rounded ${
            activeButton === 2 ? 'bg-[#2A72A8] text-white' : ' text-gray-600'
          }`}
        >
          {item[1].navname}
        </button>

        <button
          onClick={() => handleButtonClick(3)}
          className={`py-1  lg:text-sm lg:w-[90px] rounded ${
            activeButton === 3 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[2].navname}
        </button>

        <button
          onClick={() => handleButtonClick(4)}
          className={`py-1  lg:text-sm lg:w-[80px] rounded ${
            activeButton === 4 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[3].navname}
        </button>

        <button
          onClick={() => handleButtonClick(5)}
          className={`py-1  lg:text-sm lg:w-[90px] rounded ${
            activeButton === 5 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[4].navname}
        </button>

        <button
          onClick={() => handleButtonClick(6)}
          className={`py-1 lg:text-sm lg:w-[90px] rounded ${
            activeButton === 6 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[5].navname}
        </button>

        <button
          onClick={() => handleButtonClick(7)}
          className={`py-1 lg:text-sm lg:w-[80px] rounded ${
            activeButton === 7 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[6].navname}
        </button>

        <button
          onClick={() => handleButtonClick(8)}
          className={`py-1  lg:text-sm lg:w-[90px] rounded ${
            activeButton === 8 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[7].navname}
        </button>

        <button
          onClick={() => handleButtonClick(8)}
          className={`py-1  lg:text-sm lg:w-[90px] rounded ${
            activeButton === 9 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[8].navname}
        </button>
      </>
    );
  };

  return (
    <div className="  flex justify-center  px-3 lg:px-0">
      <div className="w-full lg:w-[90%]  debug   2xl:w-[1003px]">
        <nav className="mt-5 main_Setting text-[8px] bg-white rounded-lg py-3 lg:px-4 flex   lg:gap-0 flex-wrap  justify-between px-2 w-full">
          <NavigationButtons item={companyNav} />
        </nav>

        <div className="  w-full">
          {activeButton === 1 && <Company />}
          {activeButton === 2 && <Grades />}
          {activeButton === 3 && <Leave_Types />}
          {activeButton === 4 && <Positions />}
          {activeButton === 5 && <Role />}
          {activeButton === 6 && <Permissions />}

          {activeButton === 7 && <OfficeTools />}
          {activeButton === 8 && <Admins />}
          {activeButton === 9 && <Department />}
        </div>
      </div>
    </div>
  );
}

export default CompanySettings;
