import { USER_LOGIN } from "@/constant";
import { lcStorage } from "@/helpers/lcStorage";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        meta: {
            isShowFooter: true,
        },
        component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    },
    {
        path: "/register",
        name: "register",
        meta: { layout: "auth" },
        component: () => import(/* webpackChunkName: "register" */ "../views/RegisterView.vue"),
    },
    {
        path: "/login",
        name: "login",
        meta: { layout: "auth" },
        component: () => import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        meta: { text: "Profile", isShowFooter: true },
        component: () => import(/* webpackChunkName: "profile" */ "../views/ProfileView.vue"),
        beforeEnter(to, from, next) {
            if (!lcStorage.get(USER_LOGIN)) {
                // Chuyển hướng nếu người dùng chưa đăng nhập
                next("/login");
            } else {
                // Nếu đã đăng nhập, tiếp tục hiển thị component
                next();
            }
        },
    },
    {
        path: "/logout",
        name: "logout",
        component: () => import(/* webpackChunkName: "logout" */ "../views/LogoutView.vue"),
    },
    {
        path: "/list-transaction",
        name: "list-transaction",
        meta: { text: "List transaction", isShowFooter: true },
        component: () => import(/* webpackChunkName: "list-transaction" */ "../views/ListTransactionView.vue"),
    },
    {
        path: "/category",
        name: "category",
        meta: { text: "Category", isShowFooter: true },
        component: () => import(/* webpackChunkName: "category" */ "../views/CategoryView.vue"),
    },
    {
        path: "/add-transaction",
        name: "add-transaction",
        meta: { text: "Add transaction", isShowFooter: true },
        component: () => import(/* webpackChunkName: "add-transaction" */ "../views/AddTransactionView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
