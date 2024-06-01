import L from "leaflet";
import "leaflet-toolbar";
import "leaflet-distortableimage";
import loadImage from "easy-image-loader";

export default async function imageOverlayDistortable(url, crossOrigin, options) {
  try {
    const timeout = 5 * 1000; // 5 seconds
    let img = null;
    try {
      img = await loadImage(url, { crossOrigin, timeout });
    } catch {
      return null;
    }
    const lyr = L.distortableImageOverlay(img, {crossOrigin: false});
    return lyr;
  } catch (error) {
    console.error(error);
    return null;
  }
}
