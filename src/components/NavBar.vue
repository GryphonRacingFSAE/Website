<script setup lang="ts">
// import MenuIcon from "vue-material-design-icons/Menu.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

// Most of this code was adapted from:
// https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp

const dropdown_active = ref(false);
</script>

<template>
    <div class="navbar" :class="{ responsive: dropdown_active }">
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/team">Team</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/cars">Cars</RouterLink>
        <RouterLink to="/sponsors">Sponsors</RouterLink>
        <RouterLink to="/ContactView">Contact</RouterLink>
        <MenuIcon class="hamburger" @click="dropdown_active = !dropdown_active"></MenuIcon>
    </div>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 3em;
    background-color: var(--gryphon-red);
    margin: 0;
    display: flex;
    overflow: hidden;
    z-index: 1;
}

.navbar > * {
    padding: 0 10px;
    color: var(--gryphon-white);
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
}

.navbar a:hover {
    background-color: var(--gryphon-yellow);
    color: var(--gryphon-black);
}

.hamburger {
    display: none;
    color: var(--gryphon-white);
    font-size: 2rem;
    margin-left: auto;
    margin-right: 10px;
}

@media screen and (max-width: 600px) {
    .navbar a:not(:first-child) {
        display: none;
    }
    .navbar .hamburger {
        /* display: block; */
        display: flex;
    }

    .navbar.responsive a.icon {
        position: absolute;
        right: 0;
        top: 0;
    }
    .navbar.responsive a {
        float: none;
        display: block;
        text-align: left;
    }
}
</style>
