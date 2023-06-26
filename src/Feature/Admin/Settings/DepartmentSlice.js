import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
import axios from 'axios';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';

let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  department_data: null,
  department_isError: false,
  department_isSuccess: false,
  department_message: false,
  department_isLoading: false,
  openSetting_modal: false,
  department_update: null,
};

const DepartmentSlice_Fun_service = async (data) => {
  const { data_old, department } = data;

  let data_new = {
    name: department?.name,
    description: department?.description,
  };

  let API_URL;

  if (data_old === null) {
    API_URL = `${baseURL}admin/department`;
    return ApiConfigFormData()
      .post(API_URL, data_new)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  } else {
    let data_update = {
      name: department?.name,
    };

    API_URL = `${baseURL}admin/department/${data_old?.id}`;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await axios.put(API_URL, data_update, config);
    return response.data;
  }
};

export const DepartmentSlice_Fun = createAsyncThunk(
  'DepartmentSetting/create',
  async (data, thunkAPI) => {
    try {
      return await DepartmentSlice_Fun_service(data);
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

export const DepartmentSlice = createSlice({
  name: 'DepartmentSetting',
  initialState,

  reducers: {
    reset_department: (state) => initialState,

    OpenSetting_modalFun: (state, action) => {
      state.openSetting_modal = action.payload;
    },

    department_update_fun: (state, action) => {
      state.department_update = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(DepartmentSlice_Fun.pending, (state) => {
        state.department_isLoading = true;
      })

      .addCase(DepartmentSlice_Fun.fulfilled, (state, action) => {
        state.department_data = action.payload;
        state.department_isSuccess = true;
        state.department_isLoading = false;
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

      .addCase(DepartmentSlice_Fun.rejected, (state, action) => {
        state.department_isError = true;
        state.department_message = action.payload;
        state.department_isLoading = false;
        toast.error(`${state.department_message}`, {
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
  reset_department,
  OpenSetting_modalFun,
  OpenSetting_modalFunData,
  department_update_fun,
} = DepartmentSlice.actions;
export default DepartmentSlice.reducer;
