import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig } from '../../../utilities/apiconfig';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';

const getAdminEmployeeList = createAsyncThunk(
  'users/adminemployee',
  async (dates, { rejectWithValue }) => {
    return ApiConfig()
      .get(`/admin/employee`)
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
        ErrorFunc(error);

        return rejectWithValue(message);
      });
  }
);
// http://46.101.192.160:60/admin/employee?page=2
const getAdminNextEmployeeList = createAsyncThunk(
  'users/adminnextemployee',
  async (page, { rejectWithValue }) => {
    return ApiConfig()
      .get(`/admin/employee?page=${page}`)
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
        ErrorFunc(error);

        return rejectWithValue(message);
      });
  }
);

const getAdminOneEmployee = createAsyncThunk(
  'users/adminoneemployee',
  async (id, { rejectWithValue }) => {
    return ApiConfig()
      .get(`/admin/employee/${id}`)
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
        ErrorFunc(error);
        return rejectWithValue(message);
      });
  }
);

const initialState = {
  loading: false,
  getAdminEmployee: [],
  getAdminOneEmployee: {},
  error: '',
};
const adminEmployeeSlice = createSlice({
  name: 'adminemployee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAdminEmployeeList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAdminEmployeeList.fulfilled, (state, action) => {
      state.loading = false;
      state.getAdminEmployee = action.payload;
      state.error = '';
    });

    builder.addCase(getAdminEmployeeList.rejected, (state, action) => {
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

    builder.addCase(getAdminNextEmployeeList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAdminNextEmployeeList.fulfilled, (state, action) => {
      state.loading = false;
      state.getAdminEmployee = action.payload;
      state.error = '';
    });

    builder.addCase(getAdminNextEmployeeList.rejected, (state, action) => {
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

    builder.addCase(getAdminOneEmployee.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAdminOneEmployee.fulfilled, (state, action) => {
      state.loading = false;
      state.getAdminOneEmployee = action.payload;
      state.error = '';
    });

    builder.addCase(getAdminOneEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const adminEmployeeSliceReducer = adminEmployeeSlice.reducer;
export const getAdminEmployeeListAction = getAdminEmployeeList;
export const getAdminNextEmployeeListAction = getAdminNextEmployeeList;
export const getAdminOneEmployeeAction = getAdminOneEmployee;
