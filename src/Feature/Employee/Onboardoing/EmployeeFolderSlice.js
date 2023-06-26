import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';
import { ApiConfig } from '../../../utilities/apiconfig';
// import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
// import { ErrorFunc } from '../../../utilities/ApiErrorFun';
let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  Allfolderdata: null,
  Allfiledata: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const GetAllEmployeeFileService = async (data) => {
  let API_URL = `${baseURL}api/folders/${data}`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const GetAllEmployeeFlieFun = createAsyncThunk(
  'Employee_Folder_file/employeeFile',
  async (data, thunkAPI) => {
    try {
      return await GetAllEmployeeFileService(data);
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

const GetAllEmployeeFolderService = async () => {
  let API_URL = `${baseURL}api/folders`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const GetAllEmployeeFolderFun = createAsyncThunk(
  'Employee_Folder_file/employeeFolder',
  async (_, thunkAPI) => {
    try {
      return await GetAllEmployeeFolderService();
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

export const EmployeeFolderSlice = createSlice({
  name: 'Employee_Folder_file',
  initialState,
  reducers: {
    reset_EmployeeFolder: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },

    reset_Employeefile: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.Allfiledata = null;
    },
    //   resetAccount: (state) => {
    //     state.isLoading = false;
    //     state.isSuccess = false;
    //     state.isError = false;
    //     state.message = '';
    //     state.AddAccountData = null;
    //   },
  },

  extraReducers: (builder) => {
    builder
      .addCase(GetAllEmployeeFolderFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllEmployeeFolderFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Allfolderdata = action.payload;
        state.message = '';
      })
      .addCase(GetAllEmployeeFolderFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(GetAllEmployeeFlieFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllEmployeeFlieFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.Allfiledata = action.payload;
        state.message = '';
      })
      .addCase(GetAllEmployeeFlieFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset_EmployeeFolder, reset_Employeefile } =
  EmployeeFolderSlice.actions;
export default EmployeeFolderSlice.reducer;
