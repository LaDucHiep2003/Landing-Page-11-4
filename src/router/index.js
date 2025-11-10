import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie";

import Home from "@/pages/Home/Home.vue";
import Dashboard from "@/pages/Admin/Dashboard.vue";
import Admin from "@/pages/Admin/Admin.vue";
import ListProducts from "@/pages/Admin/Products/index.vue";
import createProduct from "@/pages/Admin/Products/createProduct.vue";
import editProduct from "@/pages/Admin/Products/editProduct.vue";
import Login from "@/pages/Admin/Auth/Login.vue";
import axios from "axios";

const routes = [
    {
        path :"/",
        component: Home,
        name : "Home"
    },
    {
        path :"/auth/login",
        component: Login,
        name : "Login",
        meta:{
            layout: "auth"
        }
    },
    {
        path: "/admin",
        component: Admin,
        name: "admin",
        meta : {
            layout : "admin",
            requiresAuth: true,
        },
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard,
                meta: {
                    layout: "admin"
                }
            },
            {
                path: "products",
                name: "products",
                component: ListProducts,
                meta: {
                    layout: "admin"
                }
            },
            {
                path: "products/create",
                name: "create-products",
                component: createProduct,
                meta: {
                    layout: "admin"
                }
            },
            {
                path: "products/edit/:id",
                name: "edit-products",
                component: editProduct,
                meta: {
                    layout: "admin"
                }
            },
        ]
    }
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

const checkTokenValidity = async (token) => {
    try {
        const response = await axios.post(
            'http://103.163.118.212:30836/api/auth/introspect',
            { token },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        )

        return response.data?.result?.valid === true
    } catch (error) {
        console.error('Token introspect error:', error)
        return false
    }
}

router.beforeEach(async (to, from, next) => {
    const token = Cookies.get("token")

    if (to.meta.requiresAuth) {
        if (!token) {
            // Không có token -> redirect login
            return next({
                path: "/auth/login",
                query: { redirect: to.fullPath }
            })
        }

        try {
            // Verify token với backend
            const isValid = await checkTokenValidity(token)

            if (!isValid) {
                // Token invalid -> clear cookie và redirect login
                Cookies.remove("token")
                return next({
                    path: "/auth/login",
                    query: { redirect: to.fullPath }
                })
            }

            // Token valid -> cho phép truy cập
            return next()

        } catch (error) {
            console.error("Auth check failed:", error)
            Cookies.remove("token")
            return next({
                path: "/auth/login",
                query: { redirect: to.fullPath }
            })
        }
    }

    // Nếu đã login và cố truy cập trang login -> redirect về home
    if (to.path === '/auth/login' && token) {
        try {
            const isValid = await checkTokenValidity(token)
            if (isValid) {
                return next('/') // hoặc dashboard
            }
        } catch (error) {
            // Token invalid, cho phép vào trang login
        }
    }

    // Route không yêu cầu auth -> cho phép truy cập
    return next()
})
export default router;