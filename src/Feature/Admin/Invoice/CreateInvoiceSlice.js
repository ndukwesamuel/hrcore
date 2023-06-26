import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  CreateinvoiceData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// // Add Bank Account

const CreateInvoiceService = async (data) => {
  let { varAmount, vatTotalPrice, createInvoice, itemForm } = data;

  let newData = {
    invoice_account_id: createInvoice.bank,
    invoice_tag_id: createInvoice.tag,
    contact_id: createInvoice.contact,
    due_date: createInvoice.date,
    items: itemForm,
    vat: varAmount,
    total_amount: vatTotalPrice, //total.toFixed(2),
  };

  let API_URL = `${baseURL}admin/invoices`;

  return ApiConfigFormData()
    .post(API_URL, newData)
    .then((response) => {
      return response.data;
    });
};

export const CreateInvoiceFun = createAsyncThunk(
  'createInvoice/create',
  async (data, thunkAPI) => {
    try {
      return await CreateInvoiceService(data);
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

export const CreateInvoiceSlice = createSlice({
  name: 'createInvoice',
  initialState,
  reducers: {
    reset: (state) => initialState,

    resetCreateInvoice: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.CreateinvoiceData = null;
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
      .addCase(CreateInvoiceFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateInvoiceFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.CreateinvoiceData = action.payload;
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

      .addCase(CreateInvoiceFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;

        toast.error(`${state.message}`, {
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

    //     // .addCase(GetALLBankAccountFun.pending, (state) => {
    //     //   state.isLoading = true;
    //     // })
    //     // .addCase(GetALLBankAccountFun.fulfilled, (state, action) => {
    //     //   state.isLoading = false;
    //     //   state.isSuccess = true;
    //     //   state.AllAccountData = action.payload;
    //     // })
    //     // .addCase(GetALLBankAccountFun.rejected, (state, action) => {
    //     //   state.isLoading = false;
    //     //   state.isError = true;
    //     //   state.message = action.payload;
    //     // });
  },
});
export const { resetCreateInvoice } = CreateInvoiceSlice.actions;
export default CreateInvoiceSlice.reducer;
