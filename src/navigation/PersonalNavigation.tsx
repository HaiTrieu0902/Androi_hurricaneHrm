import { SCREENS } from '../constants';
import { SettingScreen, ThemeScreen, ChangePassword, YearReportScreen } from '../screens/PersonalScreen/Vm';

export const PersonalNavigation = [
    { name: SCREENS.SETTINGS, component: SettingScreen },
    { name: SCREENS.SETTING_THEME, component: ThemeScreen },
    { name: SCREENS.CHANGE_PASSORD, component: ChangePassword },
    { name: SCREENS.YEAR_REPORT, component: YearReportScreen },
];
