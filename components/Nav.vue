<template>
  <header>
    <a href="/" class="logo fade">
      <nuxt-img
        format="webp"
        src="/logo.png"
        alt="logo alesioch.com"
        quality="100"
        sizes="sm:100px md:111px"
      />
    </a>
  </header>
</template>

<style lang="scss">
.logo {
  position: fixed;
  top: 10px;
  z-index: 9;
  opacity: 0;

  @media (max-width: 600px) {
    img {
      max-width: 100px;
      height: auto;
    }
  }
}
</style>
