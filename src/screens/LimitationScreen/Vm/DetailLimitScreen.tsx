import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome6';
import NavigationGoBack from '../../../components/NavigationGoBack';
import { SCREENS } from '../../../constants';
import {
    EXPLAIN_ERROR_TEXT,
    FONT_FAMILY,
    SIZE_ICON_16,
    SIZE_ICON_DEFAULT,
    TEXT_COLOR_PRIMARY,
} from '../../../utils/common';
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
    const handleChangeNavigationLimit = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
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
                <View style={styles.view_date}>
                    <Text>January, 2023</Text>
                </View>
                <ScrollView style={{ maxHeight: 440 }}>
                    {/* View list item history */}
                    <View style={styles.view_list_history}>
                        {listDataHistory.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleChangeNavigationLimit('CHANGE_HISTORY')}
                                >
                                    <View style={styles.view_item_history}>
                                        <View style={styles.icon_history}>
                                            <Icon name="cart-shopping" size={SIZE_ICON_DEFAULT}></Icon>
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
