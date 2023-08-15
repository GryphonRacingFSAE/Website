import HomeView from "@/views/HomeView.vue";

export const routes = [
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
        path: "/sponsors",
        component: () => import("@/views/SponsorView.vue"),
    },
];
