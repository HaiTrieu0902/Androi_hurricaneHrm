import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import authSlice from './auth.slice';
import limitationSlice from './limitation.slice';
import transactionSlice from './transaction.slice';

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['token', 'user'],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);
const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        limitation: limitationSlice,
        transaction: transactionSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);

export default store;
