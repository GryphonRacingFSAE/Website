import { createApp } from 'vue' import VueGoogleMaps from '@fawmi/vue-google-maps' const app = createApp(App); app.use(VueGoogleMaps, { load: { key: 'YOUR_API_KEY_COMES_HERE', }, }).mount('#app')

<template>
    <NavBar />
    <NuxtPage />
    <NavFooter />
</template>

<style>
@import url("assets/main.css");
</style>
