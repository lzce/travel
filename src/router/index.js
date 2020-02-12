import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/index.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import(/* webpackChunkName: "city" */ '@/views/city/city.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
