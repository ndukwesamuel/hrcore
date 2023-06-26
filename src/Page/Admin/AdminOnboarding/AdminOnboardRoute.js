import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminOnboardingDocument from '../../../Components/AdminComponent/AdminOnboard/AdminOnboardDocument';
import AssignTools from '../../../Components/AdminComponent/AdminOnboard/AssignTools';
import Office from '../../../Components/AdminComponent/AdminOnboard/Office';
import AdminOnboarding from './AdminOnboard';
import AdminUpdateProfile from './AdminUpdateProfile';
import { OfficeTools } from './OfficeTools/OfficeTools';
import OnboardingDocument from './OnboardDocument/OnboardingDocument';
import OnboardingFile from './OnboardFile/OnboardFile';

function AdminOnboardingRoute() {
  return (
    <Routes>
      {/* <Route path="/:id" element={<AdminOnboarding />} /> */}
      <Route path="" element={<OnboardingDocument />}>
        <Route path="/updateprofile" element={<AdminUpdateProfile />} />
        <Route path="docs" element={<AdminOnboardingDocument />} />
        <Route path="office-tools" element={<Office />} />
        <Route path="office-tool/assigned" element={<AssignTools />} />
        <Route path="office-tool/:id" element={<OfficeTools />} />
        <Route path=":id" element={<OnboardingFile />} />
      </Route>
    </Routes>
  );
}

export default AdminOnboardingRoute;
