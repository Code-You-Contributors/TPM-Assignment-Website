<template>
  <footer>
    <p>Interested in contributing or want us to work with your non-profit? Contact us!</p>

    <div class="section">
      <div class="person">
        David York:
        <ExternalLink href="https://www.linkedin.com/in/david-m-york/">LinkedIn</ExternalLink>
        <ExternalLink href="mailto:david@codeyou.org">Email</ExternalLink>
      </div>

      <div class="person">
        Danny Morton:
        <ExternalLink href="https://www.linkedin.com/in/dmorton714/">LinkedIn</ExternalLink>
        <ExternalLink href="mailto:danny@codeyou.org">Email</ExternalLink>
      </div>
    </div>

    <p>Contributors</p>

    <div class="section">
      <div class="person">
        Huan Song:
        <ExternalLink href="https://www.linkedin.com/in/huansong/">LinkedIn</ExternalLink>
        <ExternalLink href="mailto:huansong1214@gmail.com">Email</ExternalLink>
      </div>
    </div>

    <p>© {{ year }} Code:You. All rights reserved.</p>
  </footer>
</template>

<script setup>
import ExternalLink from './ExternalLink.vue';

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

footer a {
  color: var(--white);
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.5);
  width: max-content;
  margin: 0 auto;
  padding-bottom: 0.5rem;
}

.person {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

footer p {
  margin: 0.5rem 0;
}

@media (min-width: 768px) {
  .section {
    flex-direction: row;
    justify-content: center;
  }

  .person:not(:last-child)::after {
    content:"|";
    margin: 0 0.5rem;
  }
}
</style>
