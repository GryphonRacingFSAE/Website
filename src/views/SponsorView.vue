<template>
    <div class="root">
        <h1>Sponsors</h1>
        <div class="list_container platinum">
            <div class="sponsor_list">
                <img src="/sponsors/apt.webp" alt="APT" />
                <img src="/sponsors/musashi.webp" alt="Musashi" />
                <img src="/sponsors/uog_eng.webp" alt="UOG Engineering" />
                <img src="/sponsors/true_gear.webp" alt="True Gear" />
                <img src="/sponsors/fastenal.webp" alt="Fastenal" />
            </div>
        </div>
        <div class="list_container gold">
            <div class="sponsor_list">
                <img src="/sponsors/denso.webp" alt="Denso" />
                <img src="/sponsors/aoc.webp" alt="AOC" />
                <img src="/sponsors/jmp.webp" alt="JMP" />
                <img src="/sponsors/applied_precision.webp" alt="Applied Precision" />
                <img src="/sponsors/parker.webp" alt="Parker" />
                <img src="/sponsors/summit_laser.webp" alt="Summit Laser" />
                <img src="/sponsors/dominos.webp" alt="Dominos" />
                <img src="/sponsors/westex.webp" alt="Westex" />
                <img src="/sponsors/lab_fund.webp" alt="Lab Fund" />
                <img src="/sponsors/grain_farmers.webp" alt="Grain Farmers" />
            </div>
        </div>
        <div class="list_container silver">
            <div class="sponsor_list">
                <img src="/sponsors/quaife.webp" alt="Quaife" />
                <img src="/sponsors/skf.webp" alt="SKF" />
                <img src="/sponsors/linamar.webp" alt="Linamar" />
                <img src="/sponsors/vibrant.webp" alt="Vibrant" />
                <img src="/sponsors/webber.webp" alt="Webber" />
                <img src="/sponsors/evonik.webp" alt="Evonik" />
                <img src="/sponsors/gryphon_technical.webp" alt="Gryphon Technical" />
                <img src="/sponsors/westview.webp" alt="Westview" />
            </div>
        </div>
        <div class="list_container bronze">
            <div class="sponsor_list">
                <img src="/sponsors/aurora_bearing.webp" alt="Aurora Bearing" />
                <img src="/sponsors/bodycote.webp" alt="Bodycote" />
                <img src="/sponsors/composites_canada.webp" alt="Composites Canada" />
                <img src="/sponsors/hoosier.webp" alt="Hoosier" />
                <img src="/sponsors/paradigm.webp" alt="Paradigm" />
                <img src="/sponsors/grand_river_sign_design.webp" alt="Grand River Sign Design" />
                <img src="/sponsors/vr3.webp" alt="VR3" />
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
    font-size: 2.5em;
    margin: 0;
}

h2 {
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

.individuals {
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

.sponsor_list img {
    width: 95%;
    padding: 2%;
}

.platinum > .sponsor_list > img {
    max-width: 25%;
}

.platinum {
    background-color: #e5e4e2;
}

.gold > .sponsor_list > img {
    max-width: 15%;
}

.gold {
    background-color: gold;
}

.silver > .sponsor_list > img {
    max-width: 12%;
}

.silver {
    background-color: silver;
}

.bronze > .sponsor_list > img {
    max-width: 10%;
}

.bronze {
    background-color: #cd7f32;
}

@media screen and (max-width: 750px) {
    .list_container {
        width: 95%;
        padding-left: 5%;
        margin-top: 1.5em;
    }

    .platinum > .sponsor_list > img {
        max-width: 45%;
    }

    .gold > .sponsor_list > img {
        max-width: 20%;
    }

    .silver > .sponsor_list > img {
        max-width: 18%;
    }

    .bronze > .sponsor_list > img {
        max-width: 15%;
    }
}

@media screen and (max-width: 500px) {
    .individuals > p {
        margin-bottom: 0.5em;
    }
}
</style>
