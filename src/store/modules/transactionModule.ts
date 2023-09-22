import { transactionApi } from "@/api/transactionApi";
import { I_transaction_res } from "@/interfaces/transactionInterface";
import { Module, MutationTree, ActionTree, GetterTree, Commit } from "vuex";
import { error, success } from "./../../helpers/messageHelper";

// Định nghĩa kiểu cho state
interface TransactionState {
    listTransaction: I_transaction_res[] | null;
}

// Định nghĩa kiểu cho mutations
interface TransactionMutations extends MutationTree<TransactionState> {
    setListTransaction(state: TransactionState, transaction: I_transaction_res[]): void;
}

// Định nghĩa kiểu cho actions
interface TransactionActions extends ActionTree<TransactionState, any> {
    getListTransaction(context: { commit: Commit }): void;
    createTransaction(context: { commit: Commit }, transaction: I_transaction_res): void;
}

const transactionState: TransactionState = {
    listTransaction: null,
};

const transactionMutations: TransactionMutations = {
    setListTransaction(state, transaction) {
        state.listTransaction = transaction;
    },
};

const transactionActions: TransactionActions = {
    async getListTransaction({ commit }) {},
    async createTransaction({ commit }, transaction) {
        try {
            const { data } = await transactionApi.createTransaction(transaction);
            console.log(data);
            success("Create transaction success");
        } catch (err) {
            console.log(err);
            error("Create transaction faild");
        }
    },
};

const transactionModule: Module<TransactionState, any> = {
    namespaced: true,
    state: transactionState,
    mutations: transactionMutations,
    actions: transactionActions,
};

export default transactionModule;
