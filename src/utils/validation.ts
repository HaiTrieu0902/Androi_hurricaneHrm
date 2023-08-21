export const isValidEmail = (email: string) => {
    if (email.length === 0) {
        return 'Please enter email';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return 'Email is not formatted correctly';
    }
    return '';
};

export const isValidPassword = (password: string) => {
    if (password.length === 0) {
        return 'Please enter password';
    } else if (password.length <= 8) {
        return 'Password must have at least 8 characters';
    }
    return '';
};
