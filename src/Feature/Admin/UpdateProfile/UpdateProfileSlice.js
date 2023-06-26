import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
import axios from 'axios';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';

let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  UpdateProfile: null,
  UpdateProfile_isError: false,
  UpdateProfile_isSuccess: false,
  UpdateProfile_message: false,
  UpdateProfile_isLoading: false,

  Basic_Information_data: null,
  Organization___data: null,
  Qualifications_data: null,

  Get_User_Profile: null,
  Get_User_Profile_isError: false,
  Get_User_Profile_isSuccess: false,
  Get_User_Profile_message: false,
  Get_User_Profile_isLoading: false,
};

const Get_User_Profile_fun_Service = async () => {
  let API_URL = `${baseURL}api/profile`;

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  const response = await axios.get(API_URL, config);

  console.log(response.data);

  return response.data;
};

export const Get_User_Profile_fun = createAsyncThunk(
  'updateProfile/Get_User_Profile_fun',
  async (_, thunkAPI) => {
    try {
      return await Get_User_Profile_fun_Service();
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

const RealUpdateFunService = async (data, isAdminOrNot) => {
  let API_URL;

  if (isAdminOrNot === 1) {
    API_URL = `${baseURL}admin/employee/${data.id}`;

    console.log(data);

    let admin_Data = {
      employee_id: data.Organization___data.employee_id,
      position_level_id: data.Organization___data.grade,
      department_id: data.Organization___data.department,
      branch_id: data.Organization___data.branch,
      // role: data.Organization___data.role,

      role: null,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    const response = await axios.put(API_URL, admin_Data, config);

    console.log(response.data);

    return response.data;
  } else {
    API_URL = `${baseURL}api/profile`;

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    let department_id = parseInt(data.Organization___data.department);

    let newdata = {
      first_name: data.Basic_Information_data.first_name,
      last_name: data.Basic_Information_data.last_name,
      middle_name: data.Basic_Information_data.middle_name,
      personal_email: data.Basic_Information_data.personal_email,
      gender: data.Basic_Information_data.gender,
      marital_status: data.Basic_Information_data.marital_status,
      lga: data.Basic_Information_data.lga,
      residence: data.Basic_Information_data.residence,
      profile_image: '',
      dob: data.Basic_Information_data.dob,
      designation: 'dont know for now',
      origin_state: data.Basic_Information_data.origin_state,

      employee_id: data.Organization___data.employee_id,
      role: data.Organization___data.role,
      grade: data.Organization___data.grade,
      position: data.Organization___data.position,
      branch: data.Organization___data.branch,
      pension: data.Organization___data.pension,
      pension_number: data.Organization___data.pension_number,
      department: data.Organization___data.department,

      hmo: {
        provider: data.Organization___data.hmo.provider,
        hmo_id: data.Organization___data.hmo.hmo_id,
        hospital: data.Organization___data.hmo.hospital,
        status: data.Organization___data.hmo.status,
        plan: data.Organization___data.hmo.plan,
      },

      education: data.Qualifications_data,
      experience: data.educationList,
    };

    const response = await axios.put(API_URL, newdata, config);

    console.log(response.data);

    return response.data;
  }
};

export const RealUpdateFun = createAsyncThunk(
  'updateProfile/RealUpdateFun',
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const isAdminOrNot = thunkAPI.getState().reducer.loginReducer.extra;

      return await RealUpdateFunService(data, isAdminOrNot);
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

export const UpdateProfileSlice = createSlice({
  name: 'updateProfile',
  initialState,

  reducers: {
    Basic_Information_data_fun: (state, action) => {
      state.Basic_Information_data = action.payload;
    },
    reset_UpdateProfile: (state) => initialState,

    Organization___data_fun: (state, action) => {
      state.Organization___data = action.payload;
    },

    Qualifications_fun: (state, action) => {
      state.Qualifications_data = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(RealUpdateFun.pending, (state) => {
        state.UpdateProfile_isLoading = true;
      })
      .addCase(RealUpdateFun.fulfilled, (state, action) => {
        state.UpdateProfile = action.payload;
        state.UpdateProfile_isSuccess = true;
        state.UpdateProfile_isLoading = false;
        toast.success('gotten Update', {
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
      .addCase(RealUpdateFun.rejected, (state, action) => {
        state.UpdateProfile_isError = true;
        state.UpdateProfile_message = action.payload;
        state.UpdateProfile_isLoading = false;
        toast.error(`${state.UpdateProfile_message}`, {
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

      .addCase(Get_User_Profile_fun.pending, (state) => {
        state.Get_User_Profile_isLoading = true;
      })
      .addCase(Get_User_Profile_fun.fulfilled, (state, action) => {
        state.Get_User_Profile = action.payload;
        state.Get_User_Profile_isSuccess = true;
        state.Get_User_Profile_isLoading = false;
      })
      .addCase(Get_User_Profile_fun.rejected, (state, action) => {
        state.Get_User_Profile_isError = true;
        state.Get_User_Profile_message = action.payload;
        state.Get_User_Profile_isLoading = false;
        toast.error(`${state.Get_User_Profile_message}`, {
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
  Basic_Information_data_fun,
  reset_UpdateProfile,
  Organization___data_fun,
  Qualifications_fun,
} = UpdateProfileSlice.actions;
export default UpdateProfileSlice.reducer;
