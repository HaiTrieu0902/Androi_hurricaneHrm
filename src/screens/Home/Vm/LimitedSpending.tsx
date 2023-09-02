import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ButtonUI from '../../../components/Button';
import { BG_SUB_COLOR, TEXT_COLOR_PRIMARY } from '../../../utils/common';
import { styles } from './LimitedSpendingStyle';

const LimitedSpending = () => {
    const inputRef = useRef<TextInput | null>(null);
    const [valueTotal, setValueTotal] = useState(0);
    const [categoryLimits, setCategoryLimits] = useState({
        food: 0,
        shopping: 0,
        gift: 0,
        homeware: 0,
        medical: 0,
        education: 0,
        exchange: 0,
        invest: 0,
        phone: 0,
    });
    const handleInputChange = (category: string, newValue: string) => {
        const newValueNum = parseFloat(newValue);
        const newCategoryLimits = { ...categoryLimits, [category]: newValueNum };
        const total = Object.values(newCategoryLimits).reduce((acc, val) => acc + val, 0);
        setCategoryLimits(newCategoryLimits);
        setValueTotal(total);
    };

    /* Convert number */
    const formatNumber = (number: number) => {
        return number.toLocaleString();
    };

    return (
        <KeyboardAvoidingView>
            <View style={{ marginTop: 6 }}>
                {/* View header*/}
                <View>
                    <Text style={{ textAlign: 'center', color: TEXT_COLOR_PRIMARY }}>
                        Plan amount you spend every 1 month
                    </Text>
                </View>

                {/* View Category */}
                <View style={[styles.view_container_column, { marginTop: 16 }]}>
                    <Text style={[styles.text_field, { marginBottom: 10 }]}>Category Limitation</Text>
                    <ScrollView style={{ maxHeight: 440 }}>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Food: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('food', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Shopping: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('shopping', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Gift: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('gift', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Homeware: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('homeware', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Medical: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('medical', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Education: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('education', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Exchange: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('exchange', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Invest: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('invest', text)}
                            />
                        </View>
                        <View style={[styles.view_category_item]}>
                            <Text style={styles.text_category}>Phone: </Text>
                            <TextInput
                                placeholder="0.0"
                                style={[styles.input_plan, styles.input_plan_category]}
                                keyboardType="numeric"
                                onChangeText={(text) => handleInputChange('phone', text)}
                            />
                        </View>
                    </ScrollView>
                </View>

                {/* View total spending limit*/}
                <View style={[styles.view_container, { marginTop: 22 }]}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.text_field}>Total:</Text>
                        <Text style={[styles.text_total, { marginLeft: 8 }]}>{valueTotal.toLocaleString()}</Text>
                        <MaterialIcons name="attach-money" color={BG_SUB_COLOR} size={18} />
                    </View>
                </View>

                <View style={styles.view_btn_submit}>
                    <ButtonUI bgColor={BG_SUB_COLOR} text="Submit" onPress={() => {}} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LimitedSpending;
