import { StyleSheet } from 'react-native';
import {
    BG_PRIMARYCOLOR,
    BG_SCREEN,
    BG_SUB_COLOR,
    BUTTON_COLOR__HOME,
    COLOR_BORDER,
    COLOR_BORDER_SOLID,
    FONT_FAMILY,
} from '../../../utils/common';

export const styles = StyleSheet.create({
    bg_scrren: { backgroundColor: BG_SCREEN, height: '100%' },
    view_card_limit: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 28,
        paddingBottom: 28,
        backgroundColor: 'white',
    },
    view_card: {
        width: 260,
        height: 150,
        backgroundColor: BG_PRIMARYCOLOR,
        borderRadius: 10,
    },
    view_card_top: {
        paddingTop: 10,
        paddingStart: 10,
        paddingEnd: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view_card_between: {
        display: 'flex',
        alignItems: 'center',
    },
    view_card_bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingEnd: 10,
        paddingStart: 10,
    },
    view_history: {
        height: 550,
    },
    view_date: {
        height: 30,
        justifyContent: 'space-between',
        paddingStart: 20,
        paddingEnd: 20,
        backgroundColor: BUTTON_COLOR__HOME,
        marginBottom: 16,
    },
    view_date_contain: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    view_list_history: {
        marginStart: 16,
        marginEnd: 16,
    },
    view_item_history: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 70,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: COLOR_BORDER,
    },
    text_card_header: {
        fontSize: 16,
        color: 'white',
        fontFamily: FONT_FAMILY,
        fontWeight: '700',
    },
    icon_history: {
        paddingStart: 16,
        paddingEnd: 10,
    },
    content_history: {
        width: 310,
        height: 60,
        paddingStart: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content_left: {
        justifyContent: 'center',
    },
    content_right: {
        justifyContent: 'center',
        flexDirection: 'row',
    },

    view_modal: {
        //margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        padding: 6,
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
});
