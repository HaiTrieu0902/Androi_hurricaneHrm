import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    NativeSyntheticEvent,
    StyleSheet,
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
import { setAuthToken, setAuthUser } from '../../redux/auth.slice';
import { useAppDispatch } from '../../redux/store';
import { loginAPI } from '../../services/api/auth.api';
import { IParamsAuth } from '../../types/auth';
import { isValidPassword, isValidUsername } from '../../utils/validation';
import {
    BG_PRIMARYCOLOR,
    BG_SUB_COLOR,
    COLOR_BORDER,
    COLOR_BORDER_SOLID,
    EXPLAIN_ERROR_TEXT,
    FONT_FAMILY,
    TEXT_COLOR_PRIMARY,
} from './../../utils/common';

const LoginPage = () => {
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
        Thấy phèn thì thay thư viện xịn x1000 lần
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
                const res = await loginAPI(param);
                if (res) {
                    await dispatch(setAuthToken(res?.data?.token));
                    await dispatch(setAuthUser(res?.data));
                    showToast(`${res?.message}`, 'success', 'top');
                    navigation.navigate(SCREENS.BOTTOM as never);
                }
            } catch (error) {
                showToast(`${error ? error : 'Please check it again!'}`, 'danger', 'top');
                // Alert.alert(`${error}`);
            }
        }
    };

    /*Handle show and hide password */
    const handleShowOrHidePassword = () => {
        setIsShowIcon((prev) => !prev);
    };

    return (
        <View style={styles.view}>
            <View style={styles.view_Header}>
                <View>
                    <Image style={styles.image} source={require('../../assets/img/ryder.png')}></Image>
                </View>
                <Text style={styles.text_header}>Welcome</Text>
                <Text style={styles.text_app}>Expense Management App</Text>
            </View>

            {/* View Form container */}
            <View style={styles.view_form_container}>
                <View style={styles.view_form}>
                    <Text style={styles.text_form}>Username:</Text>
                    <TextInput
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
    );
};

const styles = StyleSheet.create({
    /* Style View */
    view: { backgroundColor: '#f2f7f8', flex: 1 },
    view_Header: {
        marginTop: 80,
        flexDirection: 'column',
        alignItems: 'center',
    },
    view_form_container: {
        marginTop: 60,
        paddingEnd: 60,
        paddingStart: 60,
        gap: 12,
    },
    view_form: {
        position: 'relative',
    },

    /* Style Image */
    image: {
        width: 260,
        height: 100,
        objectFit: 'contain',
    },

    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },

    /* Style Text */
    text_header: {
        marginTop: 22,
        color: BG_PRIMARYCOLOR,
        fontSize: 30,
        fontWeight: '700',
        fontFamily: FONT_FAMILY,
    },
    text_app: {
        marginTop: 10,
        color: TEXT_COLOR_PRIMARY,
        fontSize: 16,
        fontWeight: '600',
        fontFamily: FONT_FAMILY,
    },
    text_form: {
        color: BG_PRIMARYCOLOR,
        fontWeight: '600',
        fontSize: 14,
        fontFamily: FONT_FAMILY,
    },
    text_forgot: {
        color: BG_SUB_COLOR,
        fontWeight: '500',
        fontSize: 14,
        textDecorationLine: 'underline',
        fontFamily: FONT_FAMILY,
    },
    text_validate: {
        fontSize: 13.5,
        color: EXPLAIN_ERROR_TEXT,
        marginTop: 2,
        fontFamily: FONT_FAMILY,
    },
    text_footer: {
        paddingEnd: 60,
        paddingStart: 60,
        textAlign: 'center',
        color: BG_SUB_COLOR,
        marginTop: 30,
        fontSize: 14,
        fontFamily: FONT_FAMILY,
    },

    /* Style TextInput */
    TextInput: {
        fontSize: 14,
        height: 42,
        color: TEXT_COLOR_PRIMARY,
        borderWidth: 1,
        borderColor: BG_SUB_COLOR,
        borderRadius: 10,
        marginTop: 8,
        paddingHorizontal: 12,
        fontFamily: FONT_FAMILY,
    },
    TextInputError: {
        fontSize: 14,
        height: 42,
        color: TEXT_COLOR_PRIMARY,
        borderWidth: 1,
        borderColor: EXPLAIN_ERROR_TEXT,
        borderRadius: 10,
        marginTop: 8,
        paddingHorizontal: 12,
        fontFamily: FONT_FAMILY,
    },
    button: {
        backgroundColor: BG_PRIMARYCOLOR,
        height: 48,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONT_FAMILY,
    },
    touchableOpacity: {
        right: 8,
        top: 42,
        position: 'absolute',
    },
    icon: {
        height: 16,
        width: 16,
        right: 10,
    },
});

export default LoginPage;
