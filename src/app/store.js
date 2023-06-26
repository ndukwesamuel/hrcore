import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { resetReducer } from '../Feature/Authentication/AuthSlice';
import ForgotpasswordSlice from '../Feature/Authentication/ForgotPassword/ForgotpasswordSlice';
import { loginReducer } from '../Feature/Authentication/LoginSlice';
import { leaveReducer } from '../Feature/Leave/LeaveRequestSlice';
import { leaveAdminReducer } from '../Feature/Admin/LeaveAdmin/LeaveAdminSlice';
import CreateSingleStaffSlice from '../Feature/Admin/AddStaff/AddstaffSlice';
import { basicInfoSliceReducer } from '../Feature/Employee/BasicInfoSlice';
import { organisationSliceReducer } from '../Feature/Employee/Organization';
import { qualificationSliceReducer } from '../Feature/Employee/Qualifications';
import { experienceSliceReducer } from '../Feature/Employee/Experience';
import { adminEmployeeSliceReducer } from '../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';
import { roleSliceReducer } from '../Feature/Admin/Roles/RoleSlice';
import { companySliceReducer } from '../Feature/Admin/Company/CompanySlice';
import { SettingSliceReducer } from '../Feature/Config/settingSlice';
import { PositionSliceReducer } from '../Feature/Admin/Positions/PositionSlice';
import { ProfileSliceReducer } from '../Feature/Admin/AddStaff/ProfileSlice';
import { multipleStaffReducer } from '../Feature/Admin/AddStaff/AddMUltipleStaff';
import { employeeDetailSliceReducer } from '../Feature/Admin/EmployeeDetails/EmployeeDetailSlice';
import { loaderReducer } from '../utilities/PageLoader';
import { contactReducer } from '../Feature/Admin/AddContact/ContactSlicce';
import { InvoiceReducer } from '../Feature/Admin/Invoice/InvoiceSlice';
import ResignSlice from '../Feature/Employee/ResignSlice';
import AccountSlice from '../Feature/Admin/Invoice/AccountSlice';
import TagSlice from '../Feature/Admin/Invoice/TagSlice';
import CreateInvoiceSlice from '../Feature/Admin/Invoice/CreateInvoiceSlice';
import OffboardSlice from '../Feature/Admin/Offboard/OffboardSlice';
import { officeToolsReducer } from '../Feature/Admin/Onboarding/OfficeToolsSlice';
import { folderSliceReducer } from '../Feature/Admin/Onboarding/DocumentSlice';
import AnnouncementsSlice from '../Feature/Admin/Engagement/AnnouncementsSlice';
import EmployeeFolderSlice from '../Feature/Employee/Onboardoing/EmployeeFolderSlice';
import BranchSlice from '../Feature/Admin/Settings/BranchSlice';
import DepartmentSlice from '../Feature/Admin/Settings/DepartmentSlice';
import GlobalSettingsSlice from '../Feature/Admin/Settings/GlobalSettingsSlice';
import UpdateProfileSlice from '../Feature/Admin/UpdateProfile/UpdateProfileSlice';
import Role_Permissions_Slice from '../Feature/Admin/Settings/Role_Permissions_Slice';

const reducers = combineReducers({
  passwordResetReducer: resetReducer,
  loginReducer: loginReducer,
  ForgotpasswordReducer: ForgotpasswordSlice,
  CreateSingleStaffReducer: CreateSingleStaffSlice,
  leaveReducer: leaveReducer,
  leaveAdminReducer: leaveAdminReducer,
  basicInfoSliceReducer: basicInfoSliceReducer,
  organisationSliceReducer: organisationSliceReducer,
  qualificate: qualificationSliceReducer,
  experience: experienceSliceReducer,
  adminEmployeeReducer: adminEmployeeSliceReducer,
  roleSliceReducer: roleSliceReducer,
  companySliceReducer: companySliceReducer,
  settingReducer: SettingSliceReducer,
  PositionSliceReducer: PositionSliceReducer,
  ProfileSliceReducer: ProfileSliceReducer,
  multipleStaffReducer: multipleStaffReducer,
  employeeDetailSliceReducer: employeeDetailSliceReducer,
  loaderReducer: loaderReducer,
  ResignSlice: ResignSlice,
  InvoiceReducer: InvoiceReducer,
  contactReducer: contactReducer,
  AccountSlice: AccountSlice,
  TagSlice: TagSlice,
  CreateInvoiceSlice: CreateInvoiceSlice,
  OffboardSlice: OffboardSlice,
  officeToolsReducer: officeToolsReducer,
  folderReducer: folderSliceReducer,
  AnnouncementsSlice: AnnouncementsSlice,
  EmployeeFolderSlice: EmployeeFolderSlice,
  BranchSlice: BranchSlice,
  DepartmentSlice: DepartmentSlice,

  GlobalSettingsSlice: GlobalSettingsSlice,

  UpdateProfileSlice: UpdateProfileSlice,

  Role_Permissions_Slice: Role_Permissions_Slice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    storage.removeItem('persist:root');
    state = {};
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: {
    reducer: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
