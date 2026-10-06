<template>
  <div :class="['content', { visible: introLoaded }]">
    <Nav />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { introLoaded } = useIntro();
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

.content {
  overflow: hidden;
  max-height: 100vh;
}

.visible {
  overflow: auto;
  max-height: none;
}
</style>
