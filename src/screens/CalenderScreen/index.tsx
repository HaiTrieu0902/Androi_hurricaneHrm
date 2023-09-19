import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Theme } from 'react-native-calendars/src/types';
import DatePicker from 'react-native-date-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HeaderText from '../../components/HeaderText';
import { SCREENS, listDataCategory } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { getTransactionUserMonthRedux, setTransactionId } from '../../redux/transaction.slice';
import { getLimitationTransactionUserByMonthAPI } from '../../services/api/limitation.api';
import { ILimitationTransaction } from '../../types/limitation.type';
import {
    ACTIVE_NAV_BOTTOM,
    BG_PRIMARYCOLOR,
    EXPLAIN_ERROR_TEXT,
    SIZE_ICON_16,
    TEXT_COLOR_PRIMARY,
} from '../../utils/common';
import { styles } from './CanlenderScreenStyle';
import { setInitialScreenNameEditTransaction } from '../../redux/auth.slice';

type CalendarTheme = Theme & {
    'stylesheet.calendar.header': {
        header: {
            display: string;
        };
    };
};

const CalenderScreen = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.auth);
    const { isLoadingLimitationTransaction } = useAppSelector((state) => state.limitation);
    const [listLimitationTractionMonth, setListLimitationTractionMonth] = useState<ILimitationTransaction>();
    const { listTransactionUserMonth, isLoadingTransactionUserMonth } = useAppSelector((state) => state.transaction);
    const [open, setOpen] = useState(false);
    const [selectedCalender, setSelectedCalender] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    // let value = 0;
    /* Handle changed date*/
    const handleDateChange = (newDate: Date) => {
        setSelectedDate(newDate);
    };
    /* Effect change value date*/
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

    /* hanlde changed navigation */
    const handleChangeNavigationEdit = async (type: string, id: number) => {
        navigation.navigate(SCREENS[type] as never);
        dispatch(setInitialScreenNameEditTransaction('Calender Edit'));
        dispatch(setTransactionId(id));
    };

    /* Handle render calendar all transction by month */
    const renderCustomDay = (date: any, state: any) => {
        const value = listTransactionUserMonth?.data?.filter((item) => {
            if (item?.date === date?.dateString) {
                return item?.totalAmountDate;
            }
            return 0;
        });
        return (
            <View style={styles.gridItemContainer}>
                <View style={[styles.gridItem]}>
                    <Text style={{ textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black' }}>
                        {date.day}
                    </Text>
                    {value?.length > 0 && (
                        <Text style={{ textAlign: 'right', marginLeft: 4, color: EXPLAIN_ERROR_TEXT, fontSize: 9 }}>
                            {value[0]?.totalAmountDate?.toLocaleString().length > 8
                                ? value[0]?.totalAmountDate?.toLocaleString().slice(0, 6) + '...'
                                : value[0]?.totalAmountDate?.toLocaleString()}
                        </Text>
                    )}
                </View>
            </View>
        );
    };

    /* Function get category Icon  */
    const getIconForCategory = (category_key: any) => {
        const category = listDataCategory.find((item) => item.key === category_key);
        return category ? category.icon : null;
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
    /* Useffect call API limitation transaction by month  */
    useEffect(() => {
        getLimitationTransactionUserByMonth();
    }, [selectedDate, dispatch, isLoadingLimitationTransaction]);

    /* UseEffect call API Transaction UserMonth */
    useEffect(() => {
        const getTransactionUserMonth = dispatch(
            getTransactionUserMonthRedux({
                userId: Number(user?.user_id),
                month: selectedDate.getMonth() + 1,
                year: selectedDate.getFullYear(),
            }),
        );
        return () => {
            getTransactionUserMonth.abort();
        };
    }, [selectedDate, isLoadingTransactionUserMonth, dispatch]);

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
                        <Text style={{ color: BG_PRIMARYCOLOR }}>
                            {listLimitationTractionMonth?.total_limit.toLocaleString()} $
                        </Text>
                    </View>
                    <View style={styles.view_expense_item}>
                        <Text style={styles.text_expense_title}>Expense</Text>
                        <Text style={{ color: EXPLAIN_ERROR_TEXT }}>
                            {listTransactionUserMonth?.totalAmount?.toLocaleString()} $
                        </Text>
                    </View>
                    <View style={styles.view_expense_item}>
                        <Text style={styles.text_expense_title}>Bag</Text>
                        <Text style={{ color: BG_PRIMARYCOLOR }}>
                            {(
                                Number(listLimitationTractionMonth?.total_limit) - listTransactionUserMonth?.totalAmount
                            ).toLocaleString()}{' '}
                            $
                        </Text>
                    </View>
                </View>
            </View>

            {/* view thống kế */}
            <View>
                <View style={[styles.mt_16, styles.view_pie_info]}>
                    <ScrollView style={{ maxHeight: 230 }}>
                        <View>
                            {listTransactionUserMonth?.data?.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <View style={styles.view_header_expense_title}>
                                            <Text style={{ fontSize: 12 }}>
                                                {format(new Date(item?.date), 'dd/MM/yyyy')}
                                            </Text>
                                            <Text style={{ fontSize: 12 }}>
                                                -{item.totalAmountDate.toLocaleString()} $
                                            </Text>
                                        </View>
                                        {item?.transactions?.map((item) => {
                                            const icon = getIconForCategory(item.category_key);
                                            return (
                                                <TouchableOpacity
                                                    onPress={() =>
                                                        handleChangeNavigationEdit(
                                                            'EDIT_DETAIL_CATEGORY',
                                                            item.transaction_id,
                                                        )
                                                    }
                                                    key={item.transaction_id}
                                                    style={[styles.view_item_display, styles.view_pie_info_item]}
                                                >
                                                    <View style={styles.pie_info_contain}>
                                                        {icon}
                                                        <Text style={styles.text_main}>
                                                            {item.category_key.charAt(0).toUpperCase() +
                                                                item.category_key.slice(1)}
                                                            <Text style={{ fontSize: 11 }}>
                                                                {item.note && ` (${item.note})`}
                                                            </Text>
                                                        </Text>
                                                    </View>
                                                    <View style={styles.pie_info_contain}>
                                                        <Text style={styles.text_main}>{item.amount} $</Text>
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
