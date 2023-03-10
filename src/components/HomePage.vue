
<template>
  <v-app>
      <v-layout>
        <sideBar/>
        <v-main class="mt-5">
  <v-card
    class="mx-auto"
    max-width="344"
    variant="outlined"
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
          Welcome
        </div>
        <div class="text-h6 mb-1">
          hii {{ user }}
        </div>
        <div class="text-caption">Hello...</div>
      </div>
    </v-card-item>

  
  </v-card>
  </v-main>
  </v-layout>
  </v-app>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import SideBar from "./SideBar.vue";
const store = useStore();
const user = computed(() => store.state.email);
import { useRouter } from 'vue-router'
const router = useRouter()
if(!user.value){
    router.push({ name: 'SignInPage' })
}
</script>
