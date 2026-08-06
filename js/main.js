// =========================================
// 0. Mezclar la galeria: en "Todos" se ve de todo un poco (no agrupado por categoria)
// =========================================
(function mezclarGaleria() {
  const grid = document.querySelector('.grid-fotos');
  if (!grid) return;
  const imgs = Array.from(grid.children); // solo los <img> (los comentarios no cuentan)
  // Fisher-Yates
  for (let i = imgs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imgs[i], imgs[j]] = [imgs[j], imgs[i]];
  }
  imgs.forEach(img => grid.appendChild(img)); // reordena el DOM
})();

// =========================================
// 1. Filtro en 2 niveles: categorias + subcategorias de "Eventos"
// =========================================
// Subcategorias que forman parte de "Eventos". Para sumar (ej. bautismos),
// agregas el valor aca y ya queda dentro del paraguas Eventos.
const EVENTOS = ['actos', 'cumpleanos'];

const botonesPrincipal = document.querySelectorAll('#filtros-principal [data-filter]');
const botonesSub = document.querySelectorAll('#subfiltros-eventos [data-sub]');
const barraSub = document.getElementById('subfiltros-eventos');
const fotos = document.querySelectorAll('.grid-fotos img');

let filtroPrincipal = 'all';
let filtroSub = 'all';

function aplicarFiltro() {
  fotos.forEach(foto => {
    const cat = foto.dataset.categoria;
    let mostrar;
    if (filtroPrincipal === 'all') {
      mostrar = true;
    } else if (filtroPrincipal === 'eventos') {
      // Dentro de Eventos: respeta la subcategoria elegida
      mostrar = EVENTOS.includes(cat) && (filtroSub === 'all' || cat === filtroSub);
    } else {
      mostrar = cat === filtroPrincipal;
    }
    foto.style.display = mostrar ? 'block' : 'none';
  });
}

// Nivel 1
botonesPrincipal.forEach(boton => {
  boton.addEventListener('click', () => {
    botonesPrincipal.forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');
    filtroPrincipal = boton.dataset.filter;
    filtroSub = 'all';

    if (filtroPrincipal === 'eventos') {
      // Mostrar la barra de subcategorias y resetearla en "Todos los eventos"
      barraSub.hidden = false;
      botonesSub.forEach(b => b.classList.toggle('activo', b.dataset.sub === 'all'));
    } else {
      barraSub.hidden = true;
    }
    aplicarFiltro();
  });
});

// Nivel 2 (subcategorias de Eventos)
botonesSub.forEach(boton => {
  boton.addEventListener('click', () => {
    botonesSub.forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');
    filtroSub = boton.dataset.sub;
    aplicarFiltro();
  });
});

// =========================================
// 2. Lógica del Lightbox (Pantalla completa)
// =========================================
fotos.forEach(foto => {
  foto.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    
    // Traemos la imagen en tamaño real desde data-full
    overlay.innerHTML = `<img src="${foto.dataset.full}">`;
    
    // Al hacer clic en el fondo oscuro, se cierra
    overlay.addEventListener('click', () => overlay.remove());
    
    document.body.appendChild(overlay);
  });
});

// =========================================
// 3. Lógica del Menú Inteligente (Smart Header)
// =========================================
let ultimoScroll = window.scrollY;
const cabecera = document.querySelector('header');

window.addEventListener('scroll', () => {
  let scrollActual = window.scrollY;

  // Si el usuario bajó más de 50px y está bajando, ocultamos el menú
  if (scrollActual > 50 && scrollActual > ultimoScroll) {
    cabecera.classList.add('oculto');
  } 
  // Si el usuario está subiendo, lo mostramos de nuevo
  else if (scrollActual < ultimoScroll) {
    cabecera.classList.remove('oculto');
  }

  ultimoScroll = scrollActual;
});

// =========================================
// 4. Boton de WhatsApp: siempre visible; se levanta al llegar al footer
// =========================================
const btnWsp = document.querySelector('.btn-whatsapp');
const pie = document.querySelector('footer');

if (btnWsp && pie && 'IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      // Si el footer esta a la vista, subimos el boton para no taparlo
      btnWsp.classList.toggle('subir', entrada.isIntersecting);
    });
  }, { threshold: 0 });

  observador.observe(pie);
}