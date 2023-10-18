import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationGoBack from '../../components/NavigationGoBack';
import ButtonUI from '../../components/Button';
import SearchInput from '../../components/SearchInput';
import { SCREENS } from '../../constants';
import { BG_SUB_COLOR } from '../../utils/common';
import { styles } from './SearchScreen.style';

const SearchSreen = () => {
    const navigation = useNavigation();
    const handleChangeNavigationUser = async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles.bg_container}>
                <NavigationGoBack
                    paddingBottom={12}
                    paddingTop={12}
                    title="Search Calendar"
                    subtitle={'Search (2023)'}
                />
            </View>
            <View>
                <SearchInput />
            </View>
            <ScrollView>
                <View style={styles.bg_container}></View>
            </ScrollView>

            {/* Expense */}
            <View style={styles.view_btn}>
                {/* <ButtonUI
                    bgColor={BG_SUB_COLOR}
                    text="Create new user"
                    onPress={() => handleChangeNavigationUser('ADD_OR_UPDATE_USER')}
                ></ButtonUI> */}
            </View>
        </SafeAreaView>
    );
};

export default SearchSreen;
