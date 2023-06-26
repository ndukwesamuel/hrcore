import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    employee_id: null,
    role: null,
    grade: null,
    position: null,
    department: null,
    branch: null,
    pension: null,
    pension_number: null,
    provider : null,
    hmo_id : null,
    plan : null,
    hospital : null,
    status : null,
}
export const organisationSlice =  createSlice({
    name : 'organization',
    initialState,
    reducers : {
        updateEmployeeId : (state, action) => { state.employee_id = action.payload  },
        updateRole : (state, action)  => {  state.role = action.payload },
        updateGrade : (state, action)  => { state.grade = action.payload },
        updatePosition : (state, action)  => { state.position = action.payload },
        updateDepartment : (state, action) => { state.department = action.payload },
        updateBranch : (state, action)  => { state.branch = action.payload },
        updatePension : (state, action)  => { state.pension = action.payload },
        updatePensionNumber : (state, action)  => { state.pension_number = action.payload },
        updateHmo : (state, action) => { state.provider = action.payload },
        updateHmoNumber : (state, action)  => { state.hmo_id = action.payload },
        updateHmoPlan : (state, action)  => { state.plan = action.payload },
        updateHmoHospital : (state, action)  => { state.hospital = action.payload },
        updateHmoStatus : (state, action)  => { state.status = action.payload },
        resetOrg: () => initialState
    }
})

export const { updateEmployeeId, updateRole, updateGrade, updatePosition, updateDepartment,
                updateBranch, updatePension, updatePensionNumber, updateOnHmo, updateHmo, updateHmoNumber, 
                updateHmoPlan, updateHmoHospital, updateHmoStatus, resetOrg
            } = organisationSlice.actions;
export const organisationSliceReducer = organisationSlice.reducer;