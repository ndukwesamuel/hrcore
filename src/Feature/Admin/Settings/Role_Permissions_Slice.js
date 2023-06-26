import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
import axios from 'axios';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';

let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  Role_Permissions: null,
  Role_Permissions_isError: true,
  Role_Permissions_message: null,
  Role_Permissions_isLoading: false,
  Role_Permissions_isSuccess: false,

  Permissions_Data: null,
  Permissions_Data_isError: true,
  Permissions_Data_message: null,
  Permissions_Data_isLoading: false,
  Permissions_Data_isSuccess: false,

  Create_Role_Permissions: null,
  Create_Role_Permissions_isError: true,
  Create_Role_Permissions_message: null,
  Create_Role_Permissions_isLoading: false,
  Create_Role_Permissions_isSuccess: false,
};

const Role_Permissions_Fun_service = async (data) => {
  let API_URL = `${baseURL}admin/role`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const Role_Permissions_Fun = createAsyncThunk(
  'Role_Permissions/Role_Permissions_Fun',
  async (_, thunkAPI) => {
    try {
      return await Role_Permissions_Fun_service();
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

const Permissions_Fun_service = async (data) => {
  let API_URL = `${baseURL}admin/permissions`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

export const Permissions_Fun = createAsyncThunk(
  'Role_Permissions/Permissions_Fun',
  async (_, thunkAPI) => {
    try {
      return await Permissions_Fun_service();
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

const Create_Role_Permissions_Fun_service = async (data) => {
  let API_URL;
  console.log(data);

  if (data.id === null || data.id === undefined) {
    API_URL = `${baseURL}admin/role`;

    return ApiConfigFormData()
      .post(API_URL, data)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  } else {
    API_URL = `${baseURL}admin/role/${data.id.id}`;

    // console.log(API_URL);

    return ApiConfigFormData()
      .put(API_URL, data)
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
};

export const Create_Role_Permissions_Fun = createAsyncThunk(
  'Role_Permissions/Create_Role_Permissions_Fun',
  async (data, thunkAPI) => {
    try {
      return await Create_Role_Permissions_Fun_service(data);
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

const Delete_Role_Permissions_Fun_service = async (data) => {
  let API_URL = `${baseURL}admin/role/${data.id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  const response = await axios.delete(API_URL, config);

  return response.data;
};

export const Delete_Role_Permissions_Fun = createAsyncThunk(
  'Role_Permissions/Delete_Role_Permissions_Fun',
  async (data, thunkAPI) => {
    try {
      return await Delete_Role_Permissions_Fun_service(data);
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

export const Role_Permissions_Slice = createSlice({
  name: 'Role_Permissions',
  initialState,

  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(Role_Permissions_Fun.pending, (state) => {
        state.Global__Settings_isLoading = true;
      })
      .addCase(Role_Permissions_Fun.fulfilled, (state, action) => {
        state.Role_Permissions = action.payload;
        state.Role_Permissions_isSuccess = true;
        state.Role_Permissions_isLoading = false;
      })
      .addCase(Role_Permissions_Fun.rejected, (state, action) => {
        state.Role_Permissions_isError = true;
        state.Role_Permissions_message = action.payload;
        state.Role_Permissions_isLoading = false;

        toast.error(`${state.Role_Permissions_message}`, {
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

      .addCase(Permissions_Fun.pending, (state) => {
        state.Permissions_Data_isLoading = true;
      })
      .addCase(Permissions_Fun.fulfilled, (state, action) => {
        state.Permissions_Data = action.payload;
        state.Permissions_Data_isSuccess = true;
        state.Permissions_Data_isLoading = false;
      })
      .addCase(Permissions_Fun.rejected, (state, action) => {
        state.Permissions_Data_isError = true;
        state.Permissions_Data_message = action.payload;
        state.Permissions_Data_isLoading = false;

        toast.error(`${state.Permissions_Data_message}`, {
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

      .addCase(Create_Role_Permissions_Fun.pending, (state) => {
        state.Global__Settings_isLoading = true;
      })
      .addCase(Create_Role_Permissions_Fun.fulfilled, (state, action) => {
        state.Create_Role_Permissions = action.payload;
        state.Create_Role_Permissions_isSuccess = true;
        state.Create_Role_Permissions_isLoading = false;

        toast.success(' Created  successful!', {
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
      .addCase(Create_Role_Permissions_Fun.rejected, (state, action) => {
        state.Create_Role_Permissions_isError = true;
        state.Create_Role_Permissions_message = action.payload;
        state.Create_Role_Permissions_isLoading = false;

        toast.error(`${state.Create_Role_Permissions_message}`, {
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

      .addCase(Delete_Role_Permissions_Fun.pending, (state) => {
        state.Global__Settings_isLoading = true;
      })
      .addCase(Delete_Role_Permissions_Fun.fulfilled, (state, action) => {
        state.Create_Role_Permissions = action.payload;
        state.Create_Role_Permissions_isSuccess = true;
        state.Create_Role_Permissions_isLoading = false;

        console.log(state.Create_Role_Permissions);
        toast.success(`${state.Create_Role_Permissions}`, {
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
      .addCase(Delete_Role_Permissions_Fun.rejected, (state, action) => {
        state.Create_Role_Permissions_isError = true;
        state.Create_Role_Permissions_message = action.payload;
        state.Create_Role_Permissions_isLoading = false;

        toast.error(`${state.Create_Role_Permissions_message}`, {
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

export const {} = Role_Permissions_Slice.actions;
export default Role_Permissions_Slice.reducer;
