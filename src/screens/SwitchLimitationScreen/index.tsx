import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SwitchLimitation = () => {
    const route: any = useRoute();
    return (
        <View>
            <Text>{route?.params?.object}</Text>
        </View>
    );
};

export default SwitchLimitation;

const styles = StyleSheet.create({});
