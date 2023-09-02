import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { SCREENS } from '../../constants';
import { BG_SUB_COLOR, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../utils/common';
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
                            <Text style={styles.txt_money_remain}>Bag: 10,000,000</Text>
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
                            <Text style={styles.txt_money_total}>Total: 6.000.000</Text>
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
                                style={[styles.view_item, { backgroundColor: '#f18ca8' }]}
                                onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                            >
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity
                                style={[styles.view_item, { backgroundColor: '#66ab6a' }]}
                                onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                            >
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity
                                style={[styles.view_item, { backgroundColor: '#664fc1' }]}
                                onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                            >
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity
                                style={[styles.view_item, { backgroundColor: '#818562' }]}
                                onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                            >
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity
                                style={[styles.view_item, { backgroundColor: '#4564e0' }]}
                                onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                            >
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
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
