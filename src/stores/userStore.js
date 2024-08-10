// stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userProfile: null,
  }),
  actions: {
    setUserProfile(profile) {
      this.userProfile = profile;
      this.isLoggedIn = true;
    },
    logout() {
      this.userProfile = null;
      this.isLoggedIn = false;
    },
  },
});
