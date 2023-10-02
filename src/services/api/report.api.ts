import { axiosCustom } from '../../configs';

export const getReportLimitationCategoryAPI = async (param: {
    userId: number;
    categoryKey: string;
    month: number;
    year: number;
}) => {
    return axiosCustom
        .get(
            `/api/v1/report/get-report-limitation-category?userId=${param?.userId}&categoryKey=${param?.categoryKey}&month=${param?.month}&year=${param?.year}`,
        )
        .then((res) => res.data);
};

export const getReportMonthOrYearTransactionAPI = async (param: {
    userId: number;
    month?: number | string;
    year: number;
}) => {
    return axiosCustom
        .get(
            `/api/v1/report/get-report-monthOrYear-transaction?userId=${param?.userId}&month=${param?.month}&year=${param?.year}`,
        )
        .then((res) => res.data);
};
