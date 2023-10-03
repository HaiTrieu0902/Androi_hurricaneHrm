export interface ILimitationTransactionCategory {
    message: string;
    status: number;
    userId: string;
    data: Datum[];
}

export interface Datum {
    category_key: string;
    amount: number;
    note: string;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    transaction_id: number;
}

export interface IReportTransaction {
    message: string;
    month: number | null;
    year: number;
    total_spent: number;
    data: Idata[];
}

export interface Idata {
    category_key: string;
    total: number;
}
