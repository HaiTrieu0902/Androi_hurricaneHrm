/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NavigationMain from './src/navigation';
import store, { persistor } from './src/redux/store';
import { ToastProvider } from 'react-native-toast-notifications';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ToastProvider>
                    <NavigationMain />
                </ToastProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
