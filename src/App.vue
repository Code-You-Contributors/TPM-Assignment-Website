<script setup>
import NavMenu from './components/NavMenu.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="layout">
    <NavMenu />
    
    <div>
      <main>
        <router-view />
      </main>

      <Footer />
    </div>
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
