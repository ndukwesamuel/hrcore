import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
import axios from 'axios';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';

let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  CreateBranch: null,
  CreateBranch_isError: false,
  CreateBranch_isSuccess: false,
  CreateBranch_message: false,
  CreateBranch_isLoading: false,

  GetAllBranch: null,
  GetAllBranch_isError: false,
  GetAllBranch_isSuccess: false,
  GetAllBranch_message: false,
  GetAllBranch_isLoading: false,

  CreateLeaveTypes: null,
  CreateLeaveTypes_isError: false,
  CreateLeaveTypes_isSuccess: false,
  CreateLeaveTypes_message: false,
  CreateLeaveTypes_isLoading: false,

  GetLeaveTypes: null,
  GetLeaveTypes_isError: false,
  GetLeaveTypes_isSuccess: false,
  GetLeaveTypes_message: false,
  GetLeaveTypes_isLoading: false,

  OfficeTools: null,
  OfficeTools_isError: false,
  OfficeTools_isSuccess: false,
  OfficeTools_message: false,
  OfficeTools_isLoading: false,

  CreateOfficeTools: null,
  CreateOfficeTools_isError: false,
  CreateOfficeTools_isSuccess: false,
  CreateOfficeTools_message: false,
  CreateOfficeTools_isLoading: false,

  CreatePosition: null,
  CreatePosition_isError: false,
  CreatePosition_isSuccess: false,
  CreatePosition_message: false,
  CreatePosition_isLoading: false,

  GetallPosition: null,
  GetallPosition_isError: false,
  GetallPosition_isSuccess: false,
  GetallPosition_message: false,
  GetallPosition_isLoading: false,

  createGrade: null,
  createGrade_isError: false,
  createGrade_isSuccess: false,
  createGrade_message: false,
  createGrade_isLoading: false,

  GetGrade: null,
  GetGrade_isError: false,
  GetGrade_isSuccess: false,
  GetGrade_message: false,
  GetGrade_isLoading: false,

  GetAdmin: null,
  GetAdmin_isError: false,
  GetAdmin_isSuccess: false,
  GetAdmin_message: false,
  GetAdmin_isLoading: false,
};

const GetAdminFun_service = async (data) => {
  let API_URL = `${baseURL}settings/admins`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const GetAdminFun = createAsyncThunk(
  'branch/GetAdminFun',
  async (_, thunkAPI) => {
    try {
      return await GetAdminFun_service();
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

const GetGradeFun_service = async (data) => {
  let API_URL = `${baseURL}settings/leave-salary-structure`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const GetGradeFun = createAsyncThunk(
  'branch/GetGradeFun',
  async (_, thunkAPI) => {
    try {
      return await GetGradeFun_service();
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

const createGradeFunservice = async (data) => {
  let API_URL = `${baseURL}settings/leave-salary-structure`;

  console.log(API_URL);

  return ApiConfigFormData()
    .post(API_URL, data)
    .then((response) => {
      console.log(response.data);
      // return response.data;
    });
};

export const createGradeFun = createAsyncThunk(
  'branch/createGradeFun',
  async (data, thunkAPI) => {
    try {
      return await createGradeFunservice(data);
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

const GetallPositionFun_service = async (data) => {
  let API_URL = `${baseURL}settings/position-levels`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    });
};

export const GetallPositionFun = createAsyncThunk(
  'branch/GetallPosition',
  async (_, thunkAPI) => {
    try {
      return await GetallPositionFun_service();
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

const GetLeaveTypesFun_service = async (data) => {
  let API_URL = `${baseURL}settings/leave-type`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const GetLeaveTypesFun = createAsyncThunk(
  'branch/GetLeaveTypes',
  async (_, thunkAPI) => {
    try {
      return await GetLeaveTypesFun_service();
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

const CreatePositionFunservice = async (data) => {
  let API_URL = `${baseURL}settings/position-levels`;

  return ApiConfigFormData()
    .post(API_URL, data)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const CreatePositionFun = createAsyncThunk(
  'branch/CreatePositionFun',
  async (data, thunkAPI) => {
    try {
      return await CreatePositionFunservice(data);
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

const CreateOfficeToolsFun_service = async (data) => {
  let API_URL = `${baseURL}settings/office-tools`;
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const response = await axios.post(API_URL, data, config);

  console.log(response.data);
  return response.data;
};

export const CreateOfficeToolsFun = createAsyncThunk(
  'branch/CreateOfficeToolsFun',
  async (data, thunkAPI) => {
    try {
      // const data2 = thunkAPI.getState();
      // console.log(data2);
      return await CreateOfficeToolsFun_service(data);
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

const OfficeToolsFun_service = async (data) => {
  let API_URL = `${baseURL}settings/office-tools`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const OfficeToolsFun = createAsyncThunk(
  'branch/OfficeToolsFun',
  async (_, thunkAPI) => {
    try {
      return await OfficeToolsFun_service();
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

const CreateLeaveTypesFun_service = async (data) => {
  let API_URL = `${baseURL}settings/leave-type`;

  return ApiConfigFormData()
    .post(API_URL, data)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};
export const CreateLeaveTypesFun = createAsyncThunk(
  'branch/CreateLeaveTypes',
  async (data, thunkAPI) => {
    try {
      return await CreateLeaveTypesFun_service(data);
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

const GetAllBranchFun_service = async () => {
  let API_URL = `${baseURL}admin/company`;

  console.log('this is me');

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      //   console.log(response.data);
      return response.data;
    });
};

export const GetAllBranchFun = createAsyncThunk(
  'branch/getall',
  async (_, thunkAPI) => {
    try {
      return await GetAllBranchFun_service();
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

// this is to create a company
const CreateBranchFun_service = async (data) => {
  let API_URL = `${baseURL}admin/company`;

  return ApiConfigFormData()
    .post(API_URL, data)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const CreateBranchFun = createAsyncThunk(
  'branch/cretae',
  async (data, thunkAPI) => {
    try {
      return await CreateBranchFun_service(data);
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

export const BranchSlice = createSlice({
  name: 'branch',
  initialState,

  reducers: {
    reset: (state) => initialState,
    resetCreateBranch: (state) => {
      state.CreateBranch = null;
      state.CreateBranch_isError = false;
      state.CreateBranch_isSuccess = false;
      state.CreateBranch_message = false;
      state.CreateBranch_isLoading = false;
    },

    resetCreateLeaveTypes: (state) => {
      state.CreateLeaveTypes = null;
      state.CreateLeaveTypes_isError = false;
      state.CreateLeaveTypes_isSuccess = false;
      state.CreateLeaveTypes_message = false;
      state.CreateLeaveTypes_isLoading = false;
    },

    resetCreateOfficeTools: (state) => {
      state.CreateOfficeTools = null;
      state.CreateOfficeTools_isError = false;
      state.CreateOfficeTools_isSuccess = false;
      state.CreateOfficeTools_message = false;
      state.CreateOfficeTools_isLoading = false;
    },

    resetcreateGrade: (state) => {
      state.createGrade = null;
      state.createGrade_isError = false;
      state.createGrade_isSuccess = false;
      state.createGrade_message = false;
      state.createGrade_isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(CreateBranchFun.pending, (state) => {
        state.CreateBranch_isLoading = true;
      })
      .addCase(CreateBranchFun.fulfilled, (state, action) => {
        state.CreateBranch = action.payload;
        state.CreateBranch_isSuccess = true;
        state.CreateBranch_isLoading = false;
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
      .addCase(CreateBranchFun.rejected, (state, action) => {
        state.CreateBranch_isError = true;
        state.CreateBranch_message = action.payload;
        state.CreateBranch_isLoading = false;

        toast.error(`${state.CreateBranch_message}`, {
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
      .addCase(GetAllBranchFun.pending, (state) => {
        state.GetAllBranch_isLoading = true;
      })
      .addCase(GetAllBranchFun.fulfilled, (state, action) => {
        state.GetAllBranch = action.payload;
        state.GetAllBranch_isSuccess = true;
        state.GetAllBranch_isLoading = false;
      })
      .addCase(GetAllBranchFun.rejected, (state, action) => {
        state.GetAllBranch_isError = true;
        state.GetAllBranch_message = action.payload;
        state.GetAllBranch_isLoading = false;
        toast.error(`${state.CreateBranch_message}`, {
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
      .addCase(CreateLeaveTypesFun.pending, (state) => {
        state.CreateLeaveTypes_isLoading = true;
      })
      .addCase(CreateLeaveTypesFun.fulfilled, (state, action) => {
        state.CreateLeaveTypes = action.payload;
        state.CreateLeaveTypes_isSuccess = true;
        state.CreateLeaveTypes_isLoading = false;
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
      .addCase(CreateLeaveTypesFun.rejected, (state, action) => {
        state.CreateLeaveTypes_isError = true;
        state.CreateLeaveTypes_message = action.payload;
        state.CreateLeaveTypes_isLoading = false;
        toast.error(`${state.CreateLeaveTypes_message}`, {
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
      .addCase(OfficeToolsFun.pending, (state) => {
        state.OfficeTools_isLoading = true;
      })
      .addCase(OfficeToolsFun.fulfilled, (state, action) => {
        state.OfficeTools = action.payload;
        state.OfficeTools_isSuccess = true;
        state.OfficeTools_isLoading = false;
      })
      .addCase(OfficeToolsFun.rejected, (state, action) => {
        state.OfficeTools_isError = true;
        state.OfficeTools_message = action.payload;
        state.OfficeTools_isLoading = false;
        toast.error(`${state.OfficeTools_message}`, {
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

      .addCase(CreateOfficeToolsFun.pending, (state) => {
        state.CreateOfficeTools_isLoading = true;
      })
      .addCase(CreateOfficeToolsFun.fulfilled, (state, action) => {
        state.CreateOfficeTools = action.payload;
        state.CreateOfficeTools_isSuccess = true;
        state.CreateOfficeTools_isLoading = false;
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
      .addCase(CreateOfficeToolsFun.rejected, (state, action) => {
        state.CreateOfficeTools_isError = true;
        state.CreateOfficeTools_message = action.payload;
        state.CreateOfficeTools_isLoading = false;
        toast.error(`${state.CreateOfficeTools_message}`, {
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

      .addCase(CreatePositionFun.pending, (state) => {
        state.CreatePosition_isLoading = true;
      })
      .addCase(CreatePositionFun.fulfilled, (state, action) => {
        state.CreatePosition = action.payload;
        state.CreatePosition_isSuccess = true;
        state.CreatePosition_isLoading = false;
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
      .addCase(CreatePositionFun.rejected, (state, action) => {
        state.CreatePosition_isError = true;
        state.CreatePosition_message = action.payload;
        state.CreatePosition_isLoading = false;
        toast.error(`${state.CreatePosition_message}`, {
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

      .addCase(GetLeaveTypesFun.pending, (state) => {
        state.GetLeaveTypes_isLoading = true;
      })
      .addCase(GetLeaveTypesFun.fulfilled, (state, action) => {
        state.GetLeaveTypes = action.payload;
        state.GetLeaveTypes_isSuccess = true;
        state.GetLeaveTypes_isLoading = false;
      })
      .addCase(GetLeaveTypesFun.rejected, (state, action) => {
        state.GetLeaveTypes_isError = true;
        state.GetLeaveTypes_message = action.payload;
        state.GetLeaveTypes_isLoading = false;

        console.log(state.GetLeaveTypes_message);
        toast.error(`${state.GetLeaveTypes_message}`, {
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

      .addCase(GetallPositionFun.pending, (state) => {
        state.GetallPosition_isLoading = true;
      })
      .addCase(GetallPositionFun.fulfilled, (state, action) => {
        state.GetallPosition = action.payload;
        state.GetallPosition_isSuccess = true;
        state.GetallPosition_isLoading = false;
      })
      .addCase(GetallPositionFun.rejected, (state, action) => {
        state.GetallPosition_isError = true;
        state.GetallPosition_message = action.payload;
        state.GetallPosition_isLoading = false;
        toast.error(`${state.GetallPosition_message}`, {
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

      .addCase(createGradeFun.pending, (state) => {
        state.createGrade_isLoading = true;
      })

      .addCase(createGradeFun.fulfilled, (state, action) => {
        state.createGrade = action.payload;
        state.createGrade_isSuccess = true;
        state.createGrade_isLoading = false;
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
      .addCase(createGradeFun.rejected, (state, action) => {
        state.createGrade_isError = true;
        state.createGrade_message = action.payload;
        state.createGrade_isLoading = false;
        toast.error(`${state.createGrade_message}`, {
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

      .addCase(GetGradeFun.pending, (state) => {
        state.GetGrade_isLoading = true;
      })

      .addCase(GetGradeFun.fulfilled, (state, action) => {
        state.GetGrade = action.payload;
        state.GetGrade_isSuccess = true;
        state.GetGrade_isLoading = false;
      })
      .addCase(GetGradeFun.rejected, (state, action) => {
        state.GetGrade_isError = true;
        state.GetGrade_message = action.payload;
        state.GetGrade_isLoading = false;
        toast.error(`${state.GetGrade_message}`, {
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

      .addCase(GetAdminFun.pending, (state) => {
        state.GetAdmin_isLoading = true;
      })

      .addCase(GetAdminFun.fulfilled, (state, action) => {
        state.GetAdmin = action.payload;
        state.GetAdmin_isSuccess = true;
        state.GetAdmin_isLoading = false;
      })
      .addCase(GetAdminFun.rejected, (state, action) => {
        state.GetAdmin_message = true;
        state.GetAdmin_message = action.payload;
        state.GetAdmin_isLoading = false;
        toast.error(`${state.GetAdmin_message}`, {
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

export const {
  resetCreateBranch,
  resetCreateLeaveTypes,
  resetCreateOfficeTools,
  resetcreateGrade,
} = BranchSlice.actions;
export default BranchSlice.reducer;
