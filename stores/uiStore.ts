import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const introLoaded = ref<Boolean>(false)

  function removeIntro() {
    introLoaded.value = true
  }
  return { introLoaded, removeIntro }
},
)

