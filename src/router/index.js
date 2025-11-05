import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home/Home.vue";

const routes = [
    {
        path :"/",
        component: Home,
        name : "Home"
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});
export default router;