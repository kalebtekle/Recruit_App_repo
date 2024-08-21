<template>
  <div class="container mx-auto p-4 bg-gradient-to-r from-[#354f52] to-[#7e9979]">
    <h2 class="text-2xl font-bold mb-4 text-black">Employer Form</h2>

    <!-- Render the step indicator -->
    <div class="flex justify-center items-center mb-6">
      <div v-for="(step, index) in steps" :key="index" class="flex items-center">
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
          :class="{
            'bg-gold text-white': currentStep === index + 1,
            'bg-darkGreen text-white': currentStep > index + 1,
            'bg-gray-300 text-gray-700': currentStep < index + 1
          }"
        >
          {{ step }}
        </div>
        <div
          v-if="index !== steps.length - 1"
          class="flex-1 h-1 mx-2"
          :class="{ 'bg-darkTeal': currentStep > index + 1, 'bg-gray-300': currentStep <= index + 1 }"
        />
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Step 1: Profile picture, location, and size -->
      <div v-if="currentStep === 1">
        <h3 class="text-xl font-semibold mb-2 text-black">Step 1: Profile</h3>

        <!-- Profile Picture -->
        <div class="mb-4">
          <label class="block mb-2 text-black">Profile Picture: Choose from icons or upload:</label>
          <div class="flex flex-wrap mb-2">
            <img
              v-for="(avatar, index) in companyAvatars"
              :key="index"
              :src="`/src/companyavatar/${avatar}`"
              :alt="`Avatar ${index + 1}`"
              class="w-12 h-12 rounded-full cursor-pointer m-1"
              :class="{ 'border-2 border-darkGreen': formData.profilePicture === avatar }"
              @click="formData.profilePicture = avatar"
            />
          </div>
          <!-- Allow users to upload their own profile picture -->
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            @change="handleChange"
            class="p-2 border rounded w-full"
          />
        </div>

        <!-- Location -->
        <div class="mb-4">
          <label class="block mb-2 text-black">Location:</label>
          <input
            type="text"
            name="location"
            v-model="formData.location"
            class="p-2 border rounded w-full"
          />
        </div>

        <!-- Size -->
        <div class="mb-4">
          <label class="block mb-2 text-black">Size:</label>
          <input
            type="text"
            name="size"
            v-model="formData.size"
            class="p-2 border rounded w-full"
          />
        </div>

        <!-- Next button -->
        <button type="button" @click="nextStep" class="p-2 bg-gold text-white rounded">
          Next
        </button>
      </div>

      <!-- Step 2: Description, website, and company registration -->
      <div v-if="currentStep === 2">
        <h3 class="text-xl font-semibold mb-2 text-black">Step 2: Description and Additional Details</h3>

        <!-- Description -->
        <div class="mb-4">
          <label class="block mb-2 text-black">Description:</label>
          <textarea
            name="description"
            v-model="formData.description"
            class="p-2 border rounded w-full"
            rows="4"
          />
        </div>

        <!-- Website -->
        <div class="mb-4">
          <label class="block mb-2 text-black">Website:</label>
          <input
            type="url"
            name="website"
            v-model="formData.website"
            class="p-2 border rounded w-full"
          />
        </div>

        <!-- Company Registration (file upload) -->
        <div class="mb-4">
          <label class="block mb-2 text-black">Company Registration:</label>
          <input
            type="file"
            name="companyRegistration"
            accept=".pdf"
            @change="handleChange"
            class="p-2 border rounded w-full"
          />
        </div>

        <!-- Navigation buttons -->
        <button type="button" @click="prevStep" class="p-2 bg-darkTeal text-white rounded mr-2">
          Previous
        </button>
        <button type="button" @click="nextStep" class="p-2 bg-gold text-white rounded">
          Next
        </button>
      </div>

      <!-- Step 3: Review and submit -->
      <div v-if="currentStep === 3">
        <h3 class="text-xl font-semibold mb-2 text-black">Step 3: Review and Submit</h3>
        <div class="mb-4">
          <h4 class="text-lg font-semibold mb-2 text-black">Review your details:</h4>
          <ul>
            <li class="mb-2">Profile Picture: {{ formData.profilePicture }}</li>
            <li class="mb-2">Location: {{ formData.location }}</li>
            <li class="mb-2">Size: {{ formData.size }}</li>
            <li class="mb-2">Description: {{ formData.description }}</li>
            <li class="mb-2">Website: {{ formData.website }}</li>
            <li class="mb-2">Company Registration: {{ formData.companyRegistration?.name }}</li>
          </ul>
        </div>

        <!-- Navigation and Submit buttons -->
        <button type="button" @click="prevStep" class="p-2 bg-darkTeal text-white rounded mr-2">
          Previous
        </button>
        <button type="submit" class="p-2 bg-gold text-white rounded">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define an array of avatars based on the company avatar files
const companyAvatars = ['company1.jpg', 'company2.jpg', 'company3.jpg', 'company4.jpg'];

const formData = ref({
  profilePicture: null,
  location: '',
  size: '',
  description: '',
  website: '',
  companyRegistration: null,
});

const currentStep = ref(1);
const steps = ['1', '2', '3'];

const handleChange = (e) => {
  const { name, files } = e.target;
  if (files && files.length) {
    formData.value[name] = files[0];
  } else {
    formData.value[name] = e.target.value;
  }
};

const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
};

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value += 1;
  }
};

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value -= 1;
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
