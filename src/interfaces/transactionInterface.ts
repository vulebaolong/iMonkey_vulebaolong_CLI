export interface I_transaction_req {
    total: number;
    note: string;
    createDay: string;
    category_Id: string;
}

export interface I_transaction_res {
    total: number;
    note: string;
    createDay: string;
    category_Id: string;
    user_Id: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}
