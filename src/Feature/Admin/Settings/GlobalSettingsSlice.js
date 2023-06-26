import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
import axios from 'axios';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';

let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  Global__Settings: null,

  Global__Settings_isError: true,
  Global__Settings_message: null,
  Global__Settings_isLoading: false,

  Global__Settings_isSuccess: false,
};

const Global_Settings_Fun_service = async (data) => {
  let API_URL = `${baseURL}settings/all`;
  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const Global_Settings_Fun = createAsyncThunk(
  'GlobalSettings/Global_Settings_Fun',
  async (_, thunkAPI) => {
    try {
      return await Global_Settings_Fun_service();
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

export const GlobalSettingsSlice = createSlice({
  name: 'GlobalSettings',
  initialState,

  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(Global_Settings_Fun.pending, (state) => {
        state.Global__Settings_isLoading = true;
      })
      .addCase(Global_Settings_Fun.fulfilled, (state, action) => {
        state.Global__Settings = action.payload;
        state.Global__Settings_isSuccess = true;
        state.Global__Settings_isLoading = false;
      })
      .addCase(Global_Settings_Fun.rejected, (state, action) => {
        state.Global__Settings_isError = true;
        state.Global__Settings_message = action.payload;
        state.Global__Settings_isLoading = false;

        console.log(state.Global__Settings_message);
        toast.error(`${state.Global__Settings_message}`, {
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

export const {} = GlobalSettingsSlice.actions;
export default GlobalSettingsSlice.reducer;
