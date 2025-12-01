import { VFX } from "vfx-js";

const vfx = new VFX();

// Sélectionne UNIQUEMENT les images Rei
document.querySelectorAll(".rei-wrapper").forEach((img) => {
  vfx.add(img, {
    shader: "glitch",
    mode: "mesh",
    distortion: 0.02,
    chroma: 0.01,
    shake: 0.01,
    speed: 0.15,
    overflow: 5
  });
});
