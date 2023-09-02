import { StyleSheet } from 'react-native';
import { BG_SUB_COLOR, BUTTON_COLOR__HOME, FONT_FAMILY, TEXT_COLOR_PRIMARY } from '../../../utils/common';

export const styles = StyleSheet.create({
    view_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    view_container_column: {
        display: 'flex',
        flexDirection: 'column',
    },
    view_category_item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    view_btn_submit: {
        marginTop: 60,
        marginBottom: 16,
        flex: 1,
        justifyContent: 'flex-end',
    },
    dropdown_selected: {
        borderColor: BG_SUB_COLOR,
    },
    input_plan: {
        backgroundColor: BUTTON_COLOR__HOME,
        color: 'black',
        width: 208,
        paddingStart: 12,
        paddingEnd: 12,
        paddingTop: 4,
        paddingBottom: 4,
        fontFamily: FONT_FAMILY,
        borderRadius: 6,
        fontWeight: '600',
        fontSize: 17,
    },
    input_plan_category: {
        width: 260,
    },
    btn_save: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 8,
        paddingBottom: 8,
        borderWidth: 1,
        borderColor: BG_SUB_COLOR,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_save_disable: {
        backgroundColor: '#c8c8c8',
        borderWidth: 0,
        borderColor: TEXT_COLOR_PRIMARY,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text_field: {
        fontSize: 18,
        color: 'black',
        fontWeight: '700',
    },
    text_category: {
        fontSize: 16,
        color: TEXT_COLOR_PRIMARY,
        fontWeight: '700',
        width: 100,
    },
    text_total: {
        marginLeft: 2,
        color: BG_SUB_COLOR,
        fontSize: 18,
        fontWeight: '700',
    },
});
