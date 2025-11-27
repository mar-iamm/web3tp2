// ===============================
// 📌 IMPORTS (via ton importmap)
// ===============================
import Chart from "chart.js";
import "chartjs-adapter-date-fns";

// ===============================
// 📌 DONNÉES DU GRAPHIQUE
// ===============================

const series = [
  { x: "2025-04-28T00:00:00", y: 10225.8 },
  { x: "2025-04-29T00:00:00", y: 146874.7 },
  { x: "2025-04-30T00:00:00", y: 184709.0 },
  { x: "2025-05-01T00:00:00", y: 270942.0 },
  { x: "2025-05-02T00:00:00", y: 250071.6 },
  { x: "2025-05-03T00:00:00", y: 230099.6 },
  { x: "2025-05-04T00:00:00", y: 224374.6 },
  { x: "2025-05-05T00:00:00", y: 221405.2 },
  { x: "2025-05-06T00:00:00", y: 223778.3 },
  { x: "2025-05-07T00:00:00", y: 241896.4 },
  { x: "2025-05-08T00:00:00", y: 264784.2 }
];

const data = [
  { x: "2025-04-08T00:00:00", y: 0.0 },
  { x: "2025-04-09T00:00:00", y: 41856.9 },
  { x: "2025-04-10T00:00:00", y: 682955.1 },
  { x: "2025-04-11T00:00:00", y: 526729.8 },
  { x: "2025-04-12T00:00:00", y: 519423.6 },
  { x: "2025-04-13T00:00:00", y: 399147.8 },
  { x: "2025-04-14T00:00:00", y: 354060.8 },
  { x: "2025-04-15T00:00:00", y: 332866.8 },
  { x: "2025-04-16T00:00:00", y: 316656.0 },
  { x: "2025-04-17T00:00:00", y: 328163.5 },
  { x: "2025-04-18T00:00:00", y: 386818.3 },
  { x: "2025-04-19T00:00:00", y: 390287.7 },
  { x: "2025-04-20T00:00:00", y: 284609.0 },
  { x: "2025-04-21T00:00:00", y: 264556.5 },
  { x: "2025-04-22T00:00:00", y: 244658.2 },
  { x: "2025-04-23T00:00:00", y: 236314.7 },
  { x: "2025-04-24T00:00:00", y: 251658.7 },
  { x: "2025-04-25T00:00:00", y: 302331.5 },
  { x: "2025-04-26T00:00:00", y: 309558.5 },
  { x: "2025-04-27T00:00:00", y: 221439.5 },
  { x: "2025-04-28T00:00:00", y: 289263.0 },
  { x: "2025-04-29T00:00:00", y: 376700.0 },
  { x: "2025-04-30T00:00:00", y: 340958.9 },
  { x: "2025-05-01T00:00:00", y: 375753.9 },
  { x: "2025-05-02T00:00:00", y: 403760.3 },
  { x: "2025-05-03T00:00:00", y: 294349.5 },
  { x: "2025-05-04T00:00:00", y: 267803.6 },
  { x: "2025-05-05T00:00:00", y: 251258.6 },
  { x: "2025-05-06T00:00:00", y: 244285.7 },
  { x: "2025-05-07T00:00:00", y: 243364.2 },
  { x: "2025-05-08T00:00:00", y: 276700.7 }
];

// =======================================================
// 📌 FONCTION PRINCIPALE : CRÉATION DU GRAPHIQUE
// =======================================================

function createChart() {
  // OBTENIR LE CANVAS
  const ctx = document.getElementById("graphique");

  // VÉRIFICATION DE SÉCURITÉ : Assurez-vous que le canvas existe
  if (!ctx) {
    console.error("L'élément Canvas avec l'ID 'graphique' est introuvable. Le graphique ne peut pas être créé.");
    return;
  }
  
  // Démarrage du débogage
  console.log("Canvas trouvé :", ctx);
  
  // CREATION DU GRAPH
  new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Battlefield 6",
          data: data,
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          borderColor: "rgba(239, 85, 82, 1)",
          backgroundColor: "rgba(239, 85, 82, 0.1)",
          pointRadius: 0
        },
        {
          label: "ARC Raiders",
          data: series,
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          borderColor: "rgba(85, 239, 85, 1)",
          backgroundColor: "rgba(85, 239, 85, 0.1)",
          pointRadius: 0
        }
      ]
    },
    options: {
      locale: "fr-CA",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Joueurs simultanés (SteamDB)",
          color: "white"
        },
        legend: {
            labels: {
                color: 'white' // Rend les étiquettes de la légende visibles
            }
        }
      },
      scales: {
        x: {
          type: "time",
          time: {
              unit: 'day' // Force l'unité à jour
          },
          ticks: { color: "white" },
          grid: { color: "rgba(255,255,255,0.2)" }
        },
        y: {
          ticks: { color: "white" },
          grid: { color: "rgba(255,255,255,0.2)" }
        }
      }
    }
  });
}

// =======================================================
// 📌 ÉVÉNEMENT DE CHARGEMENT : Exécute la fonction 
//    une fois que le DOM est prêt (solution au problème)
// =======================================================

document.addEventListener('DOMContentLoaded', createChart);