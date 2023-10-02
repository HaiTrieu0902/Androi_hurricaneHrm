import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import DatePicker from 'react-native-date-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { listDataCategory } from '../../../constants';
import { useAppSelector } from '../../../redux/store';
import { getReportMonthOrYearTransactionAPI } from '../../../services/api/report.api';
import { IReportTransaction } from '../../../types/report.type';
import { SIZE_ICON_16, TEXT_COLOR_PRIMARY } from '../../../utils/common';
import { styles } from './ReportStyle';

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    name: 'category_name',
};

const MonthlyReportScreen = () => {
    const { user } = useAppSelector((state) => state.auth);
    const { isLoadingTransactionUserMonth } = useAppSelector((state) => state.transaction);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [listDataReportMonth, setListDataReportMonth] = useState<IReportTransaction>();

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

    /* handle Next Or Prev Date */
    const handleNextDateOrPrevDate = (type: string) => {
        const currentDate = new Date(selectedDate);
        if (type === 'next') {
            const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
            setSelectedDate(nextMonth);
        } else {
            const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
            setSelectedDate(prevMonth);
        }
    };

    /* hanlde  getReportMonthOrYearTransactionAPI */
    const handleGetReportMonthOrYearTransaction = async () => {
        try {
            const res = await getReportMonthOrYearTransactionAPI({
                userId: Number(user?.user_id),
                month: selectedDate.getMonth() + 1,
                year: selectedDate.getFullYear(),
            });
            setListDataReportMonth(res);
        } catch (error) {}
    };

    /* UseEffect call API Report Month */
    useEffect(() => {
        handleGetReportMonthOrYearTransaction();
    }, [selectedDate, isLoadingTransactionUserMonth]);

    /* Function get category Icon  */
    const getIconForCategory = (category_key: any) => {
        const category = listDataCategory.find((item) => item.key === category_key);
        return category ? category.icon : null;
    };

    /* Convert data in FieChart */
    const convertFieChartData = listDataCategory.map((category) => {
        const matchingData = listDataReportMonth?.data
            ?.filter((item) => item.total > 0)
            .find((item) => item.category_key === category.key);
        const total = matchingData ? matchingData.total : 0;
        return {
            ...category,
            total,
            legendFontColor: TEXT_COLOR_PRIMARY,
            legendFontSize: 14,
        };
    });
    const filteredData = convertFieChartData.filter((item) => item.total > 0);

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
                    <Text style={{ fontSize: 14 }}>Expense:</Text>
                    <Text style={[styles.text_main, styles.text_expense]}>
                        -{listDataReportMonth?.total_spent.toLocaleString()} $
                    </Text>
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
                        data={filteredData}
                        width={400}
                        height={220}
                        chartConfig={chartConfig}
                        accessor={'total'}
                        backgroundColor={'transparent'}
                        paddingLeft={'0'}
                        center={[16, 0]}
                        avoidFalseZero={false}
                    />
                </View>
            </View>

            {/* Info Pie */}
            <View style={[styles.mt_16, styles.view_pie_info]}>
                <ScrollView style={{ maxHeight: 220 }}>
                    {listDataReportMonth?.data?.map((item) => {
                        const icon = getIconForCategory(item.category_key);
                        return (
                            <View key={item.category_key} style={[styles.view_item_display, styles.view_pie_info_item]}>
                                <View style={styles.pie_info_contain}>
                                    {icon}
                                    <Text style={styles.text_main}>
                                        {item.category_key.charAt(0).toUpperCase() + item.category_key.slice(1)}
                                    </Text>
                                </View>
                                <View style={styles.pie_info_contain}>
                                    <Text style={styles.text_main}>{item.total.toLocaleString()} $</Text>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

export default MonthlyReportScreen;
