import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardManagement from './DashboardManagement';

function DashboardRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardManagement/>} />
      </Routes>
    </div>
  );
}

export default DashboardRoute;
