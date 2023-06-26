import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ApiConfig } from '../../../utilities/apiconfig';
import { ApiConfigFormData } from '../../../utilities/apiconfig';
import { ErrorFunc } from '../../../utilities/ApiErrorFun';

const createFolder = createAsyncThunk(
  'admin/folder',
  async (data, { rejectWithValue }) => {
    console.log('folder data', data);
    return ApiConfig()
      .post('/admin/onboarding/folders', data)
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

const getFolders = createAsyncThunk(
  'admin/folders',
  async (_, { rejectWithValue }) => {
    return ApiConfig()
      .get('/admin/onboarding/folders')
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
        ErrorFunc(error);
        return rejectWithValue(message);
      });
  }
);

const getFolderContent = createAsyncThunk(
  'admin/foldercontent',
  async (id, { rejectWithValue }) => {
    return ApiConfig()
      .get(`/admin/onboarding/folders/${id}`)
      .then((response) => {
        console.log('get folder content response', response.data);
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

const createFile = createAsyncThunk(
  'admin/file',
  async (newData, { rejectWithValue }) => {
    console.log('inside fileee.', newData.id);
    return ApiConfigFormData()
      .post(`/admin/onboarding/folders/${newData.id}/files`, newData.formData)
      .then((response) => {
        console.log('file creation response', response.data);
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
  folder: null,
  folders: null,
  foldercontent: null,
  file: null,
  error: '',
};
const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createFolder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createFolder.fulfilled, (state, action) => {
      state.loading = false;
      state.folder = action.payload;
      state.error = '';
      toast.success('Folder successfully created', {
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
    builder.addCase(createFolder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getFolders.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getFolders.fulfilled, (state, action) => {
      state.loading = false;
      state.folders = action.payload;
      state.error = '';
    });
    builder.addCase(getFolders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(getFolderContent.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getFolderContent.fulfilled, (state, action) => {
      state.loading = false;
      state.foldercontent = action.payload;
      state.error = '';
    });
    builder.addCase(getFolderContent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createFile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createFile.fulfilled, (state, action) => {
      state.loading = false;
      state.folder = action.payload;
      state.error = '';
      toast.success('File successfully created', {
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
    builder.addCase(createFile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const folderSliceReducer = folderSlice.reducer;
export const createFolderAction = createFolder;
export const getFoldersAction = getFolders;
export const getFolderContentAction = getFolderContent;
export const createFileAction = createFile;
