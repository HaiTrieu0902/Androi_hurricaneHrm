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
