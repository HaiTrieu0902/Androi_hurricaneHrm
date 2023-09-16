import { SCREENS } from '../constants';
<<<<<<< HEAD
import { SettingScreen, ThemeScreen, ChangePassword, YearReport } from '../screens/PersonalScreen/Vm';
=======
import { SettingScreen, ThemeScreen, ChangePassword, YearReportScreen } from '../screens/PersonalScreen/Vm';
>>>>>>> sprint/logic-main

export const PersonalNavigation = [
    { name: SCREENS.YEAR_REPORT, component: YearReport },
    { name: SCREENS.SETTINGS, component: SettingScreen },
    { name: SCREENS.SETTING_THEME, component: ThemeScreen },
    { name: SCREENS.CHANGE_PASSORD, component: ChangePassword },
    { name: SCREENS.YEAR_REPORT, component: YearReportScreen },
];
