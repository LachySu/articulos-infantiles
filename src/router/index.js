import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Girls from '../components/section/Girls.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/girls',
    name: 'girls',
    component: Girls
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
