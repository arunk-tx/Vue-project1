<template>
  <v-app>
    <sideBar/>
    <v-main class="mt-5 ma-10">
    <v-card
      class="mx-auto"
      max-width="344"
      title="User Registration"
    >
      <v-container>
        <v-text-field
          v-model="first"
          color="primary"
          label="First name"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="last"
          color="primary"
          label="Last name"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>
  
        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>
      </v-container>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-spacer></v-spacer>
  
        <v-btn color="success">
          Complete Registration
  
          <v-icon icon="mdi-chevron-right" end></v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-main>
    </v-app>
  </template>
<script setup>
import { ref } from "vue";
import SideBar from "./SideBar.vue";
const terms = ref(false)
</script>