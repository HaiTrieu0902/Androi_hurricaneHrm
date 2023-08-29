import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ContainerProps {
    children: any;
    padding?: boolean;
    marginTop?: number;
    borderColor?: string;
    borderWidth?: number;
}

const Container = ({ children, padding, marginTop, borderColor, borderWidth }: ContainerProps) => {
    return (
        <View
            style={[
                styles.bg_container,
                { padding: padding ? 14 : 0, marginTop: marginTop, borderColor: borderColor, borderWidth: borderWidth },
            ]}
        >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    bg_container: {
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
});

export default Container;
