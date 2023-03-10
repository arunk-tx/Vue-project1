<template>
    <v-app>
      <v-layout>
        <v-main class="mt-5">
          <SigninForm v-if="!loggedIn" @loginSubmit="toggleSideBar"/>
        </v-main>
    </v-layout>
    </v-app>
    
  </template>
  
  <script setup>
  import SigninForm from '../components/SigninForm'
  import { ref } from 'vue';
  
  const showSideBar = ref(false)
  const loggedIn = ref(false)
  
  function toggleSideBar(){
    showSideBar.value = true
    loggedIn.value = true
    console.log("sidebar", showSideBar)
  }
  
  </script>
  