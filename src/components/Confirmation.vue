<template>
    <div class="bg-[#F0F0F0] p-20 flex">
      <div class="w-[50%] bg-[#003366]">
        <img :src="confirmationImage" alt="Confirmation" class="p-5" />
      </div>
      <div class="w-[50%] space-y-4 mr-20 p-5">
        <h1 class="text-5xl font-bold">Confirmation</h1>
        <p class="text-gray-500">Confirm your profile information</p>
        <p class="border border-black w-full rounded-lg p-3">
          Username : Username
        </p>
        <p class="border border-black w-full rounded-lg p-3">
          Role : Manager
        </p>
        <div class="mt-4">
          <button class="border border-black bg-white w-full text-black rounded-lg py-3 px-8">
            Confirm
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import confirmationImage from "../assets/confirmation.svg";
  
  export default {
    data() {
      return {
        confirmationImage,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  