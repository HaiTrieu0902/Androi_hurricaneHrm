export interface IParamsAuth {
    email: string;
    password: string;
    username?: string;
    confirmPassword?: string;
}

export interface IUser {
    username: string;
    email: string;
    token: string;
}
