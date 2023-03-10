<template>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/28.jpg"
              :title= "user"
              subtitle=""
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="Home" value="home" :to="{ name: 'HomePage' }" ></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Register User" value="reg" :to="{ name: 'UserRegister' }" ></v-list-item>
            <v-list-item prepend-icon="mdi-image" title="Gallery" value="gallery" :to="{ name: 'ImageGallery' }" ></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Ninja Data" value="ninja" :to="{ name: 'JobPage' }"></v-list-item>
            <v-list-item prepend-icon="mdi-lock" title="Test" value="test" :to="{ name: 'TestPage' }"></v-list-item>
            <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" @click="logoutClick"></v-list-item>
          </v-list>
        </v-navigation-drawer>
      
</template>

<script setup>
import { useStore } from "vuex";
//import { computed } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore();

//const user = computed(() => store.state.email);
const user =  store.getters.getEmail;
function logoutClick(){
  console.log("logout!!")
  //localStorage.removeItem("email");
  store.dispatch("updateEmail", "");
  router.push({ name: 'SignInPage' })
}

</script>