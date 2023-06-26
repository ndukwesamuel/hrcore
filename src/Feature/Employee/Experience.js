import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { updateUserProfile } from '../../app/service/thunk/employee/profileThunk';
import { toast } from 'react-toastify';

const initialState = {
    data : [],
    loading : false,
    error : null,
}

export const experienceSlice =  createSlice({
    name : 'update',
    initialState : initialState,
    reducers : {
        queueExperiences : (state, action) => { 
            state.data.push(action.payload);
        },
        updateExperience : (state, action) => {
            return state.data.filter((arrow) => arrow.id !== action.payload);
        },
        changeExperience : (state, action) => {
            return state.data.map((result) =>
                result.id === action.payload.id ? action.payload : result
            )
        }
    },
    extraReducers : (builder) =>  {
        builder
            .addCase(updateUserProfile.pending, (state, action) => {
                // console.log(state);
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                // state.loading = false;
                toast.success('Profile successfully updated', {
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
            .addCase(updateUserProfile.rejected, (state) => {
                state.data = [];
                toast.error('Updating profile failed', {
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
    }
})

export const { queueExperiences, updateExperience, changeExperience, setLoading } = experienceSlice.actions;
export const experienceSliceReducer = experienceSlice.reducer;