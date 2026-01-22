<template>
  <header>
    <h1>Projects</h1>
  </header>

  <div class="container">
    <div class="table-container">
      <ReusableTable :headers="headers" :items="items" />
    </div>
  </div>
</template>

<script>
import ReusableTable from '@/components/ReusableTable.vue';

export default {
  name: 'ProjectsView',
  components: { ReusableTable },
  data() {
    return {
      headers: ['Project', 'Status', 'Link'],
      items: [
        { Project: 'Movie Tracker', Status: 'Current', 'Link': 'https://github.com/Code-You-Contributors/MovieProject' },
        { Project: 'HUD', Status: 'Current', 'Link': 'https://github.com/Code-You-Contributors/HUD_data_master' },
        { Project: 'TPM Assignment Website', Status: 'Current', 'Link': 'https://github.com/Code-You-Contributors/TPM-Assignment-Website' },
        { Project: 'Job Board', Status: 'Current', 'Link': 'https://github.com/Code-You-Contributors/CodeYouJobBoard' },
      ],
    };
  },
};
</script>
