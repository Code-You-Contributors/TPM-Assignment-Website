<template>
  <aside :class="isOpen ? 'active' : ''">
    <img src="@/assets/imgs/cy-logo-dstacked-color.png" alt="Code:You logo" class="logo-stacked" id="logo-stacked">
    <img src="@/assets/imgs/cy-logo-horz-color.png" alt="Code:You logo" class="logo-horizontal" id="logo-horizontal">

    <nav>
      <router-link to="/" v-on:click="closeMenu"><i class="fa-solid fa-file"></i>Participant Handbook</router-link>
      <router-link to="/initial-projects" v-on:click="closeMenu"><i class="fa-solid fa-file-code"></i>Initial Projects</router-link>
      <router-link to="/projects" v-on:click="closeMenu"><i class="fa-solid fa-calendar-check"></i>Projects</router-link>
      <router-link to="/continued-learning" v-on:click="closeMenu"><i class="fa-solid fa-graduation-cap"></i>Continued Learning</router-link>
      <router-link to="/working-with-us" v-on:click="closeMenu"><i class="fa-solid fa-people-group"></i>Working With Us</router-link>
    </nav>

    <button class="hamburger" v-on:click="toggleMenu">
      <i v-bind:class="['fa-solid', isOpen ? 'fa-x' : 'fa-bars']"></i>
    </button>
  </aside>
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
  width: 280px;
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
  color: var(--black-cherry);
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
  border: none;
}

@media (max-width: 960px) {
  .logo-stacked {
    display: none;
  }

  .logo-horizontal {
    display: block;
    max-width: 100%;
    max-height: 40px;
    padding: 0 10px;
  }

  aside {
    height: 100px;
    width: 100vw;
    flex-direction: row;
    gap: 20px;
  }

  aside nav {
    min-width: 0;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  aside nav a {
    min-width: 0;
    flex-direction: column;
    margin-bottom: 0;
    font-size: clamp(1rem, 2vw, 1.25rem);
    text-align: center;
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .logo-horizontal {
    display: none;
  }

  .logo-stacked {
    display: block;
    max-width: 20%;
  }

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
    align-items: center;
    flex: 1;
  }

  aside nav a {
    flex-direction: row;
    font-size: 2rem;
  }

  .hamburger {
    display: flex;
  }
}
</style>
