import React from 'react';
import { Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/store';
interface HomeScreensProps {}
const HomeScreens = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.auth);

    return (
        <View>
            <Text>{user?.email}</Text>
            <Text>{user?.username}</Text>
            <Text>{user?.user_code}</Text>
            <Text>{user?.token}</Text>
            <Text>This is Name user nghen {user?.fullName}</Text>
        </View>
    );
};

export default HomeScreens;
