<script setup lang="ts">
import MenuIcon from "vue-material-design-icons/Menu.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

// Most of this code was adapted from:
// https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
const dropdown_active = ref(false);

window.addEventListener("scroll", () => {
    dropdown_active.value = false;
});
</script>

<template>
    <div class="navbar highlight">
        <RouterLink to="/" class="crest"><img src="/media/crest.svg" alt="Gryphon Racing Crest" /></RouterLink>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/team">Team</RouterLink>
        <RouterLink to="/cars">Our Cars</RouterLink>
        <RouterLink to="/sponsors">Sponsors</RouterLink>
        <RouterLink to="/info">Info</RouterLink>
        <MenuIcon class="hamburger" @click="dropdown_active = !dropdown_active"></MenuIcon>
    </div>

    <transition name="slide">
        <div class="dropdown highlight" v-if="dropdown_active" @click="dropdown_active = !dropdown_active">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/team">Team</RouterLink>
            <RouterLink to="/cars">Our Cars</RouterLink>
            <RouterLink to="/sponsors">Sponsors</RouterLink>
            <RouterLink to="/info">Info</RouterLink>
        </div>
    </transition>
</template>

<style scoped>
.crest img {
    height: 70%;
    margin: 10px;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 4em;
    background-color: var(--gryphon-red-transparent);
    margin: 0;
    display: flex;
    overflow: hidden;
    z-index: 1000;
}

.navbar > * {
    padding: 0 20px;
    color: var(--gryphon-white);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.dropdown {
    position: fixed;
    top: 4em;
    right: 0;
    display: none;
    flex-direction: column;
    z-index: 1000;

    /* Dropdown animation */
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
}

.dropdown a {
    padding: 10px 25px;
    color: var(--gryphon-white);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    background-color: var(--gryphon-red-transparent);
    border-top: 1px solid var(--gryphon-white);
    border-left: 1px solid var(--gryphon-white);
}

.dropdown :last-child {
    border-radius: 0 0 0 25px;
    border-bottom: 1px solid var(--gryphon-white);
}

.hamburger {
    display: none;
    color: var(--gryphon-white);
    font-size: 2rem;
    margin-left: auto;
    margin-right: 10px;
}

/* Dropdown animation */
.slide-enter-from,
.slide-leave-to {
    transform: scaleY(0);
}

@media (hover: hover) and (pointer: fine) {
    .highlight a:not(.crest):hover {
        /* Dont highlight the crest cause it looks weird */
        background-color: var(--gryphon-yellow);
        color: var(--gryphon-light-black);
        transition-duration: 300ms;
    }
}

@media screen and (max-width: 600px) {
    .navbar a:not(:nth-child(1)) {
        display: none;
    }

    .navbar .hamburger {
        /* display: block; */
        display: flex;
    }

    .dropdown {
        display: flex;
    }
}
</style>
