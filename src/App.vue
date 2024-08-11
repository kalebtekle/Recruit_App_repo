<template>
  <div>
    <Navbar />
    <router-view /> <!-- This will render the matched component -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
/* Add any scoped styles here */
</style>
