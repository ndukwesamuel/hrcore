// import React from 'react';
// import CompanyComp from '../../../../Components/Settings/Company/CompanyComp';
// import SidebarAdmin from '../../../../Components/Sidebar/SidebarAdmin';

// const Company = () => {
//   return (
//     <div className="w-full flex justify-between bg-[#eff6fc]">
//       <div className=" flex flex-col basis-[18%] border-r border-[#d0d5dd] bg-white min-h-screen">
//         <SidebarAdmin />
//       </div>
//       <div className="basis-[82%]">
//         <CompanyComp />
//       </div>
//     </div>
//   );
// };

// export default Company;

import React from 'react';
import CompanyComp from '../../../Components/Settings/Company/CompanyComp';

function Company() {
  return (
    <div>
      <CompanyComp />
    </div>
  );
}

export default Company;
