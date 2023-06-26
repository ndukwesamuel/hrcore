import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  first_name: null,
  last_name: null,
  gender: null,
  dob: null,
  personal_email: null,
  marital_status: null,
  origin_lga: null,
  origin_state: null,
  residence_state: null,
  residence_lga: null,
  stepshow: 1,
  passport: null,
};
export const basicInfoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    nextStep_title_clickTab: (state, action) => {
      state.stepshow = action.payload;
    },
    updateFirstname: (state, action) => {
      state.first_name = action.payload;
    },
    updateLastname: (state, action) => {
      state.last_name = action.payload;
    },
    updateGender: (state, action) => {
      state.gender = action.payload;
    },
    updateDob: (state, action) => {
      state.dob = action.payload;
    },
    updateEmail: (state, action) => {
      state.personal_email = action.payload;
    },
    updateMaritalStatus: (state, action) => {
      state.marital_status = action.payload.toLowerCase();
    },
    updateOriginLga: (state, action) => {
      state.origin_lga = action.payload;
    },
    updateOriginState: (state, action) => {
      state.origin_state = action.payload;
    },
    updateResidenceState: (state, action) => {
      state.residence_state = action.payload;
    },
    updateResidenceLga: (state, action) => {
      state.residence_lga = action.payload;
    },
    updatePassport: (state, action) => {
      state.passport = action.payload;
    },
    resetBasicInfo: () => initialState
  },
});

export const {
  updateFirstname,
  updateLastname,
  updateGender,
  updateDob,
  updateEmail,
  updateMaritalStatus,
  updateOriginLga,
  updateOriginState,
  updateResidenceState,
    resetBasicInfo,
  updateResidenceLga,
  updatePassport,
  nextStep_title_clickTab,
} = basicInfoSlice.actions;
export const basicInfoSliceReducer = basicInfoSlice.reducer;
