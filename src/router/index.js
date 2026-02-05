import { createRouter, createWebHistory } from 'vue-router'
import ParticipantHandbookView from '@/views/ParticipantHandbookView.vue'
import InitialProjectsView from '@/views/InitialProjectsView.vue'
import ContinuedLearningView from '@/views/ContinuedLearningView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import WorkingWithUsView from '@/views/WorkingWithUsView.vue'
import AddProjectView from '@/views/AddProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'participant-handbook',
    component: ParticipantHandbookView
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
    component: ContinuedLearningView
  },

  {
    path: '/working-with-us',
    name: 'working-with-us',
    component: WorkingWithUsView
  },

  {
    path: '/add-project',
    name: 'add-project',
    component: AddProjectView
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
