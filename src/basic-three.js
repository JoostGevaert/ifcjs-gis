import {
  Scene,
  BoxGeometry,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  Raycaster,
  MathUtils,
  MOUSE,
  Clock,
  MeshBasicMaterial,
  MeshPhongMaterial,
  DirectionalLight,
  AmbientLight,
  AxesHelper,
  GridHelper,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments,
} from "three";

import CameraControls from "camera-controls";

function createGeoWithEdges(geometry, color, x) {
  const material = new MeshPhongMaterial({
    color: color,
    specular: "white",
    shininess: 100,
    flatShading: true,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  });
  const mesh = new Mesh(geometry, material);
  const edgesGeo = new EdgesGeometry(mesh.geometry);
  const edgesMaterial = new LineBasicMaterial({ color: "black" });
  const edges = new LineSegments(edgesGeo, edgesMaterial);
  mesh.add(edges);
  mesh.position.x += x;
  return mesh;
}

export function createThreeScene(canvas) {
  //1 The scene
const scene = new Scene();

//2 The Objects
function createGeoWithEdges(geometry, color, x) {
  const material = new MeshPhongMaterial({
    color: color,
    specular: "white",
    shininess: 100,
    flatShading: true,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  });
  const mesh = new Mesh(geometry, material);
  const edgesGeo = new EdgesGeometry(mesh.geometry);
  const edgesMaterial = new LineBasicMaterial({ color: "black" });
  const edges = new LineSegments(edgesGeo, edgesMaterial);
  mesh.add(edges);
  mesh.position.x += x;
  return mesh;
}

const boxGeometry = new BoxGeometry(0.5, 0.5, 0.5);
const orangeCube = createGeoWithEdges(boxGeometry, "orange", 0);
orangeCube.name = "orangeCube"
scene.add(orangeCube);
const greenCube = createGeoWithEdges(boxGeometry, "green", 1);
greenCube.name = "greenCube"
scene.add(greenCube);
const blueCube = createGeoWithEdges(boxGeometry, "blue", -1);
blueCube.name = "blueCube"
scene.add(blueCube);

//3 The Camera
const camera = new PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight
);
camera.position.z = 3; // Z let's you move backwards and forwards. X is sideways, Y is upward and do
camera.name = "camera"
scene.add(camera);

//4 The Renderer
const renderer = new WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});

renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

// 5 The Lights
const ambientLight = new AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);
const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 1).normalize();
scene.add(directionalLight);

// 6 The Controls
const subsetOfTHREE = {
  MOUSE,
  Vector2,
  Vector3,
  Vector4,
  Quaternion,
  Matrix4,
  Spherical,
  Box3,
  Sphere,
  Raycaster,
  MathUtils: {
    DEG2RAD: MathUtils.DEG2RAD,
    clamp: MathUtils.clamp,
  },
};
CameraControls.install({ THREE: subsetOfTHREE });
const clock = new Clock();
const cameraControls = new CameraControls(camera, canvas);

// 7 The Axes & Grid Helpers
const axes = new AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 2;
scene.add(axes);

const grid = new GridHelper();
grid.material.depthTest = false;
grid.renderOrder = 1;
scene.add(grid);

  return [renderer, scene, clock, cameraControls];
}
