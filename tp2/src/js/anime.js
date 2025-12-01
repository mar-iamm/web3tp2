 import { animate } from 'animejs';

animate("#hautgauche", {
    keyframes: [
        { rotate: -4, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 150
});

animate("#hautdroite", {
    keyframes: [
        { rotate: 4, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 150
});

animate("#milieugauche", {
    keyframes: [
        { rotate: -5, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 150
});

animate("#milieudroite", {
    keyframes: [
        { rotate: 5, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 150
});

animate("#basgauche", {
    keyframes: [
        { rotate: -4, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 300
});

animate("#basdroite", {
    keyframes: [
        { rotate: 4, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 300
}); 

window.addEventListener("DOMContentLoaded", () => {
  anime({
    targets: ".placeholder",
    opacity: [0, 1],
    translateY: [25, 0],
    delay: anime.stagger(120, { start: 400 }),
    duration: 800,
    easing: "easeOutQuad"
  });
});