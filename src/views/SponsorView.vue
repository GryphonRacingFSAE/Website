<template>
    <div class="root">
        <h1>Sponsors</h1>
        <h2>Platinum</h2>
        <div class="sponsor_list platinum">
            <img src="/sponsors/apt.png" />
            <img src="/sponsors/musashi.png" />
            <img src="/sponsors/uog_eng.png" />
            <img src="/sponsors/true_gear.png" />
            <img src="/sponsors/fastenal.png" />
        </div>
        <h2>Gold</h2>
        <div class="sponsor_list gold">
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
        <h2>Silver</h2>
        <div class="sponsor_list silver">
            <img src="/sponsors/quaife.png" />
            <img src="/sponsors/skf.png" />
            <img src="/sponsors/linamar.png" />
            <img src="/sponsors/vibrant.png" />
            <img src="/sponsors/webber.png" />
            <img src="/sponsors/evonik.png" />
            <img src="/sponsors/gryphon_technical.png" />
            <img src="/sponsors/westview.png" />
        </div>
        <h2>Bronze</h2>
        <div class="sponsor_list bronze">
            <img src="/sponsors/aurora_bearing.png" />
            <img src="/sponsors/bodycote.png" />
            <img src="/sponsors/composites_canada.png" />
            <img src="/sponsors/hoosier.png" />
            <img src="/sponsors/paradigm.png" />
            <img src="/sponsors/grand_river_sign_design.png" />
            <img src="/sponsors/vr3.png" />
        </div>
        <h2>Individuals</h2>
        <div class="sponsor_list">
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
}

.sponsor_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.sponsor_list > p {
    margin: 1em;
    font-size: 1.5em;
}

.platinum > * {
    width: 300px;
    margin: 1em;
}

.gold > * {
    width: 200px;
    margin: 1em;
}

.silver > * {
    width: 150px;
    margin: 1em;
}

.bronze > * {
    width: 100px;
    margin: 1em;
}

.profiles_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>
