import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Locations from '../views/Locations.vue'
import Plan from '../views/Plan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations
  },
  {
  path: '/plan',
  name: 'Plan',
  component: Plan
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
