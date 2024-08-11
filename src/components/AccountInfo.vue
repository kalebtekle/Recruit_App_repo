<template>
    <div class="bg-[#F0F0F0] p-20 flex">
      <div class="w-[50%] bg-[#003366]">
        <img :src="accountInfo" alt="Account Info" class="p-5" />
      </div>
      <div class="w-[50%] space-y-4 mr-20 p-4">
        <h1 class="text-5xl font-bold">Account Info</h1>
        <p class="text-gray-500">What is your profession?</p>
        <div class="space-y-4">
          <label class="flex items-center border border-black w-full rounded-lg p-3">
            <input type="checkbox" class="mr-2" />
            Admin
          </label>
          <label class="flex items-center border border-black w-full rounded-lg p-3">
            <input type="checkbox" class="mr-2" />
            Recruiter
          </label>
          <label class="flex items-center border border-black w-full rounded-lg p-3">
            <input type="checkbox" class="mr-2" />
            Manager
          </label>
        </div>
        <button class="border border-black bg-white text-black rounded-lg w-full py-3 px-8">
          Account Info
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import accountInfo from "../assets/accountInfo.svg";
  
  export default {
    data() {
      return {
        accountInfo,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  ``
  