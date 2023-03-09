import { BoxGeometry } from "three";

import { createThreeScene, createGeoWithEdges } from "./basic-three";
import { loadIfc } from "./ifc-viewer";
import { loadGltf } from "./gltf";

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

  window.addEventListener("resize", () => {
    camera.aspect = threeCanvas.clientWidth / threeCanvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(threeCanvas.clientWidth, threeCanvas.clientHeight, false);
  });

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
const ifcViewerContainer = document.getElementById("viewer-container");
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

  gltfUrl = "./static/glTF/police_station.glb";
  loaderContainer = document.getElementById("loader-container");
  loadGltf(gltfUrl, scene, loaderContainer);

  window.addEventListener("resize", () => {
    camera.aspect = gltfCanvas.clientWidth / gltfCanvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(gltfCanvas.clientWidth, gltfCanvas.clientHeight, false);
  });

  function animate() {
    const delta = clock.getDelta();
    cameraControls.update(delta);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}

// Upload an IFC file and visualize it with web-ifc-three (WIT)

