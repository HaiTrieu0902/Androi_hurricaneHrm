import React, { useEffect, useState } from 'react';
import { NativeSyntheticEvent, Text, TextInputChangeEventData, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './user.style';
import { IParamsAuth } from '../../../src/types/auth';
import ButtonUI from '../../../src/components/Button';
import { BG_SUB_COLOR } from '../../../src/utils/common';
import { getAllUSerAPI, registerAPI } from '../../../src/services/api/auth.api';
import useToastNotifications from '../../../src/hook/useToastNotifications';
import NavigationGoBack from '../../../src/components/NavigationGoBack';

type typeParamUser = {
    username: string;
    fullname: string;
    email: string;
};

const UserListManager = () => {
    const showToast = useToastNotifications();
    const [valueForm, setValueForm] = useState<IParamsAuth>({
        email: '',
        username: '',
        fullname: '',
        password: '123456789',
        confirmPassword: '123456789',
    });
    const [listUser, setListUser] = useState<typeParamUser[]>();
    const [triggerUploadList, setListUpload] = useState(false);

    const handleOnChangeValue = (e: NativeSyntheticEvent<TextInputChangeEventData>, field: any) => {
        const newValue = e.nativeEvent.text;
        setValueForm((prev) => ({
            ...prev,
            [field]: newValue,
        }));
        /* When value change and then update value Error if has error */
    };

    const handleOnSubmit = async () => {
        setListUpload(!triggerUploadList);
        const { username, fullname, password, email, confirmPassword } = valueForm;
        const param = {
            email: email,
            fullname: fullname,
            username: username,
            password: password,
            confirmPassword: confirmPassword,
        };
        try {
            const res = await registerAPI(param);
            if (res) {
                showToast(`${res?.message}`, 'success', 'top');
            }
            setValueForm({
                email: '',
                username: '',
                fullname: '',
                password: '123456789',
                confirmPassword: '123456789',
            });
            getAllUserListAPI();
        } catch (error: any) {
            showToast(
                `${
                    error
                        ? `User or Email ${error?.message?.username || error?.message?.email} has exits`
                        : 'Please check it again!'
                }`,
                'danger',
                'top',
            );
        }
    };

    const getAllUserListAPI = async () => {
        try {
            const res = await getAllUSerAPI();

            setListUser(res?.data);
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUserListAPI();
    }, [triggerUploadList]);

    console.log('listUser', listUser);
    console.log('valueForm', valueForm);
    return (
        <SafeAreaView>
            <View>
                <NavigationGoBack paddingBottom={12} paddingTop={12} paddingStart={10} title="go back" />
            </View>
            <View style={styles.view_form_container}>
                <View style={styles.view_form}>
                    <Text style={styles.text_form}>Username:</Text>
                    <TextInput
                        value={valueForm?.username}
                        onChange={(e) => handleOnChangeValue(e, 'username')}
                        style={styles.TextInput}
                        placeholder="Enter your username"
                    ></TextInput>
                </View>

                <View style={styles.view_form}>
                    <Text style={styles.text_form}>Fullname:</Text>
                    <TextInput
                        value={valueForm?.fullname}
                        onChange={(e) => handleOnChangeValue(e, 'fullname')}
                        style={styles.TextInput}
                        placeholder="Enter your fullname"
                    ></TextInput>
                </View>

                <View style={styles.view_form}>
                    <Text style={styles.text_form}>Email:</Text>
                    <TextInput
                        value={valueForm?.email}
                        onChange={(e) => handleOnChangeValue(e, 'email')}
                        style={styles.TextInput}
                        placeholder="Enter your email"
                    ></TextInput>
                </View>

                {/* View forgot password */}
                <View style={styles.view_footer}>
                    <ButtonUI bgColor={'red'} text="Thêm" onPress={handleOnSubmit} />
                </View>

                <ScrollView style={{ maxHeight: 200 }}>
                    <View>
                        {listUser?.map((item, index) => {
                            return (
                                <View key={index} style={{ borderWidth: 1, borderBlockColor: 'red' }}>
                                    <Text>Fullname: {item?.fullname}</Text>
                                    <Text>UserName: {item?.username}</Text>
                                    <Text>Gmail: {item?.email}</Text>
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default UserListManager;
