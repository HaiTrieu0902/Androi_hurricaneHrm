import { StyleSheet } from 'react-native';
import {
    BG_PRIMARYCOLOR,
    BG_SCREEN,
    BG_SUB_COLOR,
    EXPLAIN_ERROR_TEXT,
    FONT_FAMILY,
    TEXT_COLOR_PRIMARY,
} from '../../utils/common';
export const styles = StyleSheet.create({
    bg_scrren: { backgroundColor: BG_SCREEN, height: '100%' },
    view_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view_contain_screen: {
        paddingStart: 16,
        paddingEnd: 16,
        marginTop: 12,
    },
    view_list: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#e8e8e8',
        width: '60%',
        borderRadius: 8,
    },

    button: {
        backgroundColor: 'transparent',
        borderRadius: 6,
        paddingTop: 8,
        paddingBottom: 8,
        paddingStart: 22,
        paddingEnd: 22,
        fontFamily: FONT_FAMILY,
    },
    button_active: {
        backgroundColor: BG_SUB_COLOR,
    },

    /* Style Text */
    text_header: {
        color: BG_SUB_COLOR,
        fontSize: 14,
        fontWeight: '700',
        fontFamily: FONT_FAMILY,
    },
    text_header_active: {
        color: 'white',
    },
});
