<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
    const map: HTMLElement = document.getElementById("map")!;
    const frame: HTMLIFrameElement = document.createElement("iframe");
    frame.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21842.523643301887!2d-80.23692987083086!3d43.530101771774326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9b28ceea7401%3A0xa48ca79ad3a559a6!2sGRYPHON%20RACING!5e0!3m2!1sen!2sca!4v1690415587608!5m2!1sen!2sca";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "no-referrer-when-downgrade";
    frame.title = "Gryphon Maps";
    frame.frameBorder = "0"; // Deprecated by vue, but css styling properties have no effect
    frame.height = "100%";
    frame.width = "100%";
    map.appendChild(frame);
});
</script>

<template>
    <div class="shop_info">
        <div class="info">
            <h1>Gryphon Racing</h1>
            <p>
                University of Guelph<br />
                Physical Resources Building<br />
                50 Stone Rd E, Guelph, ON N1G 2W1
            </p>
            <p>
                Join our team as members, <br />
                sponsors or advisors
            </p>
        </div>

        <div id="map" class="map"></div>
    </div>
</template>

<style scoped>
.shop_info {
    position: relative;
    justify-content: center;
    line-height: 250%;
    display: flex;
    padding: 15vh 15% 10vh;
    background-color: var(--gryphon-white);
    color: var(--gryphon-red);
}

.map {
    background: url(/media/maps_loading.webp);
    background-size: cover;
    border-radius: 2em;
    overflow: hidden;
    border: 0;

    margin-left: 6em;
    margin-top: auto;
    margin-bottom: auto;

    width: 50%;
    height: 30vw;
}

.info {
    width: 50%;
    margin-top: auto;
    margin-bottom: auto;
}

.shop_info p {
    font-size: 2em;
}

.shop_info h1 {
    font-size: 4em;
    line-height: 1em;
}

@media screen and (max-width: 1500px) {
    .shop_info p {
        font-size: 1.5em;
        line-height: 1.8rem;
    }

    .shop_info h1 {
        font-size: 2.2em;
    }
}

@media screen and (max-width: 1000px) {
    .shop_info {
        flex-direction: column;
        align-items: center;
        padding: 10vh 15% 10vh;
    }

    .map {
        margin-left: 0;
        width: 100%;
        height: 60vw;
    }

    .info {
        text-align: center;
        width: 80vw;
    }
}
</style>
