import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import { format } from 'date-fns';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PieChart from 'react-native-pie-chart';

import { BG_SUB_COLOR, SIZE_ICON_16, TEXT_COLOR_PRIMARY } from '../../../utils/common';
import { styles } from './ReportStyle';

const AddOrUpdateEmployeeScreen = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const listDataExpense = [
        {
            key: 'food',
            name: 'Food',
            icon: <MaterialCommunityIcons name="food" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
            expense: 1207.07,
            percent: 10.6,
        },
        {
            key: 'shopping',
            name: 'Shopping',
            icon: <AntDesign name="shoppingcart" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
            expense: 111,
            percent: 40,
        },
        {
            key: 'gift',
            name: 'Gift',
            icon: <AntDesign name="gift" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
            iconActive: <AntDesign name="gift" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
            expense: 48.6,
            percent: 25.5,
        },
        {
            key: 'homeware',
            name: 'Homeware',
            icon: <AntDesign name="home" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
            expense: 7.97,
            percent: 0.2,
        },
        {
            key: 'medical',
            name: 'Medical',
            icon: <Ionicons name="medical-outline" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
            expense: 88.88,
            percent: 1.1,
        },
        {
            key: 'education',
            name: 'Education',
            icon: <AntDesign name="book" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
            expense: 95.92,
            percent: 15.2,
        },
        {
            key: 'exchange',
            name: 'Exchange',
            icon: <Ionicons name="wine-outline" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
            expense: 80.69,
            percent: 18.2,
        },
        {
            key: 'invest',
            name: 'Invest',
            icon: <AntDesign name="linechart" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
            expense: 108,
            percent: 28.2,
        },
        {
            key: 'phone',
            name: 'Phone',
            icon: <AntDesign name="mobile1" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
            expense: 555.55,
            percent: 11.11,
        },
    ];

    const widthAndHeight = 180;
    const series = [10.6, 40, 0.2, 1.1, 15.2, 28.2, 1.4, 3.3];
    const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00', '#39a2db', '#dddddd', 'red'];

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

    return (
        <View>
            {/* view date */}
            <View style={styles.view_contain}>
                <View>
                    <View style={styles.view_date}>
                        <FontAwesome6
                            onPress={() => handleNextDateOrPrevDate('prev')}
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

            {/* Expense or Limit Spending Total */}
            <View style={styles.view_contain}>
                <View style={[styles.view_item, styles.view_item_display, styles.view_total]}>
                    <Text style={{ fontSize: 12 }}>Expense:</Text>
                    <Text style={[styles.text_main, styles.text_expense]}>-9999$</Text>
                </View>
            </View>
            {/* Pie */}
            <View style={[styles.mt_16, styles.view_pie]}>
                <View style={styles.view_list}>
                    <View>
                        <Text>Expense</Text>
                    </View>
                </View>

                <View style={styles.pie_chart}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.5}
                        coverFill={'#FFF'}
                    />
                </View>
            </View>

            {/* Info Pie */}
            <View style={[styles.mt_16, styles.view_pie_info]}>
                <ScrollView style={{ maxHeight: 300 }}>
                    {listDataExpense.map((item) => {
                        return (
                            <View key={item.key} style={[styles.view_item_display, styles.view_pie_info_item]}>
                                <View style={styles.pie_info_contain}>
                                    {item.icon}
                                    <Text style={styles.text_main}>{item.name}</Text>
                                </View>
                                <View style={styles.pie_info_contain}>
                                    <Text style={styles.text_main}>{item.expense} $</Text>
                                    <Text style={{ fontSize: 12 }}>{item.percent}</Text>
                                    <FontAwesome6
                                        onPress={() => handleNextDateOrPrevDate('next')}
                                        name="angle-right"
                                        color={TEXT_COLOR_PRIMARY}
                                        size={SIZE_ICON_16}
                                    />
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

export default AddOrUpdateEmployeeScreen;
