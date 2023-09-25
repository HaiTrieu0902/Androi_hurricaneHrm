import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationGoBack from '../../../components/NavigationGoBack';
import {
    BG_PRIMARYCOLOR,
    BG_SCREEN,
    BG_SUB_COLOR,
    BUTTON_COLOR__HOME,
    COLOR_BORDER_SOLID,
    FONT_FAMILY,
    SIZE_ICON_16,
    TEXT_COLOR_PRIMARY,
} from '../../../utils/common';
import { format } from 'date-fns';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { BarChart } from 'react-native-chart-kit';

const YearReportScreen = () => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const handleNavigator = () => {
        navigation.goBack();
    };

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: [2000.0, 4500.0, 2800.0, 8000.0, 9900.0, 4300.0, 7500.0, 2200.0, 3500.0, 2800.0, 3200.0, 6000.0],
            },
        ],
    };

    const listData = [
        {
            labels: 'January',
            percent: 2000.0,
        },
        {
            labels: 'February',
            percent: 4500.0,
        },
        {
            labels: 'March',
            percent: 2800.0,
        },
        {
            labels: 'April',
            percent: 8000.0,
        },
        {
            labels: 'May',
            percent: 9900.0,
        },
        {
            labels: 'June',
            percent: 4300.0,
        },
        {
            labels: 'July',
            percent: 7500.0,
        },
        {
            labels: 'August',
            percent: 2200.0,
        },
        {
            labels: 'September',
            percent: 3500.0,
        },
        {
            labels: 'October',
            percent: 2800.0,
        },
        {
            labels: 'November',
            percent: 3200.0,
        },
        {
            labels: 'December',
            percent: 6000.0,
        },
    ];

    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        barPercentage: 0.6,
        fillShadowGradient: BG_PRIMARYCOLOR,
        fillShadowGradientOpacity: 2,
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => BG_PRIMARYCOLOR,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,

        style: {
            borderRadius: 6,
            fontFamily: 'Bogle-Regular',
        },
        propsForBackgroundLines: {
            strokeWidth: 0.5,
            stroke: COLOR_BORDER_SOLID,
            strokeDasharray: '0',
        },
        propsForLabels: {
            fontFamily: 'Bogle-Regular',
        },
    };

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
        <SafeAreaView style={styles.bg_scrren}>
            <View>
                <View style={styles.bg_container}>
                    <NavigationGoBack paddingBottom={12} paddingTop={12} title="Year Report" />
                </View>
                {/* View date */}
                <View style={[styles.view_contain, styles.bg_container]}>
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
                {/* View Bar Chart */}
                <View style={[styles.view_contain]}>
                    <View style={styles.bar_chart}>
                        <BarChart
                            data={data}
                            width={360}
                            height={220}
                            yAxisLabel="$"
                            //withCustomBarColorFromData={true}
                            showBarTops={false}
                            flatColor={true}
                            chartConfig={chartConfig}
                            yAxisSuffix=""
                        />
                    </View>
                </View>
                {/* View Total */}
                <View style={[styles.view_contain, styles.view_total]}>
                    <View style={[styles.view_item_display, styles.view_total_contain]}>
                        <Text style={[styles.text_main]}>Total</Text>
                        <Text style={[styles.text_main]}>113.2004 $</Text>
                    </View>
                    <View style={[styles.view_item_display, styles.view_total_contain]}>
                        <Text style={[styles.text_main]}>Average</Text>
                        <Text style={[styles.text_main]}>13.2004 $</Text>
                    </View>
                </View>
                {/* Month of the year */}
                <View style={[styles.view_contain, styles.view_info_year]}>
                    <ScrollView style={{ maxHeight: 240 }}>
                        {listData.map((item, index) => {
                            return (
                                <View key={index} style={[styles.view_item_display, styles.view_total_contain]}>
                                    <Text style={styles.text_main}>{item.labels}</Text>
                                    <Text style={styles.text_main}>{item.percent} $</Text>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bg_scrren: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    bg_container: {
        paddingStart: 16,
        paddingEnd: 16,
    },
    view_contain: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexWrap: 'wrap',
    },
    //Date
    view_date: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },
    button_bg: {
        paddingTop: 8,
        paddingBottom: 8,
        width: 320,
        backgroundColor: BUTTON_COLOR__HOME,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
    },
    text_date: { color: 'black', fontFamily: FONT_FAMILY, fontWeight: '600', fontSize: 14 },
    //bar_chart
    bar_chart: {
        marginStart: -10,
        marginEndEnd: -10,
    },
    /*Total Year Styles*/
    view_item_display: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    view_total: {
        borderTopColor: TEXT_COLOR_PRIMARY,
        borderTopWidth: 0.5,
        marginTop: 20,
        backgroundColor: BUTTON_COLOR__HOME,
    },
    view_average: {
        marginTop: -10,
    },
    /* Month of the year */
    view_info_year: {
        marginTop: 20,
        borderTopColor: TEXT_COLOR_PRIMARY,
        borderTopWidth: 0.6,
    },
    text_main: {
        color: TEXT_COLOR_PRIMARY,
        fontFamily: FONT_FAMILY,
        fontWeight: '700',
        fontSize: 18,
    },
    view_total_contain: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: TEXT_COLOR_PRIMARY,
        borderBottomWidth: 0.5,
    },
});
export default YearReportScreen;
