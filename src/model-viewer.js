import { Color } from "three";
import { IfcViewerAPI } from "web-ifc-viewer";

export async function loadIfc(container, ifcModelNumber) {
  if (ifcModelNumber < 1 || ifcModelNumber > 5) {
    return;
  } else {
    const url = `../IFC/0${ifcModelNumber}.ifc`;
    const viewer = new IfcViewerAPI({
      container,
      backgroundColor: new Color(0xffffff),
    });
    viewer.grid.setGrid();
    viewer.axes.setAxes();

    await viewer.IFC.setWasmPath("../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
  }
}
