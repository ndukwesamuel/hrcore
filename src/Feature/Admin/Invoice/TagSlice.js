import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  AddTagData: null,
  AllTagData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create Add Tag

const CreateTagService = async (data) => {
  let API_URL = `${baseURL}admin/tags`;

  return ApiConfigFormData()
    .post(API_URL, data)
    .then((response) => {
      return response.data;
    });
};
export const AddTagFun = createAsyncThunk(
  'Tag/Add_Tag',
  async (data, thunkAPI) => {
    try {
      return await CreateTagService(data);
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

// // Get all Bank Account

const GetAlltags = async () => {
  let API_URL = `${baseURL}admin/tags`;
  return ApiConfig()
    .get(API_URL)
    .then((response) => {
      return response.data;
    });
};

export const ALLTagFun = createAsyncThunk(
  'Tag/Get_All_TAG',

  async (_, thunkAPI) => {
    try {
      return await GetAlltags();
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

export const TagSlice = createSlice({
  name: 'Tag',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
      state.AddTagData = null;
      state.AllTagData = null;
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
      .addCase(AddTagFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddTagFun.fulfilled, (state, action) => {
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
      .addCase(AddTagFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(state.message, {
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

      .addCase(ALLTagFun.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(ALLTagFun.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.AllTagData = action.payload;
      })
      .addCase(ALLTagFun.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const {} = TagSlice.actions;
export default TagSlice.reducer;
