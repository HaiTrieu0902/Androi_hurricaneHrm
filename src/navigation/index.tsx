import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from '../constants';
import { useAppSelector } from '../redux/store';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LoginPage from '../screens/LoginPage';
import RegisterScreen from '../screens/RegisterScreen';
import BottomTabNavigation from './BottomTabNavigation';
import { PersonalNavigation } from './PersonalNavigation';
import { UserNavigation } from './UserNavigation';
import { LimitationNavigation } from './LimitationNavugation';
const Stack = createStackNavigator();

const NavigationMain = () => {
    const { token } = useAppSelector((state) => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
            >
                {!token ? (
                    <>
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen name={SCREENS.LOGIN} component={LoginPage} />
                            <Stack.Screen name={SCREENS.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
                            <Stack.Screen name={SCREENS.REGISTER} component={RegisterScreen} />
                        </Stack.Group>
                    </>
                ) : (
                    <>
                        <Stack.Group screenOptions={{ headerShown: false }}>
                            <Stack.Screen name={SCREENS.BOTTOM} component={BottomTabNavigation} />
                            {/* personal */}
                            {PersonalNavigation.map((screen) => (
                                <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
                            ))}
                            {/* User */}
                            {UserNavigation.map((screen) => (
                                <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
                            ))}
                            {/* Limit */}
                            {LimitationNavigation.map((screen ) =>(
                                <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
                            ))}
                        </Stack.Group>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationMain;
