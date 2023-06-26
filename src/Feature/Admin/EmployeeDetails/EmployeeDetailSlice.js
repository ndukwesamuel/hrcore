import { createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from '../../../app/service/thunk/employee/profileThunk';

const initialState = {
  data: [],
};

export const employeeDetailSlice = createSlice({
  name: 'retrieving_user_details',
  initialState,
  reducers: {
    getDetails: (state) => {
      return state.data;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetData: (state) => {
      state.data = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data.data;

        console.log(state.data);
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
      });
  },
});

export const { getDetails, setLoading, resetData } =
  employeeDetailSlice.actions;
export const employeeDetailSliceReducer = employeeDetailSlice.reducer;
