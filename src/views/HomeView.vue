<script setup lang="ts">
import { computed } from "vue";
import NavFooter from "@/components/NavFooter.vue";
import { useNow } from "@vueuse/core";

function useTimeTill(date: Date) {
    const now = useNow();
    const time_till = computed(() => {
        const ms_till = date.getTime() - now.value.getTime();
        const days = Math.floor(ms_till / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms_till % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms_till % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms_till % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    });
    return time_till;
}

const time_till_toronto = useTimeTill(new Date(2023, 9, 30));
const time_till_new_hampshire = useTimeTill(new Date(2024, 4, 21));
const time_till_michigan = useTimeTill(new Date(2024, 6, 15));
</script>

<template>
    <div class="landing_page_image">
        <div class="overlay">
            <img class="banner" src="/media/banner.svg" />
            <div class="upcoming_events">
                <h1>Upcoming Events</h1>
                <h2>Toronto Shootout</h2>
                <div>{{ time_till_toronto.days }}</div>
                <h2>Formula Hybrid + Electric</h2>
                <div>{{ time_till_new_hampshire.days }}</div>
                <h2>Michigan FSAE</h2>
                <div>{{ time_till_michigan.days }}</div>
            </div>
        </div>
        <div class="floating_scroll_body">
            <NavFooter></NavFooter>
        </div>
    </div>
</template>

<style scoped>
.landing_page_image {
    width: 100%;
    height: 100%;

    /* The image used */
    background-image: url("/media/autocross_grc19.jpg");

    /* Set a specific height */
    min-height: 100vh;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.floating_scroll_body {
    z-index: 1;
    /* height: 200vh; */
    width: 100%;
    top: 100%;
    background-color: rgba(255, 255, 255, 0);
    position: absolute;
}

.upcoming_events {
    background-color: rgba(255, 255, 255, 0.5);
    color: #000000;
    width: 30%;
    min-width: 400px;
    border-radius: 20px;
    align-items: center;
    text-align: center;
}

.overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.banner {
    width: 40%;
    min-width: 400px;
}
</style>
