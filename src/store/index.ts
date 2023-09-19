import { createStore } from "vuex";
import userModule from "./modules/userModule";

export default createStore({
    modules: {
        userModule,
    },
});
