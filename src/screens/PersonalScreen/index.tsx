import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonUI from '../../components/Button';
import Container from '../../components/Container';
import HeaderText from '../../components/HeaderText';
import { SCREENS } from '../../constants';
import { remoteAuthToken, remoteAuthUser } from '../../redux/auth.slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import {
    ACTIVE_NAV_BOTTOM,
    BG_SUB_COLOR,
    EXPLAIN_ERROR_TEXT,
    SIZE_ICON_16,
    SIZE_ICON_DEFAULT,
    TEXT_COLOR_PRIMARY,
} from '../../utils/common';
import { styles } from './PersonalStyle';

const PersonalScreen = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const { user } = useAppSelector((state) => state.auth);

    /* handle logout */
    const handleLogout = async () => {
        await dispatch(remoteAuthToken());
        await dispatch(remoteAuthUser());
        navigation.navigate(SCREENS.LOGIN as never);
    };

    /* handle navigation  */
    const handleChangeNavigationPersonal = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };

    /* handle delete user */
    const handleDeleteUser = async () => {
        await dispatch(remoteAuthToken());
        await dispatch(remoteAuthUser());
        navigation.navigate(SCREENS.LOGIN as never);
    };

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <HeaderText title="Personal"></HeaderText>
            <View style={styles.bg_container}>
                {/* Thông tin */}
                <View style={styles.view_item}>
                    <Text style={styles.text_title}>Infomation</Text>
                    <Container padding={true}>
                        <Text style={styles.text_name}>{user?.fullName || 'Admin'}</Text>
                        <Text style={{ marginTop: 5 }}>{user?.email || 'admin@gmail.com'}</Text>

                        <Text style={{ marginTop: 5 }}>
                            <Text style={{ fontWeight: '700' }}>Code:</Text> {user?.user_code || 'admin@gmail.com'}
                        </Text>
                    </Container>
                </View>

                {/* Maneger*/}
                <View style={styles.view_item}>
                    <Text style={styles.text_title}>Manager</Text>
                    <Container padding={true}>
                        <View style={styles.view_manage_list}>
                            <TouchableOpacity onPress={() => handleChangeNavigationPersonal('USER')}>
                                <View style={styles.view_manage_item}>
                                    <Icon name="chart-simple" color={ACTIVE_NAV_BOTTOM} size={SIZE_ICON_DEFAULT} />
                                    <Text style={styles.text_manage_item}>User List</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.view_manage_item}>
                                    <Entypo name="pie-chart" color={ACTIVE_NAV_BOTTOM} size={SIZE_ICON_DEFAULT} />
                                    <Text style={styles.text_manage_item}>Category Report</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleChangeNavigationPersonal('YEAR_REPORT')}>
                                <View style={styles.view_manage_item}>
                                    <Icon name="chart-simple" color={ACTIVE_NAV_BOTTOM} size={SIZE_ICON_DEFAULT} />
                                    <Text style={styles.text_manage_item}>Year report</Text>
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

                            <TouchableOpacity
                                onPress={() => handleChangeNavigationPersonal('CHANGE_PASSORD')}
                                style={[styles.view_application_item, styles.view_application_border]}
                            >
                                <View style={styles.view_sub_item}>
                                    <Icon name="circle-user" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />
                                    <Text style={styles.text_sub_item}>Change Password</Text>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                            </TouchableOpacity>

                            <View style={[styles.view_application_item]}>
                                <View style={styles.view_sub_item}>
                                    <Icon name="link" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                                    <Text style={styles.text_sub_item}>About us</Text>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                            </View>
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
                    <ButtonUI bgColor={BG_SUB_COLOR} text="Log out" onPress={handleLogout}></ButtonUI>
                </View>

                {/* <View style={{ marginTop: 12, display: 'flex', alignItems: 'center' }}>
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
                </View> */}
            </View>
        </SafeAreaView>
    );
};

export default PersonalScreen;
