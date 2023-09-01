import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BG_SUB_COLOR } from '../../../utils/common';
import { styles } from './LimitedSpendingStyle';

const LimitedSpending = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('custom');
    const [items, setItems] = useState([
        { label: 'Equally divided', value: 'equally' },
        { label: 'Food/Education', value: 'fe' },
        { label: 'Custom', value: 'custom' },
    ]);
    return (
        <View style={{ marginTop: 6 }}>
            {/* View select*/}
            <View></View>

            {/* View total spending limit*/}
            <View style={styles.view_container}>
                <Text style={styles.text_field}>Limitation: </Text>
                <TextInput placeholder="0.0" style={styles.input_plan} />
                <TouchableOpacity style={styles.btn_save}>
                    <Text style={{ color: 'white' }}>Save</Text>
                </TouchableOpacity>
            </View>

            {/* View total spending limit*/}
            <View style={[styles.view_container, { marginTop: 12 }]}>
                <Text style={styles.text_field}>Total:</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.text_total]}>100.000</Text>
                    <MaterialIcons style={{ marginLeft: 4 }} name="attach-money" color={BG_SUB_COLOR} size={18} />
                </View>
                <View style={{ marginLeft: 28 }}>
                    <DropDownPicker
                        containerStyle={{ width: 200 }}
                        dropDownContainerStyle={{ borderColor: BG_SUB_COLOR }}
                        style={styles.dropdown_selected}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        showTickIcon={true}
                    />
                </View>
            </View>
        </View>
    );
};

export default LimitedSpending;
