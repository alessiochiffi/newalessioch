<template>
  <div>
    <div class="globe" ref="experience" />
  </div>
</template>

<script setup>
import * as THREE from "three";
import gsap from "gsap";

let scene, camera, renderer, particles, myTween, renderingParent, animProps;
let mouseX, mouseY;
const distance = Math.min(200, window.innerWidth / 4);
const experience = ref(null);

function randFloatSpread(range) {
  return (Math.random() - 0.5) * range;
}

function init() {
  // Initialize the Three.js scene
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 400; // Set the initial camera position
  renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for a transparent background
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  experience.value.appendChild(renderer.domElement);

  // Create the particles
  const geometry = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i < 1600; i++) {
    const theta = Math.acos(randFloatSpread(2));
    const phi = randFloatSpread(2 * Math.PI);
    const x = distance * Math.sin(theta) * Math.cos(phi);
    const y = distance * Math.sin(theta) * Math.sin(phi);
    const z = distance * Math.cos(theta);
    positions.push(x, y, z);
  }

  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

  particles = new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ color: 0x000000, size: 2, opacity: 0.5 })
  );
  particles.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), 50); // Set the bounding sphere

  renderingParent = new THREE.Group();
  renderingParent.add(particles);
  scene.add(renderingParent);

  // Animation
  animProps = { scale: 1, xRot: 0, yRot: 0 };

  gsap.to(animProps, {
    duration: 3,
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    ease: "sine",
    onUpdate: function () {
      renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale);
    },
  });

  gsap.to(animProps, {
    duration: 120,
    xRot: Math.PI * 2,
    yRot: Math.PI * 4,
    repeat: -1,
    yoyo: true,
    ease: "none",
    onUpdate: function () {
      renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
    },
  });

  // Mouse move event
  function onMouseMove(event) {
    if (myTween) myTween.kill();
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    myTween = gsap.to(particles.rotation, {
      duration: 0.1,
      x: mouseY * -1,
      y: mouseX,
    });
  }

  document.addEventListener("mousemove", onMouseMove, false);

  // trigger animation on mobile on phone movement
  window.addEventListener("devicemotion", function (event) {
    if (myTween) myTween.kill();
    mouseX = (event.accelerationIncludingGravity.x / window.innerWidth) * 2 - 1;
    mouseY = -(event.accelerationIncludingGravity.y / window.innerHeight) * 2 + 1;
    myTween = gsap.to(particles.rotation, {
      duration: 0.1,
      x: mouseY * -1,
      y: mouseX,
    });
  });

  // Resize event
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation loop
  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();
}

onMounted(() => {
  setTimeout(() => {
    init();
  }, 100);
});
</script>

<style lang="scss">
.globe {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 1s;
  pointer-events: none;
  transition: all 1s;

  .visible & {
    right: 50%;
    left: -50%;
    transition: all 1s;

    @media (max-width: 768px) {
      right: 0;
      left: 0;
      top: auto;
      bottom: 30%;
    }

    @media (min-width: 768px) {
      height: 50vh;
      width: 50vw;
      // left: 100%;
    }
  }
}
canvas {
  position: fixed;
  top: 0;
  z-index: 99;
  pointer-events: none;
  transition: all 1s;

  .visible & {
    transition: all 1s;

    @media (max-width: 768px) {
      right: 0;
      left: 0;
      opacity: 0.5;
      top: 55%;
    }

    @media (min-width: 768px) {
      max-height: 55vh;
      max-width: 55vw;
      left: 60%;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
}
</style>
