<script setup lang="ts">
import gsap from "gsap";

const { introLoaded } = useIntro();

watch(introLoaded, () => {
  gsap.fromTo(
    ".fade",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
  );
});
</script>

<template>
  <div>
    <TextSequence
      :terms="['👋', 'ciao!', 'welcome', 'to', 'my', 'site', 'alessioch', '.com']"
    />

    <div class="hero-content">
      <h1 class="fade">
        Hi there, <br />
        I'm Alessio
      </h1>
      <h2 class="fade">Senior Frontend Engineer based in London</h2>
      <p class="fade">
        I care about building fast, accessible and well-crafted experiences for the web.
      </p>
      <p class="fade">
        I work mainly with JavaScript and TypeScript, building websites and web apps with
        Vue, Nuxt and React. I currently work at Radley Yeldar, where I build and
        maintain the Nuxt frontend our team works with, including its integration with
        Umbraco CMS. I’m also responsible for performance, Core Web Vitals and our CI
        pipeline, areas I’ve become increasingly interested in because I believe that
        good frontend work is about more than just getting a page to render.
      </p>
      <p class="fade">
        I’ve been building for the web since 2017, long before AI became part of the
        everyday development workflow. Today, I use tools like Claude as part of how I
        work, alongside the fundamentals I’ve developed over years of writing and
        maintaining production code. I’m also interested in building with AI itself, and
        have worked with the AI SDK and Google Gemini. I built
        <a href="https://grammaco.alessioch.com/">Grammaco</a>, a grammar checker powered
        by Gemini, as one example.
      </p>
      <p class="fade">
        Over the last decade, I’ve worked with organisations including Finisterre,
        ArcelorMittal, Safaricom, Tesco, GSK, Bluebella and New Statesman.
      </p>
      <p class="fade">
        I’m originally from Salento in southern Italy and have called London home since
        2015, when I moved here after studying Business Communication at La Sapienza in
        Rome.
      </p>
      <h3 class="fade">Tech stack and tools</h3>
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

  a {
    color: inherit;
  }

  h3 {
    font: inherit;
  }

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
