import React, { useRef, useState } from 'react';
import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { BG_SUB_COLOR, FONT_FAMILY } from '../../utils/common';
const SearchInput = () => {
    const inputRef = useRef<TextInput | null>(null);
    const [isShow, setIsShow] = useState(false);
    const [isValue, setIsValue] = useState('');

    const handleCAncelForcusInput = () => {
        setIsShow(false);
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    const handleChangeValue = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setIsValue(e.nativeEvent.text);
    };

    const handleOnFocusInput = () => {
        setIsShow(true);
    };

    const handleClearValue = () => {
        setIsValue('');
    };

    return (
        <View style={styles.view_search_container}>
            <View style={styles.view_search_icon}>
                {isShow ? (
                    <FontAwesome6
                        onPress={handleCAncelForcusInput}
                        name="caret-left"
                        style={{ marginLeft: 12 }}
                        color={'white'}
                        size={20}
                    />
                ) : (
                    <Ionicons name="search-outline" color={'white'} size={20} />
                )}
            </View>
            <View style={styles.view_search}>
                <TextInput
                    onChange={(e) => handleChangeValue(e)}
                    ref={inputRef}
                    onFocus={handleOnFocusInput}
                    style={[styles.input_search, isShow && styles.input_search_active]}
                    placeholder="Search..."
                    placeholderTextColor={`${isShow ? 'black' : 'white'}`}
                    value={isValue}
                ></TextInput>
                {isShow && isValue !== '' && (
                    <Feather
                        onPress={handleClearValue}
                        name="x-circle"
                        style={styles.icon_delete_text}
                        color={'black'}
                        size={12}
                    />
                )}
            </View>
            <View style={styles.view_filter}>
                <Ionicons color={'white'} name="filter" size={20}></Ionicons>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view_search_container: {
        backgroundColor: BG_SUB_COLOR,
        flexDirection: 'row',
        alignItems: 'center',
        height: 42,
        paddingStart: 16,
        paddingEnd: 16,
    },
    view_search_icon: {
        width: '8%',
    },
    view_search: {
        width: '82%',
        position: 'relative',
    },
    view_filter: {
        width: '10%',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 10,
    },
    input_search: {
        paddingTop: -10,
        paddingBottom: -10,
        paddingStart: 12,
        paddingEnd: 12,
        fontFamily: FONT_FAMILY,
        width: '100%',
    },
    input_search_active: {
        paddingTop: -10,
        paddingBottom: -10,
        paddingStart: 12,
        paddingEnd: 12,
        borderRadius: 6,
        fontFamily: FONT_FAMILY,
        width: '100%',
        backgroundColor: 'white',
        color: 'black',
    },
    icon_delete_text: {
        position: 'absolute',
        right: 6,
        top: 8,
    },
});
export default SearchInput;
