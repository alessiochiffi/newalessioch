import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  nitro: {
    compressPublicAssets: true,
  },
  experimental: {
    reactivityTransform: true,
  },
  build: {
    transpile: [
      'gsap',
    ],
  },
  colorMode: {
    classSuffix: '',
  },
})
