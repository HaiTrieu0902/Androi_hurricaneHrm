import { StyleSheet } from 'react-native';
import { BG_SCREEN, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../utils/common';

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
    view_manage_list: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    view_manage_item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    view_application_list: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    view_application_item: {
        display: 'flex',
        gap: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    view_account_item: {
        display: 'flex',
        gap: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    view_sub_item: {
        display: 'flex',
        gap: 10,
        flexDirection: 'row',
        alignContent: 'center',
    },
    view_application_border: {
        borderBottomWidth: 0.5,
        borderBottomColor: TEXT_COLOR_PRIMARY,
    },
    text_title: {
        fontFamily: FONT_FAMILY,
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
        fontFamily: FONT_FAMILY,
        marginTop: -3,
        color: TEXT_COLOR_PRIMARY,
        fontSize: 14,
    },
    text_manage_item: {
        fontFamily: FONT_FAMILY,
        color: TEXT_COLOR_PRIMARY,
        fontWeight: '600',
        fontSize: 14,
    },
});
