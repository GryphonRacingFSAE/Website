<script setup lang="ts">
import LeadProfile from "@/components/LeadProfile.vue";
</script>

<template>
    <div class="team">
        <div class="meet_the_team">
            <div class="title">
                <h1>Meet</h1>
                <h1 class="yellow_team">the</h1>
                <h1 class="red_team">team.</h1>
            </div>
            <img src="/media/team_photo.webp" alt="Team Photo" width="1000" height="563" />
        </div>

        <h2>Team Captains</h2>
        <hr />
        <div class="profiles_list">
            <LeadProfile title="Admin" name="Ayden Bourdeau" linkedin="https://www.linkedin.com/in/aydenbourdeau/" />
            <LeadProfile title="Dynamics" name="Matt Aziz" linkedin="https://linkedin.com/in/matthewaziz" />
            <LeadProfile title="Electrical" name="Matt Verburg" linkedin="https://www.linkedin.com/in/matthew-verburg-851951261/" />
        </div>

        <h2>Team Leads</h2>
        <hr />
        <div class="profiles_list">
            <LeadProfile title="Suspension" name="Owen Frey" linkedin="https://www.linkedin.com/in/owen-frey-8435b3261/" />
            <LeadProfile title="Low Voltage" name="Rayne van Voorst" linkedin="https://www.linkedin.com/in/rayne-van-voorst-691030225/" />
            <LeadProfile title="Harness" name="Patrick McNutt" linkedin="https://www.linkedin.com/in/patrick-mcnutt-95a6681a7/" />
            <LeadProfile title="Embedded" name="Dallas Hart" linkedin="https://www.linkedin.com/in/dallas-hart/" />
            <LeadProfile title="Aerodynamics" name="Rajaee Mundle" linkedin="https://www.linkedin.com/in/rajaee-mundle-56195824b/" />
            <LeadProfile title="Aerodynamics" name="Hayden Foley" linkedin="https://www.linkedin.com/in/hayden-foley-a67b44235" />
            <LeadProfile title="Business" name="Bethany Hughes" />
        </div>

        <h2>Senior Members</h2>
        <hr />
        <div class="profiles_list">
            <LeadProfile title="Software" name="Evan Rutten" linkedin="https://www.linkedin.com/in/evan-rutten/" />
            <LeadProfile title="Electrical" name="Chris Walker" linkedin="https://www.linkedin.com/in/christopher-w-185485216/" />
            <LeadProfile title="CAD" name="Jacob Dykstra" linkedin="https://www.linkedin.com/in/jacob-dykstra-071889268/" />
            <LeadProfile title="CAD" name="Julian VanLandschoot" />
            <LeadProfile title="Manufacturing" name="Jonathan Chung" linkedin="https://www.linkedin.com/in/jonathan-chung-b05941242/" />
            <LeadProfile title="Dynamics" name="Korab Islami" linkedin="https://www.linkedin.com/in/korabislami/" />
            <LeadProfile title="Dynamics" name="Max Brown" linkedin="https://www.linkedin.com/in/max-brown-314957263" />
        </div>
    </div>
</template>

<style scoped>
.team {
    background-color: var(--gryphon-white);
    padding: 7em 2em 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gryphon-light-black);
}

.meet_the_team {
    padding-left: 15%;
    padding-right: 15%;
    padding-bottom: 5%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1200px;
}

h1 {
    text-align: center;
    font-size: 5vw;
    font-weight: bolder;
    margin: 0;
}

.yellow_team {
    color: var(--gryphon-yellow);
}

.red_team {
    color: var(--gryphon-red-transparent);
}

.meet_the_team img {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
    border-radius: 15px;
    margin-left: 8vw;
    width: 60%;
    height: auto;
}

hr {
    border: 0;
    clear: both;
    display: block;
    width: 99%;
    background: linear-gradient(to right, var(--gryphon-white) 5%, var(--gryphon-red) 50%, var(--gryphon-white) 95%);
    height: 3px;
    border-radius: 50px;
}

h2 {
    text-align: center;
    margin: 0;
}

a {
    text-decoration: none;
}

.profiles_list {
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 2em;
}

.profiles_list > * {
    margin: 0.5em;
}

@media screen and (max-width: 1000px) {
    .title {
        display: flex;
    }

    h1 {
        font-size: 8vw;
        margin: 1vw;
    }

    .meet_the_team {
        flex-direction: column;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 3rem;
    }

    .meet_the_team img {
        margin: 0;
        width: 95%;
    }
}
</style>
