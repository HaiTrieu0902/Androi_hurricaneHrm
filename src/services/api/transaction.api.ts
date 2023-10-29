import { IParamTransaction, IParamUpdateTransaction } from '../../types/transaction.type';
import { axiosCustom } from '../../configs';

/* Get list category */
export const getListCategoryUserAPI = async (param: { userId: number; month: number; year: number }) => {
    return axiosCustom
        .get(
            `/api/v1/category/get-user-category-limitation?userId=${param.userId}&month=${param.month}&year=${param.year}`,
        )
        .then((res) => res?.data);
};

/*===================================================================*/
// TRANSACTION

export const addTransactionAPI = async (data: IParamTransaction) => {
    return axiosCustom.post('/api/v1/transaction/add-transaction', data).then((res) => res.data);
};

export const updateTransactionAPI = async (data: IParamUpdateTransaction) => {
    return axiosCustom
        .put(`/api/v1/transaction/update-transaction?transactionId=${data?.transactionId}`, data)
        .then((res) => res.data);
};

export const deletedTransactionAPI = async (transactionId: number) => {
    return axiosCustom
        .delete(`/api/v1/transaction/detele-transaction?transactionId=${transactionId}`)
        .then((res) => res.data);
};

export const getDetailTransactionAPI = async (transactionId: number) => {
    return axiosCustom
        .get(`/api/v1/transaction/get-detail-transaction?transactionId=${transactionId}`)
        .then((res) => res.data);
};

export const getTransactionUserMonthAPI = async (param: { userId: number; month: number; year: number }) => {
    return axiosCustom
        .get(
            `/api/v1/transaction/get-transaction-user-byMonth?userId=${param?.userId}&month=${param?.month}&year=${param?.year}`,
        )
        .then((res) => res.data);
};

export const getDetailTrasactionSearchAPI = async (param: {
    userId: number;
    searchValue: string;
    year: number | string;
}) => {
    return axiosCustom
        .get(
            `/api/v1/transaction/get-transaction-user?userId=${param?.userId}&searchValue=${param?.searchValue}&year=${param?.year}`,
        )
        .then((res) => res.data);
};
