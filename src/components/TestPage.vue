<template>
    <v-app>
      <sideBar/>
      <v-main class="mt-5 ma-10">
       Test
      </v-main>
      </v-app>
    </template>
  <script setup>
   import { onMounted } from 'vue'
import sideBar from '../components/SideBar'
   onMounted(() => {
  console.log(`the component is now mounted.`)
})
  </script>
 