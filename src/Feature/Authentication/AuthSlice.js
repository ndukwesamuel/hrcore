import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const resetPassword = createAsyncThunk(
  'users/fetchByIdStatus',
  async (resetdata, { rejectWithValue }) => {
    const axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      timeout: 200000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return await axiosInstance
      .put('auth/password/reset', resetdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log('errttt', rejectWithValue(error.response.data.message));
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
  user: {},
  error: '',
  success: false,
};
const resetSlice = createSlice({
  name: 'resetuser',
  initialState,
  reducers: {
    reset() {},
  },
  extraReducers: (builder) => {
    builder.addCase(resetPassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = '';
      state.success = true;
      toast.success('password reset successful!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    });

    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
      toast.error(action.payload, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    });
  },
});

export const resetReducer = resetSlice.reducer;
export const reset = resetSlice.actions;
export const resetPasswordAction = resetPassword;
