import { createAsyncThunk } from '@reduxjs/toolkit'
import { profileUpdate } from '../endpoint/profileUpdate';

export const updateUserProfile = createAsyncThunk(
    'update/profile',
    (profile) => {

    return profileUpdate(profile);
})
