import React, { useRef, useState } from 'react';
import {
    KeyboardAvoidingView,
    NativeSyntheticEvent,
    Text,
    TextInput,
    TextInputChangeEventData,
    View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonUI from '../../../components/Button';
import { BG_SUB_COLOR } from '../../../utils/common';
import { styles } from './LimitedSpendingStyle';
const itemDropDownPicker = [
    { label: 'Equally divided', value: 'equally' },
    { label: 'Custom', value: 'custom' },
];

const LimitedSpending = () => {
    const inputRef = useRef<TextInput | null>(null);
    const [valueChangedTotal, setValueChangedTotal] = useState<number | any>('');
    const [valueTotal, setValueTotal] = useState(0);
    const [isTotal, setIsTotal] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('custom');

    /* handle channg Value Total */
    const handleChangeTotalLimition = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setValueChangedTotal(Number(e.nativeEvent.text));
    };

    /* handle Save value total */
    const handleSaveValueTotal = () => {
        setIsTotal(true);
        if (valueChangedTotal > 0) {
            setValueTotal(valueChangedTotal);
        }
        setValueChangedTotal('');
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    return (
        <KeyboardAvoidingView>
            <View style={{ marginTop: 6 }}>
                {/* View select*/}
                <View></View>

                {/* View total spending limit*/}
                <View style={styles.view_container}>
                    <Text style={styles.text_field}>Limitation: </Text>
                    <TextInput
                        ref={inputRef}
                        onChange={(e) => handleChangeTotalLimition(e)}
                        placeholder="0.0"
                        style={styles.input_plan}
                        keyboardType="numeric"
                        value={valueChangedTotal.toString()}
                    />
                    <TouchableOpacity
                        disabled={!valueChangedTotal}
                        onPress={handleSaveValueTotal}
                        style={[styles.btn_save, !valueChangedTotal && styles.btn_save_disable]}
                    >
                        <Text style={{ color: valueChangedTotal ? 'black' : 'white' }}>Save</Text>
                    </TouchableOpacity>
                </View>

                {/* View total spending limit*/}
                <View style={[styles.view_container, { marginTop: 22 }]}>
                    <Text style={styles.text_field}>Total:</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.text_total]}>
                            {valueTotal.toLocaleString()}
                            <MaterialIcons
                                style={{ marginLeft: 4, marginTop: 6 }}
                                name="attach-money"
                                color={BG_SUB_COLOR}
                                size={18}
                            />
                        </Text>
                    </View>
                    <View>
                        <DropDownPicker
                            containerStyle={{ width: 160 }}
                            dropDownContainerStyle={{ borderColor: BG_SUB_COLOR }}
                            style={styles.dropdown_selected}
                            open={open}
                            value={value}
                            items={itemDropDownPicker}
                            setOpen={setOpen}
                            setValue={setValue}
                            showTickIcon={true}
                        />
                    </View>
                </View>

                {/* View Category */}
                <View style={[styles.view_container_column, { marginTop: 16 }]}>
                    <Text style={[styles.text_field, { marginBottom: 10 }]}>Category Limitation</Text>
                    <ScrollView style={{ maxHeight: 366 }}>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Food: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Shopping: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Gift: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Homeware: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Medical: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Education: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Exchange: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Invest: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Phone: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.view_btn_submit}>
                    <ButtonUI bgColor={BG_SUB_COLOR} text="Submit" onPress={() => {}} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LimitedSpending;
