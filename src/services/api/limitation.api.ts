import { axiosCustom } from '../../configs';
import { IQueryGetLimitationByMonth, Ilimitation } from '../../types/limitation.type';

export const getAllLimitationAPI = async () => {
    return axiosCustom.get('/api/v1/limitation/get-all-limitation').then((res) => res.data);
};

export const getLimitationUserByMonthAPI = async (query: IQueryGetLimitationByMonth) => {
    return axiosCustom
        .get(
            `/api/v1/limitation/get-limitation-user-byMonth?userId=${query.userId}&month=${query.month}&year=${query.year}`,
        )
        .then((res) => res.data);
};

export const getLimitationTransactionUserByMonthAPI = async (query: IQueryGetLimitationByMonth) => {
    return axiosCustom
        .get(
            `/api/v1/limitation/get-limitation-transaction-user-byMonth?userId=${query.userId}&month=${query.month}&year=${query.year}`,
        )
        .then((res) => res.data);
};

export const addLimitationAPI = async (data: Ilimitation) => {
    return axiosCustom.post('/api/v1/limitation/add-limitation', data).then((res) => res.data);
};

export const deleteLimitation = async (limitationId: number) => {
    return axiosCustom
        .delete(`/api/v1/limitation/detele-limitation?limitationId=${limitationId}`)
        .then((res) => res.data);
};

export const updateLimitation = async (query: Ilimitation) => {
    return axiosCustom
        .put(
            `/api/v1/limitation/update-limitation?userId=${query.user_id}&categoryKey=${query.category_key}&month=${query.month}&year=${query.year}`,
            { amount_limit: query.amount_limit },
        )
        .then((res) => res.data);
};
