<template>
    <div class="root">
        <h1>Sponsors</h1>
        <div class="list_container platinum">
            <div class="sponsor_list">
                <img src="/sponsors/apt.webp" width="400" height="120" alt="APT"/>
                <img src="/sponsors/musashi.webp" width="400" height="71" alt="Musashi"/>
                <img src="/sponsors/uog_eng.webp" width="400" height="129" alt="UOG Engineering"/>
                <img src="/sponsors/true_gear.webp" width="400" height="144" alt="True Gear"/>
                <img src="/sponsors/fastenal.webp" width="400" height="87" alt="Fastenal"/>
            </div>
        </div>
        <div class="list_container gold">
            <div class="sponsor_list">
                <img src="/sponsors/denso.webp" width="400" height="78" alt="Denso"/>
                <img src="/sponsors/aoc.webp" width="400" height="400" alt="AOC" />
                <img src="/sponsors/jmp.webp"  width="400" height="138" alt="JMP"/>
                <img src="/sponsors/applied_precision.webp" width="400" height="141" alt="Applied Precision" />
                <img src="/sponsors/parker.webp" width="400" height="154" alt="Parker"  />
                <img src="/sponsors/summit_laser.webp" width="400" height="400" alt="Summit Laser"/>
                <img src="/sponsors/dominos.webp" width="400" height="400" alt="Dominos"/>
                <img src="/sponsors/westex.webp" width="400" height="144" alt="Westex"/>
                <img src="/sponsors/lab_fund.webp" width="400" height="402" alt="Lab Fund"/>
                <img src="/sponsors/grain_farmers.webp" width="400" height="400" alt="Grain Farmers"/>
            </div>
        </div>
        <div class="list_container silver">
            <div class="sponsor_list">
                <img src="/sponsors/quaife.webp" width="400" height="97" alt="Quaife"/>
                <img src="/sponsors/skf.webp" width="400" height="191" alt="SKF"/>
                <img src="/sponsors/linamar.webp" width="400" height="101" alt="Linamar"/>
                <img src="/sponsors/vibrant.webp" width="400" height="120" alt="Vibrant"/>
                <img src="/sponsors/webber.webp" width="400" height="180" alt="Webber"/>
                <img src="/sponsors/evonik.webp" width="400" height="104" alt="Evonik"/>
                <img src="/sponsors/gryphon_technical.webp" width="400" height="184" alt="Gryphon Technical"/>
                <img src="/sponsors/westview.webp" width="400" height="205" alt="Westview"/>
            </div>
        </div>
        <div class="list_container bronze">
            <div class="sponsor_list">
                <img src="/sponsors/aurora_bearing.webp" width="400" height="129" alt="Aurora Bearing"/>
                <img src="/sponsors/bodycote.webp" width="400" height="203" alt="Bodycote"/>
                <img src="/sponsors/composites_canada.webp" width="400" height="106" alt="Composites Canada"/>
                <img src="/sponsors/hoosier.webp" width="400" height="123" alt="Hoosier"/>
                <img src="/sponsors/paradigm.webp" width="400" height="81" alt="Paradigm"/>
                <img src="/sponsors/grand_river_sign_design.webp" width="400" height="98" alt="Grand River Sign Design"/>
                <img src="/sponsors/vr3.webp" height="143" width="400" alt="VR3"/>
            </div>
        </div>
        <br />
        <br />
        <h2>Special Thanks</h2>
        <div class="individuals">
            <p>Barry Verspagen</p>
            <p>Dave Wright</p>
            <p>John Cloutier</p>
            <p>John Runciman</p>
            <p>Karine Semina</p>
            <p>Mohammad Biglarbegian</p>
            <p>Ken Graham</p>
            <p>Shannon Macdonald</p>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 3em;
    margin: 0;
}

h2 {
    font-size: 2em;
    margin: 0;
}

.root {
    background-color: var(--gryphon-white);
    padding-top: 7em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gryphon-light-black);
    padding-left: 5%;
    padding-right: 5%;
}

.sponsor_list {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--gryphon-white);
}

.list_container {
    width: 95%;
    padding-left: 5%;
    margin-top: 3em;
}

.sponsor_list > p {
    margin: 1em;
    font-size: 1.5em;
}

.individuals {
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    font-size: 1.5em;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.individuals > p {
    margin-left: 1em;
    margin-right: 1em;
}

.sponsor_list img {
    height: auto;
    width: 95%;
}

.platinum > .sponsor_list > img {
    max-width: 400px;
    margin: 1em;
}

.platinum {
    background-color: #e5e4e2;
}

.gold > .sponsor_list > img {
    max-width: 175px;
    margin: 1em;
}

.gold {
    background-color: gold;
}

.silver > .sponsor_list > img {
    max-width: 150px;
    margin: 1em;
}
.silver {
    background-color: silver;
}

.bronze > .sponsor_list > img {
    max-width: 100px;
    margin: 1em;
}
.bronze {
    background-color: #cd7f32;
}
</style>
<script setup lang="ts">
</script>
