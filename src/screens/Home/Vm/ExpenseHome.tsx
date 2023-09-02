import { format } from 'date-fns';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonUI from '../../../components/Button';
import ContainLimited from '../../../components/ContainLimited';
import { listDataCategory } from '../../../constants';
import { BG_SUB_COLOR, SIZE_ICON_16, SIZE_ICON_20, TEXT_COLOR_PRIMARY } from '../../../utils/common';
import { styles } from './ExpenseHomeStyle';

const ExpenseHome = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectCategory, setselectCategory] = useState('food');

    /* Handle changed date*/
    const handleDateChange = (newDate: Date) => {
        setSelectedDate(newDate);
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

    const handleActiveCategory = (type: string) => {
        setselectCategory(type);
    };

    return (
        <View style={{ marginTop: 6 }}>
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
                    <TextInput multiline={true} style={styles.text_area} placeholder="Enter note" />
                </View>
            </View>

            {/* view expense */}
            <View style={[styles.view_contain, styles.mt_6]}>
                <Text style={styles.text_field}>Expense</Text>
                <View style={styles.view_item}>
                    <View style={styles.view_date}>
                        <TextInput style={styles.text_expense} placeholder="0.0" />
                        <MaterialIcons
                            style={{ marginLeft: -6 }}
                            name="attach-money"
                            color={TEXT_COLOR_PRIMARY}
                            size={SIZE_ICON_20}
                        />
                    </View>
                </View>
            </View>

            {/* View navigattion */}
            <View style={{ marginTop: 26 }}>
                <ScrollView horizontal={true} style={styles.view_contain_navigation}>
                    <View style={styles.view_navigation_item}>
                        <ContainLimited />
                    </View>
                    <View style={[styles.view_navigation_item, styles.ml_10]}>
                        <ContainLimited bgColor="blue" />
                    </View>
                    <View style={[styles.view_navigation_item, styles.ml_10]}>
                        <ContainLimited bgColor="red" />
                    </View>
                    <View style={[styles.view_navigation_item, styles.ml_10]}>
                        <ContainLimited bgColor="pink" />
                    </View>
                    <View style={[styles.view_navigation_item, styles.ml_10]}>
                        <ContainLimited bgColor="gray" />
                    </View>
                    <View style={[styles.view_navigation_item, styles.ml_10]}>
                        <ContainLimited />
                    </View>
                    <View style={[styles.view_navigation_item, styles.ml_10]}>
                        <ContainLimited />
                    </View>
                </ScrollView>
            </View>

            {/* View category */}
            <View style={[styles.mt_18]}>
                <Text style={[styles.text_field, { marginBottom: 10 }]}>Category</Text>
                <View style={styles.view_contain_category}>
                    <ScrollView style={{ maxHeight: 200 }}>
                        <View style={styles.view_category_list}>
                            {listDataCategory.map((item) => {
                                return (
                                    <View
                                        key={item.key}
                                        style={[
                                            styles.view_category_item,
                                            selectCategory === item.key && styles.view_category_item_active,
                                        ]}
                                    >
                                        <TouchableOpacity
                                            onPress={() => handleActiveCategory(item.key)}
                                            style={styles.category_item_contain}
                                        >
                                            {selectCategory === item.key ? item.iconActive : item.icon}
                                            <Text
                                                style={
                                                    selectCategory === item.key
                                                        ? styles.text_category_active
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
                <ButtonUI bgColor={BG_SUB_COLOR} text="Submit" onPress={() => {}} />
            </View>
        </View>
    );
};

export default ExpenseHome;
