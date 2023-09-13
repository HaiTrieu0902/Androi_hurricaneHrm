import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/auth';

interface Auth {
    token: string | null;
    user: IUser;
    screenName: string | null;
}

const initialState: Auth = {
    token: null,
    user: {} as IUser,
    screenName: null,
};

// export const getListCategoryRedux = createAsyncThunk('category/getListCategory', async () => {
//     const response = await getListCategoryAPI();
//     return response;
// });

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setInitialScreenName: (state, ation) => {
            state.screenName = ation.payload;
        },
        setAuthToken: (state, action) => {
            state.token = action.payload;
        },
        setAuthUser: (state, action) => {
            state.user = action.payload;
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

export const { setAuthToken, setAuthUser, remoteAuthToken, remoteAuthUser } = authSlice.actions;

export default authSlice.reducer;
