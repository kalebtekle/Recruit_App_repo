<template>
  <div class="main-menu">
    <h1>Welcome to Our Platform</h1>
    <router-link to="/register-jobseeker" class="link-button">Register as Jobseeker</router-link>
    <router-link to="/register-employer" class="link-button">Register as Employer</router-link>
  </div>
</template>
<script setup>
</script>

<style scoped>
.main-menu {
  text-align: center;
  margin-top: 20px;
}

.link-button {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
}

.link-button:hover {
  background-color: #0056b3;
}
</style>

