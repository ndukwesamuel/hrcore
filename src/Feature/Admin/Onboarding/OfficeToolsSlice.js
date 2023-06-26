import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ApiConfig } from '../../../utilities/apiconfig';

const getEmployeeTools = createAsyncThunk(
  'admin/employeetools',
  async (_, { rejectWithValue }) => {
    return ApiConfig()
      .get('/admin/onboarding/office-tools')
      .then((response) => {
        console.log('onboardinggggggg', response.data);
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

const getEmployeeDetailTools = createAsyncThunk(
  'admin/employeedetailtools',
  async (id, { rejectWithValue }) => {
    return ApiConfig()
      .get(`/admin/onboarding/office-tools/${id}`)
      .then((response) => {
        console.log('employee onboarding detailsss', response.data);
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

const AssignOfficeTools = createAsyncThunk(
  'admin/assigntools',
  async (data, { rejectWithValue }) => {
    console.log('id innn assigning', data.id);
    return ApiConfig()
      .put(`/admin/onboarding/office-tools/${data.id}/assign`, {
        tools: data.tools,
      })
      .then((response) => {
        console.log('assigning tools', response.data);
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
  employeeTools: null,
  employeeDetailTools: null,
  assigntols: null,
  error: '',
};
const officeToolsRequestSlice = createSlice({
  name: 'officetools',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployeeTools.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getEmployeeTools.fulfilled, (state, action) => {
      state.loading = false;
      state.employeeTools = action.payload;
      state.error = '';
    });
    builder.addCase(getEmployeeTools.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getEmployeeDetailTools.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getEmployeeDetailTools.fulfilled, (state, action) => {
      state.loading = false;
      state.employeeDetailTools = action.payload;
      state.error = '';
    });
    builder.addCase(getEmployeeDetailTools.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(AssignOfficeTools.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AssignOfficeTools.fulfilled, (state, action) => {
      state.loading = false;
      state.assigntols = action.payload;
      state.error = '';
    });

    builder.addCase(AssignOfficeTools.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;

      toast.error(`${state.error}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        className: 'Forbidden403',
      });
    });
  },
});

export const officeToolsReducer = officeToolsRequestSlice.reducer;
export const getEmployeeToolsAction = getEmployeeTools;
export const getEmployeeDetailToolsAction = getEmployeeDetailTools;
export const AssignOfficeToolsAction = AssignOfficeTools;
