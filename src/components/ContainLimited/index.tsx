import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BG_EXPLAIN_ERROR, BG_PRIMARYCOLOR, FONT_FAMILY } from '../../utils/common';

interface ContainLimitedProps {
    bgColor?: string;
    category: string;
    limited: number;
    bag: number;
    data?: any[];
}

const ContainLimited = ({ bgColor, category, limited, bag }: ContainLimitedProps) => {
    return (
        <View style={[styles.view_container, { backgroundColor: bag < 0 ? BG_EXPLAIN_ERROR : BG_PRIMARYCOLOR }]}>
            <View>
                <Text style={styles.text_title}>{category}</Text>
            </View>
            <View style={styles.view_total}>
                <View style={{ display: 'flex', gap: 6 }}>
                    <Text style={[styles.text_right, styles.text_total]}>
                        Bag: <Text>{bag.toLocaleString()}</Text>
                    </Text>
                    <Text style={[styles.text_right, styles.text_remain]}>limited: {limited.toLocaleString()} </Text>
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
        padding: 10,
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
        color: '#dddddd',
        fontSize: 12,
        fontFamily: FONT_FAMILY,
    },
    text_title: {
        fontSize: 16,
        color: 'white',
        fontFamily: FONT_FAMILY,
    },
    text_expalin_error: {
        color: '#DC143C',
    },
});
export default ContainLimited;
