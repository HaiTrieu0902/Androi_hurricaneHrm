import React, { useState } from 'react';
import {
    Alert,
    Image,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TextInput,
    TextInputChangeEventData,
    View,
} from 'react-native';
import ButtonUI from '../../components/Button';
import { IParamsAuth } from '../../types/auth';
import { isValidEmail, isValidPassword } from '../../utils/validation';
import { BG_PRIMARYCOLOR, BG_SUB_COLOR, EXPLAIN_ERROR_TEXT, TEXT_COLOR_PRIMARY } from './../../utils/common';

const LoginPage = () => {
    const [valueForm, setValueForm] = useState<IParamsAuth>({
        email: '',
        password: '',
    });
    const [validationErrors, setValidationErrors] = useState<IParamsAuth>({
        email: '',
        password: '',
    });

    /*Handle onChange value input */
    const handleOnChangeValue = (e: NativeSyntheticEvent<TextInputChangeEventData>, field: any) => {
        const newValue = e.nativeEvent.text;
        setValueForm((prev) => ({
            ...prev,
            [field]: newValue,
        }));
        /* When value change and then update value Error if has error */
        if (field === 'email') {
            setValidationErrors((prev) => ({
                ...prev,
                email: isValidEmail(newValue),
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
        const { email, password } = valueForm;
        const valueErrorEmail = isValidEmail(email);
        const valueErrorPassword = isValidPassword(password);
        setValidationErrors((prev) => ({
            ...prev,
            email: valueErrorEmail,
            password: valueErrorPassword,
        }));
    };

    /*Handle submit form */
    const handleOnSubmit = () => {
        const { email, password } = valueForm;
        handleValidatePrevSubmit();
        if (!validationErrors.password && !validationErrors.email && valueForm.email && valueForm.password) {
            // No errors, proceed with submission
            Alert.alert(`${email}, ${password}`);
        }
    };

    return (
        <View style={styles.view}>
            <View style={styles.view_Header}>
                <View>
                    <Image style={styles.image} source={require('../../assets/img/ryder.png')}></Image>
                </View>
                <Text style={styles.text_header}>Welcome</Text>
                <Text style={styles.text_app}>Time attendance application</Text>
            </View>

            {/* View Form container */}
            <View style={styles.view_form_container}>
                <View style={styles.view_form}>
                    <Text style={styles.text_form}>Email</Text>
                    <TextInput
                        onChange={(e) => handleOnChangeValue(e, 'email')}
                        style={styles.TextInput}
                        placeholder="Enter your email address"
                    ></TextInput>
                    {validationErrors.email !== '' && (
                        <Text style={styles.text_validate}>{validationErrors.email}</Text>
                    )}
                </View>
                <View style={styles.view_form}>
                    <Text style={styles.text_form}>Password</Text>
                    <TextInput
                        onChange={(e) => handleOnChangeValue(e, 'password')}
                        style={styles.TextInput}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                    ></TextInput>
                    {/* <Image style={styles.icon} source={require('../../assets/img/outlineEye.png')}></Image> */}
                    {validationErrors.password !== '' && (
                        <Text style={styles.text_validate}>{validationErrors.password}</Text>
                    )}
                </View>

                {/* View forgot password */}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 1 }}></Text>
                    <Text style={styles.text_forgot}>Forgot Password</Text>
                </View>

                <View style={{ marginTop: 5 }}>
                    <ButtonUI onPress={handleOnSubmit} />
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
        marginTop: 80,
        paddingEnd: 60,
        paddingStart: 60,
        gap: 12,
    },
    view_form: {},

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
        fontWeight: '600',
    },
    text_app: {
        marginTop: 10,
        color: TEXT_COLOR_PRIMARY,
        fontSize: 16,
        fontWeight: '600',
    },
    text_form: {
        color: BG_PRIMARYCOLOR,
        fontWeight: '500',
        fontSize: 14,
    },
    text_forgot: {
        color: BG_SUB_COLOR,
        fontWeight: '500',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    text_validate: {
        fontSize: 13.5,
        color: EXPLAIN_ERROR_TEXT,
        marginTop: 2,
    },
    text_footer: {
        paddingEnd: 60,
        paddingStart: 60,
        textAlign: 'center',
        color: TEXT_COLOR_PRIMARY,
        marginTop: 30,
        fontSize: 14,
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
        position: 'relative',
    },
    button: {
        backgroundColor: BG_PRIMARYCOLOR,
        height: 48,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // icon: {
    //     position: 'absolute',
    //     height: 20,
    //     width: 20,
    //     right: 10,
    //     top: '55%',
    // },
});

export default LoginPage;