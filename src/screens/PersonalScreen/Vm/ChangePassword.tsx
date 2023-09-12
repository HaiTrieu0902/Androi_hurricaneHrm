import { NativeSyntheticEvent, StyleSheet, Text, TextInputChangeEventData, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationGoBack from '../../../components/NavigationGoBack';
import { BG_SCREEN, BG_SUB_COLOR, EXPLAIN_ERROR_TEXT, FONT_FAMILY, SIZE_ICON_16, SIZE_ICON_20, TEXT_COLOR_PRIMARY } from '../../../utils/common';
import { TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native';
import useToastNotifications from '../../../hook/useToastNotifications';
import { ChangeAuth } from 'src/types/auth';
import { isValidConfirmPassword, isValidPassword, isValidUsername } from '../../../utils/validation';
import ButtonUI from '../../../components/Button';
import { useAppSelector } from '../../../redux/store';
import { changePasswordAPI} from '../../../services/api/auth.api';
import { SCREENS } from '../../../constants';
const ChangePassword = () => {
    const { user } = useAppSelector((state) => state.auth);
    const navigation = useNavigation();
    const showToast = useToastNotifications();
    const [valueForm, setValueForm] = useState<ChangeAuth>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [validationErrors, setValidationErrors] = useState<ChangeAuth>({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [isShowIcon, setIsShowIcon] = useState({
        showPassword: false,
        showNewPassword : false,
        showConfirmPassword: false,
    });
    const handleShowOrHidePassword = () => {
        setIsShowIcon((prev) => ({
            ...prev,
            showPassword: !prev.showPassword,
        }));
    };
    const handleShowOrHideNewPassword = () => {
        setIsShowIcon((prev) => ({
            ...prev,
            showNewPassword: !prev.showNewPassword,
        }));
    };
    const handleShowOrHideConfirmPassword = () => {
        setIsShowIcon((prev) => ({
            ...prev,
            showConfirmPassword: !prev.showConfirmPassword,
        }));
    };
    /*Handle onChange value input */
    const handleOnChangeValue = (e: NativeSyntheticEvent<TextInputChangeEventData>, field: any) => {
        const newValue = e.nativeEvent.text;
        setValueForm((prev) => ({
            ...prev,
            [field]: newValue,
        }));
        if (field === 'currentPassword') {
            setValidationErrors((prev) => ({
                ...prev,
                currentPassword: isValidPassword(newValue),
            }));
        } else if (field === 'newPassword') {
            setValidationErrors((prev) => ({
                ...prev,
                newPassword: isValidPassword(newValue),
            }));
        } else if (field === 'confirmPassword') {
            setValidationErrors((prev) => ({
                ...prev,
                confirmPassword: isValidPassword(newValue),
            }));
        }
    };
    const handleValidatePrevSubmit = () => {
        const { currentPassword, newPassword,  confirmPassword } = valueForm;
        const valueErrorPassword = isValidPassword(currentPassword);
        const valueErrorNewPassword = isValidPassword(newPassword);
        const valueConfirmPassword = isValidConfirmPassword(String(newPassword), String(confirmPassword));
        setValidationErrors((prev) => ({
            ...prev,
            newPassword: valueErrorNewPassword,
            password: valueErrorPassword,
            confirmPassword: valueConfirmPassword,
        }));
    };

    const handleOnSubmit = async () => {
        const {  currentPassword,newPassword, confirmPassword } = valueForm;
      
        handleValidatePrevSubmit();
        if (
            !validationErrors.currentPassword &&
            !validationErrors.newPassword &&
            !validationErrors.confirmPassword &&
            valueForm.currentPassword &&
            valueForm.newPassword &&
            valueForm.confirmPassword &&
            valueForm.newPassword === valueForm.confirmPassword
        ) {
            const param = {
                username: user.username,
                currentPassword: currentPassword,
                newPassword : newPassword,
                confirmPassword: confirmPassword,
            };

          try {
            const res = await changePasswordAPI(param)
            console.log("res", res)
               if (res) {
                    showToast(`${res?.message}`, 'success', 'top');
                    navigation.navigate(SCREENS.PERSONAL as never);
                }
          } catch (error : any) {
                showToast(`${error?.error}`, 'danger', 'top');
          }
          
        }
    };

    

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.bg_container}>
                <NavigationGoBack paddingBottom={12} paddingTop={12} title="Change Password" />
            </View>
            <View style={styles.view_form_container}>
                {/* Old Password */}
                <View style={styles.view_form}>
                    <View style={styles.view_form_left}>
                        <FontAwesome6 name='lock' size={SIZE_ICON_16} color={'black'}> </FontAwesome6>
                        <TextInput 
                            placeholder='Current password' 
                            style={styles.input_txt}
                            secureTextEntry={!isShowIcon.showPassword}
                            onChange={(e) => handleOnChangeValue(e, 'currentPassword')}
                        ></TextInput>
                    </View> 
                    <View style={styles.view_form_right}>
                        <TouchableOpacity onPress={handleShowOrHidePassword}>
                            {isShowIcon.showPassword ? (
                                <FontAwesome6 name="eye" color={TEXT_COLOR_PRIMARY} size={16} />
                            ) : (
                                <FontAwesome6 name="eye-slash" color={TEXT_COLOR_PRIMARY} size={16} />
                            )}
                        </TouchableOpacity>
                    </View>   
                </View>
                {validationErrors.currentPassword !== '' && (
                            <Text style={styles.text_validate}>{validationErrors.currentPassword}</Text>
                        )} 
                {/* New password */}
                <View style={styles.view_form}>
                    <View style={styles.view_form_left}>
                        <FontAwesome6 name='key' size={SIZE_ICON_16} color={'black'}> </FontAwesome6>
                        <TextInput 
                            placeholder='New Password' 
                            style={styles.input_txt}
                            
                            secureTextEntry={!isShowIcon.showNewPassword}
                            onChange={(e) => handleOnChangeValue(e, 'newPassword')}
                        ></TextInput>
                    </View> 
                    <View style={styles.view_form_right}>
                        <TouchableOpacity onPress={handleShowOrHideNewPassword}>
                            {isShowIcon.showNewPassword ? (
                                <FontAwesome6 name="eye" color={TEXT_COLOR_PRIMARY} size={16} />
                            ) : (
                                <FontAwesome6 name="eye-slash" color={TEXT_COLOR_PRIMARY} size={16} />
                            )}
                        </TouchableOpacity>
                    </View>   
                </View>
                {validationErrors.newPassword !== '' && (
                            <Text style={styles.text_validate}>{validationErrors.newPassword}</Text>
                        )} 
                {/* Confirm Password */}
                <View style={styles.view_form}>
                    <View style={styles.view_form_left}>
                        <FontAwesome6 name='key' size={SIZE_ICON_16} color={'black'}> </FontAwesome6>
                        <TextInput 
                            placeholder='Confirm Password' 
                            style={styles.input_txt}
                            secureTextEntry={!isShowIcon.showConfirmPassword}
                            onChange={(e) => handleOnChangeValue(e, 'confirmPassword')}
                        ></TextInput>
                    </View> 
                    <View style={styles.view_form_right}>
                        <TouchableOpacity onPress={handleShowOrHideConfirmPassword}>
                            {isShowIcon.showConfirmPassword ? (
                                <FontAwesome6 name="eye" color={TEXT_COLOR_PRIMARY} size={16} />
                            ) : (
                                <FontAwesome6 name="eye-slash" color={TEXT_COLOR_PRIMARY} size={16} />
                            )}
                        </TouchableOpacity>
                    </View>   
                </View>
                {validationErrors.confirmPassword !== '' && (
                            <Text style={styles.text_validate}>{validationErrors.confirmPassword}</Text>
                        )} 
                <View style={styles.btn_confirm}>
                    <ButtonUI bgColor={BG_SUB_COLOR} text="Confirm" onPress={handleOnSubmit} />
                </View>
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
    view_form_container: {
        padding: 16,
        borderRadius: 10,
        marginStart: 16,
        marginEnd: 16,
        backgroundColor: 'white',

    },
    view_form : {
        paddingStart: 10,
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    view_form_left: {
        flexDirection: 'row',
        alignItems:'center'
    },
    view_form_right : {
        paddingEnd: 10,
    },
    input_txt : {
        width: 200
    },
    text_validate : {
        fontSize: 13.5,
        color: EXPLAIN_ERROR_TEXT,
        marginTop: 2,
        fontFamily: FONT_FAMILY,
    },
    btn_confirm: {
        width: '50%',
        alignSelf: 'center',
        paddingTop: 10
    }
});

export default ChangePassword;