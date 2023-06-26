import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const Base_URL = process.env.REACT_APP_BASEURL;

const initialState = {
  useremail: null,
  IsError: false,
  isLoading: false,
  isSuccess: false,
  message: null,
};

// forgotpassword
const ForgetPasswordService = async (data) => {
  const response = await axios.post(Base_URL + 'auth/password/retrieve', data);

  return response.data;
};

// service end here

export const ForgotPassword = createAsyncThunk(
  'users/forgetpassword',
  async (useremail, thunkApi) => {
    try {
      return await ForgetPasswordService(useremail);
    } catch (error) {
      const message =
        error?.response?.data?.message || error.message || error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

export const ForgotpasswordSlice = createSlice({
  name: 'forgotpassword',
  initialState,
  reducers: {
    reset: (state) => {
      state.useremail = false;
      state.isLoading = false;
      state.IsError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(ForgotPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ForgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.useremail = action.payload;
      })
      .addCase(ForgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.useremail = null;
        state.message = action.payload;
        state.IsError = true;
      });
  },
});

export const { reset } = ForgotpasswordSlice.actions;
export default ForgotpasswordSlice.reducer;
