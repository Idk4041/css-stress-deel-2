
const plantenAssortiment = [
    {
        naam: "iomiomi",
        prijs: 19.95,
        afbeelding: "images/Nora'sFloraLogo.png",
        beschrijving: "Populaire gatenplant."
    },

];

function toonPlanten() {
    const container = document.getElementById('planten-container');
    let htmlContent = '';


    plantenAssortiment.forEach(plant => {
        htmlContent += `
            <div class="plant-card">
                <img src="${plant.afbeelding}" alt="${plant.naam}">
                <h3>${plant.naam}</h3>
                <p>${plant.beschrijving}</p>
                <p><strong>€${plant.prijs.toFixed(2)}</strong></p>
                <button>Voeg toe aan winkelwagen</button>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}


document.addEventListener('DOMContentLoaded', toonPlanten);
