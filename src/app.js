import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { assignColors, generateCube } from "./PocketCube.js";

let scene, camera, renderer, pocketCube, controls;
const canvas = document.querySelector('canvas.webgl')

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    1,
    100
  );
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  scene.background = new THREE.Color(0xfff2cc);
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  controls = new OrbitControls(camera, renderer.domElement);

  createCube();
  assignColors(pocketCube);
  camera.position.set(1.5, 3, 6);
  animate();
}

function createCube() {
  pocketCube = generateCube(scene);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
  var keyCode = event.which;
  if (keyCode == 90) {
    //Z cw
    turnZ(getRandomMove(3) - 1, getRandomMove(2));
  } else if (keyCode == 67) {
    //C cw
    turnY(getRandomMove(3) - 1, getRandomMove(2));
  } else if (keyCode == 88) {
    //X cw
    turnX(getRandomMove(3) - 1, getRandomMove(2));
  }
}

init();
