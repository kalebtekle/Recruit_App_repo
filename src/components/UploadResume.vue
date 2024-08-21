<template>
    <section class="upload-resume-section">
      <div class="container">
        <h2 class="section-title">Upload Your Resume</h2>
        <p class="section-subtitle">Increase your chances of getting hired by uploading your resume.</p>
  
        <div class="upload-form">
          <input 
            type="file" 
            id="resume-upload" 
            @change="handleFileUpload" 
            accept=".pdf,.doc,.docx"
          />
          <label for="resume-upload" class="upload-button">
            <span>{{ fileName || 'Choose File' }}</span>
          </label>
  
          <button 
            class="submit-button" 
            @click="submitResume" 
            :disabled="!file"
          >
            Upload Resume
          </button>
  
          <p v-if="uploadMessage" class="upload-message">{{ uploadMessage }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Reactive variables
  const file = ref(null);
  const fileName = ref('');
  const uploadMessage = ref('');
  
  // Handle file selection
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      file.value = selectedFile;
      fileName.value = selectedFile.name;
    }
  };
  
  // Handle resume submission
  const submitResume = () => {
    if (!file.value) {
      uploadMessage.value = 'Please select a file to upload.';
      return;
    }
  
    const formData = new FormData();
    formData.append('resume', file.value);
  
    // Mocking an upload function (replace with actual API call)
    fakeUploadResume(formData)
      .then(response => {
        uploadMessage.value = 'Resume uploaded successfully!';
        file.value = null;
        fileName.value = '';
      })
      .catch(error => {
        uploadMessage.value = 'There was an error uploading your resume. Please try again.';
      });
  };
  
  // Mocking an upload function (replace with actual API call)
  const fakeUploadResume = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success');
      }, 1500);
    });
  };
  </script>
  
  <style scoped>
  .upload-resume-section {
    padding: 40px 0;
    text-align: center;
  }
  
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .section-subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
  
  .upload-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  #resume-upload {
    display: none;
  }
  
  .upload-button {
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #4A90E2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .submit-button {
    padding: 12px 30px;
    font-size: 1rem;
    background-color: #50E3C2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .upload-message {
    margin-top: 20px;
    font-size: 1rem;
    color: #4A90E2;
  }
  </style>
  