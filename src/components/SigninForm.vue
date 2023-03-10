<template>
      
      <v-card class="mt-10 mx-auto" max-width="400" title="SIGN IN">
        
        <v-form
          v-model="form"
          @submit.prevent="onSubmit"
        >
        
       
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[rules.required, rules.email]"
            class="mb-2"
            clearable
            label="Email"
            type="email"
          ></v-text-field>
  
          <v-text-field
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="password"
            :readonly="loading"
            :rules="[rules.required]"
            :type="showPass ? 'text' : 'password'"
            clearable
            label="Password"
            placeholder="Enter your password"
            @click:append="showPass = !showPass"
          ></v-text-field>
          <p v-if="loginError" style="color: red;">{{ loginError }}</p>
  
          <br>
  
          <v-btn
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign In
          </v-btn>
         
        </v-form>
      </v-card>
   
  </template>
<script setup>
import { defineEmits } from 'vue';
import {ref} from 'vue'
import { useStore } from "vuex";

const store = useStore();

const form =  ref(false)
const email = ref(null)
const password = ref(null)
const loading =  ref(false)
const showPass = ref(false)
const emit = defineEmits(['loginSubmit'])
const loginError = ref(null)
import { useRouter } from 'vue-router'
const router = useRouter()

function onSubmit() {
    loginError.value =''
    loading.value = true
    console.log("submitted", form)
    if (!form.value) {
        console.log("enetering return")
        return
    }
    // eslint-disable-next-line no-const-assign
    
    if(email.value == 'admin@gmail.com' && password.value =="123"){
      console.log("login success")
      console.log("store data", store.state)
      //store.state.email = email.value
      console.log("store data2", store.state)
      store.dispatch("updateEmail", email.value);
      router.push({ name: 'HomePage' })
      emit('loginSubmit')
      
    }
    else {
      console.log("login failure")
      //setTimeout(() => (loading.value = false), 2000)
      loginError.value = "Invalid credentials!"
      loading.value = false
    }
    
}
//function required(v) {
    //console.log("vvv", v)
//    return !!v || 'Field is required'
//}
const rules = {
  required: value => !!value || 'Required.',
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  },
}


</script>