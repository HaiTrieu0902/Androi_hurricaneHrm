import { axiosCustom } from '../../configs';
import { IParamsAuth } from '../../types/auth';

export const loginAPI = async (data: IParamsAuth) => {
    return axiosCustom.post('/api/v1/auth/login', data).then((res) => res.data);
};

export const forgotPasswordAPI = async (data: IParamsAuth) => {
    return axiosCustom.post('/api/v1/auth/forgot-password', data).then((res) => res.data);
};
