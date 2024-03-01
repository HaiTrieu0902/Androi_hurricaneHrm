import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
    Image,
    NativeSyntheticEvent,
    Text,
    TextInput,
    TextInputChangeEventData,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ButtonUI from '../../components/Button';
import { SCREENS } from '../../constants';
import useToastNotifications from '../../hook/useToastNotifications';
import { setAuthToken, setAuthUser, setDataSaveUser } from '../../redux/auth.slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { loginAPI } from '../../services/api/auth.api';
import { IParamsAuth } from '../../types/auth';
import { isValidPassword, isValidUsername } from '../../utils/validation';
import { BG_SUB_COLOR, COLOR_BORDER_SOLID, TEXT_COLOR_PRIMARY } from './../../utils/common';
import { styles } from './LoginStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { asyncStorageService } from '../../utils/storage';
import { HOST_API_APP } from '@env';
const LoginPage = () => {
    const { dataSaveUser } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const showToast = useToastNotifications();
    const [valueForm, setValueForm] = useState<IParamsAuth>({
        username: '',
        password: '',
    });
    const [validationErrors, setValidationErrors] = useState<IParamsAuth>({
        username: '',
        password: '',
    });
    const [isShowIcon, setIsShowIcon] = useState<boolean>(false);

    /*Handle onChange value input */
    const handleOnChangeValue = (e: NativeSyntheticEvent<TextInputChangeEventData>, field: any) => {
        const newValue = e.nativeEvent.text;
        setValueForm((prev) => ({
            ...prev,
            [field]: newValue,
        }));
        /* When value change and then update value Error if has error */
        if (field === 'username') {
            setValidationErrors((prev) => ({
                ...prev,
                username: isValidUsername(newValue),
            }));
        } else if (field === 'password') {
            setValidationErrors((prev) => ({
                ...prev,
                password: isValidPassword(newValue),
            }));
        }
    };

    /* Validate kiểu nông dân dễ hiểu ,không màu mè 
        Thấy phèn thì thay thư viện xịn x1000 lần :))
    */
    const handleValidatePrevSubmit = () => {
        const { username, password } = valueForm;
        const valueErrorUsername = isValidUsername(String(username));
        const valueErrorPassword = isValidPassword(password);
        setValidationErrors((prev) => ({
            ...prev,
            username: valueErrorUsername,
            password: valueErrorPassword,
        }));
    };

    /*Handle submit form */
    const handleOnSubmit = async () => {
        const { username, password } = valueForm;
        handleValidatePrevSubmit();
        if (!validationErrors.password && !validationErrors.username && valueForm.username && valueForm.password) {
            const param = {
                username: username,
                password: password,
            };
            try {
                console.log(' HOST_API_APP', HOST_API_APP);
                const res = await loginAPI(param);
                if (res) {
                    await dispatch(setAuthToken(res?.data?.token));
                    asyncStorageService.setValue('access_token', res?.data?.token);
                    await dispatch(setAuthUser(res?.data));
                    dispatch(setDataSaveUser(param));
                    showToast(`${res?.message}`, 'success', 'top');
                    navigation.navigate(SCREENS.BOTTOM as never);
                }
            } catch (error: any) {
                showToast(`${error ? `${error}` : 'Please check it again!'}`, 'danger', 'top');
            }
        }
    };

    /*Handle show and hide password */
    const handleShowOrHidePassword = () => {
        setIsShowIcon((prev) => !prev);
    };

    /* set value when logout  */
    useEffect(() => {
        if (dataSaveUser?.password && dataSaveUser?.password) {
            setValueForm({
                password: dataSaveUser?.password,
                username: String(dataSaveUser?.username),
            });
        }
    }, [dataSaveUser]);

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.view}>
                <View style={styles.view_Header}>
                    <View>
                        <Image style={styles.image} source={require('../../assets/img/ryder.png')}></Image>
                    </View>
                    <Text style={styles.text_header}>Welcome</Text>
                    <Text style={styles.text_app}>Expense smart money app</Text>
                </View>

                {/* View Form container */}
                <View style={styles.view_form_container}>
                    <View style={styles.view_form}>
                        <Text style={styles.text_form}>Username:</Text>
                        <TextInput
                            defaultValue={String(dataSaveUser?.username)}
                            onChange={(e) => handleOnChangeValue(e, 'username')}
                            style={validationErrors.username !== '' ? styles.TextInputError : styles.TextInput}
                            placeholder="Enter your username"
                        ></TextInput>
                        {validationErrors.username !== '' && (
                            <Text style={styles.text_validate}>{validationErrors.username}</Text>
                        )}
                    </View>
                    <View style={styles.view_form}>
                        <Text style={styles.text_form}>Password: </Text>
                        <TextInput
                            defaultValue={String(dataSaveUser?.password)}
                            onChange={(e) => handleOnChangeValue(e, 'password')}
                            style={validationErrors.password !== '' ? styles.TextInputError : styles.TextInput}
                            placeholder="Enter your password"
                            secureTextEntry={!isShowIcon}
                        ></TextInput>
                        <TouchableOpacity style={styles.touchableOpacity} onPress={handleShowOrHidePassword}>
                            {isShowIcon ? (
                                <Icon name="eye" color={TEXT_COLOR_PRIMARY} size={12} />
                            ) : (
                                <Icon name="eye-slash" color={TEXT_COLOR_PRIMARY} size={12} />
                            )}
                        </TouchableOpacity>
                        {validationErrors.password !== '' && (
                            <Text style={styles.text_validate}>{validationErrors.password}</Text>
                        )}
                    </View>

                    {/* View forgot password */}
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1 }}></Text>
                        <Text
                            onPress={() => {
                                navigation.navigate(SCREENS.FORGOT_PASSWORD as never);
                            }}
                            style={styles.text_forgot}
                        >
                            Forgot Password?
                        </Text>
                    </View>

                    <View style={{ marginTop: 5 }}>
                        <ButtonUI bgColor={BG_SUB_COLOR} text="Login" onPress={handleOnSubmit} />
                    </View>

                    <View style={{ marginTop: 5 }}>
                        <ButtonUI
                            bgColor="transparent"
                            color={COLOR_BORDER_SOLID}
                            borderWidth={1}
                            borderColor={COLOR_BORDER_SOLID}
                            text="Register"
                            onPress={() => {
                                navigation.navigate(SCREENS.REGISTER as never);
                            }}
                        />
                    </View>
                </View>

                <View>
                    <Text
                        style={styles.text_footer}
                    >{`© Copyright Hurricane ${new Date().getFullYear()} All Rights Reserved`}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginPage;
