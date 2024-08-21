<template>
  <div class="login-container">
    <div class="form-container">
      <!-- Login form section -->
      <div class="form-section">
        <h1 class="form-title">
          Login
        </h1>
        <form @submit.prevent="handleSubmit" class="form">
          <div>
            <label for="identifier" class="label">
              Username/Email/Phone:
            </label>
            <input
              type="text"
              id="identifier"
              v-model="identifier"
              class="input"
              required
            />
          </div>
          <div>
            <label for="password" class="label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="input"
              required
            />
          </div>
          <button
            type="submit"
            class="submit-button"
          >
            Login
          </button>
        </form>
      </div>

      <!-- Image section -->
      <div class="image-section">
        <img
          :src="image"
          alt="Login illustration"
          class="image"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import image from '@/assets/undraw_secure_login.svg';

const identifier = ref('');
const password = ref('');
const router = useRouter();

const handleSubmit = async () => {
  const apiEndpoint = 'http://127.0.0.1:8000/login';

  const loginData = {
    identifier: identifier.value,
    password: password.value,
  };

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error('Failed to authenticate. Please try again.');
    }

    const data = await response.json();
    console.log('API response:', data);

    // Redirect to user profile upon successful login
    router.push('/Jobseekerprofile'); // Change '/Jobseekerprofile' to your actual profile route
  } catch (error) {
    console.error('API error:', error);
  }

  identifier.value = '';
  password.value = '';
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #e6e6fa, #e6e6fa);
}

.form-container {
  width: 75%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

@media (min-width: 768px) {
  .form-container {
    grid-template-columns: 1fr 1fr;
  }
}

.form-section {
  padding: 2rem;
  border-radius: 0.5rem;
}

.form-title {
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #4b5563;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.label {
  margin-bottom: 0.5rem;
  font-weight: 300;
  color: #4b5563;
}

.input {
  border: 1px solid #cbd5e1;
  padding: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
  outline: none;
  transition: border-color 0.3s;
}

.input:focus {
  border-color: #2563eb;
}

.submit-button {
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  width: 100%;
  transition: background-color 0.3s;
  border: none;
}

.submit-button:hover {
  background-color: #1e40af;
}

.image-section {
  display: none;
}

@media (min-width: 768px) {
  .image-section {
    display: block;
  }
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 1px solid #cbd5e1;
}
</style>
