<template>
  <header>
    <h1>Participant Handbook</h1>
  </header>

  <div class="container">
    <div class="table-container">
      <div class="doc-container">
        <iframe
          src="https://docs.google.com/document/d/1-RknMdosVLYJ5vgKnpOhik0JwNNsFIKma3UY_FKCG_U/preview"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Handbook',
};
</script>

<style>
.doc-container {
  height: 100vh;
}

.doc-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
