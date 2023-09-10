import { format } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-modern-datepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonUI from '../../../components/Button';
import useToastNotifications from '../../../hook/useToastNotifications';
import { getLimitationUserByMonthRedux } from '../../../redux/limitation.slice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { addLimitationAPI, updateLimitation } from '../../../services/api/limitation.api';
import { BG_SUB_COLOR, TEXT_COLOR_PRIMARY } from '../../../utils/common';
import { styles } from './LimitedSpendingStyle';

const LimitedSpending = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.auth);
    const { listLimitationListUserByMonth } = useAppSelector((state) => state.limitation);
    const showToast = useToastNotifications();
    const inputRef = useRef<TextInput | null>(null);
    const [valueTotal, setValueTotal] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [valueChangedDate, setValueChangedDate] = useState<any>('');
    const [categoryLimits, setCategoryLimits] = useState({
        food: 0,
        shopping: 0,
        gift: 0,
        homeware: 0,
        medical: 0,
        education: 0,
        exchange: 0,
        invest: 0,
        phone: 0,
    });

    /* Handle changed Value Input*/
    const handleInputChange = (category: string, newValue: string) => {
        let newValueNum = 0;
        if (parseFloat(newValue)) {
            newValueNum = parseFloat(newValue);
        } else {
            newValueNum = 0;
        }
        const newCategoryLimits = { ...categoryLimits, [category]: newValueNum };
        const total = Object.values(newCategoryLimits).reduce((acc, val) => acc + val, 0);
        setCategoryLimits(newCategoryLimits);
        setValueTotal(total);
    };

    /* Function custom date*/
    const formatDateCustom = (date: Date) => {
        const month = format(date, 'MMM');
        const year = format(date, 'yyyy');
        return `${month},${year}`;
    };

    /* Handle close or open modal*/
    const handleCloseOrConfirmModal = (type: string) => {
        if (type === 'close') {
            setOpen(!open);
        } else {
            const parsedDate = Date.parse(valueChangedDate);
            if (!isNaN(parsedDate)) {
                setSelectedDate(new Date(parsedDate));
            } else {
                console.error('Invalid date:', valueChangedDate);
            }
            setOpen(!open);
        }
    };

    /* Handle changed month or year*/
    const handleMonthYearChange = (dateString: string) => {
        const [year, month] = dateString.split(' ');
        const firstDayOfMonth = new Date(`${year}-${month}-01T00:00:00.000Z`);
        setValueChangedDate(firstDayOfMonth.toISOString());
    };

    /* Handle create limitation spending*/
    const handleCreateLimitationSpending = async () => {
        const categoryKeys = Object.keys(categoryLimits) as (keyof typeof categoryLimits)[];
        const limitationParams = categoryKeys.map((category) => ({
            user_id: Number(user?.user_id),
            category_key: category,
            amount_limit: Number(categoryLimits[category]),
            month: selectedDate.getUTCMonth() + 1,
            year: selectedDate.getUTCFullYear(),
        }));
        try {
            if (limitationParams && limitationParams.length > 0) {
                for (const limitation of limitationParams) {
                    const res = await addLimitationAPI(limitation);
                }
                // Hiển thị thông báo khi tất cả promise đã hoàn thành
                showToast(
                    `Add Limitation Spending ${selectedDate.getUTCMonth() + 1}/${selectedDate.getUTCFullYear()}`,
                    'success',
                    'top',
                );
            }
        } catch (error: any) {
            // Xử lý lỗi nếu có lỗi xảy ra trong quá trình thực hiện promise
            showToast(`${error?.message}`, 'danger', 'top');
        }
    };

    /* Handle update limitation spending*/
    const handleUpdateLimitationSpending = async () => {
        const categoryKeys = Object.keys(categoryLimits) as (keyof typeof categoryLimits)[];
        const limitationParamUpdate = categoryKeys.map((category) => ({
            user_id: Number(user?.user_id),
            category_key: category,
            amount_limit: Number(categoryLimits[category]),
            month: selectedDate.getUTCMonth() + 1,
            year: selectedDate.getUTCFullYear(),
        }));
        try {
            if (limitationParamUpdate && limitationParamUpdate.length > 0) {
                for (const limitation of limitationParamUpdate) {
                    const res = await updateLimitation(limitation);
                }
                // Hiển thị thông báo khi tất cả promise đã hoàn thành
                showToast(
                    `Update Limitation Spending ${
                        selectedDate.getUTCMonth() + 1
                    }/${selectedDate.getUTCFullYear()} successfully`,
                    'success',
                    'top',
                );
            }
        } catch (error: any) {
            showToast(`Update Failed, try it agian!`, 'danger', 'top');
        }
    };

    /* Use Effect call API get limitation uesr by month*/
    useEffect(() => {
        const res = dispatch(
            getLimitationUserByMonthRedux({
                userId: Number(user?.user_id),
                month: selectedDate.getUTCMonth() + 1,
                year: selectedDate.getUTCFullYear(),
            }),
        );
        return () => {
            res.abort();
        };
    }, [selectedDate]);

    /* Use Effect changed value CategoryLimits*/
    useEffect(() => {
        if (!(Object.keys(listLimitationListUserByMonth).length === 0)) {
            setValueTotal(Number(listLimitationListUserByMonth?.totalAmountLimit));
            const newCategoryLimits = { ...categoryLimits };
            listLimitationListUserByMonth?.data?.forEach((item) => {
                if (newCategoryLimits.hasOwnProperty(item.category_key)) {
                    newCategoryLimits[item.category_key as keyof typeof categoryLimits] = item.amount_limit;
                }
            });
            setCategoryLimits(newCategoryLimits);
        } else {
            const initialCategoryLimits = {
                food: 0,
                shopping: 0,
                gift: 0,
                homeware: 0,
                medical: 0,
                education: 0,
                exchange: 0,
                invest: 0,
                phone: 0,
            };
            setCategoryLimits(initialCategoryLimits);
            setValueTotal(0);
        }
    }, [listLimitationListUserByMonth]);

    return (
        <KeyboardAvoidingView>
            <View style={{ marginTop: 6 }}>
                {/* View header*/}
                <View>
                    <Text style={{ textAlign: 'center', color: TEXT_COLOR_PRIMARY }}>
                        Plan amount you spend every 1 month
                    </Text>
                </View>

                {/* View Category */}
                <View style={[styles.view_container_column, { marginTop: 16 }]}>
                    <View>
                        <View style={styles.view_category}>
                            <Text style={styles.text_field}>Category Limited</Text>
                            <TouchableOpacity
                                style={[styles.input_plan, { alignItems: 'center' }]}
                                onPress={() => setOpen(true)}
                            >
                                <Text style={styles.text_date}>{formatDateCustom(selectedDate)}</Text>
                            </TouchableOpacity>
                        </View>
                        <Modal style={{ height: 200 }} animationType="slide" transparent={true} visible={open}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={styles.view_modal}>
                                    <DatePicker
                                        mode="monthYear"
                                        onMonthYearChange={(selectedDate) => handleMonthYearChange(selectedDate)}
                                        selected={valueChangedDate}
                                    />
                                    <View style={styles.view_modal_child}>
                                        <TouchableOpacity onPress={() => handleCloseOrConfirmModal('close')}>
                                            <Text>Close</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handleCloseOrConfirmModal('confirm')}>
                                            <Text>Confirm</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <ScrollView style={{ maxHeight: 440 }}>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Food: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('food', text)}
                                value={categoryLimits.food.toString()}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Shopping: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('shopping', text)}
                                value={categoryLimits.shopping.toString()}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Gift: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('gift', text)}
                                value={categoryLimits.gift.toString()}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Homeware: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('homeware', text)}
                                value={categoryLimits.homeware.toString()}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Medical: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('medical', text)}
                                value={categoryLimits.medical.toString()}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Education: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('education', text)}
                                value={categoryLimits.education.toString()}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Exchange: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('exchange', text)}
                                value={categoryLimits.exchange.toString()}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Invest: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('invest', text)}
                                value={categoryLimits.invest.toString()}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Phone: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('phone', text)}
                                value={categoryLimits.phone.toString()}
                            />
                        </View>
                    </ScrollView>
                </View>

                {/* View total spending limit*/}
                <View style={[styles.view_container, { marginTop: 22 }]}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.text_field}>Total:</Text>
                        <Text style={[styles.text_total, { marginLeft: 8 }]}>{valueTotal.toLocaleString()}</Text>
                        <MaterialIcons name="attach-money" color={BG_SUB_COLOR} size={18} />
                    </View>
                </View>

                <View style={styles.view_btn_submit}>
                    {listLimitationListUserByMonth?.data?.length > 0 ? (
                        <ButtonUI bgColor={BG_SUB_COLOR} text="Update" onPress={handleUpdateLimitationSpending} />
                    ) : (
                        <ButtonUI bgColor={BG_SUB_COLOR} text="Create" onPress={handleCreateLimitationSpending} />
                    )}
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LimitedSpending;
