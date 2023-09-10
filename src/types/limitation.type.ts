export interface Ilimitation {
    user_id: number;
    category_key: String;
    amount_limit: number;
    month: number;
    year: number;
}

export interface IQueryGetLimitationByMonth {
    userId: number;
    month: number;
    year: number;
}

export interface IQueryUpdateLimitation {
    userId: number;
    categoryKey: String;
    amount_limit: number;
    month: number;
    year: number;
}

export interface ILimitationListUserByMonth {
    user_id: number;
    month: number;
    totalAmountLimit: Number;
    year: number;
    data: dataLimitation[];
}

export interface dataLimitation {
    category_key: string;
    amount_limit: number;
    createdAt: Date;
    updatedAt: Date;
    limitation_id: number;
}
