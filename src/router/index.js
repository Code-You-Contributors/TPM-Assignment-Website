import { createRouter, createWebHistory } from 'vue-router'
import HandbookView from '@/views/HandbookView.vue'
import StartersView from '@/views/StartersView.vue'
import AssignmentView from '@/views/AssignmentView.vue'
import WorkingWithUsView from '@/views/WorkingWithUsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HandbookView
  },

  {
    path: '/starters',
    name: 'starters',
    component: StartersView
  },

  {
    path: '/assignments',
    name: 'assignments',
    component: AssignmentView
  },

  {
    path: '/working-with-us',
    name: 'working-with-us',
    component: WorkingWithUsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
