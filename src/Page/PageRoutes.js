import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute, {
  AdminPrivateRoute,
  EmployeePrivateRoute,
} from '../PrivateRoute';
import AdminRoute from './Admin/AdminRoute';
import AuthenticationRoute from './Authentication/AuthenticationRoute';
import StaffLogin from './Authentication/staffLogin';
import EmployeeRoute from './Employee/EmployeeRoute';

function PageRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StaffLogin />} />
        <Route
          path="/employee/*"
          element={
            // <PrivateRoute>
            //   <EmployeePrivateRoute>
            <EmployeeRoute />
            //   </EmployeePrivateRoute>
            // </PrivateRoute>
          }
        />

        <Route
          path="/admin/*"
          element={
            // <PrivateRoute>
            //   <AdminPrivateRoute>
            <AdminRoute />
            //   </AdminPrivateRoute>
            // </PrivateRoute>
          }
        />
        <Route path="/auth/*" element={<AuthenticationRoute />} />
      </Routes>
    </div>
  );
}

export default PageRoutes;
