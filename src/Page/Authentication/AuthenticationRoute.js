import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Forgotpassword from './Forgotpassword';
import AdminLogin from './AdminLogin';
import StaffLogin from './staffLogin';
import PasswordReset from './PasswordReset';
import SuccessPage from './SuccessPage';
import RecoverySuccessPage from './RecoverySuccessPage';

function AuthenticationRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<StaffLogin />} />
        <Route path="/adminlogin" exact element={<AdminLogin />} />
        <Route path="/resetpassword" element={<PasswordReset />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/recovery" element={<RecoverySuccessPage />} />
      </Routes>
    </div>
  );
}

export default AuthenticationRoute;
