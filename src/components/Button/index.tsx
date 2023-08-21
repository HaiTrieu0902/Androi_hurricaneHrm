import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BG_PRIMARYCOLOR } from '../../utils/common';

interface ButtonUIProps {
    onPress: () => void;
}

const ButtonUI = ({ onPress }: ButtonUIProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: BG_PRIMARYCOLOR,
        height: 42,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ButtonUI;
