<template>
  <div class="container">
    <div class="form-wrapper">
      <div class="image-container">
        <img :src="image" alt="Career" class="avatar" />
      </div>

      <div class="form-content">
        <h2 class="heading">Register as Employer</h2>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="username" class="form-label">Username:</label>
            <input
              type="text"
              id="username"
              v-model="formData.username"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email:</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="phone_number" class="form-label">Phone Number:</label>
            <input
              type="tel"
              id="phone_number"
              v-model="formData.phone_number"
              required
              class="form-input"
              placeholder="Enter phone number in the format +2547xxxxxxxx"
            />
          </div>

          <div class="form-group">
            <label for="password" class="form-label">Password:</label>
            <div class="password-container">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="formData.password"
                required
                class="form-input"
              />
              <button
                type="button"
                @click="togglePasswordVisibility"
                class="password-toggle"
              >
                {{ showPassword ? 'Hide' : 'Show' }}
              </button>
            </div>
          </div>

          <div class="form-group">
            <label for="passwordConfirmation" class="form-label">Confirm Password:</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="passwordConfirmation"
              v-model="passwordConfirmation"
              required
              class="form-input"
            />
          </div>

          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>

          <button type="submit" class="submit-button">Sign Up</button>
        </form>

        <div class="login-link">
          <p>
            Already signed up?
            <router-link to="/login" class="link">Login here.</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import image from '../assets/jobseeker.jpg';

const formData = ref({
  username: '',
  email: '',
  password: '',
  phone_number: '',
  role: 'employer',
});

const passwordConfirmation = ref('');
const showPassword = ref(false);
const errorMessage = ref('');
const router = useRouter();

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleSubmit = async () => {
  if (formData.value.password !== passwordConfirmation.value) {
    errorMessage.value = 'Password and confirmation do not match.';
    return;
  }

  if (formData.value.password.length < 8) {
    errorMessage.value = 'Password must be at least 8 characters long.';
    return;
  }

  errorMessage.value = '';

  try {
    const response = await fetch('https://careergo-api.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    if (response.ok) {
      Toastify({
        text: "Registration successful!",
        duration: 1000,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #354f52, #7e9979)",
      }).showToast();

      formData.value = {
        username: '',
        email: '',
        password: '',
        phone_number: '',
        role: 'employer',
      };
      passwordConfirmation.value = '';

      setTimeout(() => {
        router.push('/jobseekerform');
      }, 1000);
    } else if (response.status === 400) {
      errorMessage.value = 'Username or email already exists.';
    } else {
      console.error('Form submission failed:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #71e1ee, #8494ee);
}

.form-wrapper {
  display: flex;
  width: 90%;
  max-width: 800px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
}

.avatar {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid #a5b6d6;
}

.form-content {
  flex: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.heading {
  color: #006400;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  color: #006400;
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
}

.form-input {
  border: 1px solid #ffd700;
  padding: 0.5rem;
  width: 100%;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s;
}

.form-input:focus {
  border-color: #006400;
}

.password-container {
  position: relative;
}

.password-toggle {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 0.5rem;
  background: transparent;
  border: none;
  color: #006400;
  cursor: pointer;
}

.error-message {
  background: #fdd;
  color: #d9534f;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.submit-button {
  background-color: #374369;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #446552;
}

.login-link {
  margin-top: 1rem;
  text-align: center;
}

.link {
  color: #007bff;
  text-decoration: underline;
}
</style>
