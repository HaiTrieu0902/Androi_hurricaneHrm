import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import { getLimitationUserByMonthAPI } from '../services/api/limitation.api';
import { ILimitationListUserByMonth, IQueryGetLimitationByMonth } from '../types/limitation.type';

interface LimitationSlice {
    isLoadingLimitationTransaction: boolean;
    listLimitationListUserByMonth: ILimitationListUserByMonth;
    limitation_categorykey: string;
}
const initialState: LimitationSlice = {
    isLoadingLimitationTransaction: false,
    listLimitationListUserByMonth: {} as ILimitationListUserByMonth,
    limitation_categorykey: '',
};

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export const getLimitationUserByMonthRedux = createAsyncThunk(
    'limitation/getLimitationUserByMonth',
    async (query: IQueryGetLimitationByMonth) => {
        const response = await getLimitationUserByMonthAPI(query);
        return response;
    },
);

const limitationSlice = createSlice({
    name: 'limitation',
    initialState: initialState,
    reducers: {
        triggerCallAPILimitationTransaction: (state) => {
            state.isLoadingLimitationTransaction = !state.isLoadingLimitationTransaction;
        },
        setLimitationCategoryKey: (state, action) => {
            state.limitation_categorykey = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(getLimitationUserByMonthRedux.fulfilled, (state, action) => {
                state.listLimitationListUserByMonth = action.payload;
            })
            .addMatcher<RejectedAction>(
                (action) => action.type.endsWith('/rejected'),
                (state) => {
                    state.listLimitationListUserByMonth = initialState.listLimitationListUserByMonth;
                },
            );
    },
});

export const { triggerCallAPILimitationTransaction, setLimitationCategoryKey } = limitationSlice.actions;

export default limitationSlice.reducer;
