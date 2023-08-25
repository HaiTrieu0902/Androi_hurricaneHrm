export interface IParamsAuth {
    email?: string;
    password: string;
    username?: string;
    confirmPassword?: string;
}

export interface IUser {
    username_id: string;
    username: string;
    email: string;
    token: string;
}
