<template>
    <v-app>
    <sideBar/>
    <v-main class="mt-5 ma-10">
        <v-switch
            v-model="model"
            hide-details
            true-value="yes"
            false-value="no"
            :label="`Grayscale Images`">
        </v-switch>

    <v-row>
      <v-col
        v-for="n in 18"
        :key="n"
        class="d-flex child-flex"
        cols="3"
      >
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}${!isGray ? '' : '&grayscale'}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}${!isGray ? '' : '&grayscale'}`"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    </v-main>
    </v-app>
  </template>
<script setup>
import { ref, watch, onMounted } from "vue";
import SideBar from "./SideBar.vue";
const model = ref(false)
const isGray = ref(false)
watch(model, (newValue, oldValue) => {
    console.log("newval", newValue,"old", oldValue)
    isGray.value = !isGray.value
  // fires on nested property mutations
  // Note: `newValue` will be equal to `oldValue` here
  // because they both point to the same object!
})
onMounted(() => {
  console.log("mounted gallery")
})
</script>