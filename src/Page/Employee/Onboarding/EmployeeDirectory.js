import React from 'react';
import EmployeeDirTable from '../../../Components/EmployeeDirTable/EmployeeDirTable';
import Sidebar from '../../../Components/Sidebar/Sidebar';

import './EmployeeDirectory.styles.css';

const EmployeeDirectory = () => {
  return (
    <div className="employeedirectory">
      <section className="employeedirectory__left">
        <Sidebar />
      </section>
      <section className="employeedirectory__right">
        <EmployeeDirTable />
      </section>
    </div>
  );
};

export default EmployeeDirectory;
