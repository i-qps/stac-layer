import L from "leaflet";
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
    // const lyr = L.distortableImageOverlay(img, options);
    const lyr = L.imageOverlay(img, options);
    return lyr;
  } catch {
    return null;
  }
}
