import * as THREE from "three";
import { generateCubie } from "./Cubie.js";

let pocketCube = [];
var rightFace = [0, 1];
var leftFace = [2, 3];
var topFace = [4, 5];
var bottomFace = [6, 7];
var frontFace = [8, 9];
var backFace = [10, 11];

export function assignColors(pc) {
  assignOrangeRed(0, 2, 3, orange, pc);
  assignOrangeRed(1, 0, 1, red, pc);
  assignWhiteYellow(0, 6, 7, yellow, pc);
  assignWhiteYellow(1, 4, 5, white, pc);
  assignGreenBlue(0, 10, 11, blue, pc);
  assignGreenBlue(1, 8, 9, green, pc);
}

function assignWhiteYellow(i1, l1, l2, color, pc) {
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      for (var k = 0; k < 2; k++) {
        if (j == i1) {
          for (var l = -1; l < pc[i][j][k][0].geometry.faces.length; l++) {
            if (l == l1 || l == l2)
              pc[i][j][k][0].geometry.faces[l].color.setHex(color);
          }
        }
      }
    }
  }
}
function assignGreenBlue(i1, l1, l2, color, pc) {
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      for (var k = 0; k < 2; k++) {
        if (k == i1) {
          for (var l = -1; l < pc[i][j][k][0].geometry.faces.length; l++) {
            if (l == l1 || l == l2)
              pc[i][j][k][0].geometry.faces[l].color.setHex(color);
          }
        }
      }
    }
  }
}
function assignOrangeRed(i1, l1, l2, color, pc) {
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      for (var k = 0; k < 2; k++) {
        if (i == i1) {
          for (var l = -1; l < pc[i][j][k][0].geometry.faces.length; l++) {
            if (l == l1 || l == l2)
              pc[i][j][k][0].geometry.faces[l].color.setHex(color);
          }
        }
      }
    }
  }
}

export function generateCube(scene) {
  for (var i = 0; i < 2; i++) {
    pocketCube[i] = [];
    for (var j = 0; j < 2; j++) {
      pocketCube[i][j] = [];
      for (var k = 0; k < 2; k++) {
        pocketCube[i][j][k] = [];
        var cubie = generateCubie();
        cubie.position.set(i, j, k);
        pocketCube[i][j][k][0] = cubie;
        pocketCube[i][j][k][1] = { x: i, y: j, z: k };
        for (var l = 0; l < cubie.geometry.faces.length; l++) {
          cubie.geometry.faces[l].color.setHex(0x000000);
        }
        //console.log(i, j, k)
        scene.add(cubie);
      }
    }
  }
  return pocketCube;
}

export default function PocketCube() {
  console.log("PocketCube - success");
}

var red = 0xff0000;
var orange = 0xffa500;
var yellow = 0xffff00;
var white = 0xffffff;
var blue = 0x0000ff;
var green = 0x008000;
var black = 0x000000;
var gray = 0x808080;
