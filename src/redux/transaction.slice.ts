import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/auth';
import { getListCategoryUserAPI, getTransactionUserMonthAPI } from '../services/api/transaction.api';
import { ICategoryList, IListTransactionUserMonth } from '../types/transaction.type';

interface TransactionSlice {
    token: string | null;
    user: IUser;
    screenName: string | null;
    listCategoryLimitation: ICategoryList;
    listTransactionUserMonth: IListTransactionUserMonth;
    transactionID: number;
    isLoadingTransactionUserMonth: boolean;
}

const initialState: TransactionSlice = {
    token: null,
    user: {} as IUser,
    screenName: null,
    listCategoryLimitation: {} as ICategoryList,
    listTransactionUserMonth: {} as IListTransactionUserMonth,
    transactionID: 0,
    isLoadingTransactionUserMonth: false,
};

export const getListCategoryUserLimitationRedux = createAsyncThunk(
    'category/getListCategory',
    async (param: { userId: number; month: number; year: number }) => {
        const response = await getListCategoryUserAPI(param);
        return response;
    },
);

export const getTransactionUserMonthRedux = createAsyncThunk(
    'transaction/getTransactionUserMonth',
    async (param: { userId: number; month: number; year: number }) => {
        const response = await getTransactionUserMonthAPI(param);
        return response;
    },
);

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: initialState,
    reducers: {
        triggerGetTransactionUserMonth: (state) => {
            state.isLoadingTransactionUserMonth = !state.isLoadingTransactionUserMonth;
        },
        setTransactionId: (state, action) => {
            state.transactionID = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getListCategoryUserLimitationRedux.fulfilled, (state, action) => {
            state.listCategoryLimitation = action.payload;
        });
        builder.addCase(getTransactionUserMonthRedux.fulfilled, (state, action) => {
            state.listTransactionUserMonth = action.payload;
        });
    },
});

export const { setTransactionId, triggerGetTransactionUserMonth } = transactionSlice.actions;

export default transactionSlice.reducer;
