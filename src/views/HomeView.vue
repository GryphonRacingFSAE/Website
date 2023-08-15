<script setup lang="ts">
import { computed, ref } from "vue";
import NavFooter from "@/components/NavFooter.vue";
import { useNow } from "@vueuse/core";

const now = useNow();

function timeTill(date: Date) {
    const ms_till = date.getTime() - now.value.getTime();
    const days = Math.floor(ms_till / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms_till % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms_till % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms_till % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

const events = [
    {
        name: "Toronto Shootout",
        date: new Date(2023, 8, 30),
    },
    {
        name: "Formula Hybrid + Electric",
        date: new Date(2024, 3, 21),
    },
    {
        name: "Michigan FSAE",
        date: new Date(2024, 6, 15),
    },
];

const upcoming_events = computed(() => {
    return events.filter(event => event.date > now.value).sort((a, b) => a.date.getTime() - b.date.getTime());
});

const time_till_soonest = computed(() => {
    return timeTill(upcoming_events.value[0].date);
});
</script>

<template>
    <div class="landing_page_image">
        <div class="overlay">
            <img class="banner" src="/media/banner.svg" />
            <div class="upcoming_events" v-if="upcoming_events.length != 0">
                <!-- The next event that we'll be attending -->
                <h1>{{ upcoming_events[0].name }}</h1>
                <div class="clock">
                    <div>
                        <h2>{{ time_till_soonest.days }}</h2>
                        <h3>days</h3>
                    </div>
                    <div>
                        <h2>{{ time_till_soonest.hours }}</h2>
                        <h3>hours</h3>
                    </div>
                    <div>
                        <h2>{{ time_till_soonest.minutes }}</h2>
                        <h3>minutes</h3>
                    </div>
                    <div>
                        <h2>{{ time_till_soonest.seconds }}</h2>
                        <h3>seconds</h3>
                    </div>
                </div>

                <!-- Other events in order -->
                <template v-if="upcoming_events.length > 1">
                    <template v-for="(event, index) in upcoming_events" :key="event.name">
                        <div v-if="index != 0" class="event">
                            <h2>{{ event.name }}</h2>
                            <p>{{ event.date.toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" }) }}</p>
                        </div>
                    </template>
                </template>
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
    width: 100%;
    top: 100%;
    background-color: rgba(255, 255, 255, 0);
    position: absolute;
}

.event {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}

.event > * {
    margin: 10px 0px;
}

.event > p {
    font-weight: 600;
}

.clock {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.clock > div > h2 {
    margin: 0.5em 0 0 0;
    font-weight: 700;
}
.clock > div > h3 {
    margin: 0 0 0.5em 0;
    font-weight: 200;
}

.upcoming_events > h1 {
    margin-bottom: 0;
}

.upcoming_events {
    background-color: rgba(255, 255, 255, 0.7);
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
