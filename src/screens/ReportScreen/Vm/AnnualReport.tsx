import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import DatePicker from 'react-native-date-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { listDataCategory } from '../../../constants';
import { useAppSelector } from '../../../redux/store';
import { getReportMonthOrYearTransactionAPI } from '../../../services/api/report.api';
import { IReportTransaction } from '../../../types/report.type';
import { BG_SUB_COLOR, SIZE_ICON_16, TEXT_COLOR_PRIMARY } from '../../../utils/common';
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
};

const AnnualReportScreen = () => {
    const { user } = useAppSelector((state) => state.auth);
    const { isLoadingTransactionUserMonth } = useAppSelector((state) => state.transaction);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [listDataReportYear, setListDataReportYear] = useState<IReportTransaction>();
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

    /* hanlde  getReportMonthOrYearTransactionAPI */
    const handleGetReportMonthOrYearTransaction = async () => {
        try {
            const res = await getReportMonthOrYearTransactionAPI({
                userId: Number(user?.user_id),
                month: '',
                year: selectedDate.getFullYear(),
            });
            setListDataReportYear(res);
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
        const matchingData = listDataReportYear?.data
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
                    {Number(listDataReportYear?.data?.length) > 0 ? (
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
                    ) : (
                        <View>
                            <Text>You has not tranaction in {format(selectedDate, 'yyyy')} </Text>
                        </View>
                    )}
                </View>
            </View>

            <View style={[styles.mt_16, styles.view_pie_info]}>
                <View style={[styles.view_item_display, styles.view_pie_info_total]}>
                    <Text style={[styles.text_main, styles.text_total]}>Total</Text>
                    <Text style={[styles.text_main, styles.text_total]}>
                        {listDataReportYear?.total_spent.toLocaleString()} $
                    </Text>
                </View>
            </View>

            {/* Info Pie */}
            <View style={[styles.mt_16, styles.view_pie_info]}>
                <ScrollView style={{ maxHeight: 220 }}>
                    {listDataReportYear?.data?.map((item) => {
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

export default AnnualReportScreen;
