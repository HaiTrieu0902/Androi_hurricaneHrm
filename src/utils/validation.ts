export const isValidEmail = (email: string) => {
    if (email.length === 0) {
        return 'Please enter email';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return 'Email is not formatted correctly';
    }
    return '';
};

export const isValidUsername = (username: string) => {
    if (username.length === 0) {
        return 'Please enter username';
    } else if (/[^a-zA-Z0-9]/.test(username)) {
        return 'Username does not contain special characters';
    }
    return '';
};

export const isValidPassword = (password: string) => {
    if (password.length === 0) {
        return 'Please enter password';
    } else if (password.length <= 5) {
        return 'Password must have at least 6 characters';
    }
    return '';
};

export const isValidConfirmPassword = (password: string, confirmPassword: string) => {
    if (password.length === 0) {
        return 'Please enter password';
    } else if (password.length <= 5) {
        return 'Password must have at least 6 characters';
    } else if (password !== confirmPassword) {
        return 'Confirm Password and password not match';
    }
    return '';
};

function containsSpecialCharacters(str: string) {
    const specialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~]/; // Thêm các ký tự đặc biệt khác vào trong ngoặc vuông
    return specialChars.test(str);
}
