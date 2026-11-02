//comprobación de rut
function validarRut(rut) {
  rut = rut.toUpperCase()
  return /^\d{7,8}[\dKk]$/.test(rut);
}

//codigo antiguo transformado a alpine
document.addEventListener('alpine:init', () => {
  Alpine.data('carrerasApp', () => ({
    // ahora empieza vacío y se llena desde maratones.json
    maratones: [],
    cargando: true,
    error: '',

    // filtros
    q: '', place: '', date: '', min: '', max: '',

    // interfaz
    abierto: null,
    modalAbierto: false,
    seleccionada: null,
    rut: '',
    rutError: '',
    distanciaElegida: '',

    // Alpine llama a init() automáticamente al arrancar el componente
    async init() {
      try {
        const res = await fetch('data/maratones.json');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        this.maratones = await res.json();
      } catch (e) {
        this.error = 'No se pudieron cargar las carreras (' + e.message + ')';
        console.error(e);
      } finally {
        this.cargando = false;
      }
    },

    get filtered() {
      const q = this.q.trim().toLowerCase();
      const place = this.place.toLowerCase();
      const date = this.date.trim().toLowerCase();
      const min = this.min === '' ? 0 : Number(this.min);
      const max = this.max === '' ? Infinity : Number(this.max);

      return this.maratones.filter(r => {
        if (q && !r.name.toLowerCase().includes(q) && !r.place.toLowerCase().includes(q)) return false;
        if (place && !r.place.toLowerCase().includes(place)) return false;
        if (!r.distances.some(d => Number(d) >= min && Number(d) <= max)) return false;
        if (date && !r.date.toLowerCase().includes(date)) return false;
        return true;
      });
    },

    toggle(id) {
      this.abierto = this.abierto === id ? null : id;
    },

    abrirRegistro(maraton) {
      this.seleccionada = maraton;
      this.distanciaElegida = maraton.distances[0];
      this.rut = '';
      this.rutError = '';
      this.modalAbierto = true;
    },

    enviarRegistro() {
  if (!validarRut(this.rut)) {
    this.rutError = 'Escriba el RUT sin puntos ni guion, por ejemplo 123456785.';
    return;
  }

  console.log('Registro:', {
    maraton: this.seleccionada.name,
    rut: this.rut,
    distancia: this.distanciaElegida,
  });
  alert('Registro enviado: ' + this.seleccionada.name + ' — ' + this.distanciaElegida + ' km');
  this.modalAbierto = false;
},
  }));
});

