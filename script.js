
const plantenAssortiment = [
    {
        naam: "Zonnebloemen",
        prijs: 5.00,
        afbeelding: "images/pexels-pixabay-54267.jpg",
        beschrijving: "Zonnebloemen."
    },
    {
        naam: "Rode tulpen",
        prijs: 7.68,
        afbeelding: "images/pexels-valeriya-1961778.jpg",
        beschrijving: "Populaire rode tulpen."
    },
    {
        naam: "Cactus",
        prijs: 2.00,
        afbeelding: "images/pexels-scottwebb-403571.jpg",
        beschrijving: "Populaire cactus."
    },
    {
        naam: "Roze bouquet",
        prijs: 19.60,
        afbeelding: "images/pexels-secret-garden-333350-931176.jpg",
        beschrijving: "Speciale roze bouquet."
    },
    {
        naam: "Lente bouquet",
        prijs: 20.00,
        afbeelding: "images/pexels-valeriya-1484657.jpg",
        beschrijving: "Speciale lente bouquet."
    },
    {
        naam: "Diverse vet planten",
        prijs: 5.00,
        afbeelding: "images/pexels-maureen-piecesphotography-1207978.jpg",
        beschrijving: "Populaire vet planten."
    },
    {
        naam: "Trouwdag bouquet bundel",
        prijs: 25.00,
        afbeelding: "images/pexels-43381756-7462761.jpg",
        beschrijving: "Speciaal samengestelde trouwdag bouquet bundel"
    },
    {
        naam: "Diverse lenten bloemen",
        prijs: 7.50,
        afbeelding: "images/pexels-jos-van-ouwerkerk-377363-1075960.jpg",
        beschrijving: "Diverse lenten bloemen"
    },
    {
        naam: "Paarse Allium bloemen",
        prijs: 4.00,
        afbeelding: "images/pexels-mikebirdy-109828.jpg",
        beschrijving: "Paarse Allium bloemen"
    }

];

function toonPlanten() {
    const container = document.getElementById('producten');
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
