import { createThreeScene } from "./basic-three";
import { loadIfc } from "./model-viewer";

const canvas = document.getElementById("three-canvas");
if (canvas) {
  const [renderer, scene, clock, cameraControls] = createThreeScene(canvas);
  const orangeCube = scene.getObjectByName("orangeCube");
  const greenCube = scene.getObjectByName("greenCube");
  const blueCube = scene.getObjectByName("blueCube");
  const camera = scene.getObjectByName("camera");

  window.addEventListener("resize", () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
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

let ifcModelNumber = 0;
const ifcViewerContainer = document.getElementById("viewer-container");
if (ifcViewerContainer) {
  ifcModelNumber = localStorage.getItem("ifc");
  loadIfc(ifcViewerContainer, ifcModelNumber);
}
