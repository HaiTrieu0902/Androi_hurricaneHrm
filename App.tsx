/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { SafeAreaView } from 'react-native';

import React from 'react';
import HomeScreens from './src/screens/Home';
import NavigationMain from './src/navigation';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
function App(): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationMain></NavigationMain>
            </PersistGate>
        </Provider>
    );
}

export default App;
