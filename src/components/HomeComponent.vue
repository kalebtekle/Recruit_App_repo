<template>
    <div class="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple Vue 3 application using GraphQL for user authentication.</p>
      <p>
        Use the navigation links above to explore:
        <ul>
          <li><router-link to="/register">Register</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
        </ul>
      </p>
    </div>
  </template>
  
  <script setup>
  // You can add any reactive data or methods here if needed
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin: 20px;
  }
  
  h1 {
    font-size: 2.5em;
  }
  
  p {
    font-size: 1.2em;
  }
  </style>