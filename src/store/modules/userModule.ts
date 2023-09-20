import { TOKEN, USER_LOGIN } from "@/constant";
import { lcStorage } from "@/helpers/lcStorage";
import { Module, MutationTree, ActionTree, GetterTree, Commit } from "vuex";
import { userApi } from "./../../api/userApi";
import { error, success } from "@/helpers/messageHelper";
import { I_login, I_login_res } from "@/interfaces/userInterface";

// Định nghĩa kiểu cho state
interface UserState {
    userLogin: object;
    autoFill: object;
}

// Định nghĩa kiểu cho mutations
interface UserMutations extends MutationTree<UserState> {
    setUserLogin(state: UserState, user: I_login_res): void;
}

// Định nghĩa kiểu cho actions
interface UserActions extends ActionTree<UserState, any> {
    login(context: { commit: Commit }, payloadLogin: I_login): void;
}

const userState: UserState = {
    userLogin: lcStorage.get(USER_LOGIN) || {},
    autoFill: {},
};

const userMutations: UserMutations = {
    setUserLogin(state, user) {
        state.userLogin = user;
    },
};

const userActions: UserActions = {
    async login({ commit }, reqData) {
        try {
            const { data } = await userApi.login(reqData);

            lcStorage.set(USER_LOGIN, data);

            lcStorage.set(TOKEN, data.token);

            commit('setUserLogin', data)

            success("Đăng nhập thành công");
        } catch (err) {
            console.log(err);
            error("Đăng nhập thành công");
        } finally {
            return true;
        }
    },
};

const userModule: Module<UserState, any> = {
    state: userState,
    mutations: userMutations,
    actions: userActions,
};

export default userModule;
