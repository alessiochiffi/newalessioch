<script setup lang="ts">
const selected = ref<String>("");

const tech = [
  "Js",
  "Vue",
  "Nuxt",
  "Sass",
  "CSS",
  "HTML",
  "Gsap",
  "Cypress",
  "Vite",
  "Shopify",
  "React",
  "TS",
  "Git",
  "EsLint",
  "Webpack",
  "VsCode",
  "Bitbucket",
  "Figma",
];

function onMouseEnter(item: String) {
  selected.value = item;
}
function onMouseLeave() {
  selected.value = "";
}
</script>
<template>
  <div :class="['tech-stack', { 'is-active': selected !== '' }]">
    <span class="tech-stack__selected">{{ selected }}</span>
    <ul>
      <template v-for="(item, index) in tech" :key="index">
        <li>
          <component
            :is="'icon-' + item"
            @mouseenter="onMouseEnter(item)"
            @mouseleave="onMouseLeave()"
          ></component>
        </li>
      </template>
    </ul>
  </div>
</template>

<style lang="scss">
.tech-stack {
  overflow: hidden;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  li {
    width: 200px;
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 600px) {
      width: 50%;
      margin: 20px 0;
      font-size: 14px;
    }
  }

  svg {
    max-width: 80px;
    padding: 10px 0 20px;
    height: 80px;

    @media (max-width: 600px) {
      padding-bottom: 10px;
    }
  }

  &__selected {
    align-items: center;
    display: flex;
    font-size: 20vw;
    height: 100vh;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100vw;
    z-index: -1;

    .is-active & {
      opacity: 1;
    }
  }
}
</style>
