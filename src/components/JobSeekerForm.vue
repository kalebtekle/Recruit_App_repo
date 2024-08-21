<template>
  <div class="container mx-auto p-4 bg-gradient-to-r from-[#71e1ee] to-[#8494ee]">
    <h2 class="text-2xl font-bold mb text-wh text-center">Job Seeker Form</h2>

    <!-- Step Indicator -->
    <div class="flex justify-center items-center mb-6">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="flex items-center"
        :class="{'flex-1': !isLastStep(index)}"
      >
        <!-- Step Dot -->
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
          :class="{
            'bg-lightsteelblue text-white': isActiveStep(index + 1),
            'bg-royalblue text-white': isCompleteStep(index),
            'bg-lightskyblue text-gray-700': !isActiveStep(index + 1) && !isCompleteStep(index)
          }"
        >
          {{ step }}
        </div>

        <!-- Connecting Line -->
        <div
          v-if="!isLastStep(index)"
          class="flex-1 h-1 mx-2"
          :class="{
            'bg-darkslateblue-100': isCompleteStep(index),
            'bg-lightskyblue': !isCompleteStep(index)
          }"
        />
      </div>
    </div>

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Step 1: Profile -->
      <div v-if="currentStep === 1">
        <h3 class="text-xl font-semibold mb text-wh text-center">Step 1: Profile</h3>
        <div class="mb-4">
          <label class="block mb text-wh">Profile Picture: Choose from Avatars or upload:</label>
          <div class="flex flex-wrap mb-2">
            <!-- Avatars -->
            <img
              v-for="(avatar, index) in userAvatars"
              :key="index"
              :src="`/src/useravatar/${avatar}`"
              :alt="`Avatar ${index + 1}`"
              class="w-12 h-15 rounded-full cursor-pointer m-1"
              :class="{'border-2 border-royalblue': formData.profilePicture === avatar}"
              @click="setAvatar(avatar)"
            />
          </div>
          <!-- Upload Profile Picture -->
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            @change="handleChange"
            class="p-2 border rounded w-full"
          />
        </div>
        <div class="mb-4">
          <label class="block mb text-wh">First Name:</label>
          <input
            type="text"
            name="firstname"
            v-model="formData.firstname"
            class="p-2 border rounded w-full"
            required
          />
        </div>
        <
