<template>
  <footer>
    <p>© {{ year }} Code:You. All rights reserved.</p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
footer {
  text-align: center;
  padding: 20px;
  color: var(--white);
  font-size: 0.9em;
  margin-top: auto;
}
</style>
