import { createRouter, createWebHistory } from 'vue-router';
import ProfileComponent from '../components/ProfileComponent.vue';
import MainComponent from '../components/MainComponent.vue';
import LoginComponent2 from '../components/LoginComponent2.vue';
import OffersPageComponent from '../components/OffersPageComponent.vue';
import EmployerRegister from '../components/EmployerRegister.vue';
import JobSeekerRegister from '../components/JobSeekerRegister.vue';
import RegisterComponent from '../components/RegisterComponent.vue';
import UploadResume from '../components/UploadResume.vue';
import PostJob from '../components/PostJob.vue';

const routes = [
  { path:'/', name:'Main', component: MainComponent },
  { path:'/register', name:'Register', component: RegisterComponent },
  { path:'/register-jobseeker', name:'JobSeekerRegister', component: JobSeekerRegister },
  { path:'/register-employer', name:'EmployerRegister', component: EmployerRegister },
  { path: '/login', name:'Login', component: LoginComponent2 },
  { path: '/upload-resume', name: 'UploadResume', component: UploadResume },
  { path: '/post-job', name:'PostJob', component: PostJob },
  { path: '/offers', name:'Offers', component: OffersPageComponent },
  { path: '/profile/:username?', name:'Profile', component: ProfileComponent, props: route => ({ username: route.params.username || 'gis10kwo' }), },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
