document.addEventListener("DOMContentLoaded", function () {
    const boutons = document.querySelectorAll(".btn-toggle");

    boutons.forEach(bouton => {
        bouton.addEventListener("click", function () {
            const details = this.nextElementSibling;

            // Fermer toutes les autres recettes
            document.querySelectorAll(".recette-details").forEach(section => {
                if (section !== details) {
                    section.classList.remove("open");
                    section.previousElementSibling.textContent = "Voir la recette ▼";
                }
            });

            // Ouvrir / fermer celle cliquée
            details.classList.toggle("open");

            if (details.classList.contains("open")) {
                this.textContent = "Masquer la recette ▲";
            } else {
                this.textContent = "Voir la recette ▼";
            }
        });
    });
});