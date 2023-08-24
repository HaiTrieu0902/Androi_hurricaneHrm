import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import authSlice from './auth.slice';
import employeeSlice from './employee.slice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authPersistConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['token', 'user'],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);
const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        employee: employeeSlice,
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
