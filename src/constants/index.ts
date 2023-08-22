export const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
export const APIHost = development ? '/api' : 'https://google.com';
export const ACCESS_TOKEN_KEY = 'token';

export const SCREENS = {
    HOME: 'Home',
    LOGIN: 'Login',
    REGISTER: 'Register',
    FORGOT_PASSWORD: 'ForgotPassword',
};
