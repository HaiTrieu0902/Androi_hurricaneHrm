import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';

import HeaderText from '../../components/HeaderText';
import { BG_SCREEN, BG_SUB_COLOR, FONT_FAMILY, SIZE_ICON_20 } from '../../utils/common';
import { useAppSelector } from '../../redux/store';
import { AnnualReport, MonthlyReport } from './Vm';
const ReportScreen = () => {
    const navigation = useNavigation();
    const { user } = useAppSelector((state) => state.auth);
    const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

    const handleChangedScreenSubHome = (type: string) => {
        if (type === 'Monthly') {
            setIsActiveButton(false);
        } else {
            setIsActiveButton(true);
        }
    };

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.view_header}>
                <HeaderText title="Report" />
                <AntDesign name="search1" style={styles.view_icon} color={BG_SUB_COLOR} size={SIZE_ICON_20} />
            </View>
            <View style={styles.view_container}>
                <View style={styles.view_list}>
                    <TouchableOpacity
                        style={[styles.button, !isActiveButton && styles.button_active]}
                        onPress={() => handleChangedScreenSubHome('Monthly')}
                    >
                        <Text style={[styles.text_header, !isActiveButton && styles.text_header_active]}>
                            Monthly Report
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, isActiveButton && styles.button_active]}
                        onPress={() => handleChangedScreenSubHome('Annual')}
                    >
                        <Text style={[styles.text_header, isActiveButton && styles.text_header_active]}>
                            Annual Report
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.view_contain_screen}>
                {!isActiveButton ? <MonthlyReport></MonthlyReport> : <AnnualReport></AnnualReport>}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bg_scrren: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    view_header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view_icon: {
        padding: 16,
        paddingHorizontal: 16,
        paddingBottom: 12,
    },
    view_contain_screen: {
        paddingStart: 16,
        paddingEnd: 16,
        marginTop: 12,
    },
    view_list: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        width: '60%',
        borderRadius: 8,
    },

    button: {
        backgroundColor: 'transparent',
        borderRadius: 6,
        paddingTop: 8,
        paddingBottom: 8,
        paddingStart: 10,
        paddingEnd: 10,
        fontFamily: FONT_FAMILY,
    },
    button_active: {
        backgroundColor: BG_SUB_COLOR,
    },

    /* Style Text */
    text_header: {
        color: BG_SUB_COLOR,
        fontSize: 14,
        fontWeight: '700',
        fontFamily: FONT_FAMILY,
    },
    text_header_active: {
        color: 'white',
    },
});

export default ReportScreen;
