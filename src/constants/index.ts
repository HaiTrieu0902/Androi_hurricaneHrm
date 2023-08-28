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
    FILLTER: 'Fillter',
    USER: 'User',
    EMPLOYEE: 'Employee',
    LEAVE: 'Leave',

    /* Personal Screen Sub */
    HOME_PERSONAL: 'personal_home',
    SETTINGS: 'personal_settings',
    SETTING_THEME: 'personal_theme',

    /* User Screen Sub */
    ADD_OR_UPDATE_USER: 'user_add_update',
};
