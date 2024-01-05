import { createRouter } from "vue-router";

const router = createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        path: "/", component: () => import("./")
    ]
});