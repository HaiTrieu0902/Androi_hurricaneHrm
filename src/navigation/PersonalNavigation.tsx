import { SCREENS } from '../constants';
import { SettingScreen, ThemeScreen } from '../screens/PersonalScreen/Vm';

export const PersonalNavigation = [
    { name: SCREENS.SETTINGS, component: SettingScreen },
    { name: SCREENS.SETTING_THEME, component: ThemeScreen },
];
