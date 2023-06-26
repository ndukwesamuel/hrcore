import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { allGlobalSettings } from '../../app/service/thunk/employee/profileThunk';
import { toast } from 'react-toastify';

const initialState = {
  data: [],
};

export const SettingSlice = createSlice({
  name: 'fetch_all_global_settings',
  initialState,
  reducers: {
    getGlobalSettings: (state) => {
      return state.data;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allGlobalSettings.pending, (state) => {
        // state.loading = true;
      })
      .addCase(allGlobalSettings.fulfilled, (state, action) => {
        state.data = action.payload.data?.data;
        console.log(state.data);
      })
      .addCase(allGlobalSettings.rejected, (state, action) => {
        state.data = [];
      });
  },
});

export const { getGlobalSettings, setLoading } = SettingSlice.actions;
export const SettingSliceReducer = SettingSlice.reducer;
