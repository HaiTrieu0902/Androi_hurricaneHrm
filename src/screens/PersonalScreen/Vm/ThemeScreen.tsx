import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Container from '../../../components/Container';
import NavigationGoBack from '../../../components/NavigationGoBack';
import { setThemeColor } from '../../../redux/auth.slice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { ACTIVE_NAV_BOTTOM, BG_SCREEN, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../../utils/common';
const ThemeScreen = () => {
    const dispatch = useAppDispatch();
    const { colorSystem } = useAppSelector((state) => state.auth);
    const [activeTheme, setActiveTheme] = useState<string | null>(colorSystem);
    const handleChangedTheme = (theme: string) => {
        setActiveTheme(theme);
        dispatch(setThemeColor(theme));
    };
    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.bg_container}>
                <NavigationGoBack paddingBottom={12} paddingTop={12} title="Theme Settings" />
                <View>
                    <Container>
                        <View>
                            <TouchableOpacity
                                style={[styles.view_item_border, styles.view_item]}
                                onPress={() => handleChangedTheme('light')}
                            >
                                <View style={styles.view_padding}>
                                    <Text style={styles.text}>Light</Text>
                                    {activeTheme === 'light' && (
                                        <Icon name="circle-check" color={ACTIVE_NAV_BOTTOM} size={10} />
                                    )}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.view_item_border, styles.view_item]}
                                onPress={() => handleChangedTheme('dark')}
                            >
                                <View style={styles.view_padding}>
                                    <Text style={styles.text}>Dark</Text>
                                    {activeTheme === 'dark' && (
                                        <Icon name="circle-check" color={ACTIVE_NAV_BOTTOM} size={10} />
                                    )}
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.view_item} onPress={() => handleChangedTheme('system')}>
                                <View style={styles.view_padding}>
                                    <Text style={styles.text}>System</Text>
                                    {activeTheme === 'system' && (
                                        <Icon name="circle-check" color={ACTIVE_NAV_BOTTOM} size={10} />
                                    )}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Container>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bg_scrren: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    bg_container: {
        paddingStart: 16,
        paddingEnd: 16,
    },
    view_item_border: {
        borderBottomWidth: 0.5,
        borderBottomColor: TEXT_COLOR_PRIMARY,
    },
    view_item: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    view_padding: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingStart: 14,
        paddingEnd: 14,
    },
    text: {
        fontSize: 14,
        fontFamily: FONT_FAMILY,
        color: TEXT_COLOR_PRIMARY,
    },
});
export default ThemeScreen;
