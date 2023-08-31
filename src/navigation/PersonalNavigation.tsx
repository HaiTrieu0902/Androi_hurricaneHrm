
import { SCREENS } from '../constants';
import { SettingScreen, ThemeScreen ,  ChangePassword } from '../screens/PersonalScreen/Vm';

export const PersonalNavigation = [
    { name: SCREENS.SETTINGS, component: SettingScreen },
    { name: SCREENS.SETTING_THEME, component: ThemeScreen },
    { name: SCREENS.CHANGE_PASSORD, component: ChangePassword },
];
