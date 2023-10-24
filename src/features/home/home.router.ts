import type { RouteRecordRaw } from "vue-router";
import Home from "@/features/home/views/Home.vue";

const routes: RouteRecordRaw = {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
        auth: "onlyAuthenticated"
    }
}

export default routes