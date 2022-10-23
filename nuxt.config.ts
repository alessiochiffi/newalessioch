import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  target: "static",
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  nitro: {
    compressPublicAssets: true,
  },
  components: {
    global: true,
    dirs: ['~/components', '~/icons']
  },
  experimental: {
    reactivityTransform: true,
  },
  build: {
    transpile: [
      'gsap',
      'vanilla-tilt'
    ],
  }
})
