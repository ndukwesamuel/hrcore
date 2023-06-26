import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ApiConfig } from '../../utilities/apiconfig';

const leaveRequest = createAsyncThunk(
  'users/leaveRequest',
  async (request, { rejectWithValue }) => {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      timeout: 200000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return await axiosInstance
      .post('/api/leave-request', request)
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

const getLeaveRequest = createAsyncThunk(
  'users/getLeaveRequest',
  async (_, { rejectWithValue }) => {
    return ApiConfig()
      .get('/api/leave-request')
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

const getRelievers = createAsyncThunk(
  'users/getRelievers',
  async (_, { rejectWithValue }) => {
    return await ApiConfig()
      .get('/api/potential-reliever')
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
const getLeaveTypes = createAsyncThunk(
  'users/leavetype',
  async (_, { rejectWithValue }) => {
    return await ApiConfig()
      .get('/api/leave-types')
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

const getLeaveDays = createAsyncThunk(
  'users/leavedays',
  async (dates, { rejectWithValue }) => {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      timeout: 200000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    return await axiosInstance
      .get(`/api/leave-days?start-date=${dates?.start}&end-date=${dates?.end}`)
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
  request: null,
  getRequest: [],
  relievers: [],
  leavetypes: [],
  leavedays: {},
  error: '',
  success: false,
};
const leaveRequestSlice = createSlice({
  name: 'leaverequest',
  initialState,
  reducers: {
    reset_request: (state) => {
      state.request = null;
    },

    reset_sucess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(leaveRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(leaveRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.request = action.payload;
      state.error = '';
      state.success = true;
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
    });

    builder.addCase(leaveRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      toast.error(action.payload, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    });

    builder.addCase(getLeaveRequest.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getLeaveRequest.fulfilled, (state, action) => {
      state.loading = false;
      state.getRequest = action.payload.data;
      state.error = '';
      state.success = true;
    });

    builder.addCase(getLeaveRequest.rejected, (state, action) => {
      console.log('actionn', action.payload);
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getRelievers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRelievers.fulfilled, (state, action) => {
      state.loading = false;
      state.relievers = action.payload;
      state.error = '';
      state.success = true;
    });

    builder.addCase(getRelievers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getLeaveDays.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getLeaveDays.fulfilled, (state, action) => {
      state.loading = false;
      state.leavedays = action.payload;
      state.error = '';
      state.success = true;
    });

    builder.addCase(getLeaveDays.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getLeaveTypes.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getLeaveTypes.fulfilled, (state, action) => {
      state.loading = false;
      state.leavetypes = action.payload;
      state.error = '';
      state.success = true;
    });

    builder.addCase(getLeaveTypes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { reset_request, reset_sucess } = leaveRequestSlice.actions;

export const leaveReducer = leaveRequestSlice.reducer;
export const leaveRequestAction = leaveRequest;
export const getLeaveAction = getLeaveRequest;
export const getRelieversAction = getRelievers;
export const getLeaveDaysAction = getLeaveDays;
export const getLeaveTypesAction = getLeaveTypes;
