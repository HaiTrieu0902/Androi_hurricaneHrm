import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LoadingView from '../../components/Loading';
import NavigationGoBack from '../../components/NavigationGoBack';
import SearchInput from '../../components/SearchInput';
import { SCREENS, listDataCategory } from '../../constants';
import { useAppSelector } from '../../redux/store';
import { getDetailTrasactionSearchAPI } from '../../services/api/transaction.api';
import { IListTransactionUserMonth } from '../../types/transaction.type';
import { BG_PRIMARYCOLOR, EXPLAIN_ERROR_TEXT, SIZE_ICON_16, TEXT_COLOR_PRIMARY } from '../../utils/common';
import { styles } from './SearchScreen.style';
import { debounce } from 'lodash';
type typeParamSearch = {
    searchValue: string;
    year: string | number;
};
const SearchSreen = () => {
    const navigation = useNavigation();
    const { user } = useAppSelector((state) => state.auth);
    const [listTransaction, setListTransaction] = useState<IListTransactionUserMonth>();
    const [isloading, setIsLoading] = useState(false);
    const [total, setTotal] = useState<number>(0);
    const [valueOption, setValueOption] = useState<typeParamSearch>({
        searchValue: '',
        year: '',
    });

    /* handle changed navigaiton */
    const handleChangeNavigationUser = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };

    /*  handle onSearch Value*/
    const hanldeOnSearchValue = debounce((valueSearch: string) => {
        if (valueSearch === ' ') {
            setListTransaction({} as never);
        }
        setValueOption((prev) => ({
            ...prev,
            searchValue: valueSearch,
        }));
    }, 500);

    /*  handle selected filter*/
    const handleOnSelected = (selected: number | string) => {
        setValueOption((prev) => ({
            ...prev,
            year: selected,
        }));
    };

    /* handle getDetailTrasactionSearchAPI  */
    const handleGetDetailTrasactionSearch = async () => {
        try {
            setIsLoading(true);
            const res = await getDetailTrasactionSearchAPI({
                userId: Number(user?.user_id),
                year: valueOption?.year,
                searchValue: valueOption?.searchValue,
            });
            if (res) {
                const totalAmountSum = res.data.reduce((accumulator: any, currentValue: any) => {
                    return accumulator + currentValue.totalAmountDate;
                }, 0);
                setTotal(Number(totalAmountSum));
                setListTransaction(res);
            }
            setIsLoading(false);
        } catch (error) {}
    };

    /* Function get category Icon  */
    const getIconForCategory = (category_key: any) => {
        const category = listDataCategory.find((item) => item.key === category_key);
        return category ? category.icon : null;
    };

    /* Useffect call  getDetailTrasactionSearchAPI  */
    useEffect(() => {
        if (valueOption?.searchValue) {
            handleGetDetailTrasactionSearch();
        } else {
            setListTransaction({} as never);
        }
    }, [valueOption]);

    useEffect(() => {
        if (Number(listTransaction?.data?.length) > 0) {
            const totalAmountSum = listTransaction?.data.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.totalAmountDate;
            }, 0);
            setTotal(Number(totalAmountSum));
        }
    }, [valueOption]);

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.bg_container}>
                <NavigationGoBack
                    paddingBottom={12}
                    paddingTop={12}
                    title="Search Calendar"
                    subtitle={`Search (${valueOption?.year ? valueOption?.year : 'All Period'})`}
                />
            </View>
            <View>
                <SearchInput onSearch={hanldeOnSearchValue} onSelected={handleOnSelected} />
            </View>
            <ScrollView style={{ marginTop: 22, maxHeight: 540 }}>
                <View>
                    {Number(listTransaction?.data?.length) > 0 ? (
                        listTransaction?.data?.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <View style={styles.view_header_expense_title}>
                                        <Text style={{ fontSize: 13, color: BG_PRIMARYCOLOR, fontWeight: '400' }}>
                                            {format(new Date(item?.date), 'dd/MM/yyyy')}
                                        </Text>
                                        <Text style={{ fontSize: 13, color: EXPLAIN_ERROR_TEXT }}>
                                            -{item.totalAmountDate.toLocaleString()} $
                                        </Text>
                                    </View>
                                    {item?.transactions?.map((item) => {
                                        const icon = getIconForCategory(item.category_key);
                                        return (
                                            <TouchableOpacity
                                                key={item.transaction_id}
                                                style={[styles.view_item_display, styles.view_pie_info_item]}
                                            >
                                                <View style={styles.pie_info_contain}>
                                                    {icon}
                                                    <Text style={styles.text_main}>
                                                        {item.category_key.charAt(0).toUpperCase() +
                                                            item.category_key.slice(1)}
                                                        <Text style={styles.txt_note}>
                                                            {/* {item.note && ` (${item.note})`} */}

                                                            {item.note &&
                                                                ` (${
                                                                    item.note?.length > 30
                                                                        ? item?.note?.substring(0, 30 - 3) + '...'
                                                                        : item?.note
                                                                })`}
                                                        </Text>
                                                    </Text>
                                                </View>
                                                <View style={styles.pie_info_contain}>
                                                    <Text style={styles.text_main}>
                                                        {item.amount.toLocaleString()} $
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </React.Fragment>
                            );
                        })
                    ) : isloading ? (
                        <LoadingView marginLeft={'36%'} />
                    ) : (
                        <View>
                            <Text
                                style={{
                                    marginLeft: 16,
                                    fontSize: 16,
                                    color: TEXT_COLOR_PRIMARY,
                                }}
                            >
                                you should search value or choose filter year
                            </Text>
                        </View>
                    )}
                </View>
            </ScrollView>
            {/* Expense */}
            <View style={styles.view_btn}>
                {Number(listTransaction?.data?.length) > 0 && (
                    <View style={{ display: 'flex', gap: 10, flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, color: BG_PRIMARYCOLOR }}>Expense :</Text>
                        <Text style={{ fontSize: 1, color: EXPLAIN_ERROR_TEXT }}>-{total}$</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

export default SearchSreen;
