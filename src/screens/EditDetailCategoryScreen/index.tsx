import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    BG_SCREEN,
    BG_SUB_COLOR,
    BUTTON_COLOR__HOME,
    EXPLAIN_ERROR_TEXT,
    FONT_FAMILY,
    SIZE_ICON_16,
    SIZE_ICON_20,
    TEXT_COLOR_PRIMARY,
} from '../../utils/common';
import NavigationGoBack from '../../components/NavigationGoBack';
import { format } from 'date-fns';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import ContainLimited from '../../components/ContainLimited';
import { listDataCategory } from '../../constants';
import ButtonUI from '../../components/Button';
const EditDetailCategoryScreen = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectCategory, setselectCategory] = useState('food');

    /* Handle changed date*/
    const handleDateChange = (newDate: Date) => {
        setSelectedDate(newDate);
    };

    /* Function custom date*/
    const formatDateCustom = (date: Date) => {
        return format(date, 'd.M.yyyy, EEE');
    };

    /* handle Next Or Prev Date */
    const handleNextDateOrPrevDate = (type: string) => {
        const currentDate = new Date(selectedDate);
        if (type === 'next') {
            currentDate.setDate(selectedDate.getDate() + 1);
            setSelectedDate(currentDate);
        } else {
            currentDate.setDate(selectedDate.getDate() - 1);
            setSelectedDate(currentDate);
        }
    };

    const handleActiveCategory = (type: string) => {
        setselectCategory(type);
    };
    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.bg_container}>
                <NavigationGoBack paddingBottom={12} paddingTop={12} title="Calender Edit" />
            </View>
            <View style={{ marginTop: 6, paddingHorizontal: 16 }}>
                {/* view date */}
                <View style={styles.view_contain}>
                    <Text style={styles.text_field}>Date</Text>
                    <View style={styles.view_item}>
                        <View style={styles.view_date}>
                            <FontAwesome6
                                onPress={() => handleNextDateOrPrevDate('prev')}
                                style={{ marginLeft: 5 }}
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

                {/* view note */}
                <View style={[styles.view_contain, styles.mt_6]}>
                    <Text style={styles.text_field}>Note</Text>
                    <View style={styles.view_item}>
                        <TextInput multiline={true} style={styles.text_area} placeholder="Enter note" />
                    </View>
                </View>

                {/* view expense */}
                <View style={[styles.view_contain, styles.mt_6]}>
                    <Text style={styles.text_field}>Expense</Text>
                    <View style={styles.view_item}>
                        <View style={styles.view_date}>
                            <TextInput style={styles.text_expense} placeholder="0.0" />
                            <MaterialIcons
                                style={{ marginLeft: -6 }}
                                name="attach-money"
                                color={TEXT_COLOR_PRIMARY}
                                size={SIZE_ICON_20}
                            />
                        </View>
                    </View>
                </View>

                {/* View category */}
                <View style={[styles.mt_18]}>
                    <Text style={[styles.text_field, { marginBottom: 10 }]}>Category</Text>
                    <View style={styles.view_contain_category}>
                        <ScrollView style={{ maxHeight: 200 }}>
                            <View style={styles.view_category_list}>
                                {listDataCategory.map((item) => {
                                    return (
                                        <View
                                            key={item.key}
                                            style={[
                                                styles.view_category_item,
                                                selectCategory === item.key && styles.view_category_item_active,
                                            ]}
                                        >
                                            <TouchableOpacity
                                                onPress={() => handleActiveCategory(item.key)}
                                                style={styles.category_item_contain}
                                            >
                                                {item.icon}
                                                <Text style={styles.text_category}>{item.name}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                })}
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={styles.view_btn_submit}>
                    <View style={{ width: '49%' }}>
                        <ButtonUI bgColor={BG_SUB_COLOR} text="Submit" onPress={() => {}} />
                    </View>
                    <View style={{ width: '49%' }}>
                        <ButtonUI bgColor={EXPLAIN_ERROR_TEXT} text="Delete" onPress={() => {}} />
                    </View>
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
        alignItems: 'center',
        gap: 10,
    },
    view_item: {},
    view_date: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },
    view_contain_navigation: {},
    view_navigation_item: {
        width: 166,
        height: 110,
    },
    ml_10: {
        marginLeft: 10,
    },

    /* view category */
    view_contain_category: {},
    view_category_list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 7,
    },
    view_category_item: {
        width: '32%',
        borderWidth: 1,
        borderColor: TEXT_COLOR_PRIMARY,
        borderRadius: 5,
    },
    view_category_item_active: {
        borderColor: BG_SUB_COLOR,
        width: '32%',
        borderWidth: 1,
        borderRadius: 5,
    },

    view_btn_submit: {
        marginTop: 96,
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    category_item_contain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 6,
        paddingBottom: 6,
    },
    mt_6: {
        marginTop: 6,
    },
    mt_18: {
        marginTop: 16,
    },
    button_bg: {
        paddingTop: 8,
        paddingBottom: 8,
        width: 270,
        backgroundColor: BUTTON_COLOR__HOME,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
    },

    text_field: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700',
    },
    text_area: {
        fontSize: 15,
        color: TEXT_COLOR_PRIMARY,
        width: 270,
        maxHeight: 60,
        marginLeft: 24,
        borderWidth: 1,
        borderColor: BUTTON_COLOR__HOME,
        fontFamily: FONT_FAMILY,
        paddingStart: 12,
        paddingEnd: 12,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 6,
    },
    text_category: {
        fontFamily: FONT_FAMILY,
        color: TEXT_COLOR_PRIMARY,
        marginTop: 4,
    },
    text_category_active: {
        fontFamily: FONT_FAMILY,
        color: BG_SUB_COLOR,
        marginTop: 4,
    },
    text_expense: {
        backgroundColor: BUTTON_COLOR__HOME,
        color: 'black',
        width: 268,
        paddingStart: 12,
        paddingEnd: 12,
        paddingTop: 4,
        paddingBottom: 4,
        fontFamily: FONT_FAMILY,
        borderRadius: 6,
        fontWeight: '900',
        fontSize: 17,
    },
    text_date: { color: 'black', fontFamily: FONT_FAMILY, fontWeight: '600', fontSize: 14 },
});

export default EditDetailCategoryScreen;
