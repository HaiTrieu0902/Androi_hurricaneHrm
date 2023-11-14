import SwitchLimitation from '../../src/screens/SwitchLimitationScreen';
import { SCREENS } from '../constants';
import { DetailLimitScreen } from '../screens/LimitationScreen/Vm';

export const LimitationNavigation = [
    { name: SCREENS.DETAIL_LIMITATION, component: DetailLimitScreen },
    { name: SCREENS.SWITCH_LIMITATION, component: SwitchLimitation },
];
