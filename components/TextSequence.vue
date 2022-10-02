<script setup lang="ts">
import { useUiStore } from '@/stores/uiStore'

const props = defineProps({
  terms: { type: Array, required: true },
})
const ui = useUiStore()

const term = ref<String>('🚀') as any
const count = ref<Number>(0)
const blackBg = ref<Boolean>(true)
const finished = ref<Boolean>(false)
const active = ref<Boolean>(true)

setTimeout(() => {
  setInterval(() => {
    if (count.value === 10) {
      finished.value = true
      ui.removeIntro()

      setTimeout(() => {
        active.value = false
      }, 1000)
      return
    }

    term.value = props.terms[Number(count.value)]

    count.value = count.value === 9 ? (count.value = 10) : Number(count.value) + 1
    blackBg.value = !blackBg.value
  }, 300)
}, 100)
</script>

<template>
  <div v-if="active" class="hero" :class="{ 'bg-black': blackBg, 'finished': finished }">
    <div class="name" :data-text="term">
      {{ term }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Colors */
$black: black;
$orange-1: rgb(255, 115, 0);
$orange-2: rgb(255, 136, 0);
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  &.bg-black {
    background-color: black;

    .name {
      color: white;
    }
  }

  &.finished {
    background-color: transparent;
    transition: background-color 1s;
  }
}
.name {
font-family: 'Poppins', sans-serif;
  position: relative;
  color: $black;
  text-align: left;
  font-size: 10vw;
  font-weight: 600;
  user-select: none;
}
.name::before,
.name::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.name::before {
  left: 2px;
  clip: rect(79px, 1200px, 86px, 0);
  text-shadow: -2px 0 $orange-1;
  animation: name-anim-2 1s infinite linear alternate-reverse;
}
.name::after {
  /* variation */
  left: -2px;
  clip: rect(79px, 1200px, 86px, 0);
  text-shadow: -1px 0 $orange-2;
  animation: name-anim-1 1s infinite linear alternate-reverse;
  animation-delay: -1s;
}

@keyframes name-anim-1 {
  0% {
    clip: rect(20px, 1200px, 76px, 0);
  }
  20% {
    clip: rect(19px, 1200px, 16px, 0);
  }
  40% {
    clip: rect(16px, 1200px, 3px, 0);
  }
  60% {
    clip: rect(62px, 1200px, 78px, 0);
  }
  80% {
    clip: rect(25px, 1200px, 13px, 0);
  }
  100% {
    clip: rect(53px, 1200px, 86px, 0);
  }
}
@keyframes name-anim-2 {
  0% {
    clip: rect(79px, 1200px, 126px, 0);
  }
  20% {
    clip: rect(20px, 1200px, 30px, 0);
  }
  40% {
    clip: rect(25px, 1200px, 5px, 0);
  }
  60% {
    clip: rect(65px, 1200px, 85px, 0);
  }
  80% {
    clip: rect(120px, 1200px, 145px, 0);
  }
  100% {
    clip: rect(95px, 1200px, 75px, 0);
  }
}
</style>

