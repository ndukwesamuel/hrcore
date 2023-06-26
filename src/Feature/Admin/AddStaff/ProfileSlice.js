import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from '../../../app/service/thunk/employee/profileThunk';
import { toast } from 'react-toastify';

const initialState = {
    data : []
}

export const ProfileSlice =  createSlice({
    name : 'fetch_user_profile',
    initialState,
    reducers : {
        getProfile : (state) => { 
            
        },
        setLoading : (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers : (builder) =>  {
        builder
            .addCase(getUserProfile.pending, (state) => {
                // state.loading = true;
            })
            .addCase(getUserProfile.fulfilled, (state, action) => {
                state.data = action.payload.data
                // state.loading = false;
                // state.error = false;
                // toast.success('Profile successfully updated', {
                //     position: 'top-right',
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: 'light',
                // });
                })
            .addCase(getUserProfile.rejected, (state, action) => {
                // state.loading = false;
                // state.error = false;
                state.data = [];
                // toast.error('fetching data failed', {
                //     position: 'top-right',
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: 'light',
                // });
            })
    }
})

export const { getProfile, setLoading } = ProfileSlice.actions;
export const ProfileSliceReducer = ProfileSlice.reducer;