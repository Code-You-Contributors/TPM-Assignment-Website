<template>
  <aside>
    <nav class="nav-menu">
      <router-link to="/">Home</router-link>
      <router-link to="/starters">Starters</router-link>
      <router-link to="/assignments">Assignments</router-link>
      <router-link to="/working-with-us">Working With Us</router-link>
    </nav>
  </aside>

</template>

<style scoped>
  aside nav {
    display: flex;
    flex-direction: column;
  }
  nav a {
    color: var(--black-cherry);
    font-family: var(--font-alt-headline);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
  }
</style>
