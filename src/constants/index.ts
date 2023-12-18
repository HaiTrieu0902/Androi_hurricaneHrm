export const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
export const APIHost = development ? '/api' : 'https://google.com';
export const ACCESS_TOKEN_KEY = 'token';
export const SCREENS: { [key: string]: string } = {
    /* Main */
    HOME: 'Home',
    LOGIN: 'Login',
    REGISTER: 'Register',
    FORGOT_PASSWORD: 'ForgotPassword',
    BOTTOM: 'Bottom',
    PERSONAL: 'Personal',
    LIMITATION: 'Limitation',

    REPORT: 'Report',
    CALENDER: 'calender',
    SEARCH_SCREEN: 'Search_screen',

    /* Personal Screen Sub */
    HOME_PERSONAL: 'personal_home',
    SETTINGS: 'personal_settings',
    SETTING_THEME: 'personal_theme',
    YEAR_REPORT: 'year_report',

    /* User Screen Sub */
    ADD_OR_UPDATE_USER: 'user_add_update_user',
    CHANGE_PASSORD: 'ChangePassword',

    /* Limitation Screen sub */
    DETAIL_LIMITATION: 'detail_limitation',
    SWITCH_LIMITATION: 'switch_limitation',

    /* Edit Detail category Screen */
    EDIT_DETAIL_CATEGORY: 'edit_detail_category',
    USER: 'User_list',
};

/* USer Infomation list  */
export const dataInfoUser = [
    { name: 'Username', key: 'username' },
    { name: 'Email', key: 'email' },
    { name: 'Department', key: 'department' },
    { name: 'Role', key: 'role' },
];
export const dataInfoEmployee = [
    { name: 'Name', key: 'employee_name' },
    { name: 'Position', key: 'position' },
    { name: 'Number Phone', key: 'mobile_no' },
    { name: 'Code', key: 'employee_code' },
];
export { listDataCategory } from './listDataCategory';

/* fuctiion covert To lowcase  */
export const convertoUpperCase = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};
