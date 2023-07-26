<script setup>
import LeadProfile from "@/components/LeadProfile.vue";
</script>

<template>
    <div>historical</div>
    <div class="profiles_list">
        <LeadProfile name="Ayden Bourdeau" />
        <LeadProfile name="Jonas Hill" />
        <LeadProfile name="Kaden" />
        <LeadProfile name="Mahsam" />
        <LeadProfile name="Bernardo" />
    </div>
</template>

<style scoped>
.profiles_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>
