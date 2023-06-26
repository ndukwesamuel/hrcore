import React from 'react';
import EmployeeDirTable from '../../../Components/EmployeeDirTable/EmployeeDirTable';
import Mobile from '../../../Components/Sidebar/Mobile';

import './EmployeeDirectory.styles.css';
import Aside from '../../../Components/Sidebar/Aside';

const EmployeeDirectory = () => {
  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">


      <div
        class="flex flex-col flex-1 w-full"
        style={{ backgroundColor: '#eff6fc' }}
      >

        <EmployeeDirTable />
      </div>
    </div>
  );
};

export default EmployeeDirectory;
