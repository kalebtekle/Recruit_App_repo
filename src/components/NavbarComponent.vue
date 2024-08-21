<template>
  <div class="navbar">
    <div class="left">
      <img :src="image" alt="Company Logo" class="company-logo" />
    </div>
    <div class="center">
      <h1>CareerGO</h1>
    </div>
    <div class="right">
      <router-link to="/" class="mr-4">Home</router-link>
      <router-link to="/login" class="mr-4">Login</router-link>
      <!-- <router-link to="/Jobseeker-form" class="mr-4">Form</router-link> -->
      <!-- <router-link to="/employer-form" class="mr-4">EmployerForm</router-link>
      <router-link to="/jobseeker_profile" class="mr-4">Profile</router-link> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import image from '../images/logo2.png';

const image = ref(image);
</script>

<style scoped>
/* Add your styles here if needed */
</style>
