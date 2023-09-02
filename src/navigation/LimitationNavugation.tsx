import { SCREENS } from '../constants';
import { InforLimitScreen, ChangeHistory } from '../screens/LimitationScreen/Vm';

export const LimitationNavigation = [
    { name: SCREENS.INFOR_LIMITATION, component: InforLimitScreen },
    { name: SCREENS.CHANGE_HISTORY, component: ChangeHistory }
]