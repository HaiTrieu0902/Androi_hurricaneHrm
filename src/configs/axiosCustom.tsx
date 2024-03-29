import { HOST_API_APP } from '@env';
import axios from 'axios';
import { asyncStorageService } from '../utils/storage';
const axiosCustomer = axios.create({
    baseURL: String('http://10.0.2.2:9090'),
    timeout: 100000,
});
axiosCustomer.interceptors.request.use(
    async (config) => {
        const access_token = await asyncStorageService.getValue('access_token');
        if (config.method === 'get') {
            const currentTime = new Date().getTime();
            const oldUrl: any = config.url;
            let newUrl = config.url;
            if (oldUrl.includes('?')) {
                newUrl = `${oldUrl}&time=${currentTime}`;
            } else {
                newUrl = `${oldUrl}?time=${currentTime}`;
            }
            config.url = newUrl;
        }
        const cloneConfig: any = { ...config };
        if (access_token) {
            cloneConfig.headers['Authorization'] = `Bearer ${access_token}`;
        }
        return cloneConfig;
    },
    (error) => Promise.reject(error),
);

axiosCustomer.interceptors.response.use(
    (response) => response,
    (error) => responseErrorHandler(error),
);

const responseErrorHandler = async (error: any) => {
    if (error.response.status === 401) {
    }
    return Promise.reject(error.response.data);
};

export default axiosCustomer;
