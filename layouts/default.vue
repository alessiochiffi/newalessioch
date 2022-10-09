<script setup lang="ts">
import { useUiStore } from "@/stores/uiStore";

const ui = useUiStore();
</script>

<template>
  <div :class="['main', { visible: ui.introLoaded }]">
    <Nav />
    <slot />
    <Footer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");
html,
body {
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
}

main {
  opacity: 0;
}

.visible {
  opacity: 1;
}

body {
  font-family: "Poppins", sans-serif;
}
</style>
