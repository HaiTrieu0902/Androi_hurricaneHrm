import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/auth';
import { getListCategoryUserAPI } from '../services/api/transaction.api';
import { ICategoryList } from '../types/transaction.type';

interface TransactionSlice {
    token: string | null;
    user: IUser;
    screenName: string | null;
    listCategoryLimitation: ICategoryList;
}

const initialState: TransactionSlice = {
    token: null,
    user: {} as IUser,
    screenName: null,
    listCategoryLimitation: {} as ICategoryList,
};

export const getListCategoryUserLimitationRedux = createAsyncThunk(
    'category/getListCategory',
    async (param: { userId: number; month: number; year: number }) => {
        const response = await getListCategoryUserAPI(param);
        return response;
    },
);

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getListCategoryUserLimitationRedux.fulfilled, (state, action) => {
            state.listCategoryLimitation = action.payload;
        });
    },
});

export const {} = transactionSlice.actions;

export default transactionSlice.reducer;
