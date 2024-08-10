<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister" class="register-form">
      <input 
        v-model="name" 
        type="text" 
        placeholder="Name" 
        required 
      />
      <input 
        v-model="username" 
        type="text" 
        placeholder="Username" 
        required 
      />
      <input 
        v-model="email" 
        type="email" 
        placeholder="Email" 
        required 
      />
      <input 
        v-model="password" 
        type="password" 
        placeholder="Password" 
        required 
      />
      <button type="submit">Register</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/userStore';

// Local state for form inputs and error message
const name = ref('');
const username = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');

// Access the user store
const userStore = useUserStore();

// Simulated registration function (replace with your actual API call)
const register = async (name, username, email, password) => {
  // Simulating a successful registration response
  if (username && email && password) {
    return {
      name,
      email,
    };
  } else {
    throw new Error('Registration failed');
  }
};

// Handle the registration process
const handleRegister = async () => {
  try {
    const userProfile = await register(name.value, username.value, email.value, password.value);
    userStore.setUserProfile(userProfile);
    // Reset form fields
    name.value = '';
    username.value = '';
    email.value = '';
    password.value = '';
    errorMessage.value = '';
  } catch (error) {
    errorMessage.value = error.message;
  }
};
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
}

.register-form {
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
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>

