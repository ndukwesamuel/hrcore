import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LeaveRoutes from './LeaveManagement/LeaveRoutes';
import OffboardingRoute from './Offboarding/OffboardingRoute';
import ProfileRoute from './Profile/ProfileRoute';
import DashboardManagement from './Dashboard/DashboardManagement';
import OnboardingRoute from './Onboarding/OnboardingRoute';
import EngagementRoute from '../Admin/Engagement/EngagementRoute';

function EmployeeRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardManagement />} />
        <Route path="/profile/*" element={<ProfileRoute />} />
        <Route path="/leave/*" element={<LeaveRoutes />} />
        <Route path="/exit/*" element={<OffboardingRoute />} />
        <Route path="/documents/*" element={<OnboardingRoute />} />
        <Route path="/engagements/*" element={<EngagementRoute />} />
      </Routes>
    </div>
  );
}

export default EmployeeRoute;
