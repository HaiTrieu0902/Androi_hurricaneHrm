import { createSlice } from '@reduxjs/toolkit';

interface EmployeeSlice {}

const initialState: EmployeeSlice = {};
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
