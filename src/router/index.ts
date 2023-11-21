import HomeView from "@/views/HomeView.vue";

export const routes = [
    {
        path: "/",
        component: HomeView,
    },
    {
        path: "/info",
        component: () => import("@/views/InfoView.vue"),
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
