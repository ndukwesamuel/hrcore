import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminOnboardingRoute from './AdminOnboarding/AdminOnboardRoute';
import EngagementRoute from './Engagement/EngagementRoute';
import InvoiceRoute from './Invoice/InvoiceRoute';
import LeaveRoute from './LeaveManagement/LeaveRoute';
import PayrollRoutes from './Payrol/PayrollRoutes';
import SettingsRoute from './Settings/SettingsRoute';
import UserManagementRoutes from './UserManagement/UserManagementRoutes';
import DashboardManagement from './Dahboard/DashboardManagement';

function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<DashboardManagement />} />
      <Route path="/leave/*" element={<LeaveRoute />} />
      <Route path="/payroll/*" element={<PayrollRoutes />} />
      <Route path="/settings/*" element={<SettingsRoute />} />
      <Route path="/documents/*" element={<AdminOnboardingRoute />} />
      <Route path="/employee/*" element={<UserManagementRoutes />} />
      <Route path="/invoice/*" element={<InvoiceRoute />} />
      <Route path="/engagements/*" element={<EngagementRoute />} />
    </Routes>
  );
}

export default AdminRoute;
