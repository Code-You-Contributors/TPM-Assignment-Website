<template>
  <header>
    <h1>Continued Learning</h1>
  </header>

  <div class="container">
    <section>
      <h2>Data Analysis</h2>

      <div
        v-for="project in dataProjects"
        :key="project.id"
        class="project"
      >
        <a :href="project.repoLink" target="_blank" rel="noopener">
          {{ project.repoLink.replace('https://', '') }}
        </a>
        <p>{{ project.description }}</p>
      </div>
    </section>

    <section>
      <h2>Web Development</h2>

      <div
        v-for="project in webDevProjects"
        :key="project.id"
        class="project"
      >
        <a :href="project.repoLink" target="_blank" rel="noopener">
          {{ project.repoLink.replace('https://', '') }}
        </a>
        <p>{{ project.description }}</p>
      </div>
    </section>

    <section>
      <h2>Software Development</h2>

      <div
        v-for="project in softwareProjects"
        :key="project.id"
        class="project"
      >
        <a :href="project.repoLink" target="_blank" rel="noopener">
          {{ project.repoLink.replace('https://', '') }}
        </a>
        <p>{{ project.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { projects } from '@/data/projects';

const dataProjects = computed(() => projects.filter(p => p.pathway === 'data'))

const webDevProjects = computed(() => projects.filter(p => p.pathway === 'webDev'))

const softwareProjects = computed(() => projects.filter(p => p.pathway === 'softwareDev'))
</script>

<style scoped>
  .project {
    border-bottom: 1px solid var(--black-berry);
    padding-top: 1rem;
  }

  .project:last-child {
    border-bottom: none;
  }
</style>
