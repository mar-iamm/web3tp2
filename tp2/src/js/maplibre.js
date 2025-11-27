import maplibregl from "https://esm.sh/maplibre-gl@5.13.0";

// Le code d'initialisation de la carte doit être exécuté APRÈS que le DOM soit chargé.
document.addEventListener("DOMContentLoaded", () => {
    // 1. Création de la carte
    const carte = new maplibregl.Map({
        // 'carte' est l'ID de l'élément DIV dans votre HTML
        container: "carte", 
        // Style de la carte (doit être un style JSON valide)
        style:
            "https://api.maptiler.com/maps/toner-v2/style.json?key=vi9DtA1TL0Ga3okiln2O",
        // Centre de la carte (ici, près de Montréal)
        center: [-73.9061219, 45.572298],
        // Niveau de zoom initial
        zoom: 17,
        // Masque le contrôle d'attribution (parfois inclus dans le style par défaut)
        attributionControl: false
    });

    // Optionnel : Ajouter des contrôles (comme le zoom par défaut) si vous le souhaitez
    // carte.addControl(new maplibregl.NavigationControl(), 'top-right');
});