<script setup>
import NavMenu from './components/NavMenu.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="layout">
    <NavMenu />

    <div class="content-wrapper">
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
  width: 100vw;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}

@media (max-width: 960px) {
  .layout {
    flex-direction: column;
  }
}
</style>
