<script setup>
import NavMenu from './components/NavMenu.vue';
</script>

<template>
  <div class="layout">
    <NavMenu />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
}

content {
  flex: 1;
  padding: 40px 30px;
  background-color: var(--bg-1);
  color: var(--black-cherry);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 960px) {
  .layout {
    flex-direction: column;
  }
}
</style>
