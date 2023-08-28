import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { SCREENS } from '../constants';
import EmployeeScreen from '../screens/EmployeeScreen';
import FilterScreen from '../screens/FilterScreen';
import HomeScreens from '../screens/Home';
import LeaveManagementScreen from '../screens/LeaveManagementScreen';
import PersonalScreen from '../screens/PersonalScreen';
import { BG_PRIMARYCOLOR, FONT_FAMILY, SIZE_ICON_DEFAULT } from '../utils/common';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={SCREENS.HOME}
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
                name={SCREENS.LEAVE}
                component={LeaveManagementScreen}
                options={{
                    tabBarLabel: 'Leave',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar-minus" size={SIZE_ICON_DEFAULT} color={color} />
                    ),
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
