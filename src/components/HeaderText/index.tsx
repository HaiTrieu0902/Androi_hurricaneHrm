import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ACTIVE_NAV_BOTTOM, FONT_FAMILY, TEXT_COLOR_DARKMODE } from '../../utils/common';
import { useAppSelector } from '../../redux/store';

interface HeaderTextProps {
    title: string;
}

const HeaderText = ({ title }: HeaderTextProps) => {
    const { colorSystem } = useAppSelector((state) => state.auth);
    return (
        <View style={styles.view}>
            <Text style={[styles.text, { color: colorSystem === 'dark' ? TEXT_COLOR_DARKMODE : ACTIVE_NAV_BOTTOM }]}>
                {title}
            </Text>
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
