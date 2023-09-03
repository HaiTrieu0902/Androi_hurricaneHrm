import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './CanlenderScreenStyle';
import HeaderText from '../../components/HeaderText';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {
    ACTIVE_NAV_BOTTOM,
    BG_PRIMARYCOLOR,
    EXPLAIN_ERROR_TEXT,
    SIZE_ICON_16,
    TEXT_COLOR_PRIMARY,
} from '../../utils/common';
import DatePicker from 'react-native-date-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { format } from 'date-fns';
import { Calendar } from 'react-native-calendars';
import { Theme } from 'react-native-calendars/src/types';
type CalendarTheme = Theme & {
    'stylesheet.calendar.header': {
        header: {
            display: string;
        };
    };
};
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

        // return (
        //     <View>
        //         <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>{date.day}</Text>
        //         <Text style={{ textAlign: 'right', marginLeft: 6, color: EXPLAIN_ERROR_TEXT, fontSize: 11 }}>-300</Text>
        //     </View>
        // );
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
            {/* view date */}

            <View style={styles.bg_view_container}>
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

                <View>
                    <Text>CalenderScreen</Text>
                    <Text>CalenderScreen</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CalenderScreen;
