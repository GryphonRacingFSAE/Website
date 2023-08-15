<template>
    <div class="root">
        <h1>Sponsors</h1>
        <div class="list_container platinum">
            <div class="sponsor_list">
                <img src="/sponsors/apt.png" />
                <img src="/sponsors/musashi.png" />
                <img src="/sponsors/uog_eng.png" />
                <img src="/sponsors/true_gear.png" />
                <img src="/sponsors/fastenal.png" />
            </div>
        </div>
        <div class="list_container gold">
            <div class="sponsor_list">
                <img src="/sponsors/denso.png" />
                <img src="/sponsors/aoc.png" />
                <img src="/sponsors/jmp.png" />
                <img src="/sponsors/applied_precision.png" />
                <img src="/sponsors/parker.png" />
                <img src="/sponsors/summit_laser.png" />
                <img src="/sponsors/dominos.png" />
                <img src="/sponsors/westex.png" />
                <img src="/sponsors/lab_fund.png" />
                <img src="/sponsors/grain_farmers.png" />
            </div>
        </div>
        <div class="list_container silver">
            <div class="sponsor_list">
                <img src="/sponsors/quaife.png" />
                <img src="/sponsors/skf.png" />
                <img src="/sponsors/linamar.png" />
                <img src="/sponsors/vibrant.png" />
                <img src="/sponsors/webber.png" />
                <img src="/sponsors/evonik.png" />
                <img src="/sponsors/gryphon_technical.png" />
                <img src="/sponsors/westview.png" />
            </div>
        </div>
        <div class="list_container bronze">
            <div class="sponsor_list">
                <img src="/sponsors/aurora_bearing.png" />
                <img src="/sponsors/bodycote.png" />
                <img src="/sponsors/composites_canada.png" />
                <img src="/sponsors/hoosier.png" />
                <img src="/sponsors/paradigm.png" />
                <img src="/sponsors/grand_river_sign_design.png" />
                <img src="/sponsors/vr3.png" />
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
    padding: 0% 5%;
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

.platinum > .sponsor_list > img {
    width: 400px;
    margin: 1em;
}

.platinum {
    background-color: #e5e4e2;
}

.gold > .sponsor_list > img {
    width: 175px;
    margin: 1em;
}

.gold {
    background-color: gold;
}

.silver > .sponsor_list > img {
    width: 150px;
    margin: 1em;
}
.silver {
    background-color: silver;
}

.bronze > .sponsor_list > img {
    width: 100px;
    margin: 1em;
}
.bronze {
    background-color: #cd7f32;
}
</style>
