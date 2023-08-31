import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderText from '../../components/HeaderText';
import { BG_SCREEN } from '../../utils/common';
const ReportScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.bg_scrren}>
            <HeaderText title="Report" />
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
        paddingTop: 10,
    },
});

export default ReportScreen;
