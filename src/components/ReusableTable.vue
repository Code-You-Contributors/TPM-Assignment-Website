<template>
  <table class="reusable-table">
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, rowIndex) in items" :key="rowIndex">
        <td v-for="(header, colIndex) in headers" :key="colIndex">
          {{ item[header] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ReusableTable',
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.reusable-table {
  border-collapse: collapse;
  border: 1px solid darkgray;
}

.reusable-table th,
.reusable-table td {
  border: 1px solid darkgray;
  padding: 1rem;
}

.reusable-table tbody tr:nth-child(even) {
  background-color:lightgray;
}
</style>
