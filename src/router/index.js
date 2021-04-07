import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import AuthGuard from './auth-guard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: AuthGuard
  },
  // user
  {
    path: '/login',
    name: 'Signin',
    component: () => import('@/components/User/Signin.vue'),
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: () => import('@/components/User/Profile.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
