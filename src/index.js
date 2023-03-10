import { BoxGeometry } from "three";

import { createThreeScene } from "./three-scene";
import { createGeoWithEdges } from "./three-cubes";
import { loadIfc } from "./ifc-viewer";
import { loadGltf } from "./gltf";
import { uploadIfc } from "./ifc-three";

// Create a basic Three.js scene with 3 rotating cubes.
const threeCanvas = document.getElementById("basic-three");
if (threeCanvas) {
  const [renderer, scene, clock, cameraControls] =
    createThreeScene(threeCanvas);
  const boxGeometry = new BoxGeometry(0.5, 0.5, 0.5);
  const orangeCube = createGeoWithEdges(boxGeometry, "orange", 0);
  scene.add(orangeCube);
  const greenCube = createGeoWithEdges(boxGeometry, "green", 1);
  scene.add(greenCube);
  const blueCube = createGeoWithEdges(boxGeometry, "blue", -1);
  scene.add(blueCube);
  const camera = scene.getObjectByName("camera");

  function animate() {
    orangeCube.rotation.x += 0.01;
    orangeCube.rotation.z += 0.01;

    greenCube.rotation.x += 0.015;
    greenCube.rotation.z += 0.015;

    blueCube.rotation.x += 0.005;
    blueCube.rotation.z += 0.005;

    const delta = clock.getDelta();
    cameraControls.update(delta);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}

// Visualize several different IFC models read from the repo
let ifcModelNumber = 0;
const ifcViewerContainer = document.getElementById("ifc-viewer");
if (ifcViewerContainer) {
  ifcModelNumber = localStorage.getItem("ifc");
  loadIfc(ifcViewerContainer, ifcModelNumber);
}

// Load a glTF in Three.js
const gltfCanvas = document.getElementById("gltf");
if (gltfCanvas) {
  const [renderer, scene, clock, cameraControls] = createThreeScene(gltfCanvas);
  const camera = scene.getObjectByName("camera");
  cameraControls.setLookAt(15, 15, 15, 0, 10, 0);

  gltfUrl = "../static/glTF/police_station.glb";
  loaderContainer = document.getElementById("loader-container");
  loadGltf(gltfUrl, scene, loaderContainer);

  function animate() {
    const delta = clock.getDelta();
    cameraControls.update(delta);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}

// Upload an IFC file and visualize it with web-ifc-three (WIT)
const ifcThreeCanvas = document.getElementById("wit");
if (ifcThreeCanvas) {
  const [renderer, scene, clock, cameraControls] =
    createThreeScene(ifcThreeCanvas);
  const camera = scene.getObjectByName("camera");

  const input = document.getElementById("file-input");
  uploadIfc(input, scene);

  function animate() {
    const delta = clock.getDelta();
    cameraControls.update(delta);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}
