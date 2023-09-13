import { IParamTransaction } from '../../types/transaction.type';
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
