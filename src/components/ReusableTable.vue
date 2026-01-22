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
          <a
            v-if="isUrl(item[header])"
            :href="item[header]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ shortenUrl(item[header]) }}
          </a>
          <span v-else>
            {{ item[header] }}
          </span>
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
  methods: {
    isUrl(value) {
      return typeof value === 'string' && value.startsWith('http');
    },
    shortenUrl(url) {
      try {
        return url.replace(/^https?:\/\//, '');
      } catch {
        return url;
      }
    },
  },
};
</script>

<style scoped>
.reusable-table {
  width: 100%;
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
