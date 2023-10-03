import { StyleSheet } from 'react-native';
import { BG_SCREEN, BG_SUB_COLOR, BUTTON_COLOR__HOME, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../utils/common';

export const styles = StyleSheet.create({
    bg_scrren: { backgroundColor: BG_SCREEN, height: '100%' },
    bg_view_container: {
        paddingStart: 16,
        paddingEnd: 16,
    },
    view_contain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 6,
        flexWrap: 'wrap',
    },

    view_total_expense: {
        marginTop: 8,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view_expense_item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view_item: {
        padding: 10,
        width: '48.5%',
        borderWidth: 1,
        borderColor: BUTTON_COLOR__HOME,
        borderRadius: 5,
    },
    view_item_display: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    //Date
    view_date: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        gap: 10,
    },

    view_header_expense_title: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 2,
        backgroundColor: '#cccccc',
        paddingHorizontal: 16,
    },

    /*Info Pie Styles*/
    view_pie_info: {
        marginTop: 16,
        borderTopColor: TEXT_COLOR_PRIMARY,
        borderTopWidth: 0.5,
    },
    view_pie_info_total: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: BUTTON_COLOR__HOME,
    },
    view_pie_info_item: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: TEXT_COLOR_PRIMARY,
        borderBottomWidth: 0.5,
    },
    pie_info_contain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    text_main: {
        color: 'black',
        fontFamily: FONT_FAMILY,
        fontWeight: '600',
        fontSize: 16,
    },

    txt_note: {
        fontSize: 11,
    },

    mt_16: {
        marginTop: 8,
    },
    button_bg: {
        paddingTop: 8,
        paddingBottom: 8,
        width: 315,
        backgroundColor: BUTTON_COLOR__HOME,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
    },
    text_date: { color: 'black', fontFamily: FONT_FAMILY, fontWeight: '600', fontSize: 14 },
    text_expense_title: {
        fontFamily: FONT_FAMILY,
        fontWeight: '600',
        fontSize: 14,
        color: TEXT_COLOR_PRIMARY,
    },
    gridItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridItem: {
        marginTop: -3,
        borderRadius: 4,
        width: 43,
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: BG_SUB_COLOR,
    },
});
