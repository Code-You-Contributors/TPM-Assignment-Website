import { createRouter, createWebHistory } from 'vue-router'
import HandbookView from '@/views/HandbookView.vue'
import InitialProjectsView from '@/views/InitialProjectsView.vue'
import ContinuedLearning from '@/views/ContinuedLearning.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import WorkingWithUsView from '@/views/WorkingWithUsView.vue'
import AddProject from '@/views/AddProject.vue'

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
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },

  {
    path: '/continued-learning',
    name: 'continued-learning',
    component: ContinuedLearning
  },

  {
    path: '/working-with-us',
    name: 'working-with-us',
    component: WorkingWithUsView
  },

  {
    path: '/add-project',
    name: 'add-project',
    component: AddProject
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
