import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, Modal, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonUI from '../../../components/Button';
import { BG_SUB_COLOR, TEXT_COLOR_PRIMARY } from '../../../utils/common';
import { styles } from './LimitedSpendingStyle';
import { format } from 'date-fns';
import DatePicker from 'react-native-modern-datepicker';

const LimitedSpending = () => {
    const inputRef = useRef<TextInput | null>(null);
    const [valueTotal, setValueTotal] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

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
    const handleInputChange = (category: string, newValue: string) => {
        const newValueNum = parseFloat(newValue);
        const newCategoryLimits = { ...categoryLimits, [category]: newValueNum };
        const total = Object.values(newCategoryLimits).reduce((acc, val) => acc + val, 0);
        setCategoryLimits(newCategoryLimits);
        setValueTotal(total);
    };
    /* Convert number */
    const formatNumber = (number: number) => {
        return number.toLocaleString();
    };

    /* Handle changed date*/
    const handleDateChange = (newDate: Date) => {
        setSelectedDate(newDate);
    };

    /* Function custom date*/
    const formatDateCustom = (date: Date) => {
        const month = format(date, 'MMM');
        const year = format(date, 'yyyy');
        const startOfMonth = format(new Date(date.getFullYear(), date.getMonth(), 1), 'dd');
        const endOfMonth = format(new Date(date.getFullYear(), date.getMonth() + 1, 0), 'dd');
        return `${month},${year} (${startOfMonth} ${month} - ${endOfMonth} ${month})`;
    };

    const handleOpenModal = () => {
        setOpen(!open);
    };

    const handleDateDatePickerChange = (dateString: string) => {
        const [year, month] = dateString.split('-');
        const newDate = new Date(parseInt(year), parseInt(month) - 1);
        setSelectedDate(newDate);
    };

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
                                    <DatePicker mode="monthYear" onSelectedChange={handleDateDatePickerChange} />
                                    <TouchableOpacity style={{ paddingBottom: 10 }} onPress={handleOpenModal}>
                                        <Text>Close</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ paddingBottom: 10 }}>
                                        <Text>Confirm</Text>
                                    </TouchableOpacity>
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
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Shopping: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('shopping', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Gift: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('gift', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Homeware: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('homeware', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Medical: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('medical', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Education: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('education', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Exchange: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('exchange', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Invest: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('invest', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Phone: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('phone', text)}
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
                    <ButtonUI bgColor={BG_SUB_COLOR} text="Submit" onPress={() => {}} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LimitedSpending;
