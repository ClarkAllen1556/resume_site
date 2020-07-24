import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exp',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
