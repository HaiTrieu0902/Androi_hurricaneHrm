import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ACTIVE_NAV_BOTTOM, BG_PRIMARYCOLOR, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../utils/common';

interface HeaderTextProps {
    title: string;
}

const HeaderText = ({ title }: HeaderTextProps) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        padding: 16,
        paddingHorizontal: 16,
        paddingBottom: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: '900',
        fontFamily: FONT_FAMILY,
        color: ACTIVE_NAV_BOTTOM,
    },
});

export default HeaderText;
