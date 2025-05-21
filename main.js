const station_container = document.getElementById("station-container");
const url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=20";

const map = L.map("map").setView([48.8566, 2.3522], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const showVelibStation = (container, name, mechanical, numdocksavailable, capacity, ebike, coordonnees_geo) => {
    const stationHTML = `
            <div class="station-card">
                <h2>Station : ${name}</h2>
                <p><strong>Capacité totale :</strong> ${capacity} docks</p>
                <p><strong>Vélos mécaniques :</strong> ${mechanical}</p>
                <p><strong>Vélos électriques :</strong> ${ebike}</p>
                <p><strong>Places libres :</strong> ${numdocksavailable}</p>
                <p><strong>Coordonnées :</strong> ${coordonnees_geo}</p>
            </div>
        `;
    container.insertAdjacentHTML("beforeend", stationHTML);
};

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        station_container.innerHTML = "";

        data.records.forEach((record) => {
            const fields = record.fields;

            showVelibStation(
                station_container,
                fields.name,
                fields.mechanical,
                fields.numdocksavailable,
                fields.capacity,
                fields.ebike,
                fields.coordonnees_geo
            );

            if (fields.coordonnees_geo) {
                const [lat, lon] = fields.coordonnees_geo;
                L.marker([lat, lon])
                    .addTo(map)
                    .bindPopup(`
                    <b>${fields.name}</b><br>
                    ${fields.capacity} docks<br>
                    ${fields.mechanical} vélos mécaniques<br>
                    ${fields.ebike} vélos électriques<br>
                    ${fields.numdocksavailable} places libres
                `);
            }
        });
    })
    .catch((error) => {
        station_container.innerHTML =
            "<p>Erreur lors du chargement des stations</p>";
        console.error(error);
    });