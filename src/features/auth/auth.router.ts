import type { RouteRecordRaw } from "vue-router";
import Auth from "@/features/auth/views/Auth.vue";

const routes: RouteRecordRaw = {
    path: '/auth',
    name: 'auth',
    component: Auth,
    meta: {
        auth: "notAuthenticated"
    }
}

export default routes