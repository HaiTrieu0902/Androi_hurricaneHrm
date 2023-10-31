import { StyleSheet } from 'react-native';
import { BG_SCREEN, BUTTON_COLOR__HOME, COLOR_BORDER_SOLID, FONT_FAMILY } from '../../utils/common';

export const styles = StyleSheet.create({
    bg_scrren: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    bg_container: {
        paddingStart: 16,
        paddingEnd: 16,
    },
    view_fram_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
    },

    view_flex: {
        width: '49%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    text_frame_title: {
        fontSize: 14,
        color: 'black',
    },
    text_frame_header: {
        borderWidth: 1,
        borderColor: COLOR_BORDER_SOLID,
        backgroundColor: BUTTON_COLOR__HOME,
        width: '78%',
        color: 'black',
        paddingStart: 12,
        paddingEnd: 12,
        paddingTop: 8,
        paddingBottom: 8,
        fontFamily: FONT_FAMILY,
        borderRadius: 6,
        fontWeight: '600',
        fontSize: 14,
    },

    dropdown: {
        height: 40,
    },

    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color: 'black',
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'black',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black',
    },
    iconStyle: {
        width: 20,
        height: 20,
        color: 'black',
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'black',
    },
});
