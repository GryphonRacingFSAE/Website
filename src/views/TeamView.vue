<script setup lang="ts">
import LeadProfile from "@/components/LeadProfile.vue";
import NavFooter from "@/components/NavFooter.vue";
</script>

<template>
    <div class="landing_page_image">
        <div class="overlay">
            <div class="meet_the_team">
                <div class="title">
                    <h1>Meet</h1>
                    <h1 class="red_team">the</h1>
                    <h1 class="yellow_team">team.</h1>
                </div>
            </div>
        </div>
        
        <div class="floating_scroll_body">
            <div class="team">
                
                <h2>Team Captains</h2>
                <hr />
                <div class="profiles_list">
                    <LeadProfile title="Administrative" name="Giuliana Koledin" linkedin="https://www.linkedin.com/in/giuliana-koledin-234501323/" />
                    <LeadProfile title="Dynamics" name="Jacob Dykstra" linkedin="https://www.linkedin.com/in/jacob-dykstra-071889268/" />
                    <LeadProfile title="Electrical" name="Evan Rutten" linkedin="https://www.linkedin.com/in/evan-rutten/" />
                </div>

                <h2>Team Leads</h2>
                <hr />
                <div class="profiles_list">
                    <LeadProfile title="Aerodynamics" name="Hayden Foley" linkedin="https://www.linkedin.com/in/hayden-foley-a67b44235" />
                    <LeadProfile title="Aerodynamics" name="Ian Castelino" linkedin="https://www.linkedin.com/in/ian-castelino/" />
                    <LeadProfile title="Brakes" name="Sheel Sachdev" linkedin="https://www.linkedin.com/in/sheel-sachdev-0648a023b/" />
                    <LeadProfile title="Business" name="Maria Maldonado" linkedin="https://www.linkedin.com/in/maria-maldonado-94b619223/" />
                    <LeadProfile title="Driveline" name="Christian Alloway" linkedin="https://www.linkedin.com/in/christian-alloway-9a939a201/" />
                    <LeadProfile title="Electrical" name="Rayne van Voorst" linkedin="https://www.linkedin.com/in/rayne-van-voorst-691030225/" />
                    <LeadProfile title="Electrical" name="Zohair Salman" linkedin="https://www.linkedin.com/in/zohairsalman/" />
                    <LeadProfile title="Embedded" name="Riyan Noaman" linkedin="https://www.linkedin.com/in/riyan-noaman-526744211/" />
                    <LeadProfile title="Frame" name="Julian Vanlandschoot" />
                    <LeadProfile title="Suspension" name="Korab Islami" linkedin="https://www.linkedin.com/in/korabislami/" />
                    <LeadProfile title="Suspension" name="Owen Frey" linkedin="https://www.linkedin.com/in/owen-frey-8435b3261/" />
                </div>

                <h2>Senior Members</h2>
                <hr />
                <div class="profiles_list">
                    <LeadProfile title="Aerodynamics" name="Anish Ganapathyraju" linkedin="https://www.linkedin.com/in/anish-ganapathyraju-24aa8832a/" />
                </div>
            </div>
            <NavFooter></NavFooter>
        </div>
    </div>
</template>

<style scoped>
.landing_page_image {
    width: 100%;
    height: 100%;

    /* The image used */
    background-image: url("/media/team_photo.webp");

    /* Set a specific height */
    min-height: 100vh;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.team {
    background-color: var(--gryphon-black);
    padding: 7em 2em 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gryphon-white);
}

.meet_the_team {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1200px;
    
    padding-top: 4em; /* So we are not hidden under navbar on some screens */ 
    width: 20%; 
    min-width: 300px;  
    position: fixed;
    bottom: 25px;
    left: 25px;
}

.title {
    display: flex;            /* lay the H1s out in a row */
    align-items: center;      /* vertically center them */
}

h1 {
    text-align: center;
    font-size: 6vw;
    font-weight: bolder;
    margin: 0;
    padding: 0 10px;
}

.yellow_team {
    color: var(--gryphon-yellow);
}

.red_team {
    color: var(--gryphon-red);
}

hr {
    border: 0;
    clear: both;
    display: block;
    width: 99%;
    background: linear-gradient(to right, var(--gryphon-yellow) 5%, var(--gryphon-red) 50%, var(--gryphon-yellow) 95%);
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

@media screen and (max-width: 800px) {
    .landing_page_image {
        background-image: linear-gradient(#000 0%, #0003 33%), url("/media/team_photo.webp");
    }
    
    .title {
        white-space: normal;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    h1 {
        font-size: 16vw;
        line-height: 1;
        margin: 1vw;
    }

    .meet_the_team {
        flex-direction: flex;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 3rem;
        width: auto;
        min-width: 0;
        transform: translateX(45%);
    }
}

.floating_scroll_body {
    z-index: 1;
    width: 100%;
    top: 100%;
    background-color: rgba(255, 255, 255, 0);
    position: absolute;
}

</style>
