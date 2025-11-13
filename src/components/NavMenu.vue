<template>
  <aside :class="isOpen ? 'active' : ''">
    <img src="@/assets/imgs/cy-logo-dstacked-color.png" alt="Code:You logo" class="logo-stacked" id="logo-stacked">
    <img src="@/assets/imgs/cy-logo-horz-color.png" alt="Code:You logo" class="logo-horizontal" id="logo-horizontal">
    <nav>
      <router-link to="/" v-on:click="closeMenu">Home</router-link>
      <router-link to="/initial-projects" v-on:click="closeMenu">Initial Projects</router-link>
      <router-link to="/assignments" v-on:click="closeMenu">Assignments</router-link>
      <router-link to="/working-with-us" v-on:click="closeMenu">Working With Us</router-link>
    </nav>
  </aside>
  <div class="content">
    <div class="hamburger" v-on:click="toggleMenu">
      <i v-bind:class="['fa-solid', isOpen ? 'fa-x' : 'fa-bars']"></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<style scoped>
.logo-horizontal {
  display: none;
}

.logo-stacked {
  width: 70%;
  height: auto;
  margin-bottom: 80px;
  align-self: center;
}

aside {
  background-color: var(--bg-5);
  color: var(--black-cherry);
  font-family: var(--font-alt-headline);
  padding: 40px 20px;
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}

aside a {
  display: flex;
  align-items: center;
  font-family: var(--font-alt-headline);
  text-decoration: none;
  color: var(--blue);
  gap: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1.1em;
  transition: color 0.3s ease;
}

.hamburger {
  font-size: 1rem;
  position: fixed;
  top: 10px;
  right: 10px;
  display: none;
  width: 2rem;
  height: 2rem;
  background-color: var(--black-cherry);
  color: var(--bg-5);
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 50%;
  cursor: pointer;
}

@media (max-width: 960px) {
  .logo-stacked {
    display: none;
  }

  .logo-horizontal {
    display: block;
    flex: 1;
    max-width: 100%;
    max-height: 40px;
  }

  aside {
    height: 50px;
    width: 100vw;
    padding: 40px 20px;
    flex-direction: row;
  }

  aside nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-basis: 75%;
  }

  aside nav a {
    margin-bottom: 0;
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  aside {
    width: 100vw;
    flex-direction: column;
    z-index: 2;
    height: 100vh;
    position: fixed;
    top: -100vh;
    transition: all 0.2s;
  }

  aside.active {
    top: 0;
  }

  aside nav {
    flex-direction: column;
  }

  aside nav a {
    font-size: 2rem;
  }

  .hamburger {
    display: flex;
  }
}
</style>
