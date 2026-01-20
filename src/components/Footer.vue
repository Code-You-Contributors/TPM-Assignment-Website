<template>
  <footer>
    <p>Interested in contributing or want us to work with your non-profit? Contact us!</p>

    <div class="section">
      <div class="person">
        David York:
        <a href="https://www.linkedin.com/in/david-m-york/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:david@codeyou.org">Email</a>
      </div>

      <div class="person">
        Danny Morton:
        <a href="https://www.linkedin.com/in/dmorton714/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:danny@codeyou.org">Email</a>
      </div>
    </div>

    <p>Contributors</p>

    <div class="section">
      <div class="person">
        Huan Song:
        <a href="https://www.linkedin.com/in/huansong/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:huansong1214@gmail.com">Email</a>
      </div>
    </div>

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
