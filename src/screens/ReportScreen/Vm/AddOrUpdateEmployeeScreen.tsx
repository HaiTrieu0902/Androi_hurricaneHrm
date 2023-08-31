import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationGoBack from '../../../components/NavigationGoBack';
import { ACTIVE_NAV_BOTTOM, BG_SCREEN, FONT_FAMILY } from '../../../utils/common';

const AddOrUpdateEmployeeScreen = () => {
    return (
        <SafeAreaView style={styles.bg_scrren}>
            <NavigationGoBack
                paddingTop={10}
                paddingEnd={10}
                paddingStart={10}
                paddingBottom={10}
                title="Employee Manage"
            ></NavigationGoBack>

            <Text>Report</Text>
        </SafeAreaView>
    );
};

export default AddOrUpdateEmployeeScreen;

const styles = StyleSheet.create({
    bg_scrren: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    item: {
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: 10,
    },
    add_an_employee: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    back: {
        paddingTop: 10,
        paddingStart: 10,
        flexDirection: 'row',
    },
    txt_back: {
        fontSize: 20,
        fontWeight: '900',
        fontFamily: FONT_FAMILY,
        color: ACTIVE_NAV_BOTTOM,
    },
    big_item: {
        paddingBottom: 5,
    },
    detail_item: {
        paddingBottom: 3,
    },
    input_item: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'white',
    },

    btn_add: {
        position: 'relative',
        paddingStart: 40,
        paddingEnd: 40,
        paddingTop: 10,
        paddingBottom: 10,
    },
});
