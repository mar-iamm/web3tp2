import Zdog from "https://esm.sh/zdog";

const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  resize: true,
  zoom: 1.0,
});


const heart = new Zdog.Anchor({
  addTo: illo,
});

const circleOptions = {
  addTo: heart,
  diameter: 31,
  quarters: 2,
  rotate: { z: -Math.PI / 2 },
  translate: { y: -7 },
  color: "#67B2D8",
  stroke: 22,
  fill: true,
};

new Zdog.Ellipse({
  ...circleOptions,
  translate: { x: -17, y: -7, z: 6 }
});

new Zdog.Ellipse({
  ...circleOptions,
  translate: { x: 17, y: -7, z: 6 }
});

const triOptions = {
  addTo: heart,
  sides: 3,
  radius: 34,
  rotate: { z: Math.PI },
  translate: { y: 17 },
  color: "#67B2D8",
  fill: true,
  stroke: 22,
};

new Zdog.Polygon({
  ...triOptions,
  translate: { y: 17, z: 6 }
});

function animate() {
  heart.rotate.y += 0.01;
  heart.rotate.x = Math.sin(Date.now() * 0.001) * 0.15;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
