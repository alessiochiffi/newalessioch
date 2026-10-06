<template>
  <div
    :class="['tech-stack', { 'is-ready': introLoaded, 'is-active': selected !== '' }]"
  >
    <span class="tech-stack__selected" aria-hidden="true">{{ selected }}</span>
    <ul>
      <li v-for="item in tech" :key="item.icon">
        <component
          :is="'icon-' + item.icon"
          aria-hidden="true"
          @mouseenter="onMouseEnter(item.icon)"
          @mouseleave="onMouseLeave()"
        ></component>
        <span class="tech-stack__name">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const selected = ref<String>("");

const { introLoaded } = useIntro();

const tech = [
  { icon: "Js", name: "JavaScript" },
  { icon: "TS", name: "TypeScript" },
  { icon: "Vue", name: "Vue" },
  { icon: "Nuxt", name: "Nuxt" },
  { icon: "React", name: "React" },
  { icon: "Umbraco", name: "Umbraco" },
  { icon: "Gemini", name: "Google Gemini" },
  { icon: "Sass", name: "Sass" },
  { icon: "CSS", name: "CSS" },
  { icon: "HTML", name: "HTML" },
  { icon: "Gsap", name: "GSAP" },
  { icon: "Cypress", name: "Cypress" },
  { icon: "Vite", name: "Vite" },
  { icon: "Git", name: "Git" },
  { icon: "EsLint", name: "ESLint" },
  { icon: "Webpack", name: "Webpack" },
  { icon: "VsCode", name: "VS Code" },
  { icon: "Bitbucket", name: "Bitbucket" },
  { icon: "Figma", name: "Figma" },
  { icon: "Shopify", name: "Shopify" },
];

function onMouseEnter(item: String) {
  selected.value = item;
}
function onMouseLeave() {
  selected.value = "";
}
</script>

<style lang="scss">
.tech-stack {
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.6s;

  &.is-ready {
    opacity: 1;
  }

  &__name {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

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
