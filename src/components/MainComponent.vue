<script setup>
import HeroSection from './HeroSection.vue';
</script>

<template>
  <div class="container">
    <header class="header">
      <img class="logo" loading="lazy" alt="Logo" src="@/assets/logo2_11.jpg" />
      <nav class="nav">
        <a href="#home" class="nav-link">HOME</a>
        <a href="/register" class="nav-link">REGISTER</a>
        <a href="#login" class="nav-link">LOGIN</a>
        <a href="#profile" class="nav-link">PROFILE</a>
        <a href="#contact" class="nav-link">CONTACT US</a>
        <a href="#logout" class="nav-link">LOGOUT</a>
      </nav>
    </header>
    <main class="main-content">
      <aside class="sidebar">
        <div class="profile-card">
          <img class="profile-pic" loading="lazy" alt="Profile Picture" src="@/assets/undraw_profile.svg" />
          <img class="unverified-shield" loading="lazy" alt="Unverified Shield" src="@/assets/unverifed-shield-1@2x.jpg" />
        </div>
        <button class="btn btn-primary">Make an offer</button>
        <button class="btn btn-secondary">Back to profile</button>
      </aside>
      <section class="main-section">
        <footer class="footer">
          <div class="info-card">
            <HeroSection/>
          </div>
        </footer>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* CSS Variables */
:root {
  --primary-color: #4a4a4a;
  --secondary-color: #6a6a6a;
  --bg-light: #f5f5f5;
}

/* Global Styles */
body {
  font-family: 'DM Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Container */
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-light);
  padding: 25px 5px;
}

/* Header */
.header {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 99;
}

/* Logo */
.logo {
  height: 40px;
  width: auto; /* Maintain aspect ratio */
  object-fit: contain;
}

/* Navigation */
.nav {
  display: flex;
  gap: 15px;
  margin-left: auto;
}

.nav-link {
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 500;
}

.nav-link:hover {
  color: #6495ed;
}

/* Main Content */
.main-content {
  display: flex;
  flex: 1;
}

/* Sidebar */
.sidebar {
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  box-sizing: border-box;
}

.profile-card {
  position: relative;
  margin-bottom: 20px;
}

.profile-pic {
  width: 100%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
}

.unverified-shield {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 32px;
  height: auto;
}

/* Buttons */
.btn {
  display: block;
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.btn-primary {
  background-color: #4a4a4a;
  color: #ffffff;
}

.btn-primary:hover {
  background-color: #6495ed;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background-color: #ffffff;
  color: #4a4a4a;
  border: 1px solid #4a4a4a;
}

.btn-secondary:hover {
  background-color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Main Section */
.main-section {
  flex: 1;
  padding: 20px;
}

/* Footer */
.footer {
  display: flex;
  flex-direction: column;
}

/* Info Card */
.info-card {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
}

.info-label {
  font-weight: bold;
}

.info-value {
  color: var(--secondary-color);
}
</style>
