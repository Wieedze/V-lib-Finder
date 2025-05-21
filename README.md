# 🚲 Vélib' Real-Time Station Map

This project displays real-time availability of Vélib' stations in Paris on an interactive map using **Leaflet.js** and data from the **Paris Open Data API**.

## 🗺 Features

- Interactive map centered on Paris (using Leaflet and OpenStreetMap tiles)
- Real-time display of Vélib' stations from the official API
- Custom station cards showing:
  - Station name
  - Total capacity
  - Number of mechanical and electric bikes available
  - Number of free docks
  - GPS coordinates
- Clickable markers with popups showing the same details

## 📡 Data Source

Data is fetched from the Paris Open Data API:

> [`https://opendata.paris.fr`](https://opendata.paris.fr)

Dataset used:

- `velib-disponibilite-en-temps-reel`

## 🛠 Tech Stack

- **Vanilla JavaScript**
- **HTML5 + CSS3**
- **Leaflet.js** for map rendering
- **OpenStreetMap** tiles
- Responsive CSS grid for station cards

## 📁 Project Structure

📦 velib-map-project/
├── index.html # Main HTML page
├── main.js # JavaScript logic (API calls, Leaflet map, DOM updates)
├── style.css # Custom CSS styles

bash
Copier
Modifier

## ▶️ Getting Started

To run the project locally:

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/velib-map-project.git
   cd velib-map-project
Open index.html in your browser

No need for a server – it's fully client-side.

🔍 Screenshot

📌 Notes
Make sure your browser allows loading external scripts (Leaflet) – remove any incorrect integrity attributes if needed.

API may limit requests or become temporarily unavailable depending on usage or server load.

