import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconBase from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import ButtonUI from '../../../components/Button';
import NavigationGoBack from '../../../components/NavigationGoBack';
import {
    BG_SCREEN,
    BG_SUB_COLOR,
    COLOR_BORDER,
    FONT_FAMILY,
    SIZE_ICON_DEFAULT,
    TEXT_COLOR_PRIMARY,
} from '../../../utils/common';
import { ScrollView } from 'react-native-gesture-handler';

const AddOrUpdateUserScreen = () => {
    const navigation = useNavigation();
    const handleNavigator = () => {
        navigation.goBack();
    };

    const handleAddUser = () => {};

    return (
        <SafeAreaView style={styles.bg_screen}>
            <View style={styles.bg_container}>
                <NavigationGoBack paddingBottom={12} paddingTop={12} title="Create new user" />
            </View>

            <ScrollView>
                <View style={styles.bg_container}>
                    <View style={styles.view_item}>
                        <Text style={styles.text_title}>Username: </Text>
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
                                    name="email"
                                    color={TEXT_COLOR_PRIMARY}
                                    size={SIZE_ICON_DEFAULT}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.view_item}>
                        <Text style={styles.text_title}>Password: </Text>
                        <View style={styles.view_input}>
                            <TextInput style={styles.input} />
                            <View style={styles.input_icon}>
                                <MaterialIcons name="password" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.view_item}>
                        <Text style={styles.text_title}>Department: </Text>
                        <View style={styles.view_input}>
                            <TextInput style={styles.input} />
                            <View style={styles.input_icon}>
                                <Icon name="code-branch" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.view_item}>
                        <Text style={styles.text_title}>Role: </Text>
                        <View style={styles.view_input}>
                            <TextInput style={[styles.input]} editable={false} />
                            <View style={styles.input_icon}>
                                <Icon name="user-astronaut" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_DEFAULT} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* Button */}
            <View style={styles.view_btn}>
                <ButtonUI bgColor={BG_SUB_COLOR} text="Add" onPress={() => {}}></ButtonUI>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bg_screen: {
        backgroundColor: BG_SCREEN,
        height: '100%',
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
        color: 'black',
    },
    view_input: {
        height: 36,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLOR_BORDER,
        shadowColor: 'rgba(0, 0, 0, 0.08)',
        alignContent: 'center',
        alignItems: 'center',
    },
    input: {
        paddingLeft: 12,
        width: '80%',
    },
    input_icon: {
        borderStartColor: COLOR_BORDER,
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

    view_btn: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 60,
        paddingBottom: 16,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: BG_SCREEN,
    },
    darkText: {
        backgroundColor: '#d9d9d9',
        width: '100%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d9d9d9',
    },
});

export default AddOrUpdateUserScreen;
