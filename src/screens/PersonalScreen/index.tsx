import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonUI from '../../components/Button';
import Container from '../../components/Container';
import HeaderText from '../../components/HeaderText';
import { SCREENS } from '../../constants';
import { remoteAuthToken, remoteAuthUser } from '../../redux/auth.slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
    ACTIVE_NAV_BOTTOM,
    BG_SCREEN,
    EXPLAIN_ERROR_TEXT,
    FONT_FAMILY,
    SIZE_ICON_16,
    SIZE_ICON_DEFAULT,
    TEXT_COLOR_PRIMARY,
} from '../../utils/common';

const PersonalScreen = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const { user } = useAppSelector((state) => state.auth);

    const handleLogout = async () => {
        await dispatch(remoteAuthToken());
        await dispatch(remoteAuthUser());
        navigation.navigate(SCREENS.LOGIN as never);
    };

    const handleChangeNavigationPersonal = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <HeaderText title="Personal"></HeaderText>
            <View style={styles.bg_container}>
                {/* Thông tin */}
                <View style={styles.view_item}>
                    <Text style={styles.text_title}>Infomation</Text>
                    <Container padding={true}>
                        <Text style={styles.text_name}>{user?.username || 'Admin'}</Text>
                        <Text style={{ marginTop: 5 }}>{user?.email || 'admin@gmail.com'}</Text>
                    </Container>
                </View>

                {/* Maneger*/}
                <View style={styles.view_item}>
                    <Text style={styles.text_title}>Manager</Text>
                    <Container padding={true}>
                        <View style={styles.view_manage_list}>
                            <TouchableOpacity onPress={() => handleChangeNavigationPersonal('USER')}>
                                <View style={styles.view_manage_item}>
                                    <Icon name="users-gear" color={ACTIVE_NAV_BOTTOM} size={SIZE_ICON_DEFAULT} />
                                    <Text style={styles.text_manage_item}>User</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.view_manage_item}>
                                    <Icon name="code-branch" color={ACTIVE_NAV_BOTTOM} size={SIZE_ICON_DEFAULT} />
                                    <Text style={styles.text_manage_item}>Derpartment</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.view_manage_item}>
                                    <Icon name="user-group" color={ACTIVE_NAV_BOTTOM} size={SIZE_ICON_DEFAULT} />
                                    <Text style={styles.text_manage_item}>Marriage</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.view_manage_item}>
                                    <Fontisto
                                        name="holiday-village"
                                        color={ACTIVE_NAV_BOTTOM}
                                        size={SIZE_ICON_DEFAULT}
                                    />
                                    <Text style={styles.text_manage_item}>Holiday</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </Container>
                </View>

                {/* application */}
                <View style={styles.view_item}>
                    <Text style={styles.text_title}>Application</Text>
                    <Container padding={true}>
                        <View style={styles.view_application_list}>
                            <TouchableOpacity
                                style={[styles.view_application_item, styles.view_application_border]}
                                onPress={() => handleChangeNavigationPersonal('SETTINGS')}
                            >
                                <View style={styles.view_sub_item}>
                                    <FeatherIcon name="settings" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />
                                    <Text style={styles.text_sub_item}>Settings</Text>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => handleChangeNavigationPersonal('SETTING_THEME')}
                                style={[styles.view_application_item, styles.view_application_border]}
                            >
                                <View style={styles.view_sub_item}>
                                    <MaterialCommunityIcons
                                        name="theme-light-dark"
                                        color={TEXT_COLOR_PRIMARY}
                                        size={SIZE_ICON_16}
                                    />
                                    <Text style={styles.text_sub_item}>Setting Theme</Text>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                            </TouchableOpacity>

                            <View style={[styles.view_application_item, styles.view_application_border]}>
                                <View style={styles.view_sub_item}>
                                    <Icon name="circle-user" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />
                                    <Text style={styles.text_sub_item}>Update Infomation</Text>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                            </View>

                            <View style={[styles.view_application_item]}>
                                <View style={styles.view_sub_item}>
                                    <Icon name="link" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                                    <Text style={styles.text_sub_item}>Setting Theme</Text>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                            </View>
                            {/* <View style={[styles.view_application_item]}>
                                <View style={styles.view_sub_item}>
                                    <Icon name="star" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                                    <Text style={styles.text_sub_item}>Ratting</Text>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                            </View> */}
                        </View>
                    </Container>
                </View>

                <View>
                    <Text style={styles.text_title}>Account</Text>
                    <Container padding={true}>
                        <View style={[styles.view_account_item]}>
                            <View style={styles.view_sub_item}>
                                <MaterialCommunityIcons name="delete" color={EXPLAIN_ERROR_TEXT} size={SIZE_ICON_16} />
                                <Text style={{ color: EXPLAIN_ERROR_TEXT, marginTop: -3 }}>Delete account</Text>
                            </View>
                            <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                        </View>
                    </Container>
                </View>

                {/* Button */}
                <View style={{ marginTop: 28 }}>
                    <ButtonUI text="Log out" onPress={handleLogout}></ButtonUI>
                </View>

                <View style={{ marginTop: 12, display: 'flex', alignItems: 'center' }}>
                    <Text
                        style={{
                            alignContent: 'center',
                            alignItems: 'center',
                            color: TEXT_COLOR_PRIMARY,
                            fontWeight: '600',
                        }}
                    >
                        Version: 0.9.5
                    </Text>
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
    view_item: {
        marginBottom: 18,
    },
    view_manage_list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view_manage_item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    view_application_list: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    view_application_item: {
        display: 'flex',
        gap: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    view_account_item: {
        display: 'flex',
        gap: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    view_sub_item: {
        display: 'flex',
        gap: 10,
        flexDirection: 'row',
        alignContent: 'center',
    },
    view_application_border: {
        borderBottomWidth: 0.5,
        borderBottomColor: TEXT_COLOR_PRIMARY,
    },
    text_title: {
        fontFamily: FONT_FAMILY,
        marginBottom: 10,
        fontSize: 14,
        color: TEXT_COLOR_PRIMARY,
    },
    text_name: {
        fontFamily: FONT_FAMILY,
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
    },
    text_sub_item: {
        fontFamily: FONT_FAMILY,
        marginTop: -3,
        color: TEXT_COLOR_PRIMARY,
        fontSize: 14,
    },
    text_manage_item: {
        fontFamily: FONT_FAMILY,
        color: TEXT_COLOR_PRIMARY,
        fontWeight: '600',
        fontSize: 14,
    },
});

export default PersonalScreen;
