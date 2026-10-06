<template>
  <div v-if="active" :class="['introScreen', { 'fade-out': fadingOut }]">
    <div class="word" :data-text="term">
      {{ term }}
    </div>
  </div>
  <TheExperience />
</template>

<script setup lang="ts">
const props = defineProps<{
  terms: string[];
}>();

const { removeIntro } = useIntro();
const term = ref("🚀");
const count = ref(0);
const active = ref(true);
const fadingOut = ref(false);
const { pause, resume } = useIntervalFn(showNextTerm, 300, { immediate: false });
const { start: hideIntroScreen } = useTimeoutFn(
  () => {
    active.value = false;
  },
  1000,
  { immediate: false }
);

function showNextTerm() {
  if (count.value > props.terms.length) {
    pause();
    removeIntro();
    fadingOut.value = true;
    hideIntroScreen();
    return;
  }

  term.value = props.terms[count.value] ?? "";
  count.value++;
}

useTimeoutFn(resume, 1000);
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
