import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonUI from '../../../components/Button';
import ContainLimited from '../../../components/ContainLimited';
import { SCREENS, listDataCategory } from '../../../constants';
import useToastNotifications from '../../../hook/useToastNotifications';
import { triggerCallAPILimitationTransaction } from '../../../redux/limitation.slice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { getListCategoryUserLimitationRedux, triggerGetTransactionUserMonth } from '../../../redux/transaction.slice';
import { getLimitationTransactionUserByMonthAPI } from '../../../services/api/limitation.api';
import { addTransactionAPI } from '../../../services/api/transaction.api';
import { ILimitationItem, ILimitationTransaction } from '../../../types/limitation.type';
import {
    ACTIVE_NAV_BOTTOM,
    BG_SUB_COLOR,
    SIZE_ICON_16,
    SIZE_ICON_20,
    TEXT_COLOR_DARKMODE,
    TEXT_COLOR_PRIMARY,
} from '../../../utils/common';
import { styles } from './ExpenseHomeStyle';
const ExpenseHome = () => {
    const dispatch = useAppDispatch();
    const { colorSystem } = useAppSelector((state) => state.auth);
    const navigation: any = useNavigation();
    const showToast = useToastNotifications();
    const { user } = useAppSelector((state) => state.auth);
    const { listCategoryLimitation } = useAppSelector((state) => state.transaction);
    const { isLoadingLimitationTransaction } = useAppSelector((state) => state.limitation);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectCategory, setselectCategory] = useState('food');
    const [valueForm, setValueForm] = useState<{ note: string; amount: number | any }>({
        note: '',
        amount: '',
    });
    const [listLimitationTractionMonth, setListLimitationTractionMonth] = useState<ILimitationTransaction>();

    /* hanlde navigation*/
    const handleChangeNavigationLimit = async (type: string, currentWallet: ILimitationItem) => {
        const listSelectWallet = listLimitationTractionMonth?.data?.filter(
            (item: ILimitationItem) => item.amount_limit > 0 && currentWallet?.category_key !== item?.category_key,
        );
        navigation.navigate(SCREENS[type] as never, {
            currentWallet: currentWallet,
            listSelectWallet: listSelectWallet,
        });
    };

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

    /* handle active category*/
    const handleActiveCategory = (type: string) => {
        setselectCategory(type);
    };

    /* handle create new transaction */
    const handleCreateNewTransaction = async () => {
        if (valueForm.amount > 0) {
            try {
                const param = {
                    user_id: Number(user?.user_id),
                    category_key: selectCategory,
                    amount: Number(valueForm.amount),
                    note: valueForm.note,
                    date: format(selectedDate, 'dd/MM/yyyy'),
                };
                const res = await addTransactionAPI(param);
                if (res) {
                    showToast(`${res?.message}`, 'success', 'top');
                    setValueForm({
                        amount: '',
                        note: '',
                    });
                    dispatch(triggerGetTransactionUserMonth());
                    dispatch(triggerCallAPILimitationTransaction());
                }
            } catch (error: any) {
                showToast(`${error?.message}`, 'danger', 'top');
                console.log(error);
            }
        } else {
            showToast(`Please enter value expense`, 'danger', 'top');
        }
    };

    /* Handle get API LimitationTransactionUserByMonth*/
    const getLimitationTransactionUserByMonth = async () => {
        try {
            const res = await getLimitationTransactionUserByMonthAPI({
                userId: Number(user?.user_id),
                month: selectedDate.getUTCMonth() + 1,
                year: selectedDate.getFullYear(),
            });
            if (res) {
                setListLimitationTractionMonth(res);
            }
        } catch (error) {}
    };

    /* Useffect call API limitation transaction by month  */
    useEffect(() => {
        getLimitationTransactionUserByMonth();
    }, [selectedDate, dispatch, isLoadingLimitationTransaction]);

    /* UseEffect call API category  */
    useEffect(() => {
        const getListCategory = dispatch(
            getListCategoryUserLimitationRedux({
                userId: Number(user?.user_id),
                month: selectedDate.getUTCMonth() + 1,
                year: selectedDate.getFullYear(),
            }),
        );
        getLimitationTransactionUserByMonth();
        return () => {
            getListCategory.abort();
        };
    }, [selectedDate.getUTCMonth() + 1, selectedDate.getFullYear(), dispatch]);

    return (
        <View style={{ marginTop: 6 }}>
            {/* view date */}
            <View style={styles.view_contain}>
                <Text style={colorSystem === 'dark' ? styles.text_field_dark : styles.text_field}>Date</Text>
                <View style={styles.view_item}>
                    <View style={styles.view_date}>
                        <FontAwesome6
                            onPress={() => handleNextDateOrPrevDate('prev')}
                            style={{ marginLeft: 5 }}
                            name="angle-left"
                            color={colorSystem === 'dark' ? TEXT_COLOR_DARKMODE : TEXT_COLOR_PRIMARY}
                            size={SIZE_ICON_16}
                        />
                        <TouchableOpacity style={styles.button_bg} onPress={() => setOpen(true)}>
                            <Text style={styles.text_date}>{formatDateCustom(selectedDate)}</Text>
                        </TouchableOpacity>
                        <FontAwesome6
                            onPress={() => handleNextDateOrPrevDate('next')}
                            name="angle-right"
                            color={colorSystem === 'dark' ? TEXT_COLOR_DARKMODE : TEXT_COLOR_PRIMARY}
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
                <Text style={colorSystem === 'dark' ? styles.text_field_dark : styles.text_field}>Note</Text>
                <View style={styles.view_item}>
                    <TextInput
                        multiline={true}
                        style={colorSystem === 'dark' ? styles.text_area_dark : styles.text_area}
                        placeholder="Enter note"
                        value={valueForm?.note}
                        onChange={(e) => handleChangedValueForm(e, 'note')}
                    />
                </View>
            </View>

            {/* view expense */}
            <View style={[styles.view_contain, styles.mt_6]}>
                <Text style={colorSystem === 'dark' ? styles.text_field_dark : styles.text_field}>Expense</Text>
                <View style={styles.view_item}>
                    <View style={styles.view_date}>
                        <TextInput
                            style={styles.text_expense}
                            value={valueForm.amount.toString()}
                            keyboardType="numeric"
                            placeholder="0.0"
                            onChange={(e) => handleChangedValueForm(e, 'amount')}
                        />
                        <MaterialIcons
                            style={{ marginLeft: -6 }}
                            name="attach-money"
                            color={colorSystem === 'dark' ? TEXT_COLOR_DARKMODE : TEXT_COLOR_PRIMARY}
                            size={SIZE_ICON_20}
                        />
                    </View>
                </View>
            </View>

            {/* View navigattion */}
            <View style={{ marginTop: 26 }}>
                <ScrollView horizontal={true} style={styles.view_contain_navigation}>
                    {Number(listLimitationTractionMonth?.data?.length) > 0 &&
                        listLimitationTractionMonth?.data
                            ?.filter((item) => item?.amount_limit > 0)
                            .map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={item?.category_key}
                                        style={[styles.view_navigation_item, index !== 0 && styles.ml_10]}
                                        onPress={() => handleChangeNavigationLimit('SWITCH_LIMITATION', item)}
                                    >
                                        <ContainLimited
                                            category={
                                                item.category_key.charAt(0).toUpperCase() + item.category_key.slice(1)
                                            }
                                            bag={item?.amount_limit - item?.amount_spent}
                                            limited={item?.amount_limit}
                                        />
                                    </TouchableOpacity>
                                );
                            })}

                    {Number(listLimitationTractionMonth?.data?.length) === 0 && (
                        <View>
                            <Text style={{ color: ACTIVE_NAV_BOTTOM, fontSize: 14 }}>
                                You haven't entered a limitation for this month
                            </Text>
                            <Text style={{ color: ACTIVE_NAV_BOTTOM, fontSize: 14 }}>Please enter it</Text>
                        </View>
                    )}
                </ScrollView>
            </View>

            {/* View category */}
            <View style={[styles.mt_18]}>
                <Text
                    style={[colorSystem === 'dark' ? styles.text_field_dark : styles.text_field, { marginBottom: 10 }]}
                >
                    Category
                </Text>
                <View style={styles.view_contain_category}>
                    <ScrollView style={{ maxHeight: 200 }}>
                        <View style={styles.view_category_list}>
                            {listDataCategory?.map((item) => {
                                const categoryLimitation = listCategoryLimitation?.data?.find(
                                    (limitation) => limitation.category_key === item.key,
                                );
                                const isDisable = categoryLimitation && categoryLimitation.isLimiation;
                                const onPressHandler = !isDisable ? undefined : () => handleActiveCategory(item.key);
                                return (
                                    <View
                                        key={item.key}
                                        style={[
                                            colorSystem === 'dark'
                                                ? styles.view_category_item_dark
                                                : styles.view_category_item,
                                            isDisable &&
                                                selectCategory === item.key &&
                                                styles.view_category_item_active,
                                            !isDisable &&
                                                (colorSystem === 'dark'
                                                    ? styles.view_disable_category_dark
                                                    : styles.view_disable_category),
                                        ]}
                                    >
                                        <TouchableOpacity onPress={onPressHandler} style={styles.category_item_contain}>
                                            {item.icon}
                                            <Text
                                                style={
                                                    colorSystem === 'dark'
                                                        ? styles.text_category_dark
                                                        : styles.text_category
                                                }
                                            >
                                                {item.name}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>

            <View style={styles.view_btn_submit}>
                {/* <ButtonUI
                    bgColor={'red'}
                    text="Arrange"
                    onPress={() => {
                        setArrange(!arrange);
                    }}
                /> */}

                <ButtonUI bgColor={BG_SUB_COLOR} text="Submit" onPress={handleCreateNewTransaction} />
            </View>
        </View>
    );
};

export default ExpenseHome;
