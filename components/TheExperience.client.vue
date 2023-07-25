<template>
  <div>
    <canvas ref="experience" />
  </div>
</template>

<script setup lang="ts">
import {
  Scene,
  PerspectiveCamera,
  Mesh,
  MeshBasicMaterial,
  WebGLRenderer,
  BoxGeometry,
} from "three";

const experience = ref(null);
const { width, height } = useWindowSize();
let scrollPercent = 0;
let renderer: any;

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

onMounted(() => {
  nextTick(() => {
    renderer = new WebGLRenderer({ canvas: experience.value });
    renderer.setSize(width.value, height.value);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.aspect = window.innerWidth / window.innerHeight;

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      camera.updateProjectionMatrix();
      renderer.setSize(width.value, height.value);
      camera.aspect = window.innerWidth / window.innerHeight;

      render();
    }

    document.body.onscroll = () => {
      //calculate the current scroll progress as a percentage
      scrollPercent =
        ((document.documentElement.scrollTop || document.body.scrollTop) /
          ((document.documentElement.scrollHeight || document.body.scrollHeight) -
            document.documentElement.clientHeight)) *
        100;
    };
    animate();
  });
});

const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({
  color: 0x010101,
  wireframe: true,
});

const cube = new Mesh(geometry, material);
cube.position.set(0, 0.5, 1);
scene.add(cube);

/* Liner Interpolation
 * lerp(min, max, ratio)
 * eg,
 * lerp(20, 60, .5)) = 40
 * lerp(-20, 60, .5)) = 20
 * lerp(20, 60, .75)) = 50
 * lerp(-20, -10, .1)) = -.19
 */
function lerp(x: number, y: number, a: number): number {
  return (1 - a) * x + a * y;
}

// Used to fit the lerps to start and end at specific scrolling percentages
function scalePercent(start: number, end: number) {
  return (scrollPercent - start) / (end - start);
}

function playScrollAnimations() {
  animationScripts.forEach((a) => {
    if (scrollPercent >= a.start && scrollPercent < a.end) {
      a.func();
    }
  });
}

// Animation functions
function moveCube() {
  cube.position.z = lerp(10, 5, scalePercent(0, 40));
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  camera.lookAt(cube.position);
}

function rotateCube() {
  cube.rotation.z = lerp(0, Math.PI, scalePercent(40, 60));
  camera.position.set(0, 1, 1);
  camera.lookAt(cube.position);
}

function moveCamera() {
  camera.position.x = lerp(0, 5, scalePercent(60, 80));
  camera.position.y = lerp(1, 5, scalePercent(60, 80));
  camera.lookAt(cube.position);
}

function autoRotateCube() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

// Animation scripts
const animationScripts = [
  {
    start: 0,
    end: 40,
    func: moveCube,
  },
  {
    start: 40,
    end: 60,
    func: rotateCube,
  },
  {
    start: 60,
    end: 80,
    func: moveCamera,
  },
  {
    start: 80,
    end: 101,
    func: autoRotateCube,
  },
];

function animate() {
  requestAnimationFrame(animate);
  playScrollAnimations();
  render();
}

function render() {
  if (renderer) {
    renderer.render(scene, camera);
  }
}
</script>

<style>
canvas {
  position: fixed;
  top: 0;
  z-index: -1;
  left: 40%;
}
</style>
