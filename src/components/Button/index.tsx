import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BG_PRIMARYCOLOR } from '../../utils/common';

interface ButtonUIProps {
    onPress: () => void;
    text: string;
    bgColor?: string;
    borderRadius?: number;
}

const ButtonUI = ({ onPress, text, bgColor, borderRadius }: ButtonUIProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                {
                    backgroundColor: bgColor ? bgColor : BG_PRIMARYCOLOR,
                    borderRadius: borderRadius ? borderRadius : 10,
                },
                styles.button,
            ]}
        >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ButtonUI;
