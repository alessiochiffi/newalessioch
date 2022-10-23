<template>
  <header>
    <a href="/" class="logo fade">
      <img
        src="/logo.png?webp"
        alt="logo alesioch.com"
        width="111"
        height="111"
        loading="lazy"
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
