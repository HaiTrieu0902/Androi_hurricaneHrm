import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from '../constants';
import LoginPage from '../screens/LoginPage';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreens from '../screens/Home';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

const NavigationMain = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <>
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={SCREENS.LOGIN} component={LoginPage} />
                        <Stack.Screen name={SCREENS.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
                    </Stack.Group>
                </>

                <Stack.Group screenOptions={{ headerShown: false }}>
                    <Stack.Screen name={SCREENS.BOTTOM} component={BottomTabNavigation} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
        // <LoginPage></LoginPage>
    );
};

export default NavigationMain;
