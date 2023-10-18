import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Modal, NativeSyntheticEvent, Text, TextInputChangeEventData, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonUI from '../../components/Button';
import NavigationGoBack from '../../components/NavigationGoBack';
import { SCREENS, listDataCategory } from '../../constants';
import useToastNotifications from '../../hook/useToastNotifications';
import { triggerCallAPILimitationTransaction } from '../../redux/limitation.slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getListCategoryUserLimitationRedux, triggerGetTransactionUserMonth } from '../../redux/transaction.slice';
import {
    deletedTransactionAPI,
    getDetailTransactionAPI,
    updateTransactionAPI,
} from '../../services/api/transaction.api';
import { BG_SUB_COLOR, EXPLAIN_ERROR_TEXT, SIZE_ICON_16, SIZE_ICON_20, TEXT_COLOR_PRIMARY } from '../../utils/common';
import { styles } from './EditDetailCategory';
const EditDetailCategoryScreen = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const showToast = useToastNotifications();
    const { user, screenNameEditTransaction } = useAppSelector((state) => state.auth);
    const { listCategoryLimitation, transactionID } = useAppSelector((state) => state.transaction);
    const [open, setOpen] = useState(false);
    const [openModalDeleted, setOpenModalDeleted] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectCategory, setselectCategory] = useState('food');
    const [valueForm, setValueForm] = useState<{ note: string; amount: number | any }>({
        note: '',
        amount: '',
    });

    /* Handle changed date*/
    const handleDateChange = (newDate: Date) => {
        setSelectedDate(newDate);
    };

    /* Handle changed note and value expense*/
    const handleChangedValueForm = (e: NativeSyntheticEvent<TextInputChangeEventData>, field: any) => {
        let newValue: any;
        if (field === 'expense') {
            newValue = Number(e.nativeEvent.text);
        } else {
            newValue = e.nativeEvent.text;
        }
        setValueForm((prev) => ({
            ...prev,
            [field]: newValue,
        }));
    };

    /* Function custom date*/
    const formatDateCustom = (date: Date) => {
        return format(date, 'd.M.yyyy, EEE');
    };

    /* handle Next Or Prev Date */
    const handleNextDateOrPrevDate = (type: string) => {
        const currentDate = new Date(selectedDate);
        if (type === 'next') {
            currentDate.setDate(selectedDate.getDate() + 1);
            setSelectedDate(currentDate);
        } else {
            currentDate.setDate(selectedDate.getDate() - 1);
            setSelectedDate(currentDate);
        }
    };

    /* handle active category */
    const handleActiveCategory = (type: string) => {
        setselectCategory(type);
    };

    /* handle update transaction */
    const handleUpdateTransaction = async () => {
        if (valueForm.amount > 0 && transactionID > 0) {
            try {
                const param = {
                    transactionId: transactionID,
                    user_id: Number(user?.user_id),
                    category_key: selectCategory,
                    amount: Number(valueForm.amount),
                    note: valueForm.note,
                    date: format(selectedDate, 'dd/MM/yyyy'),
                };
                const res = await updateTransactionAPI(param);
                if (res) {
                    showToast(`${res?.message}`, 'success', 'top');
                    setValueForm({
                        amount: '',
                        note: '',
                    });
                    dispatch(triggerGetTransactionUserMonth());
                    dispatch(triggerCallAPILimitationTransaction());
                    if (screenNameEditTransaction === 'Limiation Edit') {
                        navigation.navigate(SCREENS.DETAIL_LIMITATION as never);
                    } else {
                        navigation.navigate(SCREENS.CALENDER as never);
                    }
                }
            } catch (error: any) {
                showToast(`${error?.message}`, 'danger', 'top');
            }
        } else {
            showToast(`Please enter value expense`, 'danger', 'top');
        }
    };

    /* handle delete transaction */
    const handleDeletedTransaction = async () => {
        try {
            const res = await deletedTransactionAPI(transactionID);
            if (res) {
                showToast(`${res}`, 'success', 'top');
                dispatch(triggerGetTransactionUserMonth());
                dispatch(triggerCallAPILimitationTransaction());
                if (screenNameEditTransaction === 'Limiation Edit') {
                    navigation.navigate(SCREENS.DETAIL_LIMITATION as never);
                } else {
                    navigation.navigate(SCREENS.CALENDER as never);
                }
            }
        } catch (error: any) {
            showToast(`${error?.error}`, 'danger', 'top');
        }
    };

    /* Handle close or open modal*/
    const handleCloseOrConfirmModal = async (type: string) => {
        if (type === 'close') {
            setOpenModalDeleted(!openModalDeleted);
        } else {
            await handleDeletedTransaction();
            setOpenModalDeleted(!openModalDeleted);
        }
    };

    /* UseEffect call API category , if has category not call */
    useEffect(() => {
        const getListCategory = dispatch(
            getListCategoryUserLimitationRedux({
                userId: Number(user?.user_id),
                month: selectedDate.getUTCMonth() + 1,
                year: selectedDate.getFullYear(),
            }),
        );
        return () => {
            getListCategory.abort();
        };
    }, [selectedDate.getUTCMonth() + 1, selectedDate.getFullYear(), dispatch]);

    /* handle get API transaction detail */
    const getDetailTrasaction = async () => {
        try {
            if (transactionID > 0) {
                const res = await getDetailTransactionAPI(transactionID);
                if (res) {
                    setValueForm({
                        amount: res?.data?.amount,
                        note: res?.data?.note,
                    });
                    setSelectedDate(new Date(res?.data?.date));
                    setselectCategory(res?.data?.category_key);
                }
            }
        } catch (error) {}
    };

    /* Effect call transaction detail */
    useEffect(() => {
        getDetailTrasaction();
    }, []);

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.bg_container}>
                <NavigationGoBack paddingBottom={12} paddingTop={12} title={String(screenNameEditTransaction)} />
            </View>
            <View style={{ marginTop: 6, paddingHorizontal: 16 }}>
                {/* view date */}
                <View style={styles.view_contain}>
                    <Text style={styles.text_field}>Date</Text>
                    <View style={styles.view_item}>
                        <View style={styles.view_date}>
                            <FontAwesome6
                                onPress={() => handleNextDateOrPrevDate('prev')}
                                style={{ marginLeft: 5 }}
                                name="angle-left"
                                color={TEXT_COLOR_PRIMARY}
                                size={SIZE_ICON_16}
                            />
                            <TouchableOpacity style={styles.button_bg} onPress={() => setOpen(true)}>
                                <Text style={styles.text_date}>{formatDateCustom(selectedDate)}</Text>
                            </TouchableOpacity>
                            <FontAwesome6
                                onPress={() => handleNextDateOrPrevDate('next')}
                                name="angle-right"
                                color={TEXT_COLOR_PRIMARY}
                                size={SIZE_ICON_16}
                            />
                        </View>
                    </View>
                    <DatePicker
                        modal
                        mode="date"
                        open={open}
                        date={selectedDate}
                        onConfirm={(date) => {
                            setOpen(false);
                            handleDateChange(date);
                        }}
                        onCancel={() => {
                            setOpen(false);
                        }}
                    />
                </View>

                {/* view note */}
                <View style={[styles.view_contain, styles.mt_6]}>
                    <Text style={styles.text_field}>Note</Text>
                    <View style={styles.view_item}>
                        <TextInput
                            multiline={true}
                            style={styles.text_area}
                            placeholder="Enter note"
                            value={valueForm?.note}
                            onChange={(e) => handleChangedValueForm(e, 'note')}
                        />
                    </View>
                </View>

                {/* view expense */}
                <View style={[styles.view_contain, styles.mt_6]}>
                    <Text style={styles.text_field}>Expense</Text>
                    <View style={styles.view_item}>
                        <View style={styles.view_date}>
                            <TextInput
                                style={styles.text_expense}
                                placeholder="0.0"
                                value={valueForm.amount.toString()}
                                onChange={(e) => handleChangedValueForm(e, 'amount')}
                            />
                            <MaterialIcons
                                style={{ marginLeft: -6 }}
                                name="attach-money"
                                color={TEXT_COLOR_PRIMARY}
                                size={SIZE_ICON_20}
                            />
                        </View>
                    </View>
                </View>

                {/* View category */}
                <View style={[styles.mt_18]}>
                    <Text style={[styles.text_field, { marginBottom: 10 }]}>Category</Text>
                    <View style={styles.view_contain_category}>
                        <ScrollView style={{ maxHeight: 200 }}>
                            <View style={styles.view_category_list}>
                                {listDataCategory.map((item) => {
                                    const categoryLimitation = listCategoryLimitation?.data?.find(
                                        (limitation) => limitation.category_key === item.key,
                                    );
                                    const isDisable = categoryLimitation && categoryLimitation.isLimiation;
                                    const onPressHandler = !isDisable
                                        ? undefined
                                        : () => handleActiveCategory(item.key);
                                    return (
                                        <View
                                            key={item.key}
                                            style={[
                                                styles.view_category_item,
                                                isDisable &&
                                                    selectCategory === item.key &&
                                                    styles.view_category_item_active,
                                                !isDisable && styles.view_disable_category,
                                            ]}
                                        >
                                            <TouchableOpacity
                                                onPress={onPressHandler}
                                                style={styles.category_item_contain}
                                            >
                                                {item.icon}
                                                <Text style={styles.text_category}>{item.name}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.view_btn_submit}>
                    <View style={{ width: '49%' }}>
                        <ButtonUI bgColor={BG_SUB_COLOR} text="Submit" onPress={handleUpdateTransaction} />
                    </View>
                    <View style={{ width: '49%', position: 'relative' }}>
                        <ButtonUI
                            bgColor={EXPLAIN_ERROR_TEXT}
                            text="Delete"
                            onPress={() => setOpenModalDeleted(true)}
                        />

                        {/* Modal action */}
                        <Modal animationType="slide" transparent={true} visible={openModalDeleted}>
                            <View style={styles.view_modal}>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        marginTop: 10,
                                        marginBottom: 20,
                                        color: BG_SUB_COLOR,
                                        fontSize: 16,
                                    }}
                                >
                                    Do you want to delete this transaction?
                                </Text>

                                <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                    <View style={{ marginLeft: 6, width: '46%' }}>
                                        <ButtonUI
                                            bgColor={BG_SUB_COLOR}
                                            text="Cancel"
                                            onPress={() => handleCloseOrConfirmModal('close')}
                                        />
                                    </View>
                                    <View style={{ width: '46%' }}>
                                        <ButtonUI
                                            bgColor={EXPLAIN_ERROR_TEXT}
                                            text="Delete"
                                            onPress={() => handleCloseOrConfirmModal('deleted')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default EditDetailCategoryScreen;
