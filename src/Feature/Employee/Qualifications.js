import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = [];
export const qualificationSlice =  createSlice({
    name : 'qualify',
    initialState,
    reducers : {
        queueQualifications : (state, action) => {
            const check = state.filter((arrow) => arrow.id === action.payload.id);
            if(check.length === 0)
                state.push(action.payload);
        },
        updateQualifications : (state, action) => {
            return state.filter((arrow) => arrow.id !== action.payload);
        },
        changeQualifications : (state, action) => {
            return state.map((result) =>
                result.id === action.payload.id ? action.payload : result
            )
        },
        resetQual: () => initialState
    }
})

export const { updateQualifications, queueQualifications, changeQualifications, resetQual } = qualificationSlice.actions;
export const qualificationSliceReducer = qualificationSlice.reducer;