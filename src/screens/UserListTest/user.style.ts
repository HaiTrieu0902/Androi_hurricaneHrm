import { StyleSheet } from 'react-native';
import {
    BG_PRIMARYCOLOR,
    BG_SCREEN,
    BG_SUB_COLOR,
    EXPLAIN_ERROR_TEXT,
    FONT_FAMILY,
    TEXT_COLOR_PRIMARY,
} from './../../utils/common';

export const styles = StyleSheet.create({
    bg_scrren: { backgroundColor: BG_SCREEN, height: '100%' },
    /* Style View */
    view: {},
    view_Header: {
        marginTop: 30,
        flexDirection: 'column',
        alignItems: 'center',
    },
    view_form_container: {
        marginTop: 20,
        paddingEnd: 60,
        paddingStart: 60,
        gap: 12,
    },
    view_form: {
        position: 'relative',
    },
    view_footer: {
        marginTop: 80,
        paddingEnd: 60,
        paddingStart: 60,
        paddingBottom: 16,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: BG_SCREEN,
    },
    touchableOpacity: {
        position: 'absolute',
        top: 41,
        right: 10,
    },
    /* Style Image */
    image: {
        width: 260,
        height: 100,
        objectFit: 'contain',
    },

    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },

    /* Style Text */
    text_header: {
        marginTop: 22,
        color: BG_PRIMARYCOLOR,
        fontSize: 30,
        fontWeight: '700',
        fontFamily: FONT_FAMILY,
    },
    text_app: {
        marginTop: 10,
        color: TEXT_COLOR_PRIMARY,
        fontSize: 13,
        fontWeight: '600',
        fontFamily: FONT_FAMILY,
    },
    text_form: {
        color: EXPLAIN_ERROR_TEXT,
        fontWeight: '600',
        fontSize: 14,
        fontFamily: FONT_FAMILY,
    },
    text_forgot: {
        color: BG_SUB_COLOR,
        fontWeight: '500',
        fontSize: 14,
        textDecorationLine: 'underline',
        fontFamily: FONT_FAMILY,
    },
    text_validate: {
        fontSize: 13.5,
        color: EXPLAIN_ERROR_TEXT,
        marginTop: 2,
        fontFamily: FONT_FAMILY,
    },
    text_footer: {
        paddingEnd: 60,
        paddingStart: 60,
        textAlign: 'center',
        color: BG_SUB_COLOR,
        fontSize: 14,
        fontFamily: FONT_FAMILY,
    },

    /* Style TextInput */
    TextInput: {
        fontSize: 14,
        height: 42,
        color: TEXT_COLOR_PRIMARY,
        borderWidth: 1,
        borderColor: EXPLAIN_ERROR_TEXT,
        borderRadius: 10,
        marginTop: 8,
        paddingHorizontal: 12,
        fontFamily: FONT_FAMILY,
    },
    TextInputError: {
        fontSize: 14,
        height: 42,
        color: TEXT_COLOR_PRIMARY,
        borderWidth: 1,
        borderColor: EXPLAIN_ERROR_TEXT,
        borderRadius: 10,
        marginTop: 8,
        paddingHorizontal: 12,
        fontFamily: FONT_FAMILY,
    },
    button: {
        backgroundColor: BG_PRIMARYCOLOR,
        height: 48,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: FONT_FAMILY,
    },
});
