import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiConfig, ApiConfigFormData } from '../../../utilities/apiconfig';
import axios from 'axios';

let baseURL = process.env.REACT_APP_BASEURL;

const initialState = {
  post_title: '',
  Post_Body: '',
  Post_image: null,

  title: '',
  body: '',

  // All_Offboading: [],
  // single_Offboading: null,
  // All_employee_Offbord_data: null,
  // admin_single_offboard: null,
  // create_Employee_request: null,
  // adminAprovedStatus: null,
  // isError: false,
  // isSuccess: false,
  // offboard_isSuccess: false,
  // isLoading: false,
  // message: '',
};

export const AnnouncementsSlice = createSlice({
  name: 'Announcement',
  initialState,
  reducers: {
    resetAllAnnouncements: (state) => initialState,

    resetImage: (state) => {
      state.Post_image = null;
    },

    // AnnouncementsPost: (state) => {
    //   state.startTripdata = !state.startTripdata;

    // },

    AnnouncementsPost: (state, action) => {
      state.title = action.payload;
    },
    AnnouncementsPostBody: (state, action) => {
      state.body = action.payload;
    },

    AnnouncementsPostImage: (state, action) => {
      state.Post_image = action.payload;
    },

    // TotalpointActivated: (state, action) => {
    //   state.totalpointData.push(action.payload);
    // },
  },
});

export const {
  resetImage,
  AnnouncementsPostImage,
  AnnouncementsPost,
  resetAllAnnouncements,

  AnnouncementsPostBody,
} = AnnouncementsSlice.actions;

export default AnnouncementsSlice.reducer;
