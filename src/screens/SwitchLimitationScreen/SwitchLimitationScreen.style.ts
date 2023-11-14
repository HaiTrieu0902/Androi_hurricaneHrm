import { StyleSheet } from 'react-native';
import {
    BG_PRIMARYCOLOR,
    BG_SCREEN,
    BG_SUB_COLOR,
    BUTTON_COLOR__HOME,
    COLOR_BORDER_SOLID,
    EXPLAIN_ERROR_TEXT,
    FONT_FAMILY,
} from '../../utils/common';

export const styles = StyleSheet.create({
    bg_scrren: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    bg_container: {
        paddingStart: 16,
        paddingEnd: 16,
    },
    view_fram_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
    },

    view_flex: {
        width: '49%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    mt_20: {
        marginTop: 20,
    },
    mt_30: {
        marginTop: 30,
    },
    text_frame_title: {
        fontSize: 14,
        color: 'black',
    },
    text_frame_header: {
        // borderWidth: 1,
        // borderColor: COLOR_BORDER_SOLID,
        backgroundColor: BUTTON_COLOR__HOME,
        width: '78%',
        color: BG_PRIMARYCOLOR,
        paddingStart: 12,
        paddingEnd: 12,
        paddingTop: 8,
        paddingBottom: 8,
        fontFamily: FONT_FAMILY,
        borderRadius: 6,
        fontWeight: '600',
        fontSize: 14,
    },

    text_frame_tranfer: {
        fontWeight: '500',
        fontSize: 15,
        color: BG_SUB_COLOR,
    },
    text_frame_tranfer_title: {
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'italic',
    },
    text_frame_input: {
        backgroundColor: BUTTON_COLOR__HOME,
        color: BG_PRIMARYCOLOR,
        paddingStart: 12,
        paddingEnd: 12,
        paddingTop: 4,
        flex: 1,
        paddingBottom: 4,
        fontFamily: FONT_FAMILY,
        borderRadius: 6,
        fontWeight: '600',
        fontSize: 14,
    },
    text_frame_input_error: {
        borderWidth: 1,
        borderColor: EXPLAIN_ERROR_TEXT,
    },
    dropdown: {
        height: 38,
    },

    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color: BG_PRIMARYCOLOR,
    },
    placeholderStyle: {
        fontSize: 14,
        color: BG_PRIMARYCOLOR,
    },
    selectedTextStyle: {
        fontSize: 14,
        color: BG_PRIMARYCOLOR,
    },
    inputSearchStyle: {
        height: 38,
        fontSize: 14,
        color: BG_PRIMARYCOLOR,
    },
});
