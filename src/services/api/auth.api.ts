import { axiosCustom } from '../../configs';
import { IChangeAuth, IParamsAuth } from '../../types/auth';

export const loginAPI = async (data: IParamsAuth) => {
    return axiosCustom.post('/api/v1/auth/login', data).then((res) => res.data);
};

export const registerAPI = async (data: IParamsAuth) => {
    return axiosCustom.post('/api/v1/auth/register', data).then((res) => res.data);
};

export const forgotPasswordAPI = async (data: IParamsAuth) => {
    return axiosCustom.post('/api/v1/auth/forgot-password', data).then((res) => res.data);
};

export const changePasswordAPI = async (data: IChangeAuth) => {
    return axiosCustom.post('/api/v1/auth/change-password', data).then((res) => res.data);
};

export const deleteUserAPI = async (codeUser: string) => {
    return axiosCustom.delete(`/api/v1/user/detele-user?user_code=${codeUser}`).then((res) => res.data);
};
