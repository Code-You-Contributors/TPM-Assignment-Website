import { createRouter, createWebHistory } from 'vue-router'
import HandbookView from '@/views/HandbookView.vue'
import InitialProjectsView from '@/views/InitialProjectsView.vue'
import AssignmentView from '@/views/AssignmentView.vue'
import WorkingWithUsView from '@/views/WorkingWithUsView.vue'

const routes = [
  {
    path: '/',
    name: 'handbook',
    component: HandbookView
  },

  {
    path: '/initial-projects',
    name: 'initial-projects',
    component: InitialProjectsView
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
