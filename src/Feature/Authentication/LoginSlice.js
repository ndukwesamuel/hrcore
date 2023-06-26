import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const Loginauth = createAsyncThunk(
  'loginauth/login_auth',
  async (logindetails, { rejectWithValue }) => {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_BASEURL,
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await instance
      .post('auth/login', logindetails)
      .then((response) => {
        localStorage.removeItem('token');
        if (response.data.extra.token !== undefined) {
          localStorage.setItem('token', response.data.extra.token);
        }
        return response.data;
      })
      .catch((err) => {
        let errdata = err.response.data;

        toast.error(`${errdata.message}`, {
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

        console.log(errdata);

        return rejectWithValue(errdata);
      });
  }
);

const initialState = {
  loading: false,
  authtoken: null,
  success: false,
  error: false,
  register: true,
  resetPassword: '',
  userData: null,
  extra: null,
  permissions: [],
};

const authSlice = createSlice({
  name: 'authtokenreducer',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Loginauth.pending, (state) => {
        state.loading = true;
      })
      .addCase(Loginauth.fulfilled, (state, action) => {
        state.loading = false;
        state.authtoken = action.payload.extra.token;
        state.userData = action.payload.data;
        state.success = true;
        state.extra = action.payload.extra.admin_logged_in;
        state.permissions = action.payload.extra.permissions ?? [];
        state.resetPassword = action.payload?.data?.reset_password
          ? action.payload?.extra?.reset_token
          : false;
      })
      .addCase(Loginauth.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
        state.message = action.payload?.data?.message;
      });
  },
});

export const { reset } = authSlice.actions;

export const loginReducer = authSlice.reducer;
