import Chart from "chart.js/auto";

const labels = [
  "Bone",
  "Muscle",
  "Heat",
  "Neural",
  "Cells",
  "Unstable",
  "Energy",
  "Threat"
];

const revolutionData = [
  50,
  120,
  300,
  900,
  2500,
  6200,
  15000,
  38000
];

const canvas = document.querySelector("#graphique");

if (canvas) {
    new Chart(canvas.getContext("2d"), {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Intensity",
                    data: revolutionData,
                    borderColor: "#ffffff",
                    borderWidth: 2,
                    tension: 0.3,
                    pointRadius: 4,
                    pointBackgroundColor: "#ffffff",
                    font: {
                        family: "Fira Code, monospace"
                    }
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                title: {
                    display: true,
                    text: "Subject Scan",
                    color: "#ffffff",
                    font: { 
                        size: 16, 
                        weight: "700",
                        family: "Fira Code, monospace"
                    }
                },
                legend: {
                    labels: { 
                        color: "#ffffff",
                        font: {
                            family: "Fira Code, monospace"
                        }
                    }
                }
            },

            scales: {
                y: {
                    type: "logarithmic",
                    ticks: { 
                        color: "#ffffff",
                        font: {
                            family: "Fira Code, monospace"
                        }
                    },
                    grid: { color: "rgba(255,255,255,0.1)" },
                    border: { color: "rgba(255,255,255,0.3)" }
                },

                x: {
                    ticks: { 
                        color: "#ffffff",
                        font: {
                            family: "Fira Code, monospace"
                        }
                    },
                    grid: { color: "rgba(255,255,255,0.1)" },
                    border: { color: "rgba(255,255,255,0.3)" }
                }
            }
        }
    });
}
