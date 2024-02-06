<script setup lang="ts">
const props = defineProps<{ id: number | string; images: string[] }>();

// Handy Swiper JS Examples: https://swiperjs.com/demos
import type { PaginationOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Pagination, Autoplay];

const options: PaginationOptions = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
};
</script>

<template>
    <div class="swiper_wrapper">
        <swiper :spaceBetween="30" :pagination="options" :modules="modules">
            <swiper-slide v-for="image in props.images" :key="image">
                <img :src="`all_cars/grc${props.id}/${image}.webp`" alt="GRC Gallery Image" width="900" height="500" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<style scoped>
.swiper_wrapper {
    width: 85%;
    max-width: 750px;
    border-radius: 1em;
    box-shadow: 0 0 10px var(--gryphon-light-gray);
}

.swiper-slide img {
    border-radius: 1em;
    display: block;
    width: 100%;
    height: 40vw;
    max-height: 500px;
    object-fit: cover;
}

/* IMPORTANT: Some styles need to be set in main.css as !important! */

@media screen and (max-width: 850px) {
    .swiper-slide img {
        height: 50vw;
    }
}
</style>
