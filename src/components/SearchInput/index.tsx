import React, { useRef, useState } from 'react';
import {
    Modal,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TextInputChangeEventData,
    TouchableOpacity,
    View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BG_SUB_COLOR, COLOR_BORDER, FONT_FAMILY } from '../../utils/common';
import ButtonUI from '../Button';

const SearchInput = () => {
    const inputRef = useRef<TextInput | null>(null);
    const [isShow, setIsShow] = useState(false);
    const [isValue, setIsValue] = useState('');
    const [open, setOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<number | string>(new Date().getFullYear());
    const [valueFilter, setValueFilter] = useState<number | string>(new Date().getFullYear());
    const dataFilter = [
        {
            name: 'All Period',
            value: '',
        },
        {
            name: `${Number(selectedDate) - 1}`,
            value: Number(selectedDate) - 1,
        },
        {
            name: `${Number(selectedDate) - 2}`,
            value: Number(selectedDate) - 2,
        },
        {
            name: `${Number(selectedDate)}`,
            value: Number(selectedDate),
        },
    ];
    /* Handle forcus input*/
    const handleCAncelForcusInput = () => {
        setIsShow(false);
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    /* Handle changed value input*/
    const handleChangeValue = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setIsValue(e.nativeEvent.text);
    };

    /* Handle Forcus input*/
    const handleOnFocusInput = () => {
        setIsShow(true);
    };

    /* Handle clear value*/
    const handleClearValue = () => {
        setIsValue('');
    };

    /* Handle changed filter*/
    const handleChangeFilter = (newFilter: number | string) => {
        setValueFilter(newFilter);
        setOpen(false);
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
                <Ionicons onPress={() => setOpen(true)} color={'white'} name="filter" size={20}></Ionicons>
            </View>
            <View style={styles.centeredView}>
                <Modal animationType="slide" transparent={true} visible={open}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.view_modal_container}>
                                {dataFilter?.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => handleChangeFilter(item?.value)}
                                            key={index}
                                            style={styles.view_nodal}
                                        >
                                            <Text style={styles.textModal}>{item?.name}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                        <View style={[styles.view_modal_container, styles.view_es_mt]}>
                            <ButtonUI bgColor={BG_SUB_COLOR} onPress={() => setOpen(false)} text="Cancel" />
                        </View>
                    </View>
                </Modal>
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

    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        // padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    view_modal_container: {
        width: 370,
    },
    view_nodal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: COLOR_BORDER,
    },
    view_es_mt: {
        marginBottom: 20,
        marginTop: -10,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
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

    textModal: {
        fontSize: 16,
        color: BG_SUB_COLOR,
    },
});
export default SearchInput;
