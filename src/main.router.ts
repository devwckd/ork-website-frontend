import {createRouter, createWebHistory, type RouteRecordRaw} from "vue-router";
import {authGuard} from "@/features/auth/guards/auth.guard";
import authRoutes from "@/features/auth/auth.router";
import homeRoutes from "@/features/home/home.router";

const routes: RouteRecordRaw[] = [
    authRoutes,
    homeRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

declare module 'vue-router' {
    interface RouteMeta {
        auth?: "none" | "onlyAuthenticated" | "notAuthenticated"
    }
}

router.beforeEach(authGuard)

export default router