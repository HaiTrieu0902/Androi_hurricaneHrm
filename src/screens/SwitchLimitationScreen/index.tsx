import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeSyntheticEvent, Text, TextInputChangeEventData, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ILimitationItem } from 'src/types/limitation.type';
import ButtonUI from '../../components/Button';
import ContainLimited from '../../components/ContainLimited';
import NavigationGoBack from '../../components/NavigationGoBack';
import { convertoUpperCase } from '../../constants';
import useToastNotifications from '../../hook/useToastNotifications';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { updateLimitation } from '../../services/api/limitation.api';
import { BG_EXPLAIN_ERROR, BG_SUB_COLOR, TEXT_COLOR_PRIMARY } from '../../utils/common';
import { styles } from './SwitchLimitationScreen.style';
import { triggerGetTransactionUserMonth } from '../../redux/transaction.slice';
import { triggerCallAPILimitationTransaction } from '../../redux/limitation.slice';
type paramsSwitchWallet = {
    labelFrom: string;
    valueLimitForm: number;
    valueFrom: number | any;
    moneyTranfer: number;
    valueFromTranfer: number;
    valueLimitFormTranfer: number;
    currentWalletLimit: number;
    currentWalletSpent: number;
};

const SwitchLimitation = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const route: any = useRoute();
    const { user } = useAppSelector((state) => state.auth);
    const showToast = useToastNotifications();
    const [isFocus, setIsFocus] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [valueSelectWallet, setValueSelectWallet] = useState<paramsSwitchWallet | any>({
        labelFrom: '',
        valueLimitForm: 0,
        valueFrom: 0,
        moneyTransfer: 0,
        currentWalletLimit: 0,
        currentWalletBag: 0,
        valueFromTranfer: -1,
        valueLimitFormTranfer: 0,
    });

    /* handle convert list item select wallet */
    const convertDataUpToCase = route?.params?.listSelectWallet?.map((item: ILimitationItem) => {
        return {
            category_key: item.category_key,
            category_label: convertoUpperCase(item.category_key),
            amount_limit: item?.amount_limit,
            amount_spent: item?.amount_spent,
            beTranfer: Number(item?.amount_limit - item?.amount_spent),
        };
    });

    /* Handle changed value wallet tranfer*/
    const handleChangedValueForm = (e: NativeSyntheticEvent<TextInputChangeEventData>, field: any) => {
        const inputValue = Number(e.nativeEvent.text);
        if (inputValue > valueSelectWallet?.valueFrom) {
            setValidationError('Money tranfer cannot exceed the transferable amount');
            setIsSubmit(true);
        } else {
            setValidationError('');
            setIsSubmit(false);
            setValueSelectWallet((prev: any) => ({
                ...prev,
                [field]: inputValue,
                currentWalletLimit: Number(route?.params?.currentWallet?.amount_limit) + inputValue,
                currentWalletBag:
                    Number(route?.params?.currentWallet?.amount_limit) -
                    Number(route?.params?.currentWallet?.amount_spent) +
                    inputValue,
                valueFromTranfer: valueSelectWallet?.valueFrom - inputValue,
                valueLimitFormTranfer: valueSelectWallet?.valueLimitForm - inputValue,
            }));
        }
    };

    /* handle update switch wallet */
    // const handleUpdateLimitationWallet = async () => {
    //     try {
    //         const paramFrom = {
    //             user_id: Number(user?.user_id),
    //             category_key: valueSelectWallet?.labelFrom,
    //             amount_limit:
    //                 valueSelectWallet?.valueFromTranfer > 0
    //                     ? valueSelectWallet?.valueLimitFormTranfer
    //                     : valueSelectWallet?.valueLimitForm,
    //             month: new Date().getMonth() + 1,
    //             year: new Date().getFullYear(),
    //         };
    //         const resFrom = await updateLimitation(paramFrom);
    //         const paramTo = {
    //             user_id: Number(user?.user_id),
    //             category_key: route?.params?.currentWallet?.category_key,
    //             amount_limit:
    //                 valueSelectWallet?.currentWalletLimit > 0
    //                     ? valueSelectWallet?.currentWalletLimit
    //                     : Number(route?.params?.currentWallet?.amount_limit),
    //             month: new Date().getMonth() + 1,
    //             year: new Date().getFullYear(),
    //         };
    //         const resTo = await updateLimitation(paramTo);
    //         if (resFrom && resTo) {
    //             showToast(
    //                 `Switch wallet from ${valueSelectWallet?.labelFrom} to ${route?.params?.currentWallet?.category_key} successfully`,
    //                 'success',
    //                 'top',
    //             );
    //             navigation.goBack();
    //             dispatch(triggerGetTransactionUserMonth());
    //             dispatch(triggerCallAPILimitationTransaction());
    //         }
    //     } catch (error) {
    //         showToast(`Update Failed, try it agian!`, 'danger', 'top');
    //     }
    // };

    const handleUpdateLimitationWallet = async () => {
        try {
            const { labelFrom, valueFromTranfer, valueLimitFormTranfer } = valueSelectWallet;
            const { category_key } = route.params.currentWallet;
            const paramFrom = {
                user_id: Number(user?.user_id),
                category_key: labelFrom,
                amount_limit: valueFromTranfer > 0 ? valueLimitFormTranfer : valueSelectWallet.valueLimitForm,
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
            };
            const resFrom = await updateLimitation(paramFrom);

            const paramTo = {
                user_id: Number(user?.user_id),
                category_key,
                amount_limit:
                    valueSelectWallet.currentWalletLimit > 0
                        ? valueSelectWallet.currentWalletLimit
                        : Number(route.params.currentWallet.amount_limit),
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
            };
            const resTo = await updateLimitation(paramTo);
            if (resFrom && resTo) {
                showToast(`Switch wallet from ${labelFrom} to ${category_key} successfully`, 'success', 'top');
                dispatch(triggerGetTransactionUserMonth());
                dispatch(triggerCallAPILimitationTransaction());
                navigation.goBack();
            }
        } catch (error) {
            showToast(`Update Failed, try it again!`, 'danger', 'top');
        }
    };

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles?.bg_container}>
                <View>
                    <NavigationGoBack paddingBottom={12} paddingTop={12} title="Switch Wallet" />
                </View>

                {/* Frame switch category */}
                <View style={styles?.view_fram_container}>
                    <View style={styles.view_flex}>
                        <Text style={styles.text_frame_title}>From</Text>
                        <Dropdown
                            style={[styles.text_frame_header, styles?.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={convertDataUpToCase}
                            search
                            maxHeight={200}
                            labelField="category_label"
                            valueField="category_key"
                            placeholder={!isFocus ? 'Select wallet' : '...'}
                            searchPlaceholder="Search..."
                            value={valueSelectWallet?.labelFrom}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={(item: any) => {
                                setValueSelectWallet((prev: any) => ({
                                    ...prev,
                                    labelFrom: item?.category_key,
                                    valueFrom: item?.beTranfer,
                                    valueLimitForm: item?.amount_limit,
                                }));
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => <></>}
                        />
                    </View>
                    <View style={styles.view_flex}>
                        <Text style={styles.text_frame_title}>To</Text>
                        <Text style={styles.text_frame_header}>
                            {convertoUpperCase(route?.params?.currentWallet?.category_key)}
                        </Text>
                    </View>
                </View>
                {/* Frame switch value */}
                <View style={styles.mt_20}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 12 }}>
                        <Text style={styles.text_frame_tranfer_title}>Money can be transferred : </Text>
                        <Text style={styles.text_frame_tranfer}>
                            {valueSelectWallet?.valueFrom.toLocaleString() || 0} $
                        </Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Text style={styles.text_frame_tranfer_title}>Money transfer : </Text>
                        <TextInput
                            style={[styles.text_frame_input, validationError !== '' && styles?.text_frame_input_error]}
                            keyboardType="numeric"
                            placeholder="0.0"
                            onChange={(e) => handleChangedValueForm(e, 'moneyTransfer')}
                        />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <Text style={styles.text_frame_tranfer_title}></Text>
                        {validationError !== '' && <Text style={{ color: BG_EXPLAIN_ERROR }}>{validationError}</Text>}
                    </View>
                </View>

                {/* Frame Switch Interface */}
                <View style={styles.mt_30}>
                    <View>
                        <ContainLimited
                            category={convertoUpperCase(valueSelectWallet?.labelFrom) || 'N/A'}
                            bag={
                                valueSelectWallet?.valueFromTranfer > -1
                                    ? valueSelectWallet?.valueFromTranfer
                                    : Number(valueSelectWallet?.valueFrom)
                            }
                            limited={
                                valueSelectWallet?.valueFromTranfer > 0
                                    ? valueSelectWallet?.valueLimitFormTranfer
                                    : valueSelectWallet?.valueLimitForm
                            }
                        />
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingVertical: 6,
                        }}
                    >
                        <AntDesign name="swap" color={TEXT_COLOR_PRIMARY} size={24} />
                    </View>
                    <View>
                        <ContainLimited
                            category={convertoUpperCase(route?.params?.currentWallet?.category_key)}
                            bag={
                                valueSelectWallet?.currentWalletLimit > 0
                                    ? valueSelectWallet?.currentWalletBag
                                    : Number(route?.params?.currentWallet?.amount_limit) -
                                      Number(route?.params?.currentWallet?.amount_spent)
                            }
                            limited={
                                valueSelectWallet?.currentWalletLimit > 0
                                    ? valueSelectWallet?.currentWalletLimit
                                    : Number(route?.params?.currentWallet?.amount_limit)
                            }
                        />
                    </View>
                </View>

                {/* Frame Logic Button */}
                <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 44 }}>
                    <View style={{ width: '49%' }}>
                        <ButtonUI bgColor={'#cccccc'} text="Cancel" onPress={() => {}} />
                    </View>
                    <View style={{ width: '49%' }}>
                        <ButtonUI
                            disable={
                                !isSubmit && valueSelectWallet?.labelFrom !== '' && valueSelectWallet?.moneyTransfer
                                    ? false
                                    : true
                            }
                            bgColor={
                                !isSubmit && valueSelectWallet?.labelFrom !== '' && valueSelectWallet?.moneyTransfer
                                    ? BG_SUB_COLOR
                                    : '#cccccc'
                            }
                            text="Submit"
                            onPress={handleUpdateLimitationWallet}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SwitchLimitation;
