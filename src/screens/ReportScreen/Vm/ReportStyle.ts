import { StyleSheet } from 'react-native';
import { BG_SCREEN, BG_SUB_COLOR, BUTTON_COLOR__HOME, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../../utils/common';

export const styles = StyleSheet.create({
    mt_16: {
        marginTop: 16,
    },
    view_contain: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 6,
        flexWrap: 'wrap',
    },
    view_total: {
        width: 360,
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
    button_bg: {
        paddingTop: 8,
        paddingBottom: 8,
        width: 315,
        backgroundColor: BUTTON_COLOR__HOME,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
    },
    /* pie */
    view_pie: {
        height: 240,
    },
    view_list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 6,
    },
    buttonPieActive: {
        borderBottomColor: BG_SUB_COLOR,
    },
    pie_chart: {
        flex: 1,
        alignItems: 'center',
    },
    /*Info Pie Styles*/
    view_pie_info: {
        marginTop: 16,
        marginStart: -16,
        marginEnd: -16,
        borderTopColor: TEXT_COLOR_PRIMARY,
        borderTopWidth: 0.5,
    },
    view_pie_info_total: {
        paddingStart: 16,
        paddingRight: 16,
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
    text_date: { color: 'black', fontFamily: FONT_FAMILY, fontWeight: '600', fontSize: 14 },
    text_main: {
        color: 'black',
        fontFamily: FONT_FAMILY,
        fontWeight: '600',
        fontSize: 16,
    },
    text_total: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
    },
    text_expense: {
        color: 'red',
    },
    text_limit: {
        color: BG_SUB_COLOR,
    },
    view_bottom: {
        height: 32,
        backgroundColor: BG_SCREEN,
    },
});
