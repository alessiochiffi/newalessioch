<script setup lang="ts">
import gsap from "gsap";
import { storeToRefs } from "pinia";
import { useUiStore } from "@/stores/uiStore";

const ui = useUiStore();
const { introLoaded } = storeToRefs(ui);
const tl = gsap.timeline();

watch(introLoaded, () => {
  setTimeout(() => {
    tl.to(".fade", {
      y: 0,
      opacity: 1,
      stagger: 0.1,
    });
  }, 500);
});
</script>

<template>
  <div>
    <TextSequence
      :terms="['👋', 'hello', 'ciao', 'welcome', 'to', 'my', 'site', 'alessioch', '.com']"
    />

    <div class="hero-content">
      <h1 class="fade">Hello, I'm Alessio</h1>
      <h2 class="fade">Senior Frontend Developer based in London - UK</h2>
      <p class="fade">
        Born and raised in Salento, Italy. I moved to London in 2015 right after my
        graduation in Business Communication at La Sapienza University of Rome.
      </p>
      <p class="fade">
        I wrote my first line of code in 2012, while I was working on a University tech
        project. Since then, my passion for coding and front end development has never
        stopped.
      </p>
      <p class="fade">
        More than 6 years of commercial experience. I had the pleasure to work for clients
        like Finisterre, Arcelormittal, Safaricom, David Beckham Eyewear, Union Coffee,
        Tesco PLC, GSK, Bluebella, Lauren Conrad Beauty, New Statesman, Elite Traveler and
        more
      </p>
      <p class="fade">Technology I love and use</p>
      <TechStack />
    </div>
  </div>
</template>

<style lang="scss">
.fade {
  opacity: 0;
  transform: translateY(10px);
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 80vh;
  max-width: 800px;
  margin: 150px auto 0;
  padding: 0 15px;
  text-align: left;
}

h1 {
  font-size: 8vw;
  line-height: 1;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 13vw;
  }
}

h2 {
  line-height: 1.2;
  font-size: 3vw;

  @media (max-width: 600px) {
    font-size: 5vw;
  }
}
</style>
