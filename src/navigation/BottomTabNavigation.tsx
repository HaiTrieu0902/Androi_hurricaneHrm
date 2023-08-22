import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { SCREENS } from '../constants';
import EmployeeScreen from '../screens/EmployeeScreen';
import FilterScreen from '../screens/FilterScreen';
import HomeScreens from '../screens/Home';
import PersonalScreen from '../screens/PersonalScreen';
import UserHrScreen from '../screens/UserHrScreen';
import { ACTIVE_NAV_BOTTOM, BG_PRIMARYCOLOR, BG_SUB_COLOR, FONT_FAMILY, SIZE_ICON_DEFAULT } from '../utils/common';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: BG_PRIMARYCOLOR,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '400',
                    fontFamily: FONT_FAMILY,
                    marginBottom: 3,
                },
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
                name={SCREENS.FILLTER}
                component={FilterScreen}
                options={{
                    tabBarLabel: 'Statistics',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="chart-simple" size={SIZE_ICON_DEFAULT} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name={SCREENS.USER}
                component={UserHrScreen}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color, size }) => <Icon name="users-gear" size={SIZE_ICON_DEFAULT} color={color} />,
                }}
            />
            <Tab.Screen
                name={SCREENS.EMPLOYEE}
                component={EmployeeScreen}
                options={{
                    tabBarLabel: 'Employee',
                    tabBarIcon: ({ color, size }) => <Icon name="users" size={SIZE_ICON_DEFAULT} color={color} />,
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
