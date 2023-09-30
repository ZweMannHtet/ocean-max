import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '../views/AboutUs.vue'
import PropertyForRent from '../views/PropertyForRent.vue'
import Agents from '../views/Agents.vue'
import Services from '../views/Services.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutus',
    name: 'About',
    component: AboutUs
  },
  {
    path: '/propertyforrent',
    name: 'PropertyForRent',
    component: PropertyForRent
  },
  {
    path: '/agents',
    name: 'Agents',
    component: Agents
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
