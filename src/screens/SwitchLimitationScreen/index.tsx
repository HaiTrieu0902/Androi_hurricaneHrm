import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationGoBack from '../../components/NavigationGoBack';
import { styles } from './SwitchLimitationScreen.style';
import { Dropdown } from 'react-native-element-dropdown';
const SwitchLimitation = () => {
    const route: any = useRoute();
    const [value, setValue] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];

    return (
        <SafeAreaView style={styles.bg_scrren}>
            <View style={styles?.bg_container}>
                <View>
                    <NavigationGoBack paddingBottom={12} paddingTop={12} title="Switch Wallet" />
                </View>

                {/* Frame switch value */}
                <View style={styles?.view_fram_container}>
                    <View style={styles.view_flex}>
                        <Text style={styles.text_frame_title}>From</Text>
                        <Dropdown
                            style={[styles.text_frame_header, styles?.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={200}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={(item: any) => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => <></>}
                        />
                    </View>
                    <View style={styles.view_flex}>
                        <Text style={styles.text_frame_title}>To</Text>
                        <Text style={styles.text_frame_header}>Food</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SwitchLimitation;
