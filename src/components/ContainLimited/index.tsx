import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BG_PRIMARYCOLOR, FONT_FAMILY } from '../../utils/common';

interface ContainLimitedProps {
    bgColor?: string;
    data?: any[];
}

const ContainLimited = ({ bgColor }: ContainLimitedProps) => {
    return (
        <View style={[styles.view_container, { backgroundColor: bgColor ? bgColor : BG_PRIMARYCOLOR }]}>
            <View>
                <Text style={styles.text_title}>Shopping</Text>
            </View>
            <View style={styles.view_total}>
                <View style={{ display: 'flex', gap: 6 }}>
                    <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                    <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view_container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        borderRadius: 6,
        padding: 12,
    },
    view_total: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    text_right: {
        textAlign: 'right',
    },
    text_total: {
        fontSize: 14,
        color: 'white',
        fontFamily: FONT_FAMILY,
        fontWeight: '700',
    },
    text_remain: {
        fontSize: 14,
        color: 'white',
        fontFamily: FONT_FAMILY,
    },
    text_title: {
        fontSize: 16,
        color: 'white',
        fontFamily: FONT_FAMILY,
    },
});
export default ContainLimited;