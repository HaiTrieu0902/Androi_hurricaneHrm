import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
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
import { IParamsAuth } from '../../types/auth';
import {
    isValidConfirmPassword,
    isValidEmail,
    isValidFullname,
    isValidPassword,
    isValidUsername,
} from '../../utils/validation';
import { BG_SUB_COLOR, TEXT_COLOR_PRIMARY } from './../../utils/common';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { registerAPI } from '../../services/api/auth.api';
import { styles } from './RegisterStyle';
const RegisterScreen = () => {
    const navigation = useNavigation();
    const showToast = useToastNotifications();
    const [valueForm, setValueForm] = useState<IParamsAuth>({
        email: '',
        username: '',
        fullname: '',
        password: '',
        confirmPassword: '',
    });

    const [validationErrors, setValidationErrors] = useState<IParamsAuth>({
        email: '',
        username: '',
        fullname: '',
        password: '',
        confirmPassword: '',
    });
    const [isShowIcon, setIsShowIcon] = useState({
        showPassword: false,
        showConfirmPassword: false,
    });

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
        } else if (field === 'email') {
            setValidationErrors((prev) => ({
                ...prev,
                email: isValidEmail(newValue),
            }));
        } else if (field === 'fullname') {
            setValidationErrors((prev) => ({
                ...prev,
                fullname: isValidFullname(newValue),
            }));
        } else if (field === 'password') {
            setValidationErrors((prev) => ({
                ...prev,
                password: isValidPassword(newValue),
            }));
        } else if (field === 'confirmPassword') {
            setValidationErrors((prev) => ({
                ...prev,
                confirmPassword: isValidPassword(newValue),
            }));
        }
    };

    const handleValidatePrevSubmit = () => {
        const { email, username, fullname, password, confirmPassword } = valueForm;
        const valueErrorEmail = isValidEmail(String(email));
        const valueErrorUsername = isValidUsername(String(username));
        const valueErrorFullname = isValidFullname(String(fullname));
        const valueErrorPassword = isValidPassword(password);
        const valueConfirmPassword = isValidConfirmPassword(String(password), String(confirmPassword));

        setValidationErrors((prev) => ({
            ...prev,
            email: valueErrorEmail,
            username: valueErrorUsername,
            fullname: valueErrorFullname,
            password: valueErrorPassword,
            confirmPassword: valueConfirmPassword,
        }));
    };

    /*Handle submit form */
    const handleOnSubmit = async () => {
        const { username, fullname, password, email, confirmPassword } = valueForm;
        handleValidatePrevSubmit();
        if (
            !validationErrors.password &&
            !validationErrors.email &&
            !validationErrors.username &&
            !validationErrors.fullname &&
            !validationErrors.confirmPassword &&
            valueForm.username &&
            valueForm.email &&
            valueForm.fullname &&
            valueForm.password &&
            valueForm.confirmPassword &&
            valueForm.password === valueForm.confirmPassword
        ) {
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
                    navigation.navigate(SCREENS.LOGIN as never);
                }
            } catch (error: any) {
                showToast(`${error?.error}`, 'danger', 'top');
            }
        }
    };

    const handleShowOrHidePassword = () => {
        setIsShowIcon((prev) => ({
            ...prev,
            showPassword: !prev.showPassword,
        }));
    };

    const handleShowOrHideConfirmPassword = () => {
        setIsShowIcon((prev) => ({
            ...prev,
            showConfirmPassword: !prev.showConfirmPassword,
        }));
    };
    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View>
                <View style={styles.view_Header}>
                    <View>
                        <Image style={styles.image} source={require('../../assets/img/ryder.png')}></Image>
                    </View>
                    <Text style={styles.text_header}>Register Account</Text>
                    <Text style={styles.text_app}>Create new account</Text>
                </View>

                {/* View Form container */}
                <ScrollView style={{ maxHeight: 450 }}>
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
                            <Text style={styles.text_form}>Fullname:</Text>
                            <TextInput
                                onChange={(e) => handleOnChangeValue(e, 'fullname')}
                                style={validationErrors.fullname !== '' ? styles.TextInputError : styles.TextInput}
                                placeholder="Enter your fullname"
                            ></TextInput>
                            {validationErrors.fullname !== '' && (
                                <Text style={styles.text_validate}>{validationErrors.fullname}</Text>
                            )}
                        </View>

                        <View style={styles.view_form}>
                            <Text style={styles.text_form}>Email:</Text>
                            <TextInput
                                onChange={(e) => handleOnChangeValue(e, 'email')}
                                style={validationErrors.email !== '' ? styles.TextInputError : styles.TextInput}
                                placeholder="Enter your email"
                            ></TextInput>
                            {validationErrors.email !== '' && (
                                <Text style={styles.text_validate}>{validationErrors.email}</Text>
                            )}
                        </View>

                        <View style={styles.view_form}>
                            <Text style={styles.text_form}>Password:</Text>
                            <TextInput
                                onChange={(e) => handleOnChangeValue(e, 'password')}
                                style={validationErrors.password !== '' ? styles.TextInputError : styles.TextInput}
                                placeholder="Enter your password"
                                secureTextEntry={!isShowIcon.showPassword}
                            ></TextInput>
                            <View style={styles.touchableOpacity}>
                                <TouchableOpacity onPress={handleShowOrHidePassword}>
                                    {isShowIcon.showPassword ? (
                                        <Icon name="eye" color={TEXT_COLOR_PRIMARY} size={12} />
                                    ) : (
                                        <Icon name="eye-slash" color={TEXT_COLOR_PRIMARY} size={12} />
                                    )}
                                </TouchableOpacity>
                            </View>

                            {validationErrors.password !== '' && (
                                <Text style={styles.text_validate}>{validationErrors.password}</Text>
                            )}
                        </View>

                        <View style={styles.view_form}>
                            <Text style={styles.text_form}>Confirm Password:</Text>
                            <TextInput
                                onChange={(e) => handleOnChangeValue(e, 'confirmPassword')}
                                style={
                                    validationErrors.confirmPassword !== '' ? styles.TextInputError : styles.TextInput
                                }
                                placeholder="Enter your confirm password"
                                secureTextEntry={!isShowIcon.showConfirmPassword}
                            ></TextInput>
                            <View style={styles.touchableOpacity}>
                                <TouchableOpacity onPress={handleShowOrHideConfirmPassword}>
                                    {isShowIcon.showConfirmPassword ? (
                                        <Icon name="eye" color={TEXT_COLOR_PRIMARY} size={12} />
                                    ) : (
                                        <Icon name="eye-slash" color={TEXT_COLOR_PRIMARY} size={12} />
                                    )}
                                </TouchableOpacity>
                            </View>

                            {validationErrors.confirmPassword !== '' && (
                                <Text style={styles.text_validate}>{validationErrors.confirmPassword}</Text>
                            )}
                        </View>

                        {/* View forgot password */}
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 1 }}></Text>
                            <Text
                                onPress={() => {
                                    navigation.navigate(SCREENS.LOGIN as never);
                                }}
                                style={styles.text_forgot}
                            >
                                Back to Login
                            </Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.view_footer}>
                    <ButtonUI bgColor={BG_SUB_COLOR} text="Register" onPress={handleOnSubmit} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterScreen;
