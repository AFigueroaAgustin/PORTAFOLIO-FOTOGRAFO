// =========================================
// 1. Lógica del Filtro por categoría
// =========================================
const botones = document.querySelectorAll('[data-filter]');
const fotos = document.querySelectorAll('.grid-fotos img');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    // Quitar la clase activo de todos los botones
    botones.forEach(b => b.classList.remove('activo'));
    // Agregarla solo al botón presionado
    boton.classList.add('activo');
    
    // Obtener qué categoría queremos filtrar
    const filtro = boton.dataset.filter;
    
    // Mostrar u ocultar las fotos según corresponda
    fotos.forEach(foto => {
      const mostrar = filtro === 'all' || foto.dataset.categoria === filtro;
      foto.style.display = mostrar ? 'block' : 'none';
    });
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