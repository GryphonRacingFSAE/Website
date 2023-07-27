<script setup lang="ts">
import { computed } from "vue";
const props = defineProps(["name"]);

const known_names = ["ayden_bourdeau", "jonas_hill", "kaden", "mahsam"];

const profile_picture_url = computed(() => {
    let cleaned_name = props.name.replace(" ", "_").toLowerCase();
    if (!known_names.includes(cleaned_name)) {
        console.warn(`Unknown name: ${props.name}`);
        cleaned_name = "unknown";
    }
    return `/media/team_members/${cleaned_name}.jpg`;
});
</script>

<template>
    <div class="card">
        <img :src="profile_picture_url" class="profile_picture" />
        <h2>{{ props.name }}</h2>
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    padding: 10px;
    background-color: var(--gryphon-white);
    color: var(--gryphon-black);
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.profile_picture {
    width: 200px;
    height: 200px;
    image-rendering: crisp-edges;
    /* image-rendering: -webkit-optimize-contrast; */
    object-fit: cover;
    border-radius: 10px;
}

h1 {
    padding: 0;
}
</style>
