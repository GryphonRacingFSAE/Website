<script setup lang="ts">
import LeadProfile from "@/components/LeadProfile.vue";
</script>

<template>
    <div class="team">
        <h1>Meet the Team</h1>
        <div class="profiles_list">
            <LeadProfile title="Admin Captain" name="Ayden Bourdeau"/>
            <LeadProfile title="Dynamics Captain" name="Matt Aziz"/>
            <LeadProfile title="Electrical Captain" name="Matt Verburg" linkedin="https://www.linkedin.com/in/matthewaziz/"/>
            <LeadProfile title="Suspension Lead" name="Owen Frey"/>
            <LeadProfile title="Low Voltage Lead" name="Rayne van Voorst" linkedin="https://www.linkedin.com/in/rayne-van-voorst-691030225/"/>
            <LeadProfile title="Harness Lead" name="Patrick McNutt" linkedin="https://www.linkedin.com/in/patrick-mcnutt-95a6681a7/"/>
            <LeadProfile title="Embedded Lead" name="Dallas Hart" linkedin="https://www.linkedin.com/in/dallas-hart/"/>
            <LeadProfile title="Aerodynamics Lead" name="Rajaee Mundle"/>
            <LeadProfile title="Aerodynamics Lead" name="Hayden Foley"/>
            <LeadProfile title="Business Lead" name="Bethany Hughes"/>
            <LeadProfile title="Software" name="Evan Rutten"/>
        </div>
    </div>
</template>

<style scoped>
.team {
    background-color: var(--gryphon-white);
    padding-top: 7em;
    padding-bottom: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gryphon-light-black);
}

a {
  text-decoration: none;
}

.profiles_list {
    max-width: 1500px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.profiles_list > * {
    margin: 1em;
}
</style>
