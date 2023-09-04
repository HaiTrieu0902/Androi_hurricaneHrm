import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Theme } from 'react-native-calendars/src/types';
import DatePicker from 'react-native-date-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeaderText from '../../components/HeaderText';
import {
    ACTIVE_NAV_BOTTOM,
    BG_PRIMARYCOLOR,
    BG_SUB_COLOR,
    EXPLAIN_ERROR_TEXT,
    SIZE_ICON_16,
    TEXT_COLOR_PRIMARY,
} from '../../utils/common';
import { styles } from './CanlenderScreenStyle';

type CalendarTheme = Theme & {
    'stylesheet.calendar.header': {
        header: {
            display: string;
        };
    };
};

const listDataExpense = [
    {
        date: '8/28/2023',
        total: '20000',
        data: [
            {
                key: 'food',
                name: 'Food',
                icon: <MaterialCommunityIcons name="food" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
                expense: 1207.07,
                comment: 'hihi',
            },
            {
                key: 'shopping',
                name: 'Shopping',
                icon: <AntDesign name="shoppingcart" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
                expense: 111,
                comment: 'khoc',
            },
        ],
    },
    {
        date: '8/29/2023',
        total: '30000',
        data: [
            {
                key: 'gift',
                name: 'Gift',
                icon: <AntDesign name="gift" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
                expense: 48.6,
                comment: 'khoc',
            },
            {
                key: 'homeware',
                name: 'Homeware',
                icon: <AntDesign name="home" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
                expense: 7.97,
                comment: 'khoc',
            },
        ],
    },
    {
        date: '8/30/2023',
        total: '30000',
        data: [
            {
                key: 'food',
                name: 'Food',
                icon: <MaterialCommunityIcons name="food" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
                expense: 1207.07,
                comment: 'khoc',
            },
            {
                key: 'gift',
                name: 'Gift',
                icon: <AntDesign name="gift" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
                expense: 48.6,
                comment: 'khoc',
            },
            {
                key: 'homeware',
                name: 'Homeware',
                icon: <AntDesign name="home" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
                expense: 7.97,
                comment: 'khoc',
            },
        ],
    },
    // {
    //     key: 'food',
    //     name: 'Food',
    //     icon: <MaterialCommunityIcons name="food" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
    //     expense: 1207.07,
    //     percent: 10.6,
    // },
    // {
    //     key: 'shopping',
    //     name: 'Shopping',
    //     icon: <AntDesign name="shoppingcart" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
    //     expense: 111,
    //     percent: 40,
    // },
    // {
    //     key: 'gift',
    //     name: 'Gift',
    //     icon: <AntDesign name="gift" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
    //     expense: 48.6,
    //     percent: 25.5,
    // },
    // {
    //     key: 'homeware',
    //     name: 'Homeware',
    //     icon: <AntDesign name="home" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
    //     expense: 7.97,
    //     percent: 0.2,
    // },
    // {
    //     key: 'medical',
    //     name: 'Medical',
    //     icon: <Ionicons name="medical-outline" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
    //     expense: 88.88,
    //     percent: 1.1,
    // },
    // {
    //     key: 'education',
    //     name: 'Education',
    //     icon: <AntDesign name="book" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
    //     expense: 95.92,
    //     percent: 15.2,
    // },
    // {
    //     key: 'exchange',
    //     name: 'Exchange',
    //     icon: <Ionicons name="wine-outline" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
    //     expense: 80.69,
    //     percent: 18.2,
    // },
    // {
    //     key: 'invest',
    //     name: 'Invest',
    //     icon: <AntDesign name="linechart" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
    //     expense: 108,
    //     percent: 28.2,
    // },
    // {
    //     key: 'phone',
    //     name: 'Phone',
    //     icon: <AntDesign name="mobile1" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
    //     expense: 555.55,
    //     percent: 11.11,
    // },
];
const CalenderScreen = () => {
    const [open, setOpen] = useState(false);
    const [selectedCalender, setSelectedCalender] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    /* Handle changed date*/
    const handleDateChange = (newDate: Date) => {
        setSelectedDate(newDate);
    };

    useEffect(() => {
        setSelectedCalender(format(selectedDate, 'yyyy-MM-dd'));
    }, [selectedDate]);

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

    const renderCustomDay = (date: any, state: any) => {
        console.log('date', date);
        return (
            <View style={styles.gridItemContainer}>
                <View style={[styles.gridItem]}>
                    <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>
                        {date.day}
                    </Text>
                    <Text style={{ textAlign: 'right', marginLeft: 6, color: EXPLAIN_ERROR_TEXT, fontSize: 11 }}>
                        -300
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View>
                <HeaderText title={`Calendar`} />
            </View>

            {/* view container */}
            <View style={styles.bg_view_container}>
                {/* view contain date */}
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
                                <Text style={styles.text_date}>{formatDateCustom(selectedDate)},</Text>
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

                {/* View calendar */}
                <View style={{ marginTop: 10 }}>
                    <Calendar
                        // headerStyle={{ display: 'none' }}
                        hideHeader={true}
                        headerVisible={false}
                        // weekdaysVisible={true}
                        headerText={null}
                        initialDate={selectedCalender}
                        hideExtraDays={true}
                        hideArrows={true}
                        style={{
                            borderWidth: 1,
                            borderColor: ACTIVE_NAV_BOTTOM,
                            borderRadius: 10,
                        }}
                        dayComponent={({ date, state }) => renderCustomDay(date, state)}
                        theme={
                            {
                                'stylesheet.calendar.header': {
                                    header: {
                                        display: 'none',
                                    },
                                },
                            } as CalendarTheme
                        }
                    />
                </View>

                {/* View Total Expense */}
                <View style={styles.view_total_expense}>
                    <View style={styles.view_expense_item}>
                        <Text style={styles.text_expense_title}>Limited</Text>
                        <Text style={{ color: BG_PRIMARYCOLOR }}>300 $</Text>
                    </View>
                    <View style={styles.view_expense_item}>
                        <Text style={styles.text_expense_title}>Expense</Text>
                        <Text style={{ color: EXPLAIN_ERROR_TEXT }}>200 $</Text>
                    </View>
                    <View style={styles.view_expense_item}>
                        <Text style={styles.text_expense_title}>Bag</Text>
                        <Text style={{ color: BG_PRIMARYCOLOR }}>100 $</Text>
                    </View>
                </View>
            </View>

            {/* view thống kế */}
            <View>
                <View style={[styles.mt_16, styles.view_pie_info]}>
                    <ScrollView style={{ maxHeight: 230 }}>
                        <View>
                            {listDataExpense.map((item, index) => {
                                return (
                                    <>
                                        <View key={index} style={styles.view_header_expense_title}>
                                            <Text style={{ fontSize: 12 }}>{item.date}</Text>
                                            <Text style={{ fontSize: 12 }}>-{item.total} $</Text>
                                        </View>
                                        {item?.data?.map((item, index) => {
                                            return (
                                                <View
                                                    key={item.key}
                                                    style={[styles.view_item_display, styles.view_pie_info_item]}
                                                >
                                                    <View style={styles.pie_info_contain}>
                                                        {item.icon}
                                                        <Text style={styles.text_main}>
                                                            {item.name}
                                                            <Text style={{ fontSize: 11 }}>({item.comment})</Text>
                                                        </Text>
                                                    </View>
                                                    <View style={styles.pie_info_contain}>
                                                        <Text style={styles.text_main}>{item.expense} $</Text>
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
                                    </>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CalenderScreen;
