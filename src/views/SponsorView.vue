<template>
    <div class="root">
        <div class="list_container diamond">
            <h2>Diamond Sponsors</h2>
            <div class="sponsor_list">
                <a href="https://www.uoguelph.ca/engineering/">
                    <img src="/sponsors/lab_fund.webp" width="400" height="402" alt="Lab Fund" />
                </a>
                <a href="https://musashiamericas.com/">
                    <img src="/sponsors/musashi.webp" width="400" height="71" alt="Musashi" />
                </a>
            </div>
        </div>
        <div class="list_container platinum">
            <h2>Platinum Sponsors</h2>
            <div class="sponsor_list">
                <a href="https://www.answerprecision.com/">
                    <img src="/sponsors/apt.webp" width="400" height="120" alt="APT" />
                </a>
                <a href="https://true-gear.com/">
                    <img src="/sponsors/true_gear.webp" width="400" height="144" alt="True Gear" />
                </a>
                <a href="https://www.denso.com/us-ca/en/">
                    <img src="/sponsors/denso.webp" width="400" height="78" alt="Denso" />
                </a>
                <a href="https://www.uoguelph.ca/engineering/">
                    <img src="/sponsors/uog_eng.webp" width="400" height="129" alt="UOG Engineering" />
                </a>
            </div>
        </div>
        <div class="list_container gold">
            <h2>Gold Sponsors</h2>
            <div class="sponsor_list">
                <a href="https://aocresins.com/en-amr/home/">
                    <img src="/sponsors/aoc.webp" width="400" height="400" alt="AOC" />
                </a>
                <!-- <img src="/sponsors/applied_precision.webp" width="400" height="141" alt="Applied Precision" /> -->
                <!-- <img src="/sponsors/parker.webp" width="400" height="154" alt="Parker" /> -->
                <a href="https://www.summitlaser.ca/">
                    <img src="/sponsors/summit_laser.webp" width="400" height="400" alt="Summit Laser" />
                </a>
                <a href="https://www.dominos.ca/en/">
                    <img src="/sponsors/dominos.webp" width="400" height="400" alt="Dominos" />
                </a>
                <a href="https://gfo.ca/">
                    <img src="/sponsors/grain_farmers.webp" width="400" height="400" alt="Grain Farmers" />
                </a>
            </div>
        </div>
        <div class="list_container silver">
            <h2>Silver Sponsors</h2>
            <div class="sponsor_list">
                <a href="http://westexcoatings.ca/">
                    <img src="/sponsors/westex.webp" width="400" height="144" alt="Westex" />
                </a>
                <a href="https://www.jmpsolutions.com/">
                    <img src="/sponsors/jmp.webp" width="400" height="138" alt="JMP" />
                </a>
                <a href="https://www.skf.com/ca/en">
                    <img src="/sponsors/skf.webp" width="400" height="191" alt="SKF" />
                </a>
                <!-- <img src="/sponsors/linamar.webp" width="400" height="101" alt="Linamar" /> -->
                <!-- <img src="/sponsors/vibrant.webp" width="400" height="120" alt="Vibrant" /> -->
                <!-- <img src="/sponsors/gryphon_technical.webp" width="400" height="184" alt="Gryphon Technical" /> -->
                <!-- <img src="/sponsors/westview.webp" width="400" height="205" alt="Westview" /> -->
            </div>
        </div>
        <div class="list_container bronze">
            <h2>Bronze Sponsors</h2>
            <div class="sponsor_list">
                <a href="https://easycomposites.co.uk">
                    <img src="/sponsors/easy_composites.webp" width="400" height="185" alt="Easy Composites" />
                </a>
                <a href="https://corporate.evonik.com/en">
                    <img src="/sponsors/evonik.webp" width="400" height="104" alt="Evonik" />
                </a>
                <a href="https://grsigndesign.com/">
                    <img src="/sponsors/grand_river_sign_design.webp" width="400" height="98" alt="Grand River Sign Design" />
                </a>
                <a href="https://compositescanada.com/">
                    <img src="/sponsors/composites_canada.webp" width="400" height="106" alt="Composites Canada" />
                </a>
                <a href="https://www.hoosiertirecanada.com/">
                    <img src="/sponsors/hoosier.webp" width="400" height="123" alt="Hoosier" />
                </a>

                <!-- <img src="/sponsors/aurora_bearing.webp" width="400" height="129" alt="Aurora Bearing" /> -->
                <!-- <img src="/sponsors/quaife.webp" width="400" height="97" alt="Quaife" /> -->
                <!-- <img src="/sponsors/paradigm.webp" width="400" height="81" alt="Paradigm" /> -->
                <!-- <img src="/sponsors/vr3.webp" height="143" width="400" alt="VR3" /> -->
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
            <p>Suzana Milosevic</p>
            <p>Mohammad Al Janaideh</p>
            <p>Mohammad Biglarbegian</p>
            <p>Ken Graham</p>
            <p>Shannon Macdonald</p>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 2.5em;
    margin: 0;
}

h2 {
    padding-bottom: 4px;
    text-align: center;
    font-size: 1.8em;
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
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.list_container {
    width: 95%;
    max-width: 1200px;
    margin-top: 1.5em;
}

.individuals {
    max-width: 1200px;
    padding: 1em 5% 1em;
    display: flex;
    flex-direction: row;
    font-size: 1.5em;
    justify-content: center;
    flex-wrap: wrap;
}

.individuals > p {
    margin: 0 1em 1em;
}

.sponsor_list a,
.sponsor_list img {
    height: auto;
    width: 95%;
    padding: 2%;
}

.diamond > .sponsor_list > a,
.diamond > .sponsor_list > img {
    max-width: 25%;
}

.diamond > .sponsor_list {
    background: linear-gradient(to right, #98d9f7, #b2effa);
}

.diamond > h2 {
    color: #98d9f7;
}

.platinum > .sponsor_list > a,
.platinum > .sponsor_list > img {
    max-width: 20%;
}

.platinum > .sponsor_list {
    background: linear-gradient(to right, #93918e, #d8d7d4);
}

.platinum > h2 {
    color: #93918e;
}

.gold > .sponsor_list > a,
.gold > .sponsor_list > img {
    max-width: 12%;
}

.gold > .sponsor_list {
    background: linear-gradient(to right, #c09b24, #ddc579);
}

.gold > h2 {
    color: #caa52e;
}

.silver > .sponsor_list > a,
.silver > .sponsor_list > img {
    max-width: 12%;
}

.silver > .sponsor_list {
    background: linear-gradient(to right, #c7c6c6, #ededed);
}

.silver > h2 {
    color: #c7c6c6;
}

.bronze > .sponsor_list > a,
.bronze > .sponsor_list > img {
    max-width: 10%;
}

.bronze > .sponsor_list {
    background: linear-gradient(to right, #bf7226, #f4c292);
}

.bronze > h2 {
    color: #bd732a;
}

@media screen and (max-width: 750px) {
    .diamond > .sponsor_list img {
        max-width: 45%;
    }

    .platinum > .sponsor_list img {
        max-width: 35%;
    }

    .gold > .sponsor_list img {
        max-width: 20%;
    }

    .silver > .sponsor_list img {
        max-width: 18%;
    }

    .bronze > .sponsor_list img {
        max-width: 15%;
    }
}

@media screen and (max-width: 500px) {
    .individuals > p {
        margin-bottom: 0.5em;
    }
}
</style>
<script setup lang="ts"></script>
