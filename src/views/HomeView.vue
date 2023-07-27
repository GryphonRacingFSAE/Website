<script setup lang="ts">
import { computed } from "vue";
import { useNow } from "@vueuse/core";

const michigan = new Date(2024, 5, 14);
const now = useNow();
const time_till_michigan = computed(() => {
    const ms_till_michigan = michigan.getTime() - now.value.getTime();
    const days = Math.floor(ms_till_michigan / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms_till_michigan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms_till_michigan % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms_till_michigan % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
});
</script>

<template>
    <img class="landing_page_image" src="/media/autocross_grc19.jpg" />
    <div>Michigan FSAE: {{ time_till_michigan }}</div>
</template>

<style scoped>
.landing_page_image {
    width: 100%;
}
</style>
