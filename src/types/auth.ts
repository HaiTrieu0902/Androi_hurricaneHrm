export interface IParamsAuth {
    email?: string;
    password: string;
    username?: string;
    fullname?: string;
    confirmPassword?: string;
}

export interface IUser {
    username_id: string;
    user_code: string;
    username: string;
    fullName: string;
    email: string;
    token: string;
}
