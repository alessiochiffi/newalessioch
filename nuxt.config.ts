import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/google-analytics'
  ],
  nitro: {
    compressPublicAssets: true,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
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
