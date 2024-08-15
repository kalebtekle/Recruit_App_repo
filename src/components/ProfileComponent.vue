<template>
  <div class="profile-container">
    <h1>User Profile</h1>

    <div v-if="isAuthenticated" class="profile-form">
      <!-- Editable fields for authenticated users -->
      <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="username" id="username" type="text" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="email" id="email" type="email" />
      </div>
      <div class="form-group">
        <label for="bio">Bio:</label>
        <textarea v-model="bio" id="bio"></textarea>
      </div>
      <div class="form-group">
        <label for="location">Location:</label>
        <input v-model="location" id="location" type="text" />
      </div>
      <div class="form-group">
        <label for="birthDate">Birth Date:</label>
        <input v-model="birthDate" id="birthDate" type="date" />
      </div>
      <div class="form-group">
        <label for="website">Website:</label>
        <input v-model="website" id="website" type="url" />
      </div>
      <div class="form-group">
        <label for="github">GitHub:</label>
        <input v-model="github" id="github" type="url" />
      </div>
      <div class="form-group">
        <label for="linkedin">LinkedIn:</label>
        <input v-model="linkedin" id="linkedin" type="url" />
      </div>
      <button class="save-button" @click="saveProfile">Save Changes</button>
    </div>

    <div v-else class="profile-view">
      <!-- View-only fields for anonymous users -->
      <img :src="profilePicture" alt="Profile Picture" class="profile-picture" />
      <p><strong>Username:</strong> {{ username }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Bio:</strong> {{ bio }}</p>
      <p><strong>Location:</strong> {{ location }}</p>
      <p><strong>Birth Date:</strong> {{ birthDate }}</p>
      <p><strong>Website:</strong> <a :href="website" target="_blank">{{ website }}</a></p>
      <p><strong>GitHub:</strong> <a :href="github" target="_blank">{{ github }}</a></p>
      <p><strong>LinkedIn:</strong> <a :href="linkedin" target="_blank">{{ linkedin }}</a></p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/userStore.js';
import { onMounted } from 'vue';

const userStore = useUserStore();

const isAuthenticated = userStore.isAuthenticated;
let username = userStore.username;
let email = userStore.email;
let bio = userStore.bio;
let profilePicture = userStore.profilePicture;
let location = userStore.location;
let birthDate = userStore.birthDate;
let website = userStore.website;
let github = userStore.github;
let linkedin = userStore.linkedin;

onMounted(async () => {
  if (isAuthenticated) {
    await userStore.fetchUserProfile(username);
  }
});

function saveProfile() {
  // Implement the save logic to persist the changes to the backend
  // You might want to call a mutation or an action in the store to update the profile
}
</script>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.profile-form,
.profile-view {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.save-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.save-button:hover {
  background-color: #45a049;
}

.profile-view p {
  margin-bottom: 10px;
  font-size: 16px;
}

.profile-view strong {
  font-weight: bold;
}

.profile-picture {
  display: block;
  max-width: 150px;
  margin: 0 auto 20px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-view a {
  color: #007BFF;
  text-decoration: none;
}

.profile-view a:hover {
  text-decoration: underline;
}
</style>
