import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';
let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  AddAccountData: null,
  AllAccountData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Add Bank Account

const AddaccountService = async (data) => {
  let API_URL = `${baseURL}admin/accounts`;
  let one = parseInt(data.Account_Number);
  let newData = {
    bank_name: data.Bank_Name,
    account_number: one,
    account_name: data.Account_Name,
    short_code: data.Sort_Code,
    tin: data.TIN,
  };

  return ApiConfigFormData()
    .post(API_URL, newData)
    .then((response) => {
      return response.data;
    });
};
export const AddBankAccountFun = createAsyncThunk(
  'Account/Add_Bank_Account',
  async (data, thunkAPI) => {
    try {
      return await AddaccountService(data);
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

// Get all Bank Account

const GetAllaccount = async () => {
  let API_URL = `${baseURL}admin/accounts`;

  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const GetALLBankAccountFun = createAsyncThunk(
  'Account/GetAll_Bank_Account',
  async (_, thunkAPI) => {
    try {
      return await GetAllaccount();
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

export const AccountSlice = createSlice({
  name: 'Account',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    resetAccount: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.AddAccountData = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(AddBankAccountFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddBankAccountFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.AddAccountData = action.payload;
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
      .addCase(AddBankAccountFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(GetALLBankAccountFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetALLBankAccountFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.AllAccountData = action.payload;
      })
      .addCase(GetALLBankAccountFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { resetAccount } = AccountSlice.actions;
export default AccountSlice.reducer;
