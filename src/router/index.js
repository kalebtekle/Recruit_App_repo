import { createRouter, createWebHistory } from 'vue-router';
import ProfileComponent from '../components/ProfileComponent.vue';
import HomeComponent from '../components/HomeComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';

const routes = [
  { path:'/', name:'Home', component: HomeComponent },
  { path: '/register', name:'Register', component: RegisterComponent },
  { path: '/login', name:'Login', component: LoginComponent },
  { path: '/profile/:username?', name:'Profile', component: ProfileComponent, props: route => ({ username: route.params.username || 'gis10kwo' }), },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
