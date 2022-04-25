import { createRouter, createWebHistory } from 'vue-router'
import CustomerInfoView from '../views/CustomerInfoView.vue'

const routes = [
  {
    path: '/',
    name: 'customer_info',
    component: CustomerInfoView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
