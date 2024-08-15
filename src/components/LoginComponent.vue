<template>
  <div class="login-container">
    <h2 v-if="!userStore.isLoggedIn">Login</h2>
    <form v-if="!userStore.isLoggedIn" @submit.prevent="handleLogin" class="login-form">
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
    <p v-if="userStore.isLoggedIn" class="logged-in-message">You are logged in!</p>
    <button v-if="userStore.isLoggedIn" @click="handleLogout">Logout</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';
import { useUserStore } from '../stores/userStore';
import apolloClient from '../apolloClient';
import { TOKEN_AUTH, REFRESH_TOKEN } from '../graphql/mutations';

// Local state for form inputs and error message
const username = ref('');
const password = ref('');
const errorMessage = ref('');

// Access the user store
const userStore = useUserStore();

// Computed property to check login status
const isLoggedIn = computed(() => userStore.isLoggedIn);

// Handle User Login
const handleLogin = async () => {
  if (!username.value || !password.value) {
    errorMessage.value = "Username and password are required.";
    return;
  }

  try {
    const response = await apolloClient.mutate({
      mutation: TOKEN_AUTH,
      variables: {
        username: username.value,
        password: password.value,
      },
    });

    const token = response.data.tokenAuth.token;
    localStorage.setItem('authToken', token);
    userStore.setLoginStatus(true);
    userStore.setUserProfile({ name: username.value, email: '' });

    // Reset form fields
    username.value = '';
    password.value = '';
    errorMessage.value = '';
  } catch (error) {
    errorMessage.value = error.message;
  }
};

// Handle Logout
const handleLogout = () => {
  userStore.logout();
  };

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
