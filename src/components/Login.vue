<template>
    <div class="bg-[#F0F0F0] p-20 flex">
      <div class="w-[50%]">
        <img :src="signInImage" alt="Sign in" />
      </div>
      <div class="w-[50%] space-y-4 mr-20">
        <h1 class="text-5xl font-bold">Sign in</h1>
        <p class="text-gray-500">Sign in to access your account</p>
        <input
          placeholder="username"
          class="border border-black w-full rounded-lg p-3"
        />
        <input
          type="password"
          placeholder="password"
          class="border border-black w-full rounded-lg p-3"
        />
        <button class="border border-black bg-white text-black rounded-lg py-3 px-8">
          Sign in
        </button>
        <a href="#" class="text-blue-500 underline ml-5">
          Forgot password?
        </a>
      </div>
    </div>
  </template>
  
  <script>
  import signInImage from "../assets/signin.svg";
  
  export default {
    data() {
      return {
        signInImage,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  