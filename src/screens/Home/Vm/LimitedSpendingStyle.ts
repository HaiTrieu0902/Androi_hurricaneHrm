import { StyleSheet } from 'react-native';
import { BG_SUB_COLOR, BUTTON_COLOR__HOME, FONT_FAMILY } from '../../../utils/common';

export const styles = StyleSheet.create({
    view_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    dropdown_selected: {
        borderColor: BG_SUB_COLOR,
        color: 'white',
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
        fontWeight: '900',
        fontSize: 17,
    },
    btn_save: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: BG_SUB_COLOR,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text_field: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700',
    },
    text_total: {
        marginLeft: 2,
        color: BG_SUB_COLOR,
        fontSize: 16,
        fontWeight: '700',
    },
});
