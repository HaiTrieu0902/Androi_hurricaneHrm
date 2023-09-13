import { axiosCustom } from '../../configs';
import { ChangeAuth, IParamsAuth } from '../../types/auth';

export const loginAPI = async (data: IParamsAuth) => {
    return axiosCustom.post('/api/v1/auth/login', data).then((res) => res.data);
};

export const registerAPI = async (data: IParamsAuth) => {
    return axiosCustom.post('/api/v1/auth/register', data).then((res) => res.data);
};

export const forgotPasswordAPI = async (data: IParamsAuth) => {
    return axiosCustom.post('/api/v1/auth/forgot-password', data).then((res) => res.data);
};

export const changePasswordAPI = async (data: ChangeAuth) => {
    return axiosCustom.post('/api/v1/auth/change-password', data).then((res) => res.data);
}
