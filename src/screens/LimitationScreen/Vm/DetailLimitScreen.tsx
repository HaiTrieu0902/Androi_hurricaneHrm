import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import DatePicker from 'react-native-modern-datepicker';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome6';
import NavigationGoBack from '../../../components/NavigationGoBack';
import { SCREENS, listDataCategory } from '../../../constants';
import { useAppSelector } from '../../../redux/store';
import { getLimitationTransactionUserByMonthAPI } from '../../../services/api/limitation.api';
import { ILimitationTransaction } from '../../../types/limitation.type';
import { EXPLAIN_ERROR_TEXT, FONT_FAMILY, SIZE_ICON_16, TEXT_COLOR_PRIMARY } from '../../../utils/common';
import { styles } from './DetailLimitScreenStyle';
import { getReportLimitationCategoryAPI } from '../../../services/api/report.api';
import { ILimitationTransactionCategory } from '../../../types/report.type';

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
    const { user } = useAppSelector((state) => state.auth);
    const { limitation_categorykey, isLoadingLimitationTransaction } = useAppSelector((state) => state.limitation);
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [valueChangedDate, setValueChangedDate] = useState<any>('');
    const [listLimitationTractionMonth, setListLimitationTractionMonth] = useState<ILimitationTransaction>();
    const [listLimitationTransactionCategory, setListLimitationTransactionCategory] =
        useState<ILimitationTransactionCategory>();
    const handleChangeNavigationLimit = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
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

    /* Handle close or open modal*/
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

    /* Handle changed month or year*/
    const handleMonthYearChange = (dateString: string) => {
        const [year, month] = dateString.split(' ');
        const firstDayOfMonth = new Date(`${year}-${month}-01T00:00:00.000Z`);
        setValueChangedDate(firstDayOfMonth.toISOString());
    };

    /* Handle get API LimitationTransactionUserByMonth*/
    const getLimitationTransactionUserByMonth = async () => {
        try {
            const res = await getLimitationTransactionUserByMonthAPI({
                userId: Number(user?.user_id),
                month: selectedDate.getMonth() + 1,
                year: selectedDate.getFullYear(),
            });
            if (res) {
                setListLimitationTractionMonth(res);
            }
        } catch (error) {}
    };

    /* Handle get API getReportLimitationCategory*/
    const getReportLimitationCategory = async () => {
        try {
            const res = await getReportLimitationCategoryAPI({
                userId: Number(user?.user_id),
                categoryKey: limitation_categorykey,
                month: selectedDate.getMonth() + 1,
                year: selectedDate.getFullYear(),
            });
            if (res) {
                setListLimitationTransactionCategory(res);
            }
        } catch (error) {}
    };

    /* Useffect call API limitation transaction by month  */
    useEffect(() => {
        getLimitationTransactionUserByMonth();
    }, [selectedDate, isLoadingLimitationTransaction]);

    /* Useffect call API getReportLimitationCategory  */
    useEffect(() => {
        getReportLimitationCategory();
    }, [selectedDate, isLoadingLimitationTransaction]);

    /* Convert data from detail and limitation key */
    // const dataConvert = listLimitationTractionMonth?.data
    //     ?.map((item) => item?.category_key === limitation_categorykey && item)
    //     .filter(Boolean);
    const dataConvert: any = listLimitationTractionMonth?.data?.reduce((result, item) => {
        if (item?.category_key === limitation_categorykey) {
            result = { ...result, ...item };
        }
        return result;
    }, {});

    /* Function get category Icon  */
    const getIconForCategory = (category_key: any) => {
        const category = listDataCategory.find((item) => item.key === category_key);
        return category ? category.icon : null;
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
                        <Text style={styles.text_card_header}>
                            {limitation_categorykey.charAt(0).toUpperCase() + limitation_categorykey.slice(1)}
                        </Text>
                        <Icon1 name="dots-three-vertical" size={16} color={'white'}></Icon1>
                    </View>
                    <View style={styles.view_card_between}>
                        <View style={{ paddingTop: 16, paddingBottom: 6 }}>
                            <Text style={{ color: 'white', fontSize: 18, fontFamily: FONT_FAMILY, fontWeight: '700' }}>
                                Spent:{' '}
                                {dataConvert?.amount_spent ? Number(dataConvert?.amount_spent).toLocaleString() : 0}
                            </Text>
                            <Text style={{ textAlign: 'right', color: '#dddddd', marginTop: 4, fontWeight: '600' }}>
                                Limited:{' '}
                                {dataConvert?.amount_spent ? Number(dataConvert?.amount_limit).toLocaleString() : 0}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.view_card_bottom}>
                        <Text style={{ color: '#dddddd', fontWeight: '600' }}>Plan amount</Text>
                        <Text style={{ color: '#dddddd', fontWeight: '600' }}>
                            Total: {listLimitationTractionMonth?.total_limit?.toLocaleString()}
                        </Text>
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
                        {Number(listLimitationTransactionCategory?.data?.length) > 0 &&
                            listLimitationTransactionCategory?.data?.map((item, index) => {
                                const icon = getIconForCategory(item.category_key);
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => handleChangeNavigationLimit('EDIT_DETAIL_CATEGORY')}
                                    >
                                        <View style={styles.view_item_history}>
                                            <View style={styles.icon_history}>{icon}</View>

                                            <View style={styles.content_history}>
                                                <View style={styles.content_left}>
                                                    <Text
                                                        style={{
                                                            fontSize: 16,
                                                            color: TEXT_COLOR_PRIMARY,
                                                            fontFamily: FONT_FAMILY,
                                                        }}
                                                    >
                                                        {item.note || 'None'}
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 12,
                                                            color: TEXT_COLOR_PRIMARY,
                                                            fontFamily: FONT_FAMILY,
                                                        }}
                                                    >
                                                        {format(new Date(item?.date), 'dd/MM/yyyy')}
                                                    </Text>
                                                </View>
                                                <View style={styles.content_right}>
                                                    <View style={{ justifyContent: 'center', paddingEnd: 14 }}>
                                                        <Text style={{ textAlign: 'right', color: EXPLAIN_ERROR_TEXT }}>
                                                            -{item.amount.toLocaleString()}
                                                        </Text>
                                                        <Text
                                                            style={{
                                                                textAlign: 'right',
                                                                fontSize: 13,
                                                                color: TEXT_COLOR_PRIMARY,
                                                            }}
                                                        >
                                                            {item.category_key}
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
                        {listLimitationTransactionCategory?.data?.length === 0 && (
                            <View>
                                <Text>You dont have transaction</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default DetailLimitScreen;
