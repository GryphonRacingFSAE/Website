<script setup lang="ts">
import { computed, ref } from "vue";
const props = defineProps<{ title: string; name: string }>();

const known_names = ["ayden_bourdeau", "owen_fray", "dallas_hart", "matt_aziz", "patrick_mcnutt", "rayne_van_voorst", "matt_verburg"];

const profile_picture_url = computed(() => {
    let cleaned_name = props.name.replaceAll(" ", "_").toLowerCase();
    if (!known_names.includes(cleaned_name)) {
        console.warn(`Unknown name: ${props.name} : ${cleaned_name}}`);
        cleaned_name = "unknown";
    }
    return import.meta.env.BASE_URL + `media/team_members/${cleaned_name}.webp`;
});

const popup = ref(false);
</script>

<template>
    <div class="card" @click="popup = true">
        <img :src="profile_picture_url" class="profile_picture" :alt="props.name" />
        <h1>{{ props.name }}</h1>
        <h2>{{ props.title }}</h2>

        <!-- We can add a popup later for each captain/lead -->
        <!-- <div v-if="popup" class="popup">
            <slot></slot>
        </div> -->
    </div>
</template>

<style scoped>
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: var(--gryphon-white);
    color: var(--gryphon-light-black);
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
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
    margin: 0.1em;
    font-size: 1.5em;
}

h2 {
    margin: 0.1em;
    font-size: 1.2em;
}
</style>
