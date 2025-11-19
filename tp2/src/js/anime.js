import { animate } from 'animejs';

animate(".hautgauche img", {
    keyframes: [
        { rotate: -4, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 150
});

animate(".hautdroite img", {
    keyframes: [
        { rotate: 4, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 150
});

// Ailes du milieu (battement un peu plus discret)
animate(".milieugauche img", {
    keyframes: [
        { rotate: -5, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 150
});

animate(".milieudroite img", {
    keyframes: [
        { rotate: 5, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 150
});

// Ailes du bas (plus léger)
animate(".basgauche img", {
    keyframes: [
        { rotate: -4, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 300
});

animate(".basdroite img", {
    keyframes: [
        { rotate: 4, duration: 10000, easing: "easeInOutSine" },
        { rotate: 0, duration: 10000, easing: "easeInOutSine" }
    ],
    direction: "alternate",
    loop: true,
    delay: 300
});