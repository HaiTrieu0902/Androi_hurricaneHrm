import { StyleSheet } from 'react-native';
import { BG_SCREEN, BG_SUB_COLOR, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../utils/common';

export const styles = StyleSheet.create({
    bg_scrren: { backgroundColor: BG_SCREEN, height: '100%' },

    view_limit_container: {
        marginTop: 10,
        backgroundColor: '#b8def3',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    view_total_limit: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 50,
        marginStart: 20,
        marginEnd: 20,
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    view_list_limit_container: {
        height: 540,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        margin: 20,
        marginTop: 10,
    },

    view_list_item_limit: {
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingStart: 11,
    },
    view_item: {
        width: 160,
        height: 100,
        backgroundColor: '#035397',
        margin: 3,
        borderRadius: 6,
        position: 'relative',
    },
    view_container_limit: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        borderRadius: 6,
        padding: 12,
    },
    view_total: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    txt_money_remain: {
        fontSize: 20,
        fontFamily: FONT_FAMILY,
        fontWeight: '700',
        color: BG_SUB_COLOR,
    },
    txt_money_total: {
        textAlign: 'right',
        fontSize: 14,
        fontFamily: FONT_FAMILY,
        fontWeight: '600',
        color: 'black',
    },
    view_sub_bag: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'flex-end',
    },
    text_right: {
        textAlign: 'right',
    },
    text_total: {
        fontSize: 14,
        color: 'white',
        fontFamily: FONT_FAMILY,
        fontWeight: '700',
    },
    text_remain: {
        fontSize: 14,
        color: '#dddddd',
        fontFamily: FONT_FAMILY,
    },
    text_title: {
        fontSize: 16,
        color: 'white',
        fontFamily: FONT_FAMILY,
    },
});
