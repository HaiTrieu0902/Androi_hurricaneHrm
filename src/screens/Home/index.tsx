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
            <Text>{user?.token}</Text>
            <Text>This is Token nghen {user?.token}</Text>
        </View>
    );
};

export default HomeScreens;
