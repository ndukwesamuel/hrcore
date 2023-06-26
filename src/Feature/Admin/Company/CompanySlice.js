import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCompanyBranch } from '../../../app/service/thunk/employee/profileThunk';
import { toast } from 'react-toastify';

const initialState = {
    data : []
}

export const CompanySlice =  createSlice({
    name : 'fetch_all_companies',
    initialState,
    reducers : {
        getCompany : (state) => { 
            console.log("Data arrived")
            console.log(state.data)
        },
        setLoading : (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers : (builder) =>  {
        builder
            .addCase(fetchCompanyBranch.pending, (state) => {
                // state.loading = true;
            })
            .addCase(fetchCompanyBranch.fulfilled, (state, action) => {
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
            .addCase(fetchCompanyBranch.rejected, (state, action) => {
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

export const { getCompany, setLoading } = CompanySlice.actions;
export const companySliceReducer = CompanySlice.reducer;