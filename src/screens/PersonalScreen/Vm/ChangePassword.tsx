import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationGoBack from '../../../components/NavigationGoBack';
import { BG_SCREEN } from '../../../utils/common';
const ChangePassword = () => {
    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.bg_container}>
                <NavigationGoBack paddingBottom={12} paddingTop={12} title="Change Password" />
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

export default ChangePassword;
