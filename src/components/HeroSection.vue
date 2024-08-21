<template>
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">Find Your Perfect Job Match</h1>
        <p class="hero-subtitle">Get discovered and browse the best talent that perfectly fits your needs!</p>
        
        <div class="search-bar">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search for best resumes..." 
            @keyup.enter="handleSearch"
          />
          <button @click="handleSearch">Search</button>
        </div>
        
        <div class="cta-buttons">
          <button @click="uploadResume" class="cta-button">Upload Resume</button>
          <button @click="postJob" class="cta-button secondary">Post a Job</button>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import router from '../router';
  
  // Reactive data for search input
  const searchQuery = ref('');
  
  // Methods for handling actions
  const handleSearch = () => {
    console.log('Search for:', searchQuery.value);
    // Implement search functionality here
  };
  
  const uploadResume = () => {
    console.log('Navigating to upload resume page');
    // Implement navigation to upload resume page
    router.push({ name: 'UploadResume' });
};
    
  
  const postJob = () => {
    router.push({ name: 'PostJob' });
    console.log('Navigating to post job page');
    // Implement navigation to post job page
  };
  </script>
  
  <style scoped>
  .hero-section {
    background: linear-gradient(135deg, #4A90E2 0%, #50E3C2 100%);
    color: white;
    padding: 60px 0;
    text-align: center;
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 40px;
  }
  
  .search-bar {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  
  .search-bar input {
    padding: 10px;
    font-size: 1rem;
    width: 70%;
    max-width: 400px;
    border-radius: 5px 0 0 5px;
    border: none;
    outline: none;
  }
  
  .search-bar button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #50E3C2;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
  
  .cta-buttons {
    margin-top: 20px;
  }
  
  .cta-button {
    padding: 12px 30px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #50E3C2;
    color: white;
    margin: 0 10px;
  }
  
  .cta-button.secondary {
    background-color: #4A90E2;
  }
  </style>
  