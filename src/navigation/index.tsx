import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from '../constants';
import { useAppSelector } from '../redux/store';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginPage from '../screens/LoginPage';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();

const NavigationMain = () => {
    const { token } = useAppSelector((state) => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!token ? (
                    <>
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen name={SCREENS.LOGIN} component={LoginPage} />
                            <Stack.Screen name={SCREENS.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
                        </Stack.Group>
                    </>
                ) : (
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name={SCREENS.BOTTOM} component={BottomTabNavigation} />
                    </Stack.Group>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationMain;
