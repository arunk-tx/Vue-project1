<template>
    <v-app>
    <SideBar/>
    <v-main class="mt-5 ma-10">
    <div v-if="job">
      <h1>{{ job.title }}</h1>
      <p>{{ job.details }}</p>
    </div>
    <div v-else>
      <p>Loading job details...</p>
    </div>
    </v-main>
    </v-app>
  </template>
  
  <script>
   import SideBar from '../../components/SideBar.vue'
  export default {
    props: ['id'],
    data() {
      return {
        job: null
      }
    },
    mounted() {
      fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
    },
    components: { SideBar }
  }
  </script>
  
  <style>
  
  </style>