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

function CompanyDetails() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  const NavigationButtons = ({ item }) => {
    return (
      <>
        <button
          onClick={() => handleButtonClick(1)}
          className={`py-1 text-sm w-28 rounded ${
            activeButton === 1 ? 'bg-[#2A72A8] text-white' : ' text-gray-600'
          }`}
        >
          {item[0].navname}
        </button>

        <button
          onClick={() => handleButtonClick(2)}
          className={`py-1 text-sm w-28 rounded ${
            activeButton === 2 ? 'bg-[#2A72A8] text-white' : ' text-gray-600'
          }`}
        >
          {item[1].navname}
        </button>

        <button
          onClick={() => handleButtonClick(3)}
          className={`py-1 text-sm w-28 rounded ${
            activeButton === 3 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[2].navname}
        </button>

        <button
          onClick={() => handleButtonClick(4)}
          className={`py-1 text-sm w-28 rounded ${
            activeButton === 4 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[3].navname}
        </button>

        <button
          onClick={() => handleButtonClick(5)}
          className={`py-1 text-sm w-28 rounded ${
            activeButton === 5 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[4].navname}
        </button>

        <button
          onClick={() => handleButtonClick(6)}
          className={`py-1 text-sm w-28 rounded ${
            activeButton === 6 ? 'bg-[#2A72A8] text-white' : 's text-gray-600'
          }`}
        >
          {item[5].navname}
        </button>
      </>
    );
  };

  return (
    <div className="">
      <div className="flex items-center gap-3">
        <Link to="/admin/settings" className="font-semibold text-sm">
          Company
        </Link>

        <span>
          <ArrowForwardIosIcon style={{ fontSize: 10 }} />
        </span>
        <span className="font-semibold text-sm"> Settings</span>
      </div>

      <nav className="mt-5 bg-white rounded-lg py-3 px-4 flex gap-2 flex-wrap justify-center xl:justify-between">
        <NavigationButtons item={companyNav} />
      </nav>

      <div>
        {activeButton === 1 && <Admins />}
        {activeButton === 2 && <Grades />}
        {activeButton === 3 && <Leave_Types />}
        {activeButton === 4 && <Department />}
      </div>
    </div>
  );
}

export default CompanyDetails;
