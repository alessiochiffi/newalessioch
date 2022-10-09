import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'UA-28525994-1'
    },
    appName: 'alessioch.com',
    pageTrackerScreenviewEnabled: true
  }, nuxtApp.vueApp.router);
});