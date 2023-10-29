import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { BG_PRIMARYCOLOR } from '../../utils/common';

interface ButtonUIProps {
    onPress: () => void;
    text: string;
    bgColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    color?: string;
    disable?: boolean;
}

const ButtonUI = ({
    onPress,
    text,
    bgColor,
    borderRadius,
    color,
    borderWidth,
    borderColor,
    disable,
}: ButtonUIProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disable}
            style={[
                {
                    borderWidth: borderWidth ? borderWidth : 0,
                    borderColor: borderColor ? borderColor : '',
                    backgroundColor: bgColor ? bgColor : BG_PRIMARYCOLOR,
                    borderRadius: borderRadius ? borderRadius : 10,
                },
                styles.button,
            ]}
        >
            <Text style={{ color: color ? color : 'white', fontSize: 16, fontWeight: 'bold' }}>{text}</Text>
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
