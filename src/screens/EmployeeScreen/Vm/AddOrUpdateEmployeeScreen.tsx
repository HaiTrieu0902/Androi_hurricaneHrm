import { Link, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonUI from '../../../components/Button';
import Container from '../../../components/Container';
import HeaderText from '../../../components/HeaderText';
import React from 'react';

import { SelectList } from 'react-native-dropdown-select-list';

import { useAppDispatch } from '../../..//redux/store';
import {
    ACTIVE_NAV_BOTTOM,
    BG_SCREEN,
    FONT_FAMILY,
    SIZE_ICON_DEFAULT,
    TEXT_COLOR_PRIMARY,
} from '../../../utils/common';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { InputAccessoryView } from 'react-native';
import { Button, Platform } from 'react-native';
import NavigationGoBack from '../../../components/NavigationGoBack';

const AddOrUpdateEmployeeScreen = () => {
    const [selected, setSelected] = React.useState('');

    const [date, setDate] = React.useState(new Date());
    const [showPicker, setShowPicker] = React.useState(false);

    const marriage = [
        { key: '1', value: 'Single' },
        { key: '2', value: 'Marriaged' },
        { key: '3', value: 'Gay' },
    ];

    const gender = [
        { key: '1', value: 'Male' },
        { key: '2', value: 'Female' },
        { key: '3', value: 'Unknown' },
    ];
    const department = [
        { key: '1', value: 'Devoloper' },
        { key: '2', value: 'Testing' },
        { key: '3', value: 'Maintanence' },
    ];

    const [selectedDate, setSelectedDate] = React.useState('');

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <NavigationGoBack
                paddingTop={10}
                paddingEnd={10}
                paddingStart={10}
                paddingBottom={10}
                title="Employee Manage"
            ></NavigationGoBack>

            {/* <HeaderText title='Add an employee'/> */}
            <ScrollView style={styles.item}>
                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Name Employee</Text>
                    <TextInput placeholder="Name" style={styles.input_item}></TextInput>
                </View>

                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Gender</Text>
                    <SelectList
                        setSelected={(value: React.SetStateAction<string>) => setSelected(value)}
                        data={gender}
                        save="value"
                    ></SelectList>
                </View>

                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Email Employee</Text>
                    <TextInput placeholder="Email Employee" style={styles.input_item}></TextInput>
                </View>

                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Name Mother Employee</Text>
                    <TextInput placeholder="Name Mother Employee" style={styles.input_item}></TextInput>
                </View>

                <View style={styles.big_item}>
                    {/* <Text style={styles.detail_item}>Date of Birth</Text>
                    <TextInput style={styles.input_item} placeholder="__/__/____"></TextInput>
                    {showPicker && (
                        <DateTimePicker
                            value={date}
                            mode="date" // "time" for time picker, "datetime" for both date and time
                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                            onChange={(event, selectedDate) => {
                                const currentDate = selectedDate || date;
                                setShowPicker(Platform.OS === 'ios');
                                setDate(currentDate);
                            }}
                        />
                    )} */}
                </View>

                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Place of Birth</Text>
                    <TextInput placeholder="Place Employee" style={styles.input_item}></TextInput>
                </View>

                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Home Address</Text>
                    <TextInput placeholder="Home Address" style={styles.input_item}></TextInput>
                </View>

                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Bank Account</Text>
                    <TextInput placeholder="Bank Account" style={styles.input_item}></TextInput>
                </View>

                <View>
                    <Text style={styles.detail_item}>Marriage</Text>
                    <SelectList
                        setSelected={(value: React.SetStateAction<string>) => setSelected(value)}
                        data={marriage}
                        save="value"
                    ></SelectList>
                </View>

                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Bank Account</Text>
                    <TextInput placeholder="Bank Account" style={styles.input_item}></TextInput>
                </View>

                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Bank Name</Text>
                    <TextInput placeholder="Bank Name" style={styles.input_item}></TextInput>
                </View>

                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Position</Text>
                    <TextInput placeholder="Position" style={styles.input_item}></TextInput>
                </View>

                <View>
                    <Text style={styles.detail_item}>Department</Text>
                    <SelectList
                        setSelected={(value: React.SetStateAction<string>) => setSelected(value)}
                        data={department}
                        save="value"
                    ></SelectList>
                </View>

                <View style={styles.big_item}>
                    <Text style={styles.detail_item}>Basic Salary</Text>
                    <TextInput placeholder="Salary" style={styles.input_item}></TextInput>
                </View>
            </ScrollView>
            <View style={styles.btn_add}>
                <ButtonUI text="Add Employee" onPress={() => {}}></ButtonUI>
            </View>
        </SafeAreaView>
    );
};

export default AddOrUpdateEmployeeScreen;

const styles = StyleSheet.create({
    bg_scrren: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    item: {
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: 10,
    },
    add_an_employee: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    back: {
        paddingTop: 10,
        paddingStart: 10,
        flexDirection: 'row',
    },
    txt_back: {
        fontSize: 20,
        fontWeight: '900',
        fontFamily: FONT_FAMILY,
        color: ACTIVE_NAV_BOTTOM,
    },
    big_item: {
        paddingBottom: 5,
    },
    detail_item: {
        paddingBottom: 3,
    },
    input_item: {
        borderWidth: 1, // Đặt độ dày cho viền
        borderColor: 'black', // Màu viền
        borderRadius: 5, // Độ cong góc của viền
        backgroundColor: 'white',
    },

    btn_add: {
        position: 'relative',
        paddingStart: 40,
        paddingEnd: 40,
        paddingTop: 10,
        paddingBottom: 10,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
});
