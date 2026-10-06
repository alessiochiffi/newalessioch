<template>
  <canvas ref="canvas" class="experience" aria-hidden="true" />
</template>

<script setup lang="ts">
import * as THREE from "three";
import gsap from "gsap";

const POINT_COUNT = 2400;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));

const canvas = ref<HTMLCanvasElement>();
const { introLoaded } = useIntro();
const { width, height } = useWindowSize();
const reducedMotion = usePreferredReducedMotion();
const pointer = { x: 0, y: 0 };
const sphere = { x: 0, y: 0, scale: 1 };
const uniforms = {
  uTime: { value: 0 },
  uProgress: { value: 0 },
  uSize: { value: 0.014 },
  uPixelScale: { value: 1 },
  uDissolve: { value: 0 },
  uColor: { value: new THREE.Color("#000000") },
};
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
const geometry = new THREE.BufferGeometry();
const material = new THREE.ShaderMaterial({
  uniforms,
  vertexShader: sphereVertexShader,
  fragmentShader: sphereFragmentShader,
  transparent: true,
  depthWrite: false,
});
const points = new THREE.Points(geometry, material);
const tilt = new THREE.Group();
const { pause, resume } = useRafFn(render, { immediate: false });
let renderer: THREE.WebGLRenderer | undefined;
let spin = 0;

function buildGeometry() {
  const positions = new Float32Array(POINT_COUNT * 3);
  const scatter = new Float32Array(POINT_COUNT * 3);
  const randoms = new Float32Array(POINT_COUNT);
  const direction = new THREE.Vector3();

  for (let i = 0; i < POINT_COUNT; i++) {
    const y = 1 - (2 * (i + 0.5)) / POINT_COUNT;
    const radius = Math.sqrt(1 - y * y);
    const theta = i * GOLDEN_ANGLE;

    positions[i * 3] = Math.cos(theta) * radius;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = Math.sin(theta) * radius;

    direction.randomDirection().multiplyScalar(2 + Math.random() * 3);
    scatter[i * 3] = direction.x;
    scatter[i * 3 + 1] = direction.y;
    scatter[i * 3 + 2] = direction.z;

    randoms[i] = Math.random();
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aScatter", new THREE.BufferAttribute(scatter, 3));
  geometry.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1));
}

function getViewSize() {
  const viewHeight =
    2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;

  return { viewWidth: viewHeight * camera.aspect, viewHeight };
}

function getFitScale() {
  return Math.min(1.2, getViewSize().viewWidth / 2.9);
}

function dissolve() {
  const { viewWidth, viewHeight } = getViewSize();

  gsap.to(sphere, {
    scale: 0,
    duration: 2.5,
    ease: "power1.in",
    onComplete: pause,
  });
  gsap.to(sphere, {
    x: viewWidth / 2 - 0.3,
    y: viewHeight / 2 - 0.3,
    duration: 2.5,
    ease: "power1.inOut",
  });
  gsap.to(uniforms.uDissolve, { value: 1, duration: 1.5, ease: "none" });
}

function resize() {
  if (!renderer) return;

  camera.aspect = width.value / height.value;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width.value, height.value, false);
  uniforms.uPixelScale.value =
    renderer.domElement.height / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)));
}

function onPointerMove(event: PointerEvent) {
  pointer.x = (event.clientX / width.value) * 2 - 1;
  pointer.y = (event.clientY / height.value) * 2 - 1;
}

function render({ delta }: { delta: number }) {
  if (!renderer) return;

  const seconds = Math.min(delta, 100) / 1000;
  const damping = 1 - Math.exp(-seconds * 4);

  if (reducedMotion.value !== "reduce") {
    uniforms.uTime.value += seconds;
    spin += seconds * 0.06;
  }

  points.rotation.y = spin + window.scrollY * 0.0015;
  tilt.rotation.x += (pointer.y * 0.35 - tilt.rotation.x) * damping;
  tilt.rotation.y += (pointer.x * 0.5 - tilt.rotation.y) * damping;
  tilt.position.set(sphere.x, sphere.y, 0);
  tilt.scale.setScalar(sphere.scale);

  renderer.render(scene, camera);
}

function init(element: HTMLCanvasElement) {
  renderer = new THREE.WebGLRenderer({
    canvas: element,
    alpha: true,
    antialias: true,
  });
  renderer.setClearColor(0x000000, 0);

  camera.position.z = 4.2;
  points.frustumCulled = false;
  buildGeometry();
  tilt.add(points);
  scene.add(tilt);

  resize();
  sphere.scale = getFitScale();

  if (reducedMotion.value === "reduce") {
    uniforms.uProgress.value = 1;
  } else {
    gsap.to(uniforms.uProgress, { value: 1, duration: 2.4, ease: "power2.out" });
  }

  resume();
}

useEventListener(window, "pointermove", onPointerMove, { passive: true });

watch([width, height], () => {
  resize();

  if (!introLoaded.value) {
    sphere.scale = getFitScale();
  }
});

watch(introLoaded, dissolve);

watch(
  canvas,
  (element) => {
    if (element && !renderer) init(element);
  },
  { immediate: true }
);

onBeforeUnmount(() => {
  pause();
  gsap.killTweensOf(sphere);
  gsap.killTweensOf(uniforms.uDissolve);
  gsap.killTweensOf(uniforms.uProgress);
  geometry.dispose();
  material.dispose();
  renderer?.dispose();
});
</script>

<style lang="scss" scoped>
.experience {
  position: fixed;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
