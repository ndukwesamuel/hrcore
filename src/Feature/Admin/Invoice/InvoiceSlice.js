import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig } from '../../../utilities/apiconfig';

const GetInvoices = createAsyncThunk(
  'get/invoices',
  async (_, { rejectWithValue }) => {
    return ApiConfig()
      .get('/admin/invoices')
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
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
const GetInvoice = createAsyncThunk(
  'get/invoice',
  async (id, { rejectWithValue }) => {
    return ApiConfig()
      .get(`/admin/invoices/${id}`)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
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

const CloseInvoice = createAsyncThunk(
  'put/invoice',
  async (id, { rejectWithValue }) => {
    return ApiConfig()
      .put(`/admin/invoices/${id}/close`)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
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
  invoices: [],
  invoice: null,
  close: null,
  IsError: false,
  isLoading: false,
  isSuccess: false,
  message: null,
  error: '',
};
const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reset: (state) => initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetInvoices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetInvoices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.invoices = action.payload;
        state.message = null;
        state.IsError = null;
      })
      .addCase(GetInvoices.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.multiplestaff = null;
        state.message = action.payload;
        state.IsError = true;
      });
    builder
      .addCase(GetInvoice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetInvoice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.invoice = action.payload;
        state.message = null;
        state.IsError = null;
      })
      .addCase(GetInvoice.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.multiplestaff = null;
        state.message = action.payload;
        state.IsError = true;
      });
    builder
      .addCase(CloseInvoice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CloseInvoice.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.close = action.payload;
        state.message = null;
        state.IsError = null;
        toast.success('Invoice successfully closed!', {
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
      .addCase(CloseInvoice.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.close = null;
        state.message = action.payload;
        state.IsError = true;
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
export const { reset } = invoiceSlice.actions;

export const InvoiceReducer = invoiceSlice.reducer;
export const GetInvoicesAction = GetInvoices;
export const GetInvoiceAction = GetInvoice;
export const CloseInvoiceAction = CloseInvoice;
