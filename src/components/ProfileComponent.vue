<template>
  <div class="profile-container" v-if="userStore.isLoggedIn">
    <h2>User Profile</h2>
    <p><strong>Name:</strong> {{ userStore.userProfile.name }}</p>
    <p><strong>Email:</strong> {{ userStore.userProfile.email }}</p>
    <!--<p><strong>Profile:</strong>{{ data.getUserProfile.bio }}</p>
    <p><strong>Profile:</strong>{{ profile.profilePicture }}</p>
    <p><strong>Profile:</strong>{{ profile.location }}</p>
    <p><strong>Profile:</strong>{{ profile.birthDate }}</p>
    <p><strong>Profile:</strong>{{ profile.website }}</p>
    <p><strong>Profile:</strong>{{ profile.twitter }}</p>
    <p><strong>Profile:</strong>{{ profile.github }}</p>
    <p><strong>Profile:</strong>{{ profile.linkedin }}</p> -->
    
    <button @click="handleLogout">Logout</button>
  </div>
  <div v-else>
    <p>Please <router-link to="/login">log in</router-link> to view your profile.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';
import { useQuery } from '@vue/apollo-composable';
import { GET_USER_PROFILE } from '../graphql/queries'; // Import your query
import { apolloClient } from '../apolloClient';

// Access the user store
const userStore = useUserStore();
const userId = ref(1); // Set this to the desired user ID

const { loading, error, data } = useQuery(GET_USER_PROFILE, {
  fetchPolicy: 'network-only', // Adjust fetch policy as needed
});

// Check for the structure of data
console.log('Query data:', { loading, error, data });

// Handle user logout
const handleLogout = () => {
  userStore.logout(); // Call the logout action to clear user data
};


</script>

<style scoped>
.profile-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

button {
  padding: 0.5rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #c82333;
}
</style>

  