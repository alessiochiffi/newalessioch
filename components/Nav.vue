<template>
  <header>
    <a href="/" class="logo">
      <img
        src="https://www.alessioch.com/static/media/logoalessiochf.eab475a2.png"
        alt=""
      />
    </a>
  </header>
</template>

<style lang="scss">
.logo {
  position: fixed;
  top: 10px;
  z-index: 9;

  @media (max-width: 600px) {
    img {
      max-width: 100px;
    }
  }
}
</style>
