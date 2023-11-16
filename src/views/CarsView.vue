<script setup lang="ts">
import {ref} from "vue";
import CarGallery from "@/components/CarGallery.vue";

const ourCars = [
  {
    id: 22,
    images: ["grc22"],
    about: "GRC 22 is still under construction. It is Gryphon Racing's first fully electric car. It's slated to be completed by quarter two of 2024.",
    stats: {
      Weight: "Test",
      Length: "Test",
      Width: "Test",
      Top_Speed: "Test",
      Engine: "Test",
    },
  },

  {
    id: 19,
    images: ["backfire", "driving", "parking", "team_photo", "transport"],
    about: "Currently, GRC 19, is Gryphon Racing's only competition ready car. It will soon be retired in favor of GRC 19, and will be the last gas powered car built by Gryphon Racing.",
  },

  {
    id: 18,
    images: ["drifting", "assembly", "car_show", "frame", "thanks_sponsors", "transport", "unveiling"],
    about: "TODO",
  },

  {
    id: 17,
    images: ["grc17", "team", "build", "naked", "ready"],
    about: "TODO",
  },

  {
    id: 16,
    images: ["grc16", "team", "areo", "build", "driving", "fixing", "model"],
    about: "TODO",
  },

  // {
  //   id: 15,
  //   images: [],
  //   about: "TODO",
  // },

  {
    id: 14,
    images: ["grc14", "team", "team2", "parked", "model"],
    about: "TODO",
  },

  {
    id: 13,
    images: ["grc13", "back", "frame", "build"],
    about: "TODO",
  },

  {
    id: 12,
    images: ["grc12"],
    about: "TODO",
  },

  // {
  //   id: 11,
  //   images: [],
  //   about: "TODO",
  // },
  //
  // {
  //   id: 10,
  //   images: [],
  //   about: "TODO",
  // },
  //
  // {
  //   id: 9,
  //   images: [],
  //   about: "TODO",
  // },
  //
  // {
  //   id: 7,
  //   images: [],
  //   about: "TODO",
  // },
  //
  // {
  //   id: 6,
  //   images: [],
  //   about: "TODO",
  // },
  //
  // {
  //   id: 5,
  //   images: [],
  //   about: "TODO",
  // },
];
const currCarHasStats = ref(true);
const selectedCar = ref(ourCars.at(0));


function updateSelectedCar(id: number) {
  selectedCar.value = ourCars.find(car => car.id === id);
  currCarHasStats.value = selectedCar.value?.stats != null;
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

      <h2>About</h2>
      <p class="about">{{ selectedCar?.about }}</p>

      <div class="stats" v-if="currCarHasStats">
        <h2>Statistics</h2>
        <table class="stats_table">
          <tr v-for="(stat, key) in selectedCar?.stats" :key="key">
            <td>{{ key }}</td>
            <td>{{ stat }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cars_view {
  color: var(--gryphon-light-black);
  background-color: var(--gryphon-white);
  padding: 5.2em 0em 4em;
  display: flex;
}

.cars_selector {
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
  width: 70%; /* why so specific? */
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-top: 0;
}

h2 {
  margin-bottom: 0.4em;
  margin-top: 1.4em;
}

.about {
  width: 85%;
  text-align: center;
  font-size: 1.3em;
  margin: 0;
}

.stats {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stats_table {
  border-collapse: collapse;
  width: 85%;
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
    min-width: 0;
    padding-top: 0;
    padding-bottom: .5em;
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
