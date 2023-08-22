import React, { useState, useEffect } from 'react';
import { Text, View, Alert } from 'react-native';
import LoginPage from '../LoginPage';
import { asyncStorageService } from '../../../src/utils/storage';
interface HomeScreensProps {}
const HomeScreens = () => {
    // Alert.alert('Error', 'Network error.', [{ text: 'OK' }], {
    //     cancelable: false,
    // });

    const [user, setUser] = useState<any>();

    useEffect(() => {
        const handleGetValue = async () => {
            const retrievedUser = await asyncStorageService.getValue('user');
            setUser(retrievedUser);
        };

        handleGetValue();
    }, []);

    console.log(user);
    return (
        <View>
            <Text>{user?.email}</Text>
            <Text>{user?.username}</Text>
            <Text>{user?.token}</Text>
        </View>
    );
};

export default HomeScreens;
