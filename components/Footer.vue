<template>
  <footer>
    <div class="container">
      <h2>Get in touch</h2>
      <div class="contacts">
        <a href="https://www.linkedin.com/in/alessiochiffi/">Linkedin profile</a>
        <a href="mailto:alessiochf@gmail.com">alessiochf@gmail.com</a>
      </div>
    </div>

    <div class="signature">
      <img src="/signature.png" alt="signature" loading="lazy" />
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: black;
  color: white;
  margin: 20px 0 0;
  padding: 40px 0;

  .container {
    max-width: 1200px;
    border-bottom: 1px solid white;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  .contacts {
    display: flex;
    flex-direction: column;

    a {
      color: white;
      margin-bottom: 10px;
    }
  }

  .signature {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0 0;

    img {
      width: 180px;
    }
  }
}
</style>
