<template>
  <div>
    <h1>Assignments</h1>
    <ReusableTable :headers="headers" :items="items" />
  </div>
</template>

<script>
import ReusableTable from '@/components/ReusableTable.vue';

export default {
  name: 'AssignmentView',
  components: { ReusableTable },
  data() {
    return {
      headers: ['Task', 'Status', 'Due Date'],
      items: [
        { Task: 'Create Reusable Table Component', Status: 'Ready', 'Due Date': '2025-10-31' },
        { Task: 'Build the "Assignment" View', Status: 'Ready', 'Due Date': '2025-10-31' },
        { Task: 'Build the "Working With Us" View', Status: 'Ready', 'Due Date': '2025-10-31' },
        { Task: 'Configure Vue Router and Navigation', Status: 'Ready', 'Due Date': '2025-10-31' },
      ],
    };
  },
};
</script>
