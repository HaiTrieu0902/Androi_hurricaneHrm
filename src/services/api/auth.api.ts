import { axiosCustom } from '../../configs';
import { IParamsAuth } from '../../types/auth';

export const loginAPI = async (data: IParamsAuth) => {
    return axiosCustom.post('/api/v1/auth/login', data).then((res) => res.data);
};
