import { VFX } from "vfx-js";

const vfx = new VFX();

// Sélectionne UNIQUEMENT les images Rei
document.querySelectorAll(".image-title").forEach((img) => {
  vfx.add(img, {
    shader: "rgbShift",
    distortion: 0.02,
    chroma: 0.01,
    shake: 0.01,
    speed: 0.15,
    overflow: 2
  });
});
