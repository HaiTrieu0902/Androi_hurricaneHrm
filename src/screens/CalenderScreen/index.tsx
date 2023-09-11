import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Theme } from 'react-native-calendars/src/types';
import DatePicker from 'react-native-date-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HeaderText from '../../components/HeaderText';
import { SCREENS } from '../../constants';
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
        date: '01/09/2023',
        total: '20000',
        data: [
            {
                key: 'food',
                name: 'Food',
                icon: <MaterialCommunityIcons name="food" color={'#fca75b'} size={SIZE_ICON_16} />,
                expense: 16000,
                comment: 'hihi',
            },
            {
                key: 'shopping',
                name: 'Shopping',
                icon: <AntDesign name="shoppingcart" color={'#5d71a9'} size={SIZE_ICON_16} />,
                expense: 4000,
                comment: 'khoc',
            },
        ],
    },
    {
        date: '02/09/2023',
        total: '30000',
        data: [
            {
                key: 'gift',
                name: 'Gift',
                icon: <AntDesign name="gift" color={'#ffc107'} size={SIZE_ICON_16} />,
                expense: 15000,
                comment: 'khoc',
            },
            {
                key: 'homeware',
                name: 'Homeware',
                icon: <AntDesign name="home" color={'#04aa6d'} size={SIZE_ICON_16} />,
                expense: 15000,
                comment: 'khoc',
            },
        ],
    },
    {
        date: '04/09/2023',
        total: '30000',
        data: [
            {
                key: 'food',
                name: 'Food',
                icon: <MaterialCommunityIcons name="food" color={'#fca75b'} size={SIZE_ICON_16} />,
                expense: 15000,
                comment: 'khoc',
            },
            {
                key: 'gift',
                name: 'Gift',
                icon: <AntDesign name="gift" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
                expense: 10000,
                comment: 'khoc',
            },
            {
                key: 'homeware',
                name: 'Homeware',
                icon: <AntDesign name="home" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
                expense: 5000,
                comment: 'khoc',
            },
        ],
    },
];
const CalenderScreen = () => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [selectedCalender, setSelectedCalender] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    let value = 0;
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

    const handleChangeNavigationLimit = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };

    const renderCustomDay = (date: any, state: any) => {
        console.log('date', date);
        if (date?.dateString === '2023-09-01') {
            value = 20000;
        } else if (date?.dateString === '2023-09-02') {
            value = 30000;
        } else if (date?.dateString === '2023-09-04') {
            value = 40000;
        } else {
            value = 0;
        }
        return (
            <View style={styles.gridItemContainer}>
                <View style={[styles.gridItem]}>
                    <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>
                        {date.day}
                    </Text>
                    {value > 0 && (
                        <Text style={{ textAlign: 'right', marginLeft: 6, color: EXPLAIN_ERROR_TEXT, fontSize: 11 }}>
                            {value.toLocaleString()}
                        </Text>
                    )}
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
                        <Text style={{ color: BG_PRIMARYCOLOR }}>400,000 $</Text>
                    </View>
                    <View style={styles.view_expense_item}>
                        <Text style={styles.text_expense_title}>Expense</Text>
                        <Text style={{ color: EXPLAIN_ERROR_TEXT }}>90,000 $</Text>
                    </View>
                    <View style={styles.view_expense_item}>
                        <Text style={styles.text_expense_title}>Bag</Text>
                        <Text style={{ color: BG_PRIMARYCOLOR }}>310,000 $</Text>
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
                                    <React.Fragment key={index}>
                                        <View style={styles.view_header_expense_title}>
                                            <Text style={{ fontSize: 12 }}>{item.date}</Text>
                                            <Text style={{ fontSize: 12 }}>-{item.total} $</Text>
                                        </View>
                                        {item?.data?.map((item) => {
                                            return (
                                                <TouchableOpacity
                                                    onPress={() => handleChangeNavigationLimit('EDIT_DETAIL_CATEGORY')}
                                                    key={item.key}
                                                    style={[styles.view_item_display, styles.view_pie_info_item]}
                                                >
                                                    <View style={styles.pie_info_contain}>
                                                        {item.icon}
                                                        <Text style={styles.text_main}>
                                                            {item.name}
                                                            <Text style={{ fontSize: 11 }}> ({item.comment})</Text>
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
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </React.Fragment>
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
