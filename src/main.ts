import "@/assets/main.css";

import App from "@/App.vue";
import { ViteSSG } from "vite-ssg";
import { routes } from "@/router";

export const createApp = ViteSSG(App, {
    routes,
    base: import.meta.env.BASE_URL,
});
