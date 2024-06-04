<script setup lang="ts">
import { ref } from "vue";
import CarGallery from "@/components/CarGallery.vue";

const ourCars = [
    {
        id: 22,
        images: ["grc22"],
        about: "GRC 22 is currently under construction. It is Gryphon Racing's first fully electric car. It's slated to be completed by quarter two of 2024.",
        stats: undefined,
        // stats: {
        //   Weight: "Test",
        //   Length: "Test",
        //   Width: "Test",
        //   "Top Speed": "Test",
        //   Engine: "Test",
        // },
        results: {
            "Formula Hybrid + Electric": {
                Overall: "13th / 30",
            },
        },
    },

    {
        id: 19,
        images: ["backfire", "driving", "parking", "team_photo", "transport"],
        about: "Currently, GRC 19, is Gryphon Racing's only competition ready car. It will soon be retired in favor of GRC 22, and will be the last gas powered car built by Gryphon Racing.",
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "72th / 108",
                "Presentation Event": "60th / 107",
                "Design Event": "45th / 106",
                "Cost Event": "51st / 108",
                "Acceleration Event": "47th / 86",
                "Skid-Pad Event": "66th / 86",
                "Autocross Event": "86th / 86",
                Endurance: "46th / 58",
            },
            "Toronto Shootout 2023": {
                Overall: "12th / 14",
            },
        },
    },

    {
        id: 18,
        images: ["drifting", "assembly", "car_show", "frame", "thanks_sponsors", "transport", "unveiling"],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "63rd / 114",
                "Presentation Event": "62nd / 114",
                "Design Event": "84th / 111",
                "Cost Event": "80th / 114",
                "Acceleration Event": "14th / 90",
                "Skid-Pad Event": "38th / 90",
                "Autocross Event": "66th / 80",
            },
        },
    },

    {
        id: 17,
        images: ["grc17", "team", "build", "naked", "ready"],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "79th / 109",
                "Presentation Event": "69th / 110",
                "Design Event": "86th / 108",
                "Cost Event": "20th / 109",
                "Acceleration Event": "56th / 89",
                "Skid-Pad Event": "74th / 83",
                "Autocross Event": "76th / 88",
            },
        },
    },

    {
        id: 16,
        images: ["grc16", "team", "areo", "build", "driving", "fixing", "model"],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "111th / 115",
                "Presentation Event": "84th / 115",
                "Design Event": "74th / 113",
                "Cost Event": "89th / 115",
                "Skid-Pad Event": "83rd / 83",
                "Autocross Event": "88th / 91",
            },
        },
    },

    {
        id: 15,
        images: [],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "72nd / 109",
                "Design Event": "57th / 108",
                "Cost Event": "9th / 110",
                "Autocross Event": "50th / 78",
            },
        },
    },

    {
        id: 14,
        images: ["grc14", "team", "team2", "parked", "model"],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "86th / 107",
                "Presentation Event": "101st / 107",
                "Design Event": "97th / 105",
                "Cost Event": "14th / 108",
                "Autocross Event": "71st / 71",
            },
        },
    },

    {
        id: 13,
        images: ["grc13", "back", "frame", "build"],
        about: undefined,
        stats: undefined,
    },

    {
        id: 12,
        images: ["grc12"],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "70th / 105",
                "Presentation Event": "78th / 102",
                "Design Event": "98th / 102",
                "Cost Event": "53rd /105th",
                "Acceleration Event": "18th / 75",
                "Skid-Pad Event": "65th / 74",
                "Autocross Event": "55th / 55",
            },
        },
    },

    {
        id: 11,
        images: [],
        about: undefined,
        stats: undefined,
        results: {
            "Formula California": {
                Overall: "52nd / 61",
                "Presentation Event": "34th / 60",
                "Design Event": "59th / 59",
                "Cost Event": "29th / 58",
                "Autocross Event": "38th / 38",
                Endurance: "30th / 30",
                Economy: "27th / 30",
            },
        },
    },
    {
        id: 9,
        images: [],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "58th / 91",
                "Presentation Event": "79th / 88",
                "Design Event": "50th / 89",
                "Cost Event": "25th / 91",
                "Acceleration Event": "51st / 64",
                "Skid-Pad Event": "66th/ 66",
                "Autocross Event": "45th / 66",
            },
        },
    },

    {
        id: 8,
        images: ["grc08", "nose"],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "86th / 104",
                "Presentation Event": "45th / 104",
                "Design Event": "61st / 103",
                "Cost Event": "77th / 105",
                "Autocross Event": "75th / 75",
                Economy: "34th / 42",
            },
        },
    },

    {
        id: 7,
        images: [],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "96th / 106",
                "Presentation Event": "91st / 100",
                "Design Event": "94th / 104",
                "Cost Event": "82nd / 106",
                "Acceleration Event": "73rd / 106",
                "Skid-Pad Event": "76th/ 76",
                "Autocross Event": "80th / 90",
                Economy: "37.45th / 37.45nd",
            },
        },
    },

    {
        id: 5,
        images: ["team_photo", "grc05"],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "61st / 120",
                "Presentation Event": "65th / 110",
                "Design Event": "43rd / 110",
                "Cost Event": "84th / 120",
                "Acceleration Event": "39th / 97",
                "Skid-Pad Event": "48th / 95",
                "Autocross Event": "39th / 99",
                Economy: "44th / 44",
            },
        },
    },

    {
        id: 4,
        images: ["team_photo", "grc04"],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "17th / 134",
                "Presentation Event": "35th / 128",
                "Design Event": "48th / 129",
                "Cost Event": "102nd / 133",
                "Acceleration Event": "23rd / 100",
                "Skid-Pad Event": "53rd / 99",
                "Autocross Event": "7th / 103",
                Economy: "16th / 41",
            },
        },
    },

    {
        id: 3,
        images: ["team_photo", "grc03", "cad", "frame"],
        about: undefined,
        stats: undefined,
        results: {
            "Formula Michigan": {
                Overall: "47th / 123",
                "Presentation Event": "81st / 123",
                "Design Event": "43rd / 105",
                "Cost Event": "78th / 123",
                "Acceleration Event": "21st / 78",
                "Skid-Pad Event": "6th / 76",
                "Autocross Event": "38th / 87",
                Economy: "31st / 32",
            },
        },
    },
];

const currCarHasResults = ref(false);
const selectedCar = ref(ourCars.at(0));

function updateSelectedCar(id: number) {
    selectedCar.value = ourCars.find(car => car.id === id);
    currCarHasResults.value = selectedCar.value?.results != null;
}
</script>

<template>
    <div class="cars_view">
        <!-- Car Selector -->
        <div class="cars_selector">
            <h3 class="selector_title">Select a Car</h3>
            <button v-for="car in ourCars" :key="car.id" @click="updateSelectedCar(car.id)" :class="{ selected_car: selectedCar?.id === car.id }">GRC {{ car.id }}</button>
        </div>

        <!-- Display car and info -->
        <div class="car_info">
            <h1>GRC {{ selectedCar?.id }}</h1>
            <div class="gallery" v-if="selectedCar?.images.length">
                <CarGallery :id="selectedCar?.id || 0" :images="selectedCar?.images || []" />
            </div>

            <div class="about_container" v-if="selectedCar?.about != null">
                <h2>About</h2>
                <p class="about">{{ selectedCar?.about }}</p>
            </div>

            <div class="table_container" v-if="selectedCar?.stats != null">
                <h2>Statistics</h2>
                <table class="stats_table">
                    <tr v-for="(stat, key) in selectedCar?.stats" :key="key">
                        <td>{{ key }}</td>
                        <td>{{ stat }}</td>
                    </tr>
                </table>
            </div>

            <div class="results_container" v-if="selectedCar?.results != null">
                <div class="table_container" v-for="(results, event) in selectedCar?.results" :key="event">
                    <h2>{{ event }} Results</h2>
                    <table class="stats_table">
                        <tr v-for="(stat, key) in results" :key="key">
                            <td>{{ key }}</td>
                            <td>{{ stat }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cars_view {
    color: var(--gryphon-light-black);
    background-color: var(--gryphon-white);
    padding: 5.2em 0 4em;
    display: flex;
}

.gallery {
    margin-bottom: 2em;
    display: flex;
    justify-content: center;
    width: 90%;
}

.cars_selector {
    width: 33vw;
    margin-bottom: 2em;
    padding-top: 4em;
    padding-right: 1em;
    padding-left: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 240px;
}

.cars_selector button {
    border-radius: 5px;
    font-size: 20px;
    border: none;
    width: 90%;
    max-width: 250px;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
}

.cars_selector button:not(.selected_car) {
    color: var(--gryphon-light-gray);
}

.cars_selector button:hover:not(.selected_car) {
    color: var(--gryphon-red);
}

.selected_car {
    background-color: var(--gryphon-red-transparent);
    color: var(--gryphon-white);
}

.car_info {
    width: 68vw;
    min-width: 68vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    margin-top: 0;
    margin-bottom: 0.4em;
}

.about_container {
    margin-top: 0;
    margin-bottom: 2em;
    width: 85%;
    text-align: center;
}

.about_container p {
    font-size: 1.3em;
    margin-top: 0;
    margin-bottom: 0;
}

.results_container {
    width: 100%;
}

.table_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
}

.stats_table {
    border-collapse: collapse;
    width: 85%;
    max-width: 750px;
}

.stats_table td,
.stats_table th {
    border: 1px solid #ddd;
    padding: 8px;
}

.stats_table tr:nth-child(even) {
    background-color: #f2f2f2;
}

@media screen and (max-width: 850px) {
    .car_info {
        width: 100%;
    }

    .cars_selector {
        width: 100%;
        padding: 0;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .cars_selector button {
        width: 20%;
        min-width: 100px;
        margin-left: 0.2em;
        margin-right: 0.2em;
        padding-top: 0.25em;
        padding-bottom: 0.25em;
    }

    .selector_title {
        display: none;
    }

    .cars_view {
        flex-direction: column;
    }
}
</style>
