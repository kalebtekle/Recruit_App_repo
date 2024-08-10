<template>
  <div class="login-container">
    <h2 v-if="!isLoggedIn">Login</h2>
    <form v-if="!isLoggedIn" @submit.prevent="handleLogin" class="login-form">
      <input 
        v-model="username" 
        type="text" 
        placeholder="Username" 
        required 
      />
      <input 
        v-model="password" 
        type="password" 
        placeholder="Password" 
        required 
      />
      <button type="submit">Login</button>
    </form>
    <p v-if="isLoggedIn" class="logged-in-message">You are logged in!</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useUserStore } from '../stores/userStore';
import { provideApolloClient, useMutation } from '@vue/apollo-composable';
import apolloClient from '../apolloClient';
import { TOKEN_AUTH, REFRESH_TOKEN } from '../graphql/mutations';

// Local state for form inputs and error message
const username = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoggedIn = ref(false);

// Access the user store
const userStore = useUserStore();

// Handle User Login
const handleLogin = async () => {
  if (!username.value || !password.value) {
    errorMessage.value = "Username and password are required.";
    return;
  }

  try {
    // Call the TOKEN_AUTH mutation using apolloClient.mutate
    const response = await apolloClient.mutate({
          mutation: TOKEN_AUTH,
          variables: {
            username: username.value,
            password: password.value,
          },
        });

    const token = response.data.tokenAuth.token;
    console.log('Token received:', token); // Debugging log
    localStorage.setItem('authToken', token); // Store token for future use
    isLoggedIn.value = true; // Update login status
    userStore.setUserProfile({ name: username.value, email: '' });

    // Reset form fields
    username.value = '';
    password.value = '';
    errorMessage.value = '';
  } catch (error) {
    errorMessage.value = error.message;
  }
};

// Refresh User Token
const handleTokenRefresh = async () => {
  try {
    const refreshToken = localStorage.getItem('refresh_token'); // Retrieve refresh token
    const response = await apolloClient.mutate({
      mutation: REFRESH_TOKEN,
      variables: {
        refresh: refreshToken, // Ensure this matches the mutation definition
      },
    });

    const newToken = response.data.refresh.token; // Adjust according to your refresh token response structure
    console.log('New token received:', newToken); // Debugging log
    localStorage.setItem('authToken', newToken); // Store new token
  } catch (error) {
    console.error('Token refresh failed:', error.message);
  }
};

// Watch for token expiration and refresh if needed
watch(isLoggedIn, (newValue) => {
  if (newValue) {
    const interval = setInterval(() => {
      refreshUserToken(); // Refresh token periodically
    }, 5 * 60 * 1000); // Refresh every 5 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }
});

</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.login-form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>
