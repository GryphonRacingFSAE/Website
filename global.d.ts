declare module "vue-material-design-icons/*.vue" {
    import type { DefineComponent } from "vue";

    const IconVue: DefineComponent<{
        /// `size` defaults to 24
        size?: number;
        /// `fillColor` defaults to 'currentColor'
        fillColor?: string;
        title?: string;
    }>;
    export default IconVue;
}

declare module "*.json" {
    const value: any;
    export default value;
}

declare module "swiper/types/modules/*" {
    const value: any;
    export default value;
}
