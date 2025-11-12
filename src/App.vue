<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/starters">Starters</router-link> |
    <router-link to="/assignments">Assignments</router-link> |
    <router-link to="/working-with-us">Working With Us</router-link>
  </nav>
    <router-view />
</template>

<style scoped>
  nav a {
    color: var(--black-cherry);
    font-family: var(--font-alt-headline);
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
  }
</style>
