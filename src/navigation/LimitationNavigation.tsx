import { SCREENS } from '../constants';
import { DetailLimitScreen, ChangeHistory } from '../screens/LimitationScreen/Vm';

export const LimitationNavigation = [
    { name: SCREENS.DETAIL_LIMITATION, component: DetailLimitScreen },
    { name: SCREENS.CHANGE_HISTORY, component: ChangeHistory },
];
