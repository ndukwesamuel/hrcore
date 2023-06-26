import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ApiConfigFormData } from '../../../utilities/apiconfig';

const Base_URL = process.env.REACT_APP_BASEURL;

const initialState = {
  createUser: null,
  multiplestaff: null,
  IsError: false,
  isLoading: false,
  isSuccess: false,
  message: null,
};

// add new single  staff
const CreateSingleStaffService = async (staffdata, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  let url = Base_URL + 'admin/employee';

  const response = await axios.post(url, staffdata, config);

  // return response.data;

  console.log(response.data);
};

export const CreateSingleStaff = createAsyncThunk(
  'addstaff/single',
  async (staffdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().reducer.loginReducer.authtoken;
      return await CreateSingleStaffService(staffdata, token);
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

export const CreateSingleStaffSlice = createSlice({
  name: 'addstaff',
  initialState,
  reducers: {
    reset_CreateSingleStaffSlice: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(CreateSingleStaff.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateSingleStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.createUser = action.payload;
        state.message = null;
        state.IsError = null;
        toast.success('Account Created  successful!', {
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
      .addCase(CreateSingleStaff.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.createUser = null;
        state.message = action.payload;
        state.IsError = true;
      });
  },
});

export const { reset_CreateSingleStaffSlice } = CreateSingleStaffSlice.actions;

export default CreateSingleStaffSlice.reducer;
