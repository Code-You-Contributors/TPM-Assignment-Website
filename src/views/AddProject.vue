<template>
  <header>
    <h1>Add Project</h1>
  </header>

  <div class="container">
    <form @submit.prevent="handleSubmit">
      <select v-model="form.pathway">
        <option value="" disabled hidden>Select a pathway</option>
        <option value="data">Data Analysis</option>
        <option value="webDev">Web Development</option>
        <option value="softwareDev">Software Development</option>
      </select>

      <input v-model="form.repoLink" placeholder="Repository Link" required />

      <textarea v-model="form.description" placeholder="Description" required></textarea>

      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  pathway: '',
  repoLink: '',
  description: '',
})

function handleSubmit() {
  const project = {
    id: Date.now(),
    pathway: form.pathway,
    repoLink: form.repoLink,
    description: form.description
  }

  console.log(`
  {
    id: ${project.id},
    pathway: '${project.pathway}',
    repoLink: '${project.repoLink}',
    description: '${project.description}'
  },
  `)

  Object.assign(form, {
    pathway: '',
    repoLink: '',
    description: ''
  })
}
</script>

<style scoped>
  .container {
    max-width: 800px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  select,
  input,
  textarea {
    border-radius: 7px;
    border: 1px solid var(--white);
    padding: 0.75rem;
    font-size: 1.1rem;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  button {
    align-self: center;
    padding: 0.75rem;
    cursor: pointer;
    font-size: 1.1rem;
    color: var(--white);
    border-radius: 7px;
    border: 1px solid;
    background-color: var(--black-cherry);
  }

  button:hover {
    background-color: var(--black-berry);
  }
</style>
