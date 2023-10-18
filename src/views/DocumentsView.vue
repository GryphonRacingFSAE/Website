<template>
    <div class="roots">
        <div class="links-wrapper">
            <a href="/media/Constitution.pdf" target="_blank">Constitution</a>
            <hr />
            <a href="/media/Individual_Responsibility_Signoff.pdf" target="_blank">Individual Responsibility Signoff</a>
            <hr />
            <a href="/media/Leadership_Code_of_Conduct.pdf" target="_blank">Leadership Code of Conduct</a>
            <hr />
            <a href="/media/Vehicle_Usage_Procedure.pdf" target="_blank">Vehicle Usage Procedure</a>
            <hr />
        </div>

        <!-- <div v-for="(document, index) in documents" :key="index" class="document">
            <hr/>
            <a :href="document.url" target="_blank" class="centered-link" style="margin-top: 10px">{{ document.title }}</a>

            <p class="solid"></p>
        </div> -->
    </div>
</template>

<style scoped>
.document {
    margin-bottom: 5px;
}

.links-wrapper {
    padding-right: 1em;
    padding-left: 1em;
}

.pdf-document {
    border-style: solid;
    border-color: rgb(238, 57, 57);
    width: 110%;
    height: 100%;
    display: flex;
}

a {
    display: block;
    font-size: 1.5em;
    text-decoration: none;
    padding-top: 1em;
    color: black;
    transition-duration: 0.2s;
}
a:hover {
    color: var(--gryphon-red);
    translate: 5px;
}

.roots {
    background-color: white;
    padding-top: 5em;
    padding-bottom: 2em;
}
hr {
    border: 0;
    clear: both;
    display: block;
    width: 99%;
    background: linear-gradient(to right, var(--gryphon-red) 0%, var(--gryphon-white) 80%);
    height: 3px;
    border-radius: 50px;
}

@media screen and (min-width: 500px) {
    .roots {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
