import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const SettingScreen = () => {
    const navigation = useNavigation();
    const handleNavigator = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView>
            <Text>SettingScreen</Text>
            <TouchableOpacity onPress={handleNavigator}>
                <View>
                    <Text> back to personal</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default SettingScreen;
