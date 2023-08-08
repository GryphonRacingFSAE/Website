<script setup lang="ts">
import { computed } from "vue";
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

<template class="root">
    <img class="landing_page_image" src="/media/autocross_grc19.jpg" />
    <div class="upcoming_events">
        <h1>Upcoming Events:</h1>
        <h2>Toronto Shootout</h2>
        <div>{{ time_till_toronto }}</div>
        <h2>Formula Hybrid + Electric</h2>
        <div>{{ time_till_new_hampshire }}</div>
        <h2>Michigan FSAE</h2>
        <div>{{ time_till_michigan }}</div>
    </div>
    <div class="overlay">
        <h1>Gryphon Racing</h1>
        <h2>University of Guelph's Formula SAE Team</h2>
    </div>
</template>

<style scoped>
.landing_page_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

.upcoming_events {
    padding: 12pt;
    background-color: rgba(255, 255, 255, 0.7);
    color: #000000;
    width: 30%;
    left: auto;
    margin-right: auto;
    border-radius: 16pt;
    position: absolute;
    bottom: 64pt;
}
</style>
