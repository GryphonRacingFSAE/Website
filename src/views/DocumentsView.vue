<template>
    <div class="roots">
        <h1 style="color: black" class="centered-title">Club Documents</h1>
        <div v-for="(document, index) in documents" :key="index" class="document">
            <h2 style="color: black; text-align: center">{{ document.title }}</h2>
            <a :href="document.url" target="_blank" class="centered-link" style="margin-top: 10px">View Document</a>

            <p class="solid"></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            documents: [
                {
                    title: "Constitution",
                    url: "/media/Constitution.pdf",
                },
                {
                    title: "Individual Responsibility Signoff",
                    url: "/media/Individual_Responsibility_Signoff.pdf",
                },
                {
                    title: "Leadership Code of Conduct",
                    url: "/media/Leadership_Code_of_Conduct.pdf",
                },
                {
                    title: "Vehicle Usage Procedure",
                    url: "/media/Vehicle_Usage_Procedure.pdf",
                },
            ],
        };
    },
};
</script>

<style scoped>
.document {
    margin-bottom: 5px;
}

.pdf-document {
    border-style: solid;
    border-color: rgb(238, 57, 57);
    width: 110%;
    height: 100%;
    display: flex;
}
@media screen and (max-width: 500px) {
    .individuals > p {
        margin-bottom: 0.5em;
    }
}
.centered-link {
    display: block;
    text-align: center;
}
.roots {
    background-color: white;
    padding-top: 6px;
    padding-bottom: 2em;
}
.centered-title {
    text-align: center; 
    margin-top: 100px; 
}
</style>
