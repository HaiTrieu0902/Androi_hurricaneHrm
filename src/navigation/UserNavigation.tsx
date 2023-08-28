import UserHrScreen from '../screens/UserHrScreen';
import { SCREENS } from '../constants';
import { AddOrUpdateUserScreen } from '../screens/UserHrScreen/Vm';

export const UserNavigation = [
    { name: SCREENS.USER, component: UserHrScreen },
    { name: SCREENS.ADD_OR_UPDATE_USER, component: AddOrUpdateUserScreen },
];
