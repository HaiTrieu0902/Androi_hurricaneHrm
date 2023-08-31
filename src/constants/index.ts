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
    USER: 'User',
    REPORT: 'Report',
    CALENDER: 'calender',

    /* Personal Screen Sub */
    HOME_PERSONAL: 'personal_home',
    SETTINGS: 'personal_settings',
    SETTING_THEME: 'personal_theme',

    /* User Screen Sub */
    ADD_OR_UPDATE_USER: 'user_add_update_user',
    CHANGE_PASSORD: 'ChangePassword',

    /*  User Screen Sub */
    ADD_OR_UPDATE_EMPLOYEE: 'user_add_update_employee',
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
