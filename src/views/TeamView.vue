<script setup lang="ts">
import LeadProfile from "@/components/LeadProfile.vue";
</script>

<template>
    <div class="team">
        <h1>Meet the Team</h1>
        <div class="profiles_list">
            <LeadProfile title="Admin Captain" name="Ayden Bourdeau" />
            <LeadProfile title="Dynamics Captain" name="Matt Aziz" />
            <LeadProfile title="Electrical Captain" name="Matt Verburg" />
        </div>
        <div class="profiles_list">
            <LeadProfile title="Suspension Lead" name="Owen Fray" />
            <LeadProfile title="Low Voltage Lead" name="Rayne van Voorst" />
            <LeadProfile title="Harness Lead" name="Patrick McNutt" />
            <LeadProfile title="Embedded Lead" name="Dallas Hart" />
        </div>
    </div>
</template>

<style scoped>
.team {
    background-color: var(--gryphon-white);
    padding-top: 7em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gryphon-light-black);
}

.profiles_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.profiles_list > * {
    margin: 1em;
}
</style>
