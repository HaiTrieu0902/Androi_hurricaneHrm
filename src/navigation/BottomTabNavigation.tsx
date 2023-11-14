import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { SCREENS } from '../constants';
import CalenderScreen from '../screens/CalenderScreen';
import ReportScreen from '../screens/ReportScreen';
import HomeScreens from '../screens/Home';
import LimitationScreen from '../screens/LimitationScreen';
import PersonalScreen from '../screens/PersonalScreen';
import {
    BG_PRIMARYCOLOR,
    BG_PRIMARYCOLOR_DARKMODE,
    BG_SUB_COLOR,
    FONT_FAMILY,
    SIZE_ICON_DEFAULT,
} from '../utils/common';
import { useAppSelector } from '../redux/store';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const { colorSystem } = useAppSelector((state) => state.auth);
    return (
        <Tab.Navigator
            initialRouteName={SCREENS.HOME}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colorSystem === 'dark' ? BG_SUB_COLOR : BG_PRIMARYCOLOR,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '400',
                    fontFamily: FONT_FAMILY,
                    marginBottom: 3,
                },
                tabBarStyle: { backgroundColor: colorSystem === 'dark' ? BG_PRIMARYCOLOR_DARKMODE : 'white' },
            }}
        >
            <Tab.Screen
                name={SCREENS.HOME}
                component={HomeScreens}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => <Icon name="house-user" color={color} size={SIZE_ICON_DEFAULT} />,
                }}
            />
            <Tab.Screen
                name={SCREENS.LIMITATION}
                component={LimitationScreen}
                options={{
                    tabBarLabel: 'Limitation',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="chart-simple" size={SIZE_ICON_DEFAULT} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.CALENDER}
                component={CalenderScreen}
                options={{
                    tabBarLabel: 'Calender',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar-minus" size={SIZE_ICON_DEFAULT} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name={SCREENS.REPORT}
                component={ReportScreen}
                options={{
                    tabBarLabel: 'Report',
                    tabBarIcon: ({ color, size }) => <Icon name="chart-pie" size={SIZE_ICON_DEFAULT} color={color} />,
                }}
            />
            <Tab.Screen
                name={SCREENS.PERSONAL}
                component={PersonalScreen}
                options={{
                    tabBarLabel: 'Personal',
                    tabBarIcon: ({ color, size }) => <Icon name="user-ninja" size={SIZE_ICON_DEFAULT} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;
