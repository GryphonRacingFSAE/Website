<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import NavFooter from "@/components/NavFooter.vue";
</script>

<template>
    <NavBar />
    <RouterView />
    <NavFooter />
</template>
