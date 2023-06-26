import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig } from '../../../utilities/apiconfig';

const CreateContact = createAsyncThunk(
  'add/contact',
  async (contact, { rejectWithValue }) => {
    return ApiConfig()
      .post('admin/contacts', contact)
      .then((response) => {
        return response.data;
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
const GetContacts = createAsyncThunk(
  'get/contact',
  async (_, { rejectWithValue }) => {
    return ApiConfig()
      .get('admin/contacts')
      .then((response) => {
        return response.data;
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
  contact: null,
  contacts: null,
  IsError: false,
  isLoading: false,
  isSuccess: false,
  contact_is_Success: false,
  message: null,
  error: '',
};
const contactSlice = createSlice({
  name: 'contact',
  initialState,

  reducers: {
    reset: (state) => initialState,
    resetCreateContact: (state) => {
      state.isLoading = false;
      state.contact_is_Success = false;
      state.isError = false;
      state.message = '';
      state.contact = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contact_is_Success = true;
        state.contact = action.payload;
        state.message = null;
        state.IsError = null;
        toast.success('contact created successfully!', {
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
      .addCase(CreateContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.multiplestaff = null;
        state.message = action.payload;
        state.IsError = true;
      });
    builder
      .addCase(GetContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.contacts = action.payload;
        state.message = null;
        state.IsError = null;
      })
      .addCase(GetContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.multiplestaff = null;
        state.message = action.payload;
        state.IsError = true;
      });
  },
});
export const { reset, resetCreateContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
export const CreateContactAction = CreateContact;
export const GetContactsAction = GetContacts;
