import { USER_LOGIN } from "@/constant";
import { lcStorage } from "@/helper/lcStorage";
import { Module, MutationTree, ActionTree, GetterTree, Commit } from "vuex";

// Định nghĩa kiểu cho state
interface UserState {
    userLogin: object;
    autoFill: object;
}

// Định nghĩa kiểu cho mutations
interface UserMutations extends MutationTree<UserState> {
    setUser(state: UserState, user: object): void;
}

// Định nghĩa kiểu cho actions
interface UserActions extends ActionTree<UserState, any> {
    fetchUser(context: { commit: Commit }, userId: number): void;
}

const userState: UserState = {
    userLogin: lcStorage.get(USER_LOGIN) || {},
    autoFill: {},
};

const userMutations: UserMutations = {
    setUser(state, user) {
        state.userLogin = user;
    },
};

const userActions: UserActions = {
    async fetchUser({ commit }, userId) {
        try {
            const response = await fetch(`/api/users/${userId}`);
            const userData = await response.json();
            commit("setUser", userData);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    },
};



const userModule: Module<UserState, any> = {
    state: userState,
    mutations: userMutations,
    actions: userActions,
};

export default userModule;
