import { format } from 'date-fns';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FONT_FAMILY } from '../../../utils/common';

const ExpenseHome = () => {
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const handleDateChange = (newDate: Date) => {
        setSelectedDate(newDate);
    };

    const formatDateCustom = (date: Date) => {
        return format(date, 'M.d.yyyy, EEE');
    };

    return (
        <View>
            <View style={styles.view_contain}>
                <Text style={styles.text_field}>Date</Text>
                <View style={styles.view_item}>
                    <View style={styles.view_date}>
                        <Text>Icon</Text>
                        <TouchableOpacity style={styles.button_bg} onPress={() => setOpen(true)}>
                            <Text style={styles.text_date}>{formatDateCustom(selectedDate)}</Text>
                        </TouchableOpacity>
                        <Text>Icon</Text>
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
        </View>
    );
};
const styles = StyleSheet.create({
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
    button_bg: {
        paddingTop: 4,
        paddingBottom: 4,
        paddingStart: 72,
        paddingEnd: 72,
        backgroundColor: '#b8def3',
        borderRadius: 6,
    },
    text_field: {},
    text_date: { color: 'black', fontFamily: FONT_FAMILY, fontWeight: '700', fontSize: 14 },
});
export default ExpenseHome;
