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
