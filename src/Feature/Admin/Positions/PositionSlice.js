import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { positionss } from '../../../app/service/thunk/employee/profileThunk';
import { toast } from 'react-toastify';

const initialState = {
    data : []
}

export const PositionSlice =  createSlice({
    name : 'fetch_all_positions',
    initialState,
    reducers : {
        getPositions : (state) => { 
            console.log(state.data)
        },
        setLoading : (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers : (builder) =>  {
        builder
            .addCase(positionss.pending, (state) => {
                // state.loading = true;
            })
            .addCase(positionss.fulfilled, (state, action) => {
                    state.data = action.payload.data
                })
            .addCase(positionss.rejected, (state, action) => {
                state.data = [];
            })
    }
})

export const { getPositions, setLoading } = PositionSlice.actions;
export const PositionSliceReducer = PositionSlice.reducer;