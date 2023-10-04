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
        <img class="crest" src="/media/crest.svg" alt="Gryphon Racing Crest"/>
        <RouterLink to="/" aria-haspopup="true" role="button" tabindex="0">Home</RouterLink>
        <RouterLink to="/team">Team</RouterLink>
        <RouterLink to="/sponsors">Sponsors</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <MenuIcon class="hamburger" @click="dropdown_active = !dropdown_active"></MenuIcon>
    </div>
    <div class="dropdown highlight" v-if="dropdown_active">
        <RouterLink to="/team">Team</RouterLink>
        <RouterLink to="/sponsors">Sponsors</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
    </div>
</template>

<style scoped>
.crest {
    height: 3em;
    margin: 10px;
}

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: calc(3em + 40px);
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
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.dropdown {
    position: fixed;
    top: calc(3em + 40px);
    right: 0;
    background-color: var(--gryphon-red-transparent);
    border-radius: 0 0 0 25px;
    display: none;
    flex-direction: column;
    z-index: 1000;
}

.dropdown a {
    padding: 5px 30px;
    color: var(--gryphon-white);
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
}

@media (hover: hover) and (pointer: fine) {
    .highlight a:hover {
        background-color: var(--gryphon-yellow);
        color: var(--gryphon-light-black);
        transition-duration: 300ms;
    }
}

.hamburger {
    display: none;
    color: var(--gryphon-white);
    font-size: 2rem;
    margin-left: auto;
    margin-right: 10px;
}

@media screen and (max-width: 600px) {
    .navbar a:not(:nth-child(2)) {
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
