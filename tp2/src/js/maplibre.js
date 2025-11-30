import maplibregl from "https://esm.sh/maplibre-gl@5.13.0";

document.addEventListener("DOMContentLoaded", () => {
    const carte = new maplibregl.Map({
        container: "carte", 
        style:
            "https://api.maptiler.com/maps/toner-v2/style.json?key=vi9DtA1TL0Ga3okiln2O",
        center: [139.7005, 35.6595],
        zoom: 17,
        attributionControl: false
    });
});