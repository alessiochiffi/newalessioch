<template>
  <div v-if="active" ref="introScreen" class="introScreen">
    <div class="word" :data-text="term">
      {{ term }}
    </div>
  </div>
  <TheExperience />
  <!-- <div v-if="!finished" ref="mask" class="mask"></div> -->
</template>

<script setup lang="ts">
import { useUiStore } from "@/stores/uiStore";

const props = defineProps<{
  terms: Array<String>;
}>();

const ui = useUiStore();
const term = ref<String>("🚀") as any;
const count = ref<Number>(0);
const finished = ref<Boolean>(false);
const active = ref<Boolean>(true);
const introScreen = ref<HTMLElement>();

function fadeOutIntroScreen() {
  introScreen.value?.classList.add("fade-out");
}

function runAnimation() {
  setInterval(() => {
    if (count.value === 9) {
      ui.removeIntro();
      finished.value = true;
      fadeOutIntroScreen();

      setTimeout(() => {
        active.value = false;
      }, 1000);
      return;
    }

    term.value = props.terms[Number(count.value)];
    count.value = count.value === 8 ? (count.value = 9) : Number(count.value) + 1;
  }, 300);
}

onMounted(() => {
  setTimeout(() => {
    runAnimation();
  }, 1000);
});
</script>

<style lang="scss" scoped>
.introScreen {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  transition: opacity 0.3s;
  &.bg-image {
    background-image: url("/introbg.jpg"),
      radial-gradient(circle at 40% 40%, transparent, black);
    background-size: cover;
    background-position: top center;
    background-color: black;
  }

  &.fade-out {
    opacity: 0;
  }
}
.word {
  font-family: "Poppins", sans-serif;
  position: relative;
  font-weight: 300;
  text-align: left;
  color: black;
  font-size: 10vw;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 12vw;
    font-weight: 600;
  }
}
</style>
