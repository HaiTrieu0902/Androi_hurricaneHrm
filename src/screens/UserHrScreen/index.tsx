import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonUI from '../../components/Button';
import ContainerInfomation from '../../components/ContainerInfomation';
import NavigationGoBack from '../../components/NavigationGoBack';
import SearchInput from '../../components/SearchInput';
import { SCREENS, dataInfoUser } from '../../constants';
import { useAppDispatch } from '../../redux/store';
import { BG_SCREEN, BG_SUB_COLOR, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../utils/common';
const UserHrScreen = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const handleChangeNavigationUser = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };

    /* Data test */
    const data = [
        {
            _id: '64defb2c98cad31e56da3581',
            username: 'admin1',
            email: 'admin@gmail.com',
            role: 'admin',
            department: '123456',
            user_id: 1,
        },
        {
            _id: '64df2f93926879a02092634a',
            username: 'haitrieu',
            email: 'haitrieu@gmail.com',
            role: 'admin',
            department: '123456',
            user_id: 2,
        },
        {
            _id: '64df2fc1926879a020926350',
            username: 'dangdat',
            email: 'dangdat@gmail.com',
            role: 'user',
            department: '123456',
            user_id: 3,
        },
        {
            _id: '64df2fd1926879a020926353',
            username: 'haibui',
            email: 'haibui@gmail.com',
            role: 'user',
            department: '123456',
            user_id: 4,
        },
        {
            _id: '64df2fdc926879a020926356',
            username: 'duydat',
            email: 'duydat@gmail.com',
            role: 'user',
            department: '123456',
            user_id: 5,
        },
        {
            _id: '64df2fe6926879a020926359',
            username: 'danghuy',
            email: 'danghuy@gmail.com',
            role: 'user',
            department: '123456',
            user_id: 6,
        },
        {
            _id: '64df2ff6926879a02092635c',
            username: 'phuongtra',
            email: 'phuongtra@gmail.com',
            role: 'user',
            department: '123456',
            user_id: 7,
        },
        {
            _id: '64df300c926879a02092635f',
            username: 'yummii',
            email: 'yummi@gmail.com',
            role: 'user',
            department: '123456',
            user_id: 8,
        },
        {
            _id: '64df309c926879a020926362',
            username: 'thuydung',
            email: 'thuydung@gmail.com',
            role: 'user',
            department: '123456',
            user_id: 9,
        },
        {
            _id: '64df30c5926879a020926365',
            username: 'thanhloc',
            email: 'thanhloc@gmail.com',
            role: 'user',
            department: '123456',
            user_id: 10,
        },
    ];

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.bg_container}>
                <NavigationGoBack paddingBottom={12} paddingTop={12} title="User management" />
            </View>
            <View>
                <SearchInput />
            </View>
            <ScrollView>
                <View style={styles.bg_container}>
                    {data.map((item, index) => {
                        return <ContainerInfomation key={index} columns={dataInfoUser} dataSource={item} />;
                    })}
                </View>
            </ScrollView>
            {/* Button */}
            <View style={styles.view_btn}>
                <ButtonUI
                    bgColor={BG_SUB_COLOR}
                    text="Create new user"
                    onPress={() => handleChangeNavigationUser('ADD_OR_UPDATE_USER')}
                ></ButtonUI>
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
        paddingBottom: 16,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: BG_SCREEN,
    },
});

export default UserHrScreen;
