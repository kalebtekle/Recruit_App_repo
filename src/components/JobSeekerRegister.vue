<template>
  <div class="container">
    <div class="form-wrapper">
      <img :src="image" alt="avatar" class="avatar" />
      <div class="form-content">
        <h2 class="heading">Register as Jobseeker</h2>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="username" class="input-label">Username:</label>
            <input type="text" id="username" v-model="formData.username" class="input-field" required />
          </div>
          <div class="form-group">
            <label for="email" class="input-label">Email:</label>
            <input type="email" id="email" v-model="formData.email" class="input-field" required />
          </div>
          <div class="form-group">
            <label for="phone_number" class="input-label">Phone Number:</label>
            <input type="tel" id="phone_number" v-model="formData.phone_number" class="input-field" placeholder="Enter phone number in the format +2547xxxxxxxx" required />
          </div>
          <div class="form-group">
            <label for="password" class="input-label">Password:</label>
            <div class="password-wrapper">
              <input :type="showPassword ? 'text' : 'password'" id="password" v-model="formData.password" class="input-field" required />
              <button type="button" @click="togglePasswordVisibility" class="password-toggle">{{ showPassword ? 'Hide' : 'Show' }}</button>
            </div>
          </div>
          <div class="form-group">
            <label for="passwordConfirmation" class="input-label">Confirm Password:</label>
            <input :type="showPassword ? 'text' : 'password'" id="passwordConfirmation" v-model="passwordConfirmation" class="input-field" required />
          </div>
          <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
          <button type="submit" class="submit-button">Sign Up</button>
          <p class="redirect-link">
            Already signed up? <router-link to="/login" class="link">Login here.</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
import { useMutation } from '@vue/apollo-composable';
import { REGISTER_USER } from '@/graphql/mutations'; // Adjust the path as needed
import image from '../assets/undraw_sign_up.svg';

const formData = ref({
  username: '',
  email: '',
  password: '',
  phone_number: '',
  role: 'jobseeker',
});

const passwordConfirmation = ref('');
const showPassword = ref(false);
const errorMessage = ref('');
const router = useRouter();

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const { mutate: registerUser } = useMutation(REGISTER_USER);

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
    const response = await registerUser({
      variables: {
        username: formData.value.username,
        email: formData.value.email,
        password: formData.value.password,
        phone_number: formData.value.phone_number,
        role: formData.value.role,
      },
    });

    if (response.data.registerUser.success) {
      Toastify({
        text: "Registration successful!",
        duration: 1000,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #354f52, #7e9979)",
      }).showToast();

      formData.value = { username: '', email: '', password: '', phone_number: '', role: 'jobseeker' };
      passwordConfirmation.value = '';
      setTimeout(() => router.push('/jobseekerform'), 1000);
    } else {
      errorMessage.value = response.data.registerUser.message;
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
  background: linear-gradient(to right, #d0cde1, #e0d7e3);
}

.form-wrapper {
  display: flex;
  width: 80%;
  max-width: 1200px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 50%;
  border-radius: 8px;
  border: 2px solid #6b6956;
}

.form-content {
  padding: 24px;
  flex: 1;
}

.heading {
  color: #4a5d23;
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

.input-label {
  display: block;
  color: #005b43;
  font-weight: 500;
  margin-bottom: 8px;
}

.input-field {
  width: 100%;
  padding: 8px;
  border: 1px solid #e6e3d2;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #004d00;
}

.password-wrapper {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #005b43;
}

.error-message {
  background-color: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}

.redirect-link {
  text-align: center;
  color: #6c757d;
}

.link {
  color: #005b43;
  text-decoration: underline;
}
</style>
