import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/auth';

interface Auth {
    token: string | null;
    user: IUser;
    screenNameEditTransaction: string | null;
    colorSystem: string;
    dataSaveUser: {
        username: String;
        password: string;
    };
}

const initialState: Auth = {
    token: null,
    user: {} as IUser,
    screenNameEditTransaction: null,
    colorSystem: 'light',
    dataSaveUser: {
        username: '',
        password: '',
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setInitialScreenNameEditTransaction: (state, ation) => {
            state.screenNameEditTransaction = ation.payload;
        },
        setThemeColor: (state, action: PayloadAction<string>) => {
            state.colorSystem = action.payload;
        },
        setAuthToken: (state, action) => {
            state.token = action.payload;
        },
        setAuthUser: (state, action) => {
            state.user = action.payload;
        },
        setDataSaveUser: (state, action) => {
            state.dataSaveUser = action.payload;
        },
        remoteAuthToken: (state) => {
            state.token = initialState.token;
        },
        remoteAuthUser: (state) => {
            state.user = initialState.user;
        },
    },

    // extraReducers: (builder) => {
    //     builder.addCase(getListCategoryRedux.fulfilled, (state, action: PayloadAction<IlistCategory>) => {
    //         state.listCategory = action.payload;
    //     });
    // },
});

export const {
    setAuthToken,
    setAuthUser,
    remoteAuthToken,
    remoteAuthUser,
    setInitialScreenNameEditTransaction,
    setThemeColor,
    setDataSaveUser,
} = authSlice.actions;

export default authSlice.reducer;
