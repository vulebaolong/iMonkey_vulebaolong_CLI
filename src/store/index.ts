import { createStore } from "vuex";
import userModule from "./modules/userModule";
import categoryModule from "./modules/categoryModule";
import transactionModule from "./modules/transactionModule";

export default createStore({
    modules: {
        userModule,
        categoryModule,
        transactionModule,
    },
});
