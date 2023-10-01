<script setup lang="ts">
import gsap from "gsap";
import { storeToRefs } from "pinia";
import { useUiStore } from "@/stores/uiStore";

const ui = useUiStore();
const { introLoaded } = storeToRefs(ui);
const tl = gsap.timeline();

watch(introLoaded, () => {
  tl.to(".fade", {
    y: 0,
    opacity: 1,
    stagger: 0.1,
  });
});
</script>

<template>
  <div>
    <TextSequence
      :terms="['👋', 'ciao!', 'welcome', 'to', 'my', 'site', 'alessioch', '.com']"
    />

    <div class="hero-content">
      <h1 class="fade">
        Hi there! <br />
        I'm Alessio
      </h1>
      <h2 class="fade">Senior Frontend Developer based in London - UK</h2>
      <p class="fade">
        Born and raised in Salento, Italy. I moved to London in 2015 right after
        completing my degree in Business Communication at La Sapienza University of Rome.
      </p>
      <p class="fade">
        I started my journey as a Frontend Developer back in 2012 during my university
        days when I worked on a tech project. Since then, I've been steadily working in
        frontend web development, gaining more than 7 years of commercial experience.
      </p>
      <p class="fade">
        My work has had me collaborating with a variety of clients, including branks like
        Finisterre, Arcelormittal, Safaricom, David Beckham Eyewear, Union Coffee, Tesco
        PLC, GSK, Bluebella, Lauren Conrad Beauty, New Statesman, and Elite Traveler.
      </p>
      <p class="fade">Tech stack</p>
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

  @media (min-width: 1600px) {
    max-width: 1000px;
  }
}

h1 {
  font-size: 8vw;
  line-height: 1;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 13vw;
  }

  @media (min-width: 1600px) {
    font-size: 7vw;
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
