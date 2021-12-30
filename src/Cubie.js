import * as THREE from "three";

const size = 0.97;

export function generateCubie() {
  var geometry = new THREE.BoxGeometry(size, size, size);
  geometry.colorsNeedUpdate = true;
  var material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    vertexColors: true,
  });
  var cubie = new THREE.Mesh(geometry, material);
  return cubie;
}

export default function Cubie() {
  console.log("Cubie - success");
}
