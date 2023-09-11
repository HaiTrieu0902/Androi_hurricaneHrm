import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderText from '../../components/HeaderText';
import { useAppDispatch } from '../../redux/store';
import { styles } from './HomeStyle';
import { ExpenseHome, LimitedSpending } from './Vm';

interface HomeScreensProps {}
const HomeScreens = () => {
    const dispatch = useAppDispatch();

    const [isActiveButton, setIsActiveButton] = useState<boolean>(false);

    /* handle changed screen sub */
    const handleChangedScreenSubHome = (type: string) => {
        if (type === 'expense') {
            setIsActiveButton(false);
        } else {
            setIsActiveButton(true);
        }
    };

    return (
        <SafeAreaView>
            <View>
                <HeaderText title={`Home`} />
            </View>
            <View style={styles.view_container}>
                <View style={styles.view_list}>
                    <TouchableOpacity
                        onPress={() => handleChangedScreenSubHome('expense')}
                        style={[styles.button, !isActiveButton && styles.button_active]}
                    >
                        <Text style={[styles.text_header, !isActiveButton && styles.text_header_active]}>Expense</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleChangedScreenSubHome('limit')}
                        style={[styles.button, isActiveButton && styles.button_active]}
                    >
                        <Text style={[styles.text_header, isActiveButton && styles.text_header_active]}>
                            Limit spending
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.view_contain_screen}>
                {!isActiveButton ? <ExpenseHome></ExpenseHome> : <LimitedSpending></LimitedSpending>}
            </View>
        </SafeAreaView>
    );
};

export default HomeScreens;
