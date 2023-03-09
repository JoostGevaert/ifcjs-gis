import { IFCLoader } from "web-ifc-three/IFCLoader";

export const uploadIfc = (inputElement, threeScene) => {
  const ifcLoader = new IFCLoader();

  inputElement.addEventListener(
    "change",
    async (changed) => {
      const ifcURL = URL.createObjectURL(changed.target.file[0]);
      await ifcLoader.ifcManager.setWasmPath("./");
      const ifcModel = await ifcLoader.loadAsync(ifcURL);
      threeScene.add(ifcModel);
    },
    false
  );
};
