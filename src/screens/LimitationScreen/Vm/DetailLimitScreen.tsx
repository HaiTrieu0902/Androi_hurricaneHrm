import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-modern-datepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome6';
import NavigationGoBack from '../../../components/NavigationGoBack';
import { SCREENS } from '../../../constants';
import { EXPLAIN_ERROR_TEXT, FONT_FAMILY, SIZE_ICON_16, TEXT_COLOR_PRIMARY } from '../../../utils/common';
import { styles } from './DetailLimitScreenStyle';

export const listDataHistory = [
    {
        key: '1',
        note: 'Note 1',
        date: '12/11/2002',
        money: '-10.000',
        cate: 'Shopping',
    },
    {
        key: '2',
        note: 'Note 2',
        date: '12/11/2002',
        money: '-10.000',
        cate: 'Shopping',
    },
    {
        key: '3',
        note: 'Note 3',
        date: '12/11/2002',
        money: '-10.000',
        cate: 'Shopping',
    },
    {
        key: '4',
        note: 'Note 4',
        date: '12/11/2002',
        money: '-10.000',
        cate: 'Shopping',
    },
    {
        key: '5',
        note: 'Note 5',
        date: '12/11/2002',
        money: '-10.000',
        cate: 'Shopping',
    },
    {
        key: '6',
        note: 'Note 6',
        date: '12/11/2002',
        money: '-10.000',
        cate: 'Shopping',
    },
    {
        key: '7',
        note: 'Note 5',
        date: '12/11/2002',
        money: '-10.000',
        cate: 'Shopping',
    },
    {
        key: '8',
        note: 'Note 6',
        date: '12/11/2002',
        money: '-10.000',
        cate: 'Shopping',
    },
    {
        key: '9',
        note: 'Note 5',
        date: '12/11/2002',
        money: '-10.000',
        cate: 'Shopping',
    },
    {
        key: '10',
        note: 'Note 6',
        date: '12/11/2002',
        money: '-10.000',
        cate: 'Shopping',
    },
];

const DetailLimitScreen = () => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [valueChangedDate, setValueChangedDate] = useState<any>('');

    const handleChangeNavigationLimit = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };

    const handleOpenModal = () => {
        setOpen(!open);
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

    const handleCloseOrConfirmModal = (type: string) => {
        if (type === 'close') {
            setOpen(!open);
        } else {
            const parsedDate = Date.parse(valueChangedDate);
            if (!isNaN(parsedDate)) {
                setSelectedDate(new Date(parsedDate));
            } else {
                console.error('Invalid date:', valueChangedDate);
            }
            setOpen(!open);
        }
    };

    const handleMonthYearChange = (dateString: string) => {
        const [year, month] = dateString.split(' ');
        const firstDayOfMonth = new Date(`${year}-${month}-01T00:00:00.000Z`);
        setValueChangedDate(firstDayOfMonth.toISOString());
    };

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View>
                <NavigationGoBack paddingBottom={12} paddingTop={12} paddingStart={10} title="Limited shopping" />
            </View>
            {/* View limit card */}
            <View style={styles.view_card_limit}>
                <View style={styles.view_card}>
                    <View style={styles.view_card_top}>
                        <Text style={styles.text_card_header}>Shopping</Text>
                        <Icon1 name="dots-three-vertical" size={16} color={'white'}></Icon1>
                    </View>
                    <View style={styles.view_card_between}>
                        <View style={{ paddingTop: 16, paddingBottom: 6 }}>
                            <Text style={{ color: 'white', fontSize: 18, fontFamily: FONT_FAMILY, fontWeight: '700' }}>
                                Spent: 1,000,000
                            </Text>
                            <Text style={{ textAlign: 'right', color: '#dddddd', marginTop: 4, fontWeight: '600' }}>
                                Limit: 1,200,000
                            </Text>
                        </View>
                    </View>
                    <View style={styles.view_card_bottom}>
                        <Text style={{ color: '#dddddd', fontWeight: '600' }}>Plan amount</Text>
                        <Text style={{ color: '#dddddd', fontWeight: '600' }}>Total: 10,000,000</Text>
                    </View>
                </View>
            </View>

            {/* View history */}
            <View style={styles.view_history}>
                <View style={[styles.view_date, styles.view_date_contain]}>
                    <Icon
                        onPress={() => handleNextDateOrPrevDate('prev')}
                        name="angle-left"
                        color={TEXT_COLOR_PRIMARY}
                        size={SIZE_ICON_16}
                    />
                    <TouchableOpacity onPress={() => setOpen(true)}>
                        <Text>{formatDateCustom(selectedDate)}</Text>
                    </TouchableOpacity>
                    <Icon
                        onPress={() => handleNextDateOrPrevDate('next')}
                        name="angle-right"
                        color={TEXT_COLOR_PRIMARY}
                        size={SIZE_ICON_16}
                    />
                </View>
                <Modal style={{ height: 200 }} animationType="slide" transparent={true} visible={open}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.view_modal}>
                            <DatePicker
                                mode="monthYear"
                                onMonthYearChange={(selectedDate) => handleMonthYearChange(selectedDate)}
                                selected={valueChangedDate}
                            />
                            <View style={styles.view_modal_child}>
                                <TouchableOpacity onPress={() => handleCloseOrConfirmModal('close')}>
                                    <Text>Close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleCloseOrConfirmModal('confirm')}>
                                    <Text>Confirm</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <ScrollView style={{ maxHeight: 440 }}>
                    {/* View list item history */}
                    <View style={styles.view_list_history}>
                        {listDataHistory.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleChangeNavigationLimit('EDIT_DETAIL_CATEGORY')}
                                >
                                    <View style={styles.view_item_history}>
                                        <View style={styles.icon_history}>
                                            <AntDesign name="shoppingcart" color={'#5d71a9'} size={SIZE_ICON_16} />
                                        </View>

                                        <View style={styles.content_history}>
                                            <View style={styles.content_left}>
                                                <Text
                                                    style={{
                                                        fontSize: 16,
                                                        color: TEXT_COLOR_PRIMARY,
                                                        fontFamily: FONT_FAMILY,
                                                    }}
                                                >
                                                    {item.note}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 12,
                                                        color: TEXT_COLOR_PRIMARY,
                                                        fontFamily: FONT_FAMILY,
                                                    }}
                                                >
                                                    {item.date}
                                                </Text>
                                            </View>
                                            <View style={styles.content_right}>
                                                <View style={{ justifyContent: 'center', paddingEnd: 14 }}>
                                                    <Text style={{ textAlign: 'right', color: EXPLAIN_ERROR_TEXT }}>
                                                        {item.money}
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            textAlign: 'right',
                                                            fontSize: 13,
                                                            color: TEXT_COLOR_PRIMARY,
                                                        }}
                                                    >
                                                        {item.cate}
                                                    </Text>
                                                </View>
                                                <View style={{ justifyContent: 'center' }}>
                                                    <Icon name="angle-right" size={SIZE_ICON_16}></Icon>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default DetailLimitScreen;
