import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchRoles } from '../../../app/service/thunk/employee/profileThunk';
import { toast } from 'react-toastify';

const initialState = {
    data : []
}

export const roleSlice =  createSlice({
    name : 'fetch_all_roles',
    initialState,
    reducers : {
        getRoles : (state) => { 
        },
        setLoading : (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers : (builder) =>  {
        builder
            .addCase(fetchRoles.pending, (state) => {
                // state.loading = true;
            })
            .addCase(fetchRoles.fulfilled, (state, action) => {
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
            .addCase(fetchRoles.rejected, (state, action) => {
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

export const { getRoles, setLoading } = roleSlice.actions;
export const roleSliceReducer = roleSlice.reducer;