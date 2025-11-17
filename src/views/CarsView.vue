<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import CarGallery from "@/components/CarGallery.vue";

const ourCars = [
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
        id: 13,
        images: ["grc13", "back", "frame", "build"],
        about: undefined,
        stats: undefined,
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
        id: 15,
        images: ["team_photo", "autocross"],
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
        id: 22,
        images: ["grc22"],
        about: "GRC22 is the first fully electric car and advanced aero design built by Gryphon Racing.",
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
];

const currCarHasResults = ref(false);
const selectedCar = ref(ourCars.at(0));
const timelineRef = ref<HTMLElement | null>(null);

function updateSelectedCar(id: number) {
    selectedCar.value = ourCars.find(car => car.id === id);
    currCarHasResults.value = selectedCar.value?.results != null;
}

function getCarImagePath(car: any) {
    if (car.images && car.images.length > 0) {
        return `/all_cars/grc${car.id}/${car.images[0]}.webp`;
    }
    return "";
}

</script>

<template>
    <div class="cars_view">
        <!-- Horizontal Timeline -->
        <div class="timeline-container">
            <h3 class="timeline-title">Gryphon Racing History</h3>
            
            <div class="timeline-wrapper">
                <!-- Timeline -->
                <div 
                    ref="timelineRef" 
                    class="timeline"
                >

                    <!-- Timeline Nodes with Car Images -->
                    <div 
                        v-for="car in ourCars" 
                        :key="car.id"
                        @click="updateSelectedCar(car.id)"
                        class="timeline-node"
                        :class="{ 'selected': selectedCar?.id === car.id }"
                    >
                        <!-- Car Image -->
                        <div class="car-image-container">
                            <img 
                                v-if="car.images && car.images.length > 0"
                                :src="getCarImagePath(car)"
                                :alt="`GRC ${car.id}`"
                                class="car-image"
                            />
                            <div v-else class="car-placeholder">
                                <span>GRC {{ car.id }}</span>
                            </div>
                        </div>
                        
                        <!-- Car Label -->
                        <div class="node-label">
                            <span class="car-name">GRC {{ car.id }}</span>
                        </div>
                    </div>
                </div>
            </div>
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
    color: var(--gryphon-white);
    background-color: var(--gryphon-black);
    padding: 5.2em 0 4em;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    width: 100%;
}

/* Timeline Container */
.timeline-container {
    width: 100%;
    max-width: 100vw;
    margin-bottom: 3em;
    padding: 2em 0 1em;
    overflow-x: hidden;
}

.timeline-title {
    text-align: center;
    font-size: 4em;
    text-decoration: underline;
    text-decoration-color: var(--gryphon-red);
    margin-bottom: 2em;
    color: var(--gryphon-white);
    padding: 0 2em;
}

.timeline-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
}

/* Timeline - Horizontal Scroll with Mouse Wheel */
.timeline {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 3em 2em;
    position: relative;
    scroll-behavior: smooth;
    gap: 2em;
}

/* Hide scrollbar but keep functionality */
.timeline::-webkit-scrollbar {
    display: none;
}

.timeline {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Timeline Node */
.timeline-node {
    min-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.timeline-node:hover {
    transform: scale(1.05);
}

.timeline-node.selected {
    transform: scale(1.15);
}

/* Car Image Container */
.car-image-container {
    width: 360px;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    background-color: #2a2a2a;
    border: 3px solid #444;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
}

.timeline-node.selected .car-image-container {
    border: 4px solid var(--gryphon-yellow);
    box-shadow: 0 0 25px rgba(220, 20, 60, 0.6),
                0 0 40px rgba(255, 215, 0, 0.4);
}

.timeline-node:hover .car-image-container {
    border-color: var(--gryphon-red);
    box-shadow: 0 6px 16px rgba(220, 20, 60, 0.4);
}

/* Car Image */
.car-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
}

.timeline-node:hover .car-image {
    transform: scale(1.05);
}

/* Car Placeholder (for cars without images) */
.car-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #333 0%, #1a1a1a 100%);
    color: #666;
    font-size: 1.5em;
    font-weight: bold;
}

.timeline-node.selected .car-placeholder {
    background: linear-gradient(135deg, var(--gryphon-red) 0%, #1a1a1a 100%);
    color: var(--gryphon-yellow);
}

/* Node Label */
.node-label {
    text-align: center;
    padding: 0.5em 1em;
    border-radius: 8px;
    background-color: transparent;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.timeline-node.selected .node-label {
    background-color: rgba(220, 20, 60, 0.2);
    border: 2px solid var(--gryphon-red);
}

.car-name {
    font-size: 1em;
    color: #999;
    font-weight: normal;
    transition: all 0.3s ease;
}

.timeline-node.selected .car-name {
    font-size: 1.2em;
    color: var(--gryphon-yellow);
    font-weight: bold;
}

.timeline-node:hover .car-name {
    color: var(--gryphon-white);
}

/* Car Info Section */
.car_info {
    width: 90%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.gallery {
    margin-bottom: 2em;
    display: flex;
    justify-content: center;
    width: 90%;
}

h1 {
    text-align: center;
    margin-bottom: 1em;
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
    background-color: var(--gryphon-light-black);
}

/* Responsive Design */
@media screen and (max-width: 850px) {
    .timeline-container {
        padding: 1em 0;
    }

    .timeline-title {
        font-size: 1.5em;
        margin-bottom: 1.5em;
    }

    .timeline {
        padding: 2em 1em;
        gap: 1.5em;
    }

    .timeline-node {
        min-width: 150px;
    }

    .car-image-container {
        width: 140px;
        height: 95px;
    }

    .car-name {
        font-size: 0.9em;
    }

    .timeline-node.selected .car-name {
        font-size: 1.1em;
    }

    .car_info {
        width: 95%;
    }
}
</style>