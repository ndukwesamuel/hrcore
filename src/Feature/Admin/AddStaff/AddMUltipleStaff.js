import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ApiConfigFormData } from '../../../utilities/apiconfig';

const CreateMultipleStaff = createAsyncThunk(
  'addstaff/multiple',
  async (staff, { rejectWithValue }) => {
    return ApiConfigFormData()
      .post('admin/employee/bulk', staff)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return rejectWithValue(message);
      });
  }
);

const SampleFileDownload = createAsyncThunk(
  'addstaff/samplefile',
  async (_, { rejectWithValue }) => {
    return ApiConfigFormData()
      .get('/admin/employee/bulk/sample')
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return rejectWithValue(message);
      });
  }
);
const initialState = {
  loading: false,
  multiplestaff: null,
  samplefile: null,
  IsError: false,
  isLoading: false,
  isSuccess: false,
  message: null,
  error: '',
};
const multipleStaffSlice = createSlice({
  name: 'multiplestaff',
  initialState,
  reset: (state) => initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateMultipleStaff.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateMultipleStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.multiplestaff = action.payload;
        state.message = null;
        state.IsError = null;
        toast.success('Employees Created  successful!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .addCase(CreateMultipleStaff.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.multiplestaff = null;
        state.message = action.payload;
        state.IsError = true;
      });

    builder
      .addCase(SampleFileDownload.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(SampleFileDownload.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.samplefile = action.payload;
        state.message = null;
        state.IsError = null;
        toast.success('file download successful!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      })
      .addCase(SampleFileDownload.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.samplefile = null;
        state.message = action.payload;
        state.IsError = true;
      });
  },
});
export const { reset } = multipleStaffSlice.actions;

export const multipleStaffReducer = multipleStaffSlice.reducer;
export const CreateMultipleStaffAction = CreateMultipleStaff;
export const SampleFileDownloadAction = SampleFileDownload;
