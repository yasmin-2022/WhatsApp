import { createRouter, createWebHistory } from 'vue-router'
import WhatsApp from '../views/WhatsApp.vue'
import LoginPage from '@/views/LoginPage.vue'
import AppChat from '../components/AppChat.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'whatsApp',
      component: WhatsApp,
      children: [
        {
          path: '/',
          component: AppChat
        },
        {
          path: '/login',
          name: 'login',
          component: LoginPage
        }
      ]
    }
  ]
})

export default router
