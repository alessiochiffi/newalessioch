<template>
  <header>
    <a href="/" class="logo fade">
      <img src="/logo.png" alt="logo alesioch.com" />
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
    }
  }
}
</style>
