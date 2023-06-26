import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
import axios from 'axios';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';

let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  All_Offboading: [],
  single_Offboading: null,
  All_employee_Offbord_data: null,
  admin_single_offboard: null,
  create_Employee_request: null,
  adminAprovedStatus: null,
  adminAprovedStatus_isSuccess: false,
  adminAprovedStatus_isError: false,
  adminAprovedStatus_message: '',
  isError: false,
  isSuccess: false,
  offboard_isSuccess: false,
  isLoading: false,
  message: '',
};

const Admin_Approved_offboarding_status_Service = async (data) => {
  let API_URL = `${baseURL}admin/offboarding/${data.id}/status`;
  let newdate = { status: data.status_Data };

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const response = await axios.put(API_URL, newdate, config);

  return response.data;
};

export const Admin_Approved_offboarding_statusFun = createAsyncThunk(
  'adminOffboard/Admin_Approved_offboarding_status',
  async (data, thunkAPI) => {
    try {
      return await Admin_Approved_offboarding_status_Service(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const Employee_Create_offboard_Service = async (data) => {
  let API_URL = `${baseURL}api/offboarding`;

  return ApiConfigFormData()
    .post(API_URL, data)
    .then((response) => {
      return response.data;
    });
};

export const Employee_Create_offboardFun = createAsyncThunk(
  'adminOffboard/employee_Create_offboardFun',
  async (data, thunkAPI) => {
    try {
      return await Employee_Create_offboard_Service(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const Employee_Get_Single_offboard_Service = async (id) => {
  let API_URL = `${baseURL}api/offboarding/${id}`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const Employee_Get_Single_offboardFun = createAsyncThunk(
  'adminOffboard/employee_get_Single_offboard',
  async (id, thunkAPI) => {
    try {
      return await Employee_Get_Single_offboard_Service(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const GetSingleoffboardService = async (id) => {
  let API_URL = `${baseURL}admin/offboarding/${id}`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const Admin_Get_Single_offboardFun = createAsyncThunk(
  'adminOffboard/getSingleoffboard',
  async (id, thunkAPI) => {
    try {
      return await GetSingleoffboardService(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const GetalloffboardService = async () => {
  let API_URL = `${baseURL}admin/offboarding`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const GetalloffboardFun = createAsyncThunk(
  'adminOffboard/getalloffboard',
  async (_, thunkAPI) => {
    try {
      return await GetalloffboardService();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const Get_all_Employeeo_offboard_service = async () => {
  let API_URL = `${baseURL}api/offboarding`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const Get_all_Employee_offboard_Fun = createAsyncThunk(
  'adminOffboard/get_all_Employeeo_ffboardFun',
  async (_, thunkAPI) => {
    try {
      return await Get_all_Employeeo_offboard_service();
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

export const OffboardSlice = createSlice({
  name: 'adminOffboard',
  initialState,

  reducers: {
    reset: (state) => initialState,
    resetGetalloffboardFun: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.All_Offboading = [];
    },

    reset_Create_Employee_request: (state) => {
      state.isLoading = false;
      state.offboard_isSuccess = false;
      state.isError = false;
      state.message = '';
      state.create_Employee_request = null;
    },

    reset_adminAprovedStatus: (state) => {
      state.isLoading = false;
      state.adminAprovedStatus_isSuccess = false;
      state.adminAprovedStatus_isError = false;
      state.adminAprovedStatus_message = '';
      state.adminAprovedStatus = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(GetalloffboardFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetalloffboardFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.All_Offboading = action.payload;
      })
      .addCase(GetalloffboardFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(Get_all_Employee_offboard_Fun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Get_all_Employee_offboard_Fun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.All_employee_Offbord_data = action.payload;
      })
      .addCase(Get_all_Employee_offboard_Fun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(Admin_Get_Single_offboardFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Admin_Get_Single_offboardFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.admin_single_offboard = action.payload;
      })
      .addCase(Admin_Get_Single_offboardFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(Employee_Get_Single_offboardFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Employee_Get_Single_offboardFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.single_Offboading = action.payload;
      })
      .addCase(Employee_Get_Single_offboardFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(Employee_Create_offboardFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Employee_Create_offboardFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offboard_isSuccess = true;
        state.create_Employee_request = action.payload;
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
      .addCase(Employee_Create_offboardFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(`${state.message}`, {
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
      })

      .addCase(Admin_Approved_offboarding_statusFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        Admin_Approved_offboarding_statusFun.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.adminAprovedStatus = action.payload;
          state.adminAprovedStatus_isSuccess = true;
          state.adminAprovedStatus_isError = false;
        }
      )
      .addCase(
        Admin_Approved_offboarding_statusFun.rejected,
        (state, action) => {
          state.isLoading = false;
          state.adminAprovedStatus_isError = true;
          state.adminAprovedStatus_message = action.payload;

          toast.error(`${state.message}`, {
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
        }
      );
  },
});

export const {
  reset_adminAprovedStatus,
  reset,
  reset_Create_Employee_request,
  resetGetalloffboardFun,
} = OffboardSlice.actions;
export default OffboardSlice.reducer;
