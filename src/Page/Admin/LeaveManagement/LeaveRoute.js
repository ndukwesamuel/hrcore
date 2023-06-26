import React from 'react';

import { Route, Routes } from 'react-router-dom';
import LeaveManage from './LeaveManage';

function LeaveRoute() {
  return (
    <Routes>
      <Route path="/*" element={<LeaveManage />} />
    </Routes>
  );
}

export default LeaveRoute;
