const maratones = [
  {
    id: 'talca',
    name: 'la talcatón',
    place: 'talca, Maule',
    date: 'Apr 20, 2027',
    distances: ['42'],
  },
  {
    id: 'talca2',
    name: 'vuelta de la muerte',
    place: 'talca, Maule',
    date: 'Oct 11, 2026',
    distances: ['21', '42'],
  },
  {
    id: 'Valpa',
    name: 'maratón en Valparaíso',
    place: 'Valparaíso, Valparaíso',
    date: 'Nov 1, 2026',
    distances: ['5', '21', '42'],
  },
  {
    id: 'maipu',
    name: 'maratón del Bicentenario',
    place: 'maipú, Metropolitana',
    date: 'Oct 25, 2026',
    distances: ['5', '21', ''],
  },
  {
    id: 'ohiggins',
    name: 'Carrera por la playa IXV',
    place: "Rancagua, O'Higgins",
    date: 'Sep 27, 2026',
    distances: ['10', '25'],
  }
];

const listEl = document.getElementById('ListaDeCarreras');
const searchInput = document.getElementById('searchInput');
const placeFilter = document.getElementById('placeFilter');
const dateFilter = document.getElementById('dateFilter');
const distanceMin = document.getElementById('distanceMin');
const distanceMax = document.getElementById('distanceMax');

function mostrarElementos(){
  const q = searchInput.value.trim().toLowerCase();
  const place = placeFilter.value;
  const min = distanceMin.value ? Number(distanceMin.value) : 0;
const max = distanceMax.value ? Number(distanceMax.value) : Infinity;
  const date = dateFilter.value.trim().toLowerCase();

const filtered = maratones.filter(r => {
    if (q && !r.name.toLowerCase().includes(q) && !r.place.toLowerCase().includes(q)) return false;
    if (place && !r.place.toLowerCase().includes(place.toLowerCase())) return false;

if (!r.distances.some(d => Number(d) >= min && d <= max)) return false;
    if (date && !r.date.toLowerCase().includes(date)) return false;
    return true;
  });

  listEl.innerHTML = '';
  
  filtered.forEach(maraton => {
  const row = document.createElement('div');
  row.className = 'race';

  row.innerHTML = `
    <div class="race-header" data-toggle="collapse" data-target="#detalle-${maraton.id}" style="cursor:pointer;">
      <span>${maraton.name}</span>
      <span>${maraton.date}</span>
      <span class="flecha">▼</span>
    </div>
    <div class="collapse" id="detalle-${maraton.id}">
        <p>Lugar: ${maraton.place}</p>
        <p>Distancias: ${maraton.distances.map(d => `${d} km`).join(', ')}</p>
         <button type="button" class="btn-registrar" data-toggle="modal" data-target="#modalRegistro" data-id="${maraton.id}">Registrarse</button>
    </div>
  `;

  listEl.appendChild(row);
});


  

}
mostrarElementos();

[searchInput, placeFilter, dateFilter, distanceMin, distanceMax].forEach(el => {
  el.addEventListener('input', mostrarElementos);
});

$('#modalRegistro').on('show.bs.modal', function (event) {
  const boton = event.relatedTarget;
  const id = boton.getAttribute('data-id');

  const maraton = maratones.find(m => m.id === id);

  document.getElementById('fMaraton').value = maraton.name;

  const selectDistancia = document.getElementById('fDistancia');
  selectDistancia.innerHTML = maraton.distances
    .map(d => `<option>${d} km</option>`)
    .join('');
});

