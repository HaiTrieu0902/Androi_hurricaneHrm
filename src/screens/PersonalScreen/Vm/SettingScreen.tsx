import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationGoBack from '../../../components/NavigationGoBack';
import { BG_SCREEN } from '../../../utils/common';

const SettingScreen = () => {
    const navigation = useNavigation();
    const handleNavigator = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.bg_container}>
                <NavigationGoBack paddingBottom={12} paddingTop={12} title="General settings" />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bg_scrren: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    bg_container: {
        paddingStart: 16,
        paddingEnd: 16,
    },
});
export default SettingScreen;
