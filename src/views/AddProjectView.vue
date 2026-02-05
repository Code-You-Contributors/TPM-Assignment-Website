<template>
  <header>
    <h1>Add Project</h1>
  </header>

  <div class="container">
    <form @submit.prevent="handleSubmit">
      <select v-model="form.pathway" required>
        <option value="" disabled hidden>Select a pathway</option>
        <option value="data">Data Analysis</option>
        <option value="webDev">Web Development</option>
        <option value="softwareDev">Software Development</option>
      </select>

      <input v-model="form.repoLink" placeholder="Repository Link" required />

      <textarea v-model="form.description" placeholder="Description" required></textarea>

      <button type="submit" class="btn">Generate Project Object</button>
    </form>
  </div>

  <!-- Display the last generated project. -->
  <div class="container flex-center">
    <section class="output">
      <h2>Generated Project Object</h2>
      <pre><code>{{ lastProject ? formattedProject : '// Output' }}</code></pre>
    </section>

    <button type="button" class="btn" @click="copyToClipboard">Copy to Clipboard</button>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';

const form = reactive({
  pathway: '',
  repoLink: '',
  description: '',
})

// Store the most recently submitted project.
const lastProject = ref(null)

const formattedProject = computed(() => {
  if (!lastProject.value) return ''
  const p = lastProject.value
  return `{
  id: ${p.id},
  pathway: '${p.pathway}',
  repoLink: '${p.repoLink}',
  description: '${p.description}'
},`
})

function handleSubmit() {
  const project = {
    id: Date.now(),
    pathway: form.pathway,
    repoLink: form.repoLink,
    description: form.description
  }

  // Store the project for display.
  lastProject.value = project

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

function copyToClipboard() {
  if(!lastProject.value) return
  navigator.clipboard.writeText(formattedProject.value)
    .catch(err => {
      console.error('Failed to copy:', err)
    })
}
</script>

<style scoped>
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

  .flex-center {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  pre {
    overflow-x: auto;
  }

  .output {
    margin: 30px 0 0 0;
  }
</style>
