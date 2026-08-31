<script setup lang="ts">
import { computed } from "vue";
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
        name: "College Royal",
        date: new Date(2024, 2, 17),
    },
    {
        name: "GRC22 Reveal",
        date: new Date(2024, 3, 6),
    },
    {
        name: "Formula Hybrid + Electric",
        date: new Date(2024, 3, 29),
    },
    {
        name: "Michigan FSAE",
        date: new Date(2024, 5, 12),
    },
    {
        name: "Oakland Grand Prix",
        date: new Date(2024, 5, 29),
    },
    {
        name: "Pittsburgh Shootout",
        date: new Date(2024, 8, 14),
    },
    {
        name: "Formula Wheat V2",
        date: new Date(2024, 8, 28),
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
            <img class="banner" src="/media/crest.svg" alt="Banner Image" />
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
                            <h3>{{ event.date.toLocaleDateString("en-us", { year: "numeric", month: "short", day: "numeric" }) }}</h3>
                        </div>
                    </template>
                </template>
            </div>
        </div>
        <div class="floating_scroll_body">
            <div class="additional_info">
                <div class="about_us_section">
                    <div class="about_us">
                        <h1>About Us</h1>
                        <p>
                            Gryphon Racing is a student-led engineering team at the University of Guelph that designs and builds race cars for Formula Student competitions. The team provides students with real-world engineering experience by working hands-on to design, build, test, and troubleshoot a high-performance vehicle. Through this process, members are able to explore and pursue their passion for engineering in a practical, team-based environment. <br /><br />
                            Founded in 2002, Gryphon Racing has built 19 cars and competed in events such as Formula Michigan and the Toronto Shootout. Over the years, the team has evolved from producing small-displacement, gas-powered vehicles to developing electric vehicles featuring advanced aerodynamics and custom-designed systems.
                        </p>
                    </div>
                    <div class="about_us_img">
                        <img src="/media/grc22_showcase.webp" width="1000" height="667" alt="Gryphon Racing 2024" />
                    </div>
                </div>
                <div class="our_cars_section">
                    <div class="our_cars">
                        <h1>Recent Cars</h1>
                        <div class="car_listings">
                            <div>
                                <h2>GRC26</h2>
                                <p>
                                    Gryphon Racing's return to combustion. GRC26 marks the team's first internal combustion entry to competition since GRC19, built around a CBR600RR engine. The car debuts a full aerodynamics package for the first time in team history, including a front wing, sidepods, a rear wing, and a floor, giving the team its most aggressive aero platform to date.
                                </p>
                                <img class="car_portrait" src="/current_cars/grc19.webp" width="1000" height="667" alt="GRC19 Car Portrait" />
                            </div>
                            <div>
                                <h2>GRC22</h2>
                                <p>
                                    Gryphon Racing's new milestone being the first generation to design and compete with the electrical car. GRC22 marks the team's first fully electric car and advanced aero design built by Gryphon Racing. The team at Gryphon Racing has spent
                                    countless hours developing the first ever electric car, full aerodynamics kit, custom gearbox plus differential, and custom Vehicle Control Unit.
                                </p>
                                <img class="car_portrait" src="/current_cars/grc22_our_cars.webp" width="1000" height="667" alt="GRC22 Car Portrait" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavFooter></NavFooter>
        </div>
    </div>
</template>

<style scoped>
.landing_page_image {
    width: 100%;
    height: 100%;

    /* The image used */
    background-image: url("/media/grc26_michigan_team.webp"); /* reminder: convert this image to webp */

    /* Set a specific height */
    min-height: 100vh;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.additional_info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--gryphon-black);
    color: var(--gryphon-white);
}

.about_us_section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    margin-bottom: 60px;
}

.about_us {
    justify-content: center;
    flex-direction: column;
    line-height: 250%;
    display: flex;
    flex: 1;
    padding: 0 40px;
}

.about_us h1 {
    margin-bottom: 0;
    font-size: 2.4em;
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-color: var(--gryphon-red);
}

.about_us p {
    line-height: 150%;
    font-size: 1.2em;
}

.about_us_img {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.about_us_img > img {
    width: 100%;
    height: auto;
    border-radius: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.our_cars_section {
    padding: 0;
    margin-bottom: 60px;
}

.our_cars {
    justify-content: center;
    flex-direction: column;
    line-height: 250%;
    display: flex;
    padding: 0 15%;
}

.our_cars > h1 {
    margin-bottom: 0;
    font-size: 2.4em;
    text-decoration: underline;
    text-underline-offset: 10px;
    text-decoration-color: var(--gryphon-red);
}

.car_listings {
    flex-direction: row;
    display: flex;
    padding: 0;
    justify-content: space-between;
}

.car_listings > div {
    width: 45%;
}

@media screen and (max-width: 800px) {
    .landing_page_image {
        background-attachment: scroll;
        background-image: linear-gradient(#000 0%, #0003 33%), url("/media/grc22_background.webp");
        min-height: 100vh;
    }
}

@media screen and (max-width: 1000px) {
    .car_listings {
        flex-direction: column;
        justify-content: center;
    }
    .car_listings > div {
        width: 100%;
    }
}

@media screen and (max-width: 1625px) {
    .about_us_section {
        padding: 6vh;
        flex-direction: column;
    }

    .about_us_img > img {
        flex-direction: column;
        justify-content: center;
        border-radius: 20px;
    }
}

.car_listings > div > h2 {
    margin-bottom: 0;
}

.car_listings > div > p {
    margin-top: 0;
    line-height: 130%;
    font-size: 1.2em;
}

.car_portrait {
    width: 100%;
    height: auto;
    border-radius: 20px;
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
    width: 100%;
}

.event h2 {
    width: 65%;
    font-size: 22px;
    padding-left: 5px;
}

.event h3 {
    font-size: 18px;
    padding-right: 5px;
}

.event > * {
    margin: 10px 0;
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
    min-width: 350px;
    border-radius: 20px;
    align-items: center;
    text-align: center;
    padding-bottom: 15px;
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
    padding-top: 4em; /* So we are not hidden under navbar on some screens */
    width: 5%;
    min-width: 100px;

    position: fixed;
    bottom: 25px;
    left: 25px;
}
</style>
