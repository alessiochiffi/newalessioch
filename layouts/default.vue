<script setup lang="ts">
import { useUiStore } from "@/stores/uiStore";

const ui = useUiStore();
</script>

<template>
  <div>
    <template v-if="ui.introLoaded">
      <Nav />
    </template>
    <slot />
    <template v-if="ui.introLoaded">
      <Footer />
    </template>
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

#magicMouseCursor {
  border: 1px solid black !important;
}

body {
  font-family: "Poppins", sans-serif;
}
</style>
