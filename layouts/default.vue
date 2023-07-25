<template>
  <div :class="['content', { visible: ui.introLoaded }]">
    <Nav />
    <slot />
    <TheExperience />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useUiStore } from "@/stores/uiStore";

const ui = useUiStore();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");
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
