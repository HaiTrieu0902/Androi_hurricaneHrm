import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { ACTIVE_NAV_BOTTOM, SIZE_ICON_DEFAULT } from '../../utils/common';
interface NavigationGoBackProps {
    paddingTop?: number;
    paddingBottom?: number;
    paddingStart?: number;
    paddingEnd?: number;
    title: string;
}

const NavigationGoBack = ({ title, paddingTop, paddingBottom, paddingStart, paddingEnd }: NavigationGoBackProps) => {
    const navigation = useNavigation();
    return (
        <View style={{ paddingTop: paddingTop, paddingBottom: paddingBottom, paddingStart: paddingStart, paddingEnd }}>
            <View style={styles.view_navigation}>
                <Icon
                    onPress={() => navigation.goBack()}
                    name="angle-left"
                    color={ACTIVE_NAV_BOTTOM}
                    size={SIZE_ICON_DEFAULT}
                />
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    );
};
export default NavigationGoBack;
const styles = StyleSheet.create({
    view_navigation: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: ACTIVE_NAV_BOTTOM,
    },
});
