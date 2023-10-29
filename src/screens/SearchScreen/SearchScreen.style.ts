import { StyleSheet } from 'react-native';
import { BG_PRIMARYCOLOR, BG_SCREEN, BG_SUB_COLOR, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../utils/common';

export const styles = StyleSheet.create({
    bg_scrren: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    bg_container: {
        paddingStart: 16,
        paddingEnd: 16,
    },

    view_item: {
        marginBottom: 18,
    },
    view_item_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    view_manage_list: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        width: '85%',
    },
    view_manage_item: {
        display: 'flex',
        gap: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },

    view_sub_item: {
        display: 'flex',
        gap: 10,
        flexDirection: 'row',
        alignContent: 'center',
    },
    view_manage_border: {
        borderBottomWidth: 0.5,
        borderBottomColor: TEXT_COLOR_PRIMARY,
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
    view_item_display: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    view_btn: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 60,
        paddingBottom: 16,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: BG_SCREEN,
    },
    view_header_expense_title: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 4,
        backgroundColor: '#cccccc',
        paddingHorizontal: 16,
    },

    text_title: {
        marginBottom: 10,
        fontSize: 14,
        color: TEXT_COLOR_PRIMARY,
    },
    text_name: {
        fontFamily: FONT_FAMILY,
        fontSize: 16,
        fontWeight: '700',
        color: 'black',
    },
    text_sub_item: {
        marginTop: -3,
        color: TEXT_COLOR_PRIMARY,
    },
    text_sub_item_value: {
        marginTop: -3,
        color: 'black',
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
});
