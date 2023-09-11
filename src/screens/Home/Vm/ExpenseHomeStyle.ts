import { StyleSheet } from 'react-native';
import { BG_SUB_COLOR, BUTTON_COLOR__HOME, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../../utils/common';

export const styles = StyleSheet.create({
    view_contain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    view_item: {},
    view_date: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },
    view_contain_navigation: {},
    view_navigation_item: {
        width: 166,
        height: 110,
    },
    ml_10: {
        marginLeft: 10,
    },

    /* view category */
    view_contain_category: {},
    view_category_list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 7,
    },
    view_category_item: {
        width: '32%',
        borderWidth: 1,
        borderColor: TEXT_COLOR_PRIMARY,
        borderRadius: 5,
    },
    view_category_item_active: {
        borderColor: BG_SUB_COLOR,
        width: '32%',
        borderWidth: 1,
        borderRadius: 5,
    },

    view_disable_category: {
        backgroundColor: '#dcdbdb',
        borderColor: '#dcdbdb',
    },

    view_btn_submit: {
        marginTop: 96,
        marginBottom: 16,
        flex: 1,
        justifyContent: 'flex-end',
    },
    category_item_contain: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 6,
        paddingBottom: 6,
    },
    mt_6: {
        marginTop: 6,
    },
    mt_18: {
        marginTop: 16,
    },
    button_bg: {
        paddingTop: 8,
        paddingBottom: 8,
        width: 270,
        backgroundColor: BUTTON_COLOR__HOME,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
    },

    text_field: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700',
    },
    text_area: {
        fontSize: 15,
        color: TEXT_COLOR_PRIMARY,
        width: 270,
        maxHeight: 60,
        marginLeft: 24,
        borderWidth: 1,
        borderColor: BUTTON_COLOR__HOME,
        fontFamily: FONT_FAMILY,
        paddingStart: 12,
        paddingEnd: 12,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 6,
    },
    text_category: {
        fontFamily: FONT_FAMILY,
        color: TEXT_COLOR_PRIMARY,
        marginTop: 4,
    },
    text_category_active: {
        fontFamily: FONT_FAMILY,
        color: BG_SUB_COLOR,
        marginTop: 4,
    },
    text_expense: {
        backgroundColor: BUTTON_COLOR__HOME,
        color: 'black',
        width: 268,
        paddingStart: 12,
        paddingEnd: 12,
        paddingTop: 4,
        paddingBottom: 4,
        fontFamily: FONT_FAMILY,
        borderRadius: 6,
        fontWeight: '900',
        fontSize: 17,
    },
    text_date: { color: 'black', fontFamily: FONT_FAMILY, fontWeight: '600', fontSize: 14 },
});
