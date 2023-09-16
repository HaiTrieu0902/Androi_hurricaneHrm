/* interface list data category  */
export interface ICategoryList {
    userID: number;
    year: number;
    month: number;
    total: Number;
    data: categoryItem[];
}

export interface categoryItem {
    category_key: string;
    category_name: String;
    category_id: number;
    isLimiation: boolean;
}

/*===================================================================*/
// TRANSACTION

export interface IParamTransaction {
    user_id: number;
    category_key: String;
    amount: number;
    note: String;
    date: Date | any;
}

export interface IParamUpdateTransaction {
    transactionId: number;
    user_id: number;
    category_key: String;
    amount: number;
    note: String;
    date: Date | any;
}

export interface IListTransactionUserMonth {
    totalAmount: number;
    userId: string;
    data: IItemTransaction[];
}

export interface IItemTransaction {
    date: Date;
    totalAmountDate: number;
    transactions: Transaction[];
}

export interface Transaction {
    category_key: string;
    amount: number;
    note: string;
    transaction_id: number;
}
