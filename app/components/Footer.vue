<template>
  <footer>
    <div class="container">
      <h2>Get in touch</h2>
      <div class="contacts">
        <a href="https://www.linkedin.com/in/alessiochiffi/">
          <IconLinkedin aria-hidden="true" />
          LinkedIn profile
        </a>
        <a href="mailto:alessiochf@gmail.com">
          <IconEmail aria-hidden="true" />
          alessiochf@gmail.com
        </a>
      </div>
    </div>

    <p class="colophon">© {{ new Date().getFullYear() }} Alessio Chiffi</p>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: black;
  color: white;
  margin: 20px 0 0;
  padding: 40px 0;
  opacity: 0;

  .visible & {
    opacity: 1;
  }

  .container {
    max-width: 1200px;
    border-bottom: 1px solid white;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    a {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: white;
      margin-bottom: 10px;
    }

    svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }
  }

  .colophon {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px 0;
    font-size: 14px;
    font-weight: 300;
    opacity: 0.7;
  }
}
</style>
