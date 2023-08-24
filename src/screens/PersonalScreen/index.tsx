import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import ButtonUI from '../../components/Button';
import { SCREENS } from '../../constants';
import { remoteAuthToken, remoteAuthUser } from '../../redux/auth.slice';
import { useAppDispatch } from '../../redux/store';
const PersonalScreen = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const handleLogout = async () => {
        await dispatch(remoteAuthToken());
        await dispatch(remoteAuthUser());
        navigation.navigate(SCREENS.LOGIN as never);
    };

    return (
        <View>
            <Text>PersonalScreen</Text>
            <Text> This Is Token: </Text>
            <ButtonUI text="Logout" onPress={handleLogout}></ButtonUI>
        </View>
    );
};

export default PersonalScreen;
