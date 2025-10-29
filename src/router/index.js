import { createRouter, createWebHistory } from 'vue-router'
import AssignmentView from '@/views/AssignmentView.vue'
import WorkingWithUsView from '@/views/WorkingWithUsView.vue'

const routes = [
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
