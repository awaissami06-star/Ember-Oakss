import { LOCATIONS, ICONS } from './data.js';

export function renderLocations(){

  const el = document.getElementById('locGrid');

  el.innerHTML = LOCATIONS.map((l, i) => `
    <div class="loc-card reveal in">

      <div
        class="loc-map"
        id="map-${i}"
        style="height:220px;"
      ></div>

      <div class="loc-body">

        <h3>${l.name}</h3>

        <div class="loc-row">
          ${ICONS.pin}
          <span>${l.address}</span>
        </div>

        <div class="loc-row">
          ${ICONS.clock}
          <span>${l.hours}</span>
        </div>

        <div class="loc-row">
          ${ICONS.phone}
          <span>${l.phone}</span>
        </div>

        <a
          class="btn btn-ghost btn-sm"
          style="margin-top:14px;"
          target="_blank"
          rel="noopener"
          href="https://www.google.com/maps/search/?api=1&query=${l.lat},${l.lng}"
        >
          Get directions
        </a>

      </div>
    </div>
  `).join('');

  // Leaflet maps initialize hone ka wait
  const initMaps = () => {

    if (!window.L) {
      setTimeout(initMaps, 100);
      return;
    }

    LOCATIONS.forEach((l, i) => {

      const mapElement = document.getElementById(`map-${i}`);

      if (!mapElement || mapElement.dataset.loaded) return;

      const map = L.map(mapElement, {
        scrollWheelZoom: false
      }).setView([l.lat, l.lng], 15);

      L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; OpenStreetMap contributors',
          maxZoom: 19
        }
      ).addTo(map);

      L.marker([l.lat, l.lng])
        .addTo(map)
        .bindPopup(`
          <strong>${l.name}</strong><br>
          ${l.address}
        `);

      mapElement.dataset.loaded = 'true';

    });

  };

  initMaps();
}