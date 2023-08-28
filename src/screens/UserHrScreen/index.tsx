import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ButtonUI from '../../components/Button';
import Container from '../../components/Container';
import HeaderText from '../../components/HeaderText';
import { SCREENS } from '../../constants';
import {
    BG_PRIMARYCOLOR,
    BG_SCREEN,
    FONT_FAMILY,
    SIZE_ICON_16,
    SIZE_ICON_20,
    SIZE_ICON_DEFAULT,
    TEXT_COLOR_PRIMARY,
} from '../../utils/common';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppDispatch } from '../../redux/store';
import NavigationGoBack from '../../components/NavigationGoBack';
const UserHrScreen = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const handleAddUser = () => {};

    const handleChangeNavigationPersonal = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.bg_container}>
                <NavigationGoBack paddingBottom={12} paddingTop={12} title="User management" />
            </View>

            <View style={styles.search}>
                <View style={styles.icon_search}>
                    <AntDesign name="search1" color={'white'} size={20}></AntDesign>
                </View>
                <TextInput
                    style={styles.input_search}
                    placeholder="Search name user"
                    placeholderTextColor={'white'}
                ></TextInput>
                <View style={styles.filter}>
                    <AntDesign color={'white'} name="filter" size={24}></AntDesign>
                </View>
            </View>

            <HeaderText title="Manage User"></HeaderText>
            <ScrollView>
                <View style={styles.bg_container}>
                    {/* Infomation User */}
                    <TouchableOpacity
                        onPress={() => handleChangeNavigationPersonal('ADD_OR_UPDATE_USER')}
                        style={styles.view_item}
                    >
                        <Container>
                            <View style={styles.view_item_container}>
                                <View style={styles.view_manage_list}>
                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Username: </Text>
                                            <Text style={styles.text_sub_item_value}>Admin1 </Text>
                                        </View>
                                    </View>
                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Email: </Text>
                                            <Text style={styles.text_sub_item_value}>admin@gmail.com </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>department: </Text>
                                            <Text style={styles.text_sub_item_value}>123456 </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Role: </Text>
                                            <Text style={styles.text_sub_item_value}>admin </Text>
                                        </View>
                                    </View>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_20} />
                            </View>
                        </Container>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleChangeNavigationPersonal('SET_USER')}
                        style={styles.view_item}
                    >
                        <Container>
                            <View style={styles.view_item_container}>
                                <View style={styles.view_manage_list}>
                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Username: </Text>
                                            <Text style={styles.text_sub_item_value}>Admin1 </Text>
                                        </View>
                                    </View>
                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Email: </Text>
                                            <Text style={styles.text_sub_item_value}>admin@gmail.com </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>department: </Text>
                                            <Text style={styles.text_sub_item_value}>123456 </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Role: </Text>
                                            <Text style={styles.text_sub_item_value}>admin </Text>
                                        </View>
                                    </View>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_20} />
                            </View>
                        </Container>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleChangeNavigationPersonal('SET_USER')}
                        style={styles.view_item}
                    >
                        <Container>
                            <View style={styles.view_item_container}>
                                <View style={styles.view_manage_list}>
                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Username: </Text>
                                            <Text style={styles.text_sub_item_value}>Admin1 </Text>
                                        </View>
                                    </View>
                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Email: </Text>
                                            <Text style={styles.text_sub_item_value}>admin@gmail.com </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>department: </Text>
                                            <Text style={styles.text_sub_item_value}>123456 </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Role: </Text>
                                            <Text style={styles.text_sub_item_value}>admin </Text>
                                        </View>
                                    </View>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_20} />
                            </View>
                        </Container>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleChangeNavigationPersonal('SET_USER')}
                        style={styles.view_item}
                    >
                        <Container>
                            <View style={styles.view_item_container}>
                                <View style={styles.view_manage_list}>
                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Username: </Text>
                                            <Text style={styles.text_sub_item_value}>Admin1 </Text>
                                        </View>
                                    </View>
                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Email: </Text>
                                            <Text style={styles.text_sub_item_value}>admin@gmail.com </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>department: </Text>
                                            <Text style={styles.text_sub_item_value}>123456 </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Role: </Text>
                                            <Text style={styles.text_sub_item_value}>admin </Text>
                                        </View>
                                    </View>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_20} />
                            </View>
                        </Container>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleChangeNavigationPersonal('SET_USER')}
                        style={styles.view_item}
                    >
                        <Container>
                            <View style={styles.view_item_container}>
                                <View style={styles.view_manage_list}>
                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Username: </Text>
                                            <Text style={styles.text_sub_item_value}>Admin1 </Text>
                                        </View>
                                    </View>
                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Email: </Text>
                                            <Text style={styles.text_sub_item_value}>admin@gmail.com </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>department: </Text>
                                            <Text style={styles.text_sub_item_value}>123456 </Text>
                                        </View>
                                    </View>

                                    <View style={[styles.view_manage_item, styles.view_manage_border]}>
                                        <View style={styles.view_sub_item}>
                                            <Text style={styles.text_sub_item}>Role: </Text>
                                            <Text style={styles.text_sub_item_value}>admin </Text>
                                        </View>
                                    </View>
                                </View>
                                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_20} />
                            </View>
                        </Container>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* Button */}
            <View style={styles.view_btn}>
                <ButtonUI text="Add New User" onPress={handleAddUser}></ButtonUI>
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
    search: {
        backgroundColor: BG_PRIMARYCOLOR,
        flexDirection: 'row',
        paddingTop: 10,
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingStart: 20,
        paddingEnd: 20,
    },
    icon_search: {
        paddingTop: 8,
        color: 'white',
    },
    input_search: {
        paddingTop: 4,
        width: '80%',
        color: 'white',
    },
    filter: {
        paddingTop: 8,
    },

    view_item: {
        marginBottom: 18,
    },
    view_item_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    view_manage_list: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        width: '85%',
    },
    view_manage_item: {
        display: 'flex',
        gap: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },

    view_sub_item: {
        display: 'flex',
        gap: 10,
        flexDirection: 'row',
        alignContent: 'center',
    },
    view_manage_border: {
        borderBottomWidth: 0.5,
        borderBottomColor: TEXT_COLOR_PRIMARY,
    },
    text_title: {
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
        marginTop: -3,
        color: TEXT_COLOR_PRIMARY,
    },
    text_sub_item_value: {
        marginTop: -3,
        color: 'black',
    },
    view_btn: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 60,
        paddingBottom: 10,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: BG_SCREEN,
    },
});

export default UserHrScreen;
