import { format } from 'date-fns';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BG_SUB_COLOR, EXPLAIN_ERROR_TEXT, SIZE_ICON_16, TEXT_COLOR_PRIMARY } from '../../../utils/common';
import { styles } from './ReportStyle';
import { PieChart } from 'react-native-chart-kit';

const data = [
    {
        name: 'Food',
        total: 21500000,
        color: '#fca75b',
        legendFontColor: TEXT_COLOR_PRIMARY,
        legendFontSize: 14,
    },
    {
        name: 'Shopping',
        total: 2800000,
        color: '#5d71a9',
        legendFontColor: TEXT_COLOR_PRIMARY,
        legendFontSize: 14,
    },
    {
        name: 'Homeware',
        total: 527612,
        color: '#04aa6d',
        legendFontColor: TEXT_COLOR_PRIMARY,
        legendFontSize: 14,
    },
    {
        name: 'Phone',
        total: 8538000,
        color: TEXT_COLOR_PRIMARY,
        legendFontColor: TEXT_COLOR_PRIMARY,
        legendFontSize: 14,
    },
    {
        name: 'Gift',
        total: 11920000,
        color: '#ffc107',
        legendFontColor: TEXT_COLOR_PRIMARY,
        legendFontSize: 14,
    },
    {
        name: 'Invest',
        total: 21500000,
        color: '#f31c31',
        legendFontColor: TEXT_COLOR_PRIMARY,
        legendFontSize: 14,
    },
];

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
};

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

    /* Handle changed date*/
    const handleDateChange = (newDate: Date) => {
        setSelectedDate(newDate);
    };

    /* Function custom date*/
    const formatDateCustom = (date: Date) => {
        return format(date, 'yyyy');
    };

    /* handle Next Or Prev Date */
    const handleNextDateOrPrevDate = (type: string) => {
        const currentDate = new Date(selectedDate);
        if (type === 'next') {
            currentDate.setFullYear(currentDate.getFullYear() + 1);
            setSelectedDate(currentDate);
        } else {
            currentDate.setFullYear(currentDate.getFullYear() - 1);
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
                            <Text style={styles.text_date}>{formatDateCustom(selectedDate)}, (01 jan - 31 Dec)</Text>
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

            {/* Pie */}
            <View style={[styles.mt_16, styles.view_pie]}>
                <View style={styles.view_list}>
                    <View>
                        <Text>Expense</Text>
                    </View>
                </View>

                <View style={styles.pie_chart}>
                    <PieChart
                        data={data}
                        width={400}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={'total'}
                        backgroundColor={'transparent'}
                        paddingLeft={'0'}
                        center={[16, 0]}
                    />
                </View>
            </View>

            <View style={[styles.mt_16, styles.view_pie_info]}>
                <View style={[styles.view_item_display, styles.view_pie_info_total]}>
                    <Text style={[styles.text_main, styles.text_total]}>Total</Text>
                    <Text style={[styles.text_main, styles.text_total]}>113.2004 $</Text>
                </View>
            </View>

            {/* Info Pie */}
            <View style={[styles.mt_16, styles.view_pie_info]}>
                <ScrollView style={{ maxHeight: 220 }}>
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
