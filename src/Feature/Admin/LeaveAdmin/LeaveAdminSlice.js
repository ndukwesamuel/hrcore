import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ApiConfig } from '../../../utilities/apiconfig';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';
let baseURL = process.env.REACT_APP_BASEURL;

const getLeaveRequestAdmin = createAsyncThunk(
  'users/adminleave',
  async (dates, { rejectWithValue }) => {
    return ApiConfig()
      .get(`/admin/leave-request`)
      .then((response) => {
        console.log('leave resss', response);
        return response.data.data;
      })
      .catch((error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        ErrorFunc(error);

        return rejectWithValue(message);
      });
  }
);

const Approve_Or_Decline_Service = async (data) => {
  let API_URL = `${baseURL}admin/leave-request/${data}`;

  return ApiConfig()
    .put(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const Approve_Or_DeclineFun = createAsyncThunk(
  'leaveadmin/aprove_deline',
  async (data, thunkAPI) => {
    try {
      return await Approve_Or_Decline_Service(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      ErrorFunc(error);

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  loading: false,
  getLeaveListAdmin: [],
  error: '',
  aprove_deline_data: null,
  aprove_deline_isError: false,
  aprove_deline_isSuccess: false,
  aprove_deline_isLoading: false,
  aprove_deline_message: '',
};
const leaveAdminRequestSlice = createSlice({
  name: 'leaveadmin',
  initialState,
  reducers: {
    reset_aprove_deline_data: (state) => {
      state.aprove_deline_data = null;
      state.aprove_deline_isError = false;
      state.aprove_deline_isSuccess = false;
      state.aprove_deline_isLoading = false;
      state.aprove_deline_message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLeaveRequestAdmin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getLeaveRequestAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.getLeaveListAdmin = action.payload;
        state.error = '';
      })

      .addCase(getLeaveRequestAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(Approve_Or_DeclineFun.pending, (state) => {
        state.aprove_deline_isLoading = true;
      })
      .addCase(Approve_Or_DeclineFun.fulfilled, (state, action) => {
        state.aprove_deline_isLoading = false;
        state.aprove_deline_isSuccess = true;
        state.aprove_deline_data = action.payload;
        toast.success('Request successful', {
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
      .addCase(Approve_Or_DeclineFun.rejected, (state, action) => {
        state.aprove_deline_isLoading = false;
        state.aprove_deline_isError = true;
        state.aprove_deline_message = action.payload;
        state.aprove_deline_isSuccess = false;
      });
  },
});

export const { reset_aprove_deline_data } = leaveAdminRequestSlice.actions;
export const leaveAdminReducer = leaveAdminRequestSlice.reducer;
export const getLeaveRequestAdminAction = getLeaveRequestAdmin;
