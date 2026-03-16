<script setup lang="ts">
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
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
        <RouterLink to="/" class="banner"><img src="/media/banner.svg" alt="Gryphon Racing Crest" width="200" height="50"/></RouterLink>
        <div class="nav-links">
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="/team">TEAM</RouterLink>
            <RouterLink to="/cars">OUR CARS</RouterLink>
            <RouterLink to="/sponsors">SPONSORS</RouterLink>
            <RouterLink to="/info">INFO</RouterLink>
        </div>
        <MenuIcon class="hamburger" @click="dropdown_active = true"></MenuIcon>
    </div>

    <transition name="slide">
        <div class="dropdown highlight" v-if="dropdown_active" @click="dropdown_active = !dropdown_active">
            <CloseIcon class="close-button" @click.stop="dropdown_active = false"></CloseIcon>
            <div class="dropdown-content">
                <RouterLink to="/">HOME</RouterLink>
                <RouterLink to="/team">TEAM</RouterLink>
                <RouterLink to="/cars">OUR CARS</RouterLink>
                <RouterLink to="/sponsors">SPONSORS</RouterLink>
                <RouterLink to="/info">INFO</RouterLink>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.banner img {
    height: 70%;
    top: 4px;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 5em;
    /**background-color: var(--gryphon-light-black-transparent);**/
    backdrop-filter: blur(25px);
    margin: 0;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    z-index: 1000;
}

.nav-links {
    display: flex;
    align-items: center;
    margin-right: 20px; /* Add some spacing from the right edge */
}

.navbar > * {
    padding: 0 20px;
    display: flex;
    align-items: center;
}

.nav-links > * {
    padding: 0 20px;
    color: var(--gryphon-white);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    height: 100%;
}

.dropdown {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    background-color: var(--gryphon-light-black-transparent);
    backdrop-filter: blur(25px);
    z-index: 1000;

    /* Dropdown animation */
    transform-origin: top;
    transition: transform 0.5s ease-in-out;
}

.dropdown-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.dropdown a {
    padding: 20px 45px;
    color: var(--gryphon-white);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    align-items: center;
}

.close-button {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    color: var(--gryphon-white);
    font-size: 2.5rem;
    cursor: pointer;
    z-index: 1000;
    transition: all 0.3s ease;
}

.hamburger {
    display: none;
    color: var(--gryphon-white);
    font-size: 2rem;
    margin-left: auto;
    margin-right: 10px;
    position: relative;
}

/* Dropdown animation */
.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.7s ease-in-out;
}

@media (hover: hover) and (pointer: fine) {
    .highlight a:not(.banner):hover {
        /* Dont highlight the banner cause it looks weird */
        background-color: var(--gryphon-yellow);
        color: var(--gryphon-light-black);
        transition-duration: 300ms;
    }

    .dropdown a:hover {
        background-color: var(--gryphon-yellow);
        color: var(--gryphon-light-black);
        transform: scale(1.1);
    }
}

@media screen and (max-width: 800px) {
    .nav-links {
        /* .navbar a:not(:nth-child(1)) { */
        display: none;
    }

    .navbar {
        backdrop-filter: blur(10px);
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
