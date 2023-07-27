import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: HomeView,
        },
        {
            path: "/contact",
            component: () => import("@/views/ContactView.vue"),
        },
        {
            path: "/team",
            component: () => import("@/views/TeamView.vue"),
        },
        {
            path: "/cars",
            component: () => import("@/views/CarsView.vue"),
        },
        {
            path: "/projects",
            component: () => import("@/views/ProjectsView.vue"),
        },
        {
            path: "/sponsors",
            component: () => import("@/views/SponsorView.vue"),
        },
    ],
});

export default router;
