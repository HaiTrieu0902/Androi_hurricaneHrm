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

/////////////////////////////////////////////////////////////////////////////////////////////////////
export interface ILimitationTransaction {
    user_id: number;
    month: number;
    total_spent: number;
    total_limit: number;
    year: number;
    data: ILimitationItem[];
}

export interface ILimitationItem {
    category_key: string;
    amount_spent: number;
    amount_limit: number;
}
