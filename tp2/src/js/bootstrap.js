document.addEventListener("DOMContentLoaded", () => {
    const reiCard = document.getElementById("rei-card");

    reiCard.addEventListener("click", () => {
        reiCard.classList.toggle("flipped");
    });
});
