import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BG_SUB_COLOR, SIZE_ICON_16, TEXT_COLOR_PRIMARY } from '../utils/common';
export const listDataCategory = [
    {
        key: 'food',
        name: 'Food',
        icon: <MaterialCommunityIcons name="food" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
        iconActive: <MaterialCommunityIcons name="food" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
    },
    {
        key: 'shopping',
        name: 'Shopping',
        icon: <AntDesign name="shoppingcart" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
        iconActive: <AntDesign name="shoppingcart" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
    },
    {
        key: 'gift',
        name: 'Gift',
        icon: <AntDesign name="gift" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
        iconActive: <AntDesign name="gift" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
    },
    {
        key: 'homeware',
        name: 'Homeware',
        icon: <AntDesign name="home" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
        iconActive: <AntDesign name="home" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
    },
    {
        key: 'medical',
        name: 'Medical',
        icon: <Ionicons name="medical-outline" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
        iconActive: <Ionicons name="medical-outline" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
    },
    {
        key: 'education',
        name: 'Education',
        icon: <AntDesign name="book" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
        iconActive: <AntDesign name="book" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
    },
    {
        key: 'exchange',
        name: 'Exchange',
        icon: <Ionicons name="wine-outline" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
        iconActive: <Ionicons name="wine-outline" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
    },
    {
        key: 'invest',
        name: 'Invest',
        icon: <AntDesign name="linechart" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
        iconActive: <AntDesign name="linechart" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
    },
    {
        key: 'phone',
        name: 'Phone',
        icon: <AntDesign name="mobile1" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
        iconActive: <AntDesign name="mobile1" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
    },
];