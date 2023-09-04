import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { SCREENS } from '../../constants';
import { BG_PRIMARYCOLOR, BG_SUB_COLOR, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../utils/common';
import { styles } from './LimitationScreenStyle';
import HeaderText from '../../components/HeaderText';
import { format } from 'date-fns';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const LimitationScreen = () => {
    const navigation = useNavigation();

    const handleChangeNavigationLimit = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };

    const formatDateCustom = (date: Date) => {
        return format(date, 'd.M.yyyy');
    };
    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View>
                <HeaderText title={`Limitation`} />
            </View>

            <View style={[styles.view_limit_container]}>
                {/* View  card total*/}
                <View style={styles.view_total_limit}>
                    <View>
                        <Icon name="eye" size={20}></Icon>
                        <Text style={[, styles.txt_money_total, { marginTop: 10 }]}>
                            {formatDateCustom(new Date())}
                        </Text>
                    </View>
                    <View>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Text style={styles.txt_money_remain}>Bag: 310,000</Text>
                            <MaterialIcons name="attach-money" color={BG_SUB_COLOR} size={18} />
                        </View>

                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 8,
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Text style={styles.txt_money_total}>Total: 1,870,000</Text>
                            <MaterialIcons name="attach-money" color={TEXT_COLOR_PRIMARY} size={18} />
                        </View>
                    </View>
                </View>

                {/* View  list limit*/}
                <View style={styles.view_list_limit_container}>
                    <ScrollView>
                        <View style={styles.view_list_item_limit}>
                            {/* View  item limit*/}
                            <TouchableOpacity
                                style={[styles.view_item, { backgroundColor: BG_PRIMARYCOLOR }]}
                                onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                            >
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Food</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Spent: 110,000</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Bag: 60,000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity
                                style={[styles.view_item, { backgroundColor: BG_PRIMARYCOLOR }]}
                                onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                            >
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Spent: 300,000</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Bag: 100,00</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity
                                style={[styles.view_item, { backgroundColor: BG_PRIMARYCOLOR }]}
                                onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                            >
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Homeware</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Spent: 600,000</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Bag: 50,000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity
                                style={[styles.view_item, { backgroundColor: BG_PRIMARYCOLOR }]}
                                onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                            >
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Invest</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Spent: 500,000</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Bag: 100,000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity
                                style={[styles.view_item, { backgroundColor: BG_PRIMARYCOLOR }]}
                                onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                            >
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Phone</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Spent: 50,000</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Bag: 0</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LimitationScreen;
