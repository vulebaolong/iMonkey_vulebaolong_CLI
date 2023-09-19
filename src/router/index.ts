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
        meta: {
            layout: "auth",
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/RegisterView.vue"),
    },
    {
        path: "/login",
        name: "login",
        meta: {
            layout: "auth",
        },
        component: () => import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;