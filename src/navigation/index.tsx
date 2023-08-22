import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from '../constants';
import LoginPage from '../screens/LoginPage';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreens from '../screens/Home';

const Stack = createStackNavigator();

const NavigationMain = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name={SCREENS.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
                <Stack.Screen name={SCREENS.HOME} component={HomeScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationMain;
