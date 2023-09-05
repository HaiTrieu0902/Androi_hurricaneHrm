import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BG_SUB_COLOR, SIZE_ICON_16, TEXT_COLOR_PRIMARY } from '../utils/common';
export const listDataCategory = [
    {
        key: 'food',
        name: 'Food',
        icon: <MaterialCommunityIcons name="food" color={'#fca75b'} size={SIZE_ICON_16} />,
    },
    {
        key: 'shopping',
        name: 'Shopping',
        icon: <AntDesign name="shoppingcart" color={'#5d71a9'} size={SIZE_ICON_16} />,
    },
    {
        key: 'gift',
        name: 'Gift',
        icon: <AntDesign name="gift" color={'#ffc107'} size={SIZE_ICON_16} />,
    },
    {
        key: 'homeware',
        name: 'Homeware',
        icon: <AntDesign name="home" color={'#04aa6d'} size={SIZE_ICON_16} />,
    },
    {
        key: 'medical',
        name: 'Medical',
        icon: <Ionicons name="medical-outline" color={'#fc9b93'} size={SIZE_ICON_16} />,
    },
    {
        key: 'education',
        name: 'Education',
        icon: <AntDesign name="book" color={BG_SUB_COLOR} size={SIZE_ICON_16} />,
    },
    {
        key: 'exchange',
        name: 'Exchange',
        icon: <Ionicons name="wine-outline" color={'#ecce23'} size={SIZE_ICON_16} />,
    },
    {
        key: 'invest',
        name: 'Invest',
        icon: <AntDesign name="linechart" color={'#f31c31'} size={SIZE_ICON_16} />,
    },
    {
        key: 'phone',
        name: 'Phone',
        icon: <AntDesign name="mobile1" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_16} />,
    },
];
