import { USER_LOGIN } from "@/constant";
import { lcStorage } from "@/helpers/lcStorage";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    },
    {
        path: "/register",
        name: "register",
        meta: { layout: "auth" },
        component: () => import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
    },
    {
        path: "/login",
        name: "login",
        meta: { layout: "auth" },
        component: () => import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
        beforeEnter(to, from, next) {
            if (!lcStorage.get(USER_LOGIN)) {
                // Chuyển hướng nếu người dùng chưa đăng nhập
                next("/login");
            } else {
                // Nếu đã đăng nhập, tiếp tục hiển thị component
                next();
            }
        }
    },
    {
        path: "/logout",
        name: "logout",
        component: () => import(/* webpackChunkName: "about" */ "../views/LogoutView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
