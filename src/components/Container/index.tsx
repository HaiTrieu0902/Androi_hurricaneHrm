import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ContainerProps {
    children: any;
}

const Container = ({ children }: ContainerProps) => {
    return <View style={styles.bg_container}>{children}</View>;
};

const styles = StyleSheet.create({
    bg_container: {
        backgroundColor: 'white',
        padding: 14,
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
