import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const loadGltf = (gltfUrl, scene, loaderContainer) => {
  const loader = new GLTFLoader();

  loader.load(
    gltfUrl,
    (gltf) => {
      loaderContainer.style.display = "none";
      scene.add(gltf.scene);
    },
    (progress) => {
      console.log("Loading");
    },
    (error) => {
      console.log("Error");
    }
  );
};
