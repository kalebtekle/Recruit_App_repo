import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import AccountInfo from '../components/AccountInfo.vue'
import Confirmation from '../components/Confirmation.vue'

const routes = [
  { path: '/', component: { template: '<div>Home</div>' } },
  { path: '/about', component: { template: '<div>About</div>' } },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/account-info', component: AccountInfo },
  { path: '/confirmation', component: Confirmation },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
