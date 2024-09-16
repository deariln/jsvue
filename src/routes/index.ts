import { createWebHistory, createRouter } from 'vue-router'

import NewPage from '#root/pages/NewPage.vue'
import HomePage from '#root/pages/HomePage.vue'
import AboutPage from '#root/pages/AboutPage.vue' 


const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/new', component: NewPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}