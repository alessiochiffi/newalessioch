<template>
  <div class="tech-stack">
    <ul ref="list">
      <li v-for="item in tech" :key="item.icon">
        <component :is="'icon-' + item.icon" aria-hidden="true"></component>
        <span class="tech-stack__name">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

const list = ref<HTMLElement>();
const { introLoaded } = useIntro();
const isVisible = useElementVisibility(list, { rootMargin: "0px 0px -100px 0px" });
const tech = [
  { icon: "Js", name: "JavaScript" },
  { icon: "TS", name: "TypeScript" },
  { icon: "Vue", name: "Vue" },
  { icon: "Nuxt", name: "Nuxt" },
  { icon: "React", name: "React" },
  { icon: "Pinia", name: "Pinia" },
  { icon: "Umbraco", name: "Umbraco" },
  { icon: "Claude", name: "Claude" },
  { icon: "Gemini", name: "Google Gemini" },
  { icon: "AiSdk", name: "AI SDK" },
  { icon: "Copilot", name: "GitHub Copilot" },
  { icon: "Sass", name: "Sass" },
  { icon: "CSS", name: "CSS" },
  { icon: "HTML", name: "HTML" },
  { icon: "Gsap", name: "GSAP" },
  { icon: "Vite", name: "Vite" },
  { icon: "Cypress", name: "Cypress" },
  { icon: "EsLint", name: "ESLint" },
  { icon: "Git", name: "Git" },
  { icon: "AzureDevOps", name: "Azure DevOps" },
  { icon: "Bitbucket", name: "Bitbucket" },
  { icon: "VsCode", name: "VS Code" },
  { icon: "Figma", name: "Figma" },
  { icon: "Shopify", name: "Shopify" },
];
let revealed = false;

function reveal() {
  if (revealed || !list.value) return;

  revealed = true;
  gsap.fromTo(
    list.value.children,
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }
  );
}

watch([isVisible, introLoaded], ([visible, loaded]) => {
  if (visible && loaded) reveal();
});
</script>

<style lang="scss">
.tech-stack {
  align-self: center;
  width: min(1200px, calc(100vw - 30px));

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    gap: 10px;
    list-style: none;
    margin: 60px 0 40px;
    padding: 0;

    @media (max-width: 600px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    padding: 28px 10px;
    opacity: 0;

    @media (max-width: 600px) {
      padding: 18px 4px;
    }
  }

  svg {
    width: 76px;
    height: 76px;
    transition: transform 0.2s ease;

    @media (max-width: 600px) {
      width: 54px;
      height: 54px;
    }
  }

  &__name {
    font-size: 14px;
    text-align: center;
  }

  @media (hover: hover) {
    li:hover svg {
      transform: translateY(-6px) scale(1.08);
    }
  }
}
</style>
