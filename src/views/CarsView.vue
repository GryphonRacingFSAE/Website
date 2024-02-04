<script setup lang="ts">
import {ref} from "vue";
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
  },

  {
    id: 19,
    images: ["backfire", "driving", "parking", "team_photo", "transport"],
    about: "Currently, GRC 19, is Gryphon Racing's only competition ready car. It will soon be retired in favor of GRC 19, and will be the last gas powered car built by Gryphon Racing.",
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "72th / 108th",
        "Presentation Event": "60th / 107th",
        "Design Event": "45th / 106th",
        "Cost Event": "51st / 108th",
        "Acceleration Event": "47th / 86th",
        "Skid-Pad Event": "66th / 86th",
        "Autocross Event": "86th / 86th",
        "Endurance": "46th / 58th",
      },
    }
  },

  {
    id: 18,
    images: ["drifting", "assembly", "car_show", "frame", "thanks_sponsors", "transport", "unveiling"],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "63rd / 114th",
        "Presentation Event": "62nd / 114th",
        "Design Event": "84th / 111th",
        "Cost Event": "80th / 114th",
        "Acceleration Event": "14th / 90th",
        "Skid-Pad Event": "38th / 90th",
        "Autocross Event": "66th / 80th",
      },
    }
  },

  {
    id: 17,
    images: ["grc17", "team", "build", "naked", "ready"],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "79th / 109th",
        "Presentation Event": "69th / 110th",
        "Design Event": "86th / 108th",
        "Cost Event": "20th / 109th",
        "Acceleration Event": "56th / 89th",
        "Skid-Pad Event": "74th / 83rd",
        "Autocross Event": "76th / 88th",
      },
    }
  },

  {
    id: 16,
    images: ["grc16", "team", "areo", "build", "driving", "fixing", "model"],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "111th / 115th",
        "Presentation Event": "84th / 115th",
        "Design Event": "74th / 113th",
        "Cost Event": "89th / 115th",
        "Skid-Pad Event": "83rd / 83rd",
        "Autocross Event": "88th / 91st",
      },
    }
  },

  {
    id: 15,
    images: [],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "72nd / 109th",
        "Design Event": "57th / 108th",
        "Cost Event": "9th / 110th",
        "Autocross Event": "50th / 78th",
      },
    }
  },

  {
    id: 14,
    images: ["grc14", "team", "team2", "parked", "model"],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "86th / 107th",
        "Presentation Event": "101st / 107th",
        "Design Event": "97th / 105th",
        "Cost Event": "14th / 108th",
        "Autocross Event": "71st / 71st",
      },
    }
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
        "Overall": "70th / 105th",
        "Presentation Event": "78th / 102nd",
        "Design Event": "98th / 102nd",
        "Cost Event": "53rd /105th",
        "Acceleration Event": "18th / 75th",
        "Skid-Pad Event": "65th / 74th",
        "Autocross Event": "55th / 55th",
      },
    }
  },

  {
    id: 11,
    images: [],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "Withdrawn",
        "Presentation Event": "34th / 60th",
        "Design Event": "59th / 59th",
        "Cost Event": "29th / 58th",
        "Autocross Event": "38th / 38th",
        "Endurance": "30th / 30th",
        "Economy": "27th / 30th",
      },
    }
  },

  // {
  //   id: 10,
  //   images: [],
  // },

  {
    id: 9,
    images: [],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "58th / 91st",
        "Presentation Event": "79th / 88th",
        "Design Event": "50th / 89th",
        "Cost Event": "25th / 91st",
        "Acceleration Event": "51st / 64th",
        "Skid-Pad Event": "66th/ 66th",
        "Autocross Event": "45th / 66th",
      },
    }
  },

  {
    id: 8,
    images: [],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "86th / 104th",
        "Presentation Event": "45th / 104th",
        "Design Event": "61st / 103rd",
        "Cost Event": "77th / 105th",
        "Autocross Event": "75th / 75th",
        "Economy": "34th / 42nd",
      },
    }
  },

  {
    id: 7,
    images: [],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "96th / 106th",
        "Presentation Event": "91st / 100th",
        "Design Event": "94th / 104th",
        "Cost Event": "82nd / 106th",
        "Acceleration Event": "73rd / 106th",
        "Skid-Pad Event": "76th/ 76th",
        "Autocross Event": "80th / 90th",
        "Economy": "37.45th / 37.45nd",
      },
    }
  },

  {
    id: 5,
    images: [],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "61st / 120th",
        "Presentation Event": "65th / 110th",
        "Design Event": "43rd / 110th",
        "Cost Event": "84th / 120th",
        "Acceleration Event": "39th / 97th",
        "Skid-Pad Event": "48th / 95th",
        "Autocross Event": "39th / 99th",
        "Economy": "44th / 44th",
      },
    }
  },

  {
    id: 4,
    images: [],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "17th / 134th",
        "Presentation Event": "35th / 128th",
        "Design Event": "48th / 129th",
        "Cost Event": "102nd / 133rd",
        "Acceleration Event": "23rd / 100th",
        "Skid-Pad Event": "53rd / 99th",
        "Autocross Event": "7th / 103rd",
        "Economy": "16th / 41st",
      },
    }
  },

  {
    id: 3,
    images: [],
    about: undefined,
    stats: undefined,
    results: {
      "Formula Michigan": {
        "Overall": "47th / 123rd",
        "Presentation Event": "81st / 123rd",
        "Design Event": "43rd / 105th",
        "Cost Event": "78th / 123rd",
        "Acceleration Event": "21st / 78th",
        "Skid-Pad Event": "6th / 76th",
        "Autocross Event": "38th / 87th",
        "Economy": "31st / 32nd",
      },
    }
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
      <button v-for="car in ourCars" :key="car.id" @click="updateSelectedCar(car.id)"
              :class="{ selected_car: selectedCar?.id === car.id }">
        GRC {{ car.id }}
      </button>
    </div>

    <!-- Display car and info -->
    <div class="car_info">
      <h1>GRC {{ selectedCar?.id }}</h1>
      <CarGallery :id="selectedCar?.id || 0" :images="selectedCar?.images || []"/>

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
          <h2>{{event}} Results</h2>
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
  padding-top: .5em;
  padding-bottom: .5em;
  margin-top: .25em;
  margin-bottom: .25em;
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
  width: 70vw;
  min-width: 70vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin-bottom: 0.4em;
  margin-top: 1.4em;
}

.about_container {
  width: 85%;
  text-align: center;
  margin: 0;
}

.about_container p {
  font-size: 1.3em;
}

.results_container {
  width: 100%;
}

.table_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  h1 {
    margin: 0;
  }

  .car_info {
    width: 100%;
  }

  .cars_selector {
    width: 100%;
    padding: 0 0 2em;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cars_selector button {
    width: 20%;
    min-width: 100px;
    margin-left: 0.2em;
    margin-right: 0.2em;
    padding-top: .25em;
    padding-bottom: .25em;
  }

  .selector_title {
    display: none;
  }

  .cars_view {
    flex-direction: column;
  }
}
</style>
