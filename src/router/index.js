import { createRouter, createWebHistory } from 'vue-router';
import ProfileComponent from '../components/ProfileComponent.vue';
import HomeComponent from '../components/HomeComponent.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import LoginComponent from '../components/LoginComponent.vue';

const routes = [
  { path:'/', component: HomeComponent },
  { path: '/register', component: RegisterComponent },
  { path: '/login', component: LoginComponent },
  { path: '/profile', component: ProfileComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
