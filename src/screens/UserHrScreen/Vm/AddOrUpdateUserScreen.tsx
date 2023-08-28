import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconBase from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
    BG_PRIMARYCOLOR,
    BG_SCREEN,
    FONT_FAMILY,
    SIZE_ICON_20,
    SIZE_ICON_DEFAULT,
    TEXT_COLOR_PRIMARY,
} from '../../../utils/common';
import HeaderText from '../../../components/HeaderText';
import ButtonUI from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const AddOrUpdateUserScreen = () => {
    const navigation = useNavigation();
    const handleNavigator = () => {
        navigation.goBack();
    };

    const handleAddUser = () => {};

    return (
        <SafeAreaView style={styles.bg_screen}>
            {/*Header*/}
            <View style={styles.view_head_screen}>
                <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleNavigator}>
                        <Icon name="angle-left" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_20} />
                    </TouchableOpacity>
                    <HeaderText title="Update Employees"></HeaderText>
                </View>
                <MaterialCommunityIcons
                    style={styles.delete_icon}
                    name="delete-outline"
                    color={TEXT_COLOR_PRIMARY}
                    size={SIZE_ICON_20}
                />
            </View>
            <View style={styles.bg_container}>
                <View style={styles.view_item}>
                    <Text style={styles.text_title}>username: </Text>
                    <View style={styles.view_input}>
                        <TextInput style={styles.input} />
                        <View style={styles.input_icon}>
                            <IconBase name="user-o" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                        </View>
                    </View>
                </View>

                <View style={styles.view_item}>
                    <Text style={styles.text_title}>Email: </Text>
                    <View style={styles.view_input}>
                        <TextInput style={styles.input} />
                        <View style={styles.input_icon}>
                            <MaterialCommunityIcons
                                name="email-outline"
                                color={TEXT_COLOR_PRIMARY}
                                size={SIZE_ICON_DEFAULT}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.view_item}>
                    <Text style={styles.text_title}>Department: </Text>
                    <View style={styles.view_input}>
                        <TextInput style={styles.input} />
                    </View>
                </View>

                <View style={styles.view_item}>
                    <Text style={styles.text_title}>Role: </Text>
                    <View style={styles.view_input}>
                        <TextInput style={styles.input} />
                    </View>
                </View>
            </View>
            <View style={styles.view_Btn}>
                <ButtonUI onPress={handleAddUser} text="Save"></ButtonUI>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bg_screen: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    view_head_screen: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 4,
        paddingTop: 4,
    },
    delete_icon: {
        borderRadius: 999,
        backgroundColor: 'white',
        padding: 4,
    },
    bg_container: {
        gap: 20,
        paddingTop: 6,
        paddingStart: 16,
        paddingEnd: 16,
    },
    view_item: {
        marginBottom: 4,
    },
    text_title: {
        marginBottom: 8,
        fontSize: 14,
        color: TEXT_COLOR_PRIMARY,
    },
    view_input: {
        height: 36,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: TEXT_COLOR_PRIMARY,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        alignContent: 'center',
        alignItems: 'center',
    },
    input: {
        paddingLeft: 12,
        width: '80%',
    },
    input_icon: {
        borderStartColor: TEXT_COLOR_PRIMARY,
        borderStartWidth: 1.5,
        paddingLeft: 12,
        paddingRight: 12,
    },
    text_name: {
        fontFamily: FONT_FAMILY,
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
    },
    view_Btn: {
        paddingStart: 16,
        paddingEnd: 16,
        marginBottom: 16,
        flex: 1,
        justifyContent: 'flex-end',
    },
});

export default AddOrUpdateUserScreen;
