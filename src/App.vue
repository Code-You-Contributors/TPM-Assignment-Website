<script setup>
import NavMenu from './components/NavMenu.vue';
</script>

<template>
  <div class="layout">
    <NavMenu />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

@media (max-width: 960px) {
  .layout {
    flex-direction: column;
  }
}
</style>
