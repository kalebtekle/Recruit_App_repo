// stores/userStore.js
import { defineStore } from 'pinia';
import { GET_USER_PROFILE } from '../graphql/queries';
import { useQuery } from '@vue/apollo-composable';
import { watch } from 'vue';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn:  localStorage.getItem('isLoggedIn') === 'true',
    token: localStorage.getItem('authToken') || '',
    username:'gis10kwo',
    email:'',
    bio:'',
    profilePicture:'',
    location:'',
    birthDate:'',
    website:'',
    twitter:'',
    github:'',
    linkedin:'',
    createdAt:'',
    updatedAt:'',

  }),
  actions: {
    setLoginStatus(status){
      this.isLoggedIn = status;
      localStorage.setItem('isLoggedIn', status); // Save to localStorage
    },
    async fetchUserProfile(username){
      const { result, onResult, onError } = useQuery(GET_USER_PROFILE, {username:username});
       // Watch for changes in result.value

    watch(result, (newValue) => {
    if (newValue && newValue.profile) {
      this.setUserProfile(newValue.profile);
      this.username = username;
    } else {
      console.log("Profile not found or undefined", newValue);
    }
  });

  onError((error) => {
    console.error("An error occurred while fetching the profile:", error);
  });
    },
    setUserProfile(profile){
      this.username = profile.name,
      this.email = profile.email,
      this.bio = profile.bio,
      this.profilePicture = profile.profilePicture,
      this.location = profile.location,
      this.birthDate = profile.birthDate,
      this.website = profile.website,
      this.github = profile.github,
      this.linkedin = profile.linkedin
    },
    setToken(token) {
      this.token = token;
      localStorage.setItem('authToken', token);
    },
    logout(){
      console.log('Logging out...'); 
      this.username='';
      this.token='';
      this.profile= null;
      this.isLoggedIn = false;
      localStorage.removeItem('authToken');
      localStorage.removeItem('isLoggedIn');
    },
  },
  getters:{
    isAuthenticated: (state) => !!state.token,
  }
});
