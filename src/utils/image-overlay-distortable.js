import L from "leaflet";
import "leaflet-toolbar";
import "leaflet-distortableimage";

export default async function imageOverlayDistortable(url, options) {
  try {
    const lyr = L.distortableImageOverlay(url, options);
    return lyr;
  } catch (error) {
    console.error(error);
    return null;
  }
}
