import { createAsyncThunk } from '@reduxjs/toolkit';
import store from '../../../store';
import {
  adminGetUserProfile,
  adminProfileUpdate,
  company_branch,
  global_settings,
  position,
  profile,
  profileUpdate,
  roles,
  upoladPassport,
  userProfile,
} from '../../endpoint/employee/profileUpdate';
import { getAdminOneEmployeeAction } from '../../../../Feature/Admin/EmployeeAdmin/EmployeeAdminSlice';

export const updateUserProfile = createAsyncThunk(
  'update/profile',
  async (profile) => {
    const user = store.getState().reducer.employeeDetailSliceReducer;
    const isAdminOrNot = store.getState().reducer.loginReducer.extra;
    if (isAdminOrNot) {
      return await adminProfileUpdate(profile, user?.data?.id);
    }

    return await profileUpdate(profile);
  }
);

export const getUserProfile = createAsyncThunk(
  'getUserProfile/profile',
  async (userId, { rejectWithValue }) => {
    const isAdminOrNot = store.getState().reducer.loginReducer.extra;
    if (isAdminOrNot === 1) {
      return await adminGetUserProfile(userId);
    } else {
      return await userProfile();
    }
  }
);

export const fetchRoles = createAsyncThunk('getAll/roles', async () => {
  return await roles();
});

export const fetchCompanyBranch = createAsyncThunk(
  'getCompany/branch',
  async () => {
    return await company_branch();
  }
);

export const allGlobalSettings = createAsyncThunk(
  'getGlobal/settings',
  async () => {
    return await global_settings();
  }
);

export const positionss = createAsyncThunk('getPosition/levels', async () => {
  return await position();
});

export const passport = createAsyncThunk(
  'upload/passport',
  async (passportImage) => {
    return await upoladPassport();
  }
);
