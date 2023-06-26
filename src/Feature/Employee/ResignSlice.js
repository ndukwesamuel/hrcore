import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ResignData: null,
};

export const ResignSlice = createSlice({
  name: 'Resign',
  initialState,
  reducers: {
    resetResign: (state) => initialState,

    ResignStoreData: (state, action) => {
      state.ResignData = action.payload;
    },
  },
});

export const { resetResign, ResignStoreData } = ResignSlice.actions;

export default ResignSlice.reducer;
