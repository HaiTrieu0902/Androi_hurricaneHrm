import { StyleSheet } from 'react-native';
import {
    ACTIVE_NAV_BOTTOM,
    BG_PRIMARYCOLOR,
    BG_SCREEN,
    BG_SUB_COLOR,
    BUTTON_COLOR__HOME,
    COLOR_BORDER,
    COLOR_BORDER_SOLID,
    FONT_FAMILY,
} from '../../utils/common';

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
    text_date: { color: 'black', fontFamily: FONT_FAMILY, fontWeight: '600', fontSize: 14 },

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
