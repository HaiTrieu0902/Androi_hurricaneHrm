import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HeaderText from '../../components/HeaderText';
import { SCREENS } from '../../constants';
import { ILimitationTransaction } from '../../types/limitation.type';
import { ACTIVE_NAV_BOTTOM, BG_PRIMARYCOLOR, BG_SUB_COLOR, TEXT_COLOR_PRIMARY } from '../../utils/common';
import { styles } from './LimitationScreenStyle';
import { getLimitationTransactionUserByMonthAPI } from '../../services/api/limitation.api';
import { useAppSelector } from '../../redux/store';

const LimitationScreen = () => {
    const navigation = useNavigation();
    const { user } = useAppSelector((state) => state.auth);
    const { isLoadingLimitationTransaction } = useAppSelector((state) => state.limitation);
    const [listLimitationTractionMonth, setListLimitationTractionMonth] = useState<ILimitationTransaction>();

    const handleChangeNavigationLimit = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };

    const formatDateCustom = (date: Date) => {
        return format(date, 'd.M.yyyy');
    };

    /* Handle get API LimitationTransactionUserByMonth*/
    const getLimitationTransactionUserByMonth = async () => {
        try {
            const res = await getLimitationTransactionUserByMonthAPI({
                userId: Number(user?.user_id),
                month: new Date().getMonth() + 1,
                year: new Date().getFullYear(),
            });
            if (res) {
                setListLimitationTractionMonth(res);
            }
        } catch (error) {}
    };
    /* Useffect call API limitation transaction by month  */
    useEffect(() => {
        getLimitationTransactionUserByMonth();
    }, [isLoadingLimitationTransaction]);

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
                            <Text style={styles.txt_money_remain}>
                                Bag:{' '}
                                {(
                                    Number(listLimitationTractionMonth?.total_limit) -
                                    Number(listLimitationTractionMonth?.total_spent)
                                ).toLocaleString()}{' '}
                                $
                            </Text>
                        </View>

                        <View style={styles.view_sub_bag}>
                            <Text style={(styles.txt_money_total, { color: 'red' })}>
                                Spent: {listLimitationTractionMonth?.total_spent.toLocaleString()} $
                            </Text>
                        </View>

                        <View style={styles.view_sub_bag}>
                            <Text style={styles.txt_money_total}>
                                Total: {listLimitationTractionMonth?.total_limit.toLocaleString()} $
                            </Text>
                        </View>
                    </View>
                </View>

                {/* View  list limit*/}
                <View style={styles.view_list_limit_container}>
                    <ScrollView style={{ maxHeight: 500 }}>
                        <View style={styles.view_list_item_limit}>
                            {/* View  item limit*/}
                            {Number(listLimitationTractionMonth?.data?.length) > 0 &&
                                listLimitationTractionMonth?.data?.map((item) => {
                                    return (
                                        <TouchableOpacity
                                            style={[styles.view_item, { backgroundColor: BG_PRIMARYCOLOR }]}
                                            onPress={() => handleChangeNavigationLimit('DETAIL_LIMITATION')}
                                        >
                                            <View style={[styles.view_container_limit]}>
                                                <View>
                                                    <Text style={styles.text_title}>
                                                        {item.category_key.charAt(0).toUpperCase() +
                                                            item.category_key.slice(1)}
                                                    </Text>
                                                </View>
                                                <View style={styles.view_total}>
                                                    <View style={{ display: 'flex', gap: 6 }}>
                                                        <Text style={[styles.text_right, styles.text_total]}>
                                                            Bag: {item?.amount_limit - item?.amount_spent}
                                                        </Text>
                                                        <Text style={[styles.text_right, styles.text_remain]}>
                                                            limited: {item?.amount_limit}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    );
                                })}

                            {Number(listLimitationTractionMonth?.data?.length) === 0 && (
                                <View>
                                    <Text style={{ color: ACTIVE_NAV_BOTTOM, fontSize: 14 }}>
                                        You haven't entered a limitation for this month
                                    </Text>
                                    <Text style={{ color: ACTIVE_NAV_BOTTOM, fontSize: 14 }}>Please enter it</Text>
                                </View>
                            )}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LimitationScreen;
