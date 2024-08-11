<template>
    <nav class="bg-white py-3">
      <div class="container mx-auto flex items-center justify-between">
        <a class="flex items-center" href="#">
          <span class="bg-primary rounded-full flex justify-center items-center mr-2 p-2"></span>
          <span class="font-bold text-lg">StarResume</span>
        </a>
  
        <!-- Search input -->
        <div class="flex-grow mx-10 relative">
          <input
            type="text"
            placeholder="Search..."
            class="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <i class="fa fa-search"></i>
          </span>
        </div>
  
        <div id="navcol-3" class="hidden md:flex items-center">
          <div class="btn btn-primary bg-blue-600 text-white px-4 py-2 rounded-lg">
            Username
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles here */
  </style>
  