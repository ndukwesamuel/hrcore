import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

// function SettingsNav() {
//   return (
// <div className=" font-semibold text-sm font">
//   <span>Company</span>
//   <span>
//     <ArrowForwardIosIcon style={{ fontSize: '15px' }} />
//   </span>

//   <span>Settings</span>
// </div>
//   );
// }

// export default SettingsNav;

export const SettingsNav = () => {
  const navigate = useNavigate();

  const [change, setchange] = useState('Settings');

  return (
    <div className=" font-semibold text-sm font flex items-center gap-2">
      <span
        className="text-[#667085] cursor-pointer block"
        onClick={() => navigate('/admin/settings')}
      >
        Settings
      </span>

      <span className=" cursor-pointer block">
        <ArrowForwardIosIcon style={{ fontSize: '15px' }} />
      </span>

      <span className="block cursor-pointer">Permissions</span>
    </div>
  );
};
