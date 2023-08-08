<template>
    <div class="root">
        <h1>Sponsors</h1>
        <h2>Platinum</h2>
        <div class="platinum">
            <img src="/sponsors/apt.png" />
            <img src="/sponsors/musashi.png" />
            <img src="/sponsors/uog_eng.png" />
            <img src="/sponsors/true_gear.png" />
            <img src="/sponsors/fastenal.png" />
        </div>
    </div>
</template>

<style scoped>
.root {
    background-color: var(--gryphon-white);
    padding-top: 7em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--gryphon-light-black);
}

.platinum {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.platinum > * {
    width: 300px;
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
