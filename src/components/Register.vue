<template>
    <div class="bg-[#F0F0F0] p-20 flex">
      <div class="w-[50%] bg-[#003366]">
        <img :src="registerImage" alt="Sign up" class="p-5" />
      </div>
      <div class="w-[50%] space-y-4 mr-20 p-4">
        <h1 class="text-5xl font-bold">Sign Up</h1>
        <p class="text-gray-500">Sign up to make your account</p>
        <input
          placeholder="Username"
          class="border border-black w-full rounded-lg p-3"
        />
        <input
          type="password"
          placeholder="Password"
          class="border border-black w-full rounded-lg p-3"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          class="border border-black w-full rounded-lg p-3"
        />
        <button class="border border-black bg-white text-black rounded-lg w-full py-3 px-8">
          Account Info
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import registerImage from "../assets/register.svg";
  
  export default {
    data() {
      return {
        registerImage,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  