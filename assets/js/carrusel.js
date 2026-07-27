/* =========================================================
   CARRUSEL.JS — Galería de momentos
   Genera los espacios de la galería. Reemplaza cada
   placeholder con una <img> real de tus fotos cuando
   las tengas listas (ver README.md).
   ========================================================= */

function initCarrusel(totalEspacios = 6) {
  const gallery = document.getElementById('gallery');
  if (!gallery) return;

  const flowerIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3">
    <circle cx="12" cy="12" r="2.4"/>
    <path d="M12 2c2 2 2 5 0 7-2-2-2-5 0-7zM12 22c2-2 2-5 0-7-2 2-2 5 0 7zM2 12c2-2 5-2 7 0-2 2-5 2-7 0zM22 12c-2-2-5-2-7 0 2 2 5 2 7 0z"/>
  </svg>`;

  const fotos = [
    'assets/img/foto1.jpg',
    'assets/img/foto2.jpg',
    'assets/img/foto3.jpg',
    'assets/img/foto4.jpg',
    'assets/img/foto5.jpg',
    'assets/img/foto6.jpg'
  ];

  for (let i = 0; i < totalEspacios; i++) {
    const div = document.createElement('div');
    div.className = 'g-item';
    div.innerHTML = fotos[i]
      ? `<img src="${fotos[i]}" alt="Elí y Lizbeth" loading="lazy">`
      : flowerIcon;
    gallery.appendChild(div);
  }
}

/* -----------------------------------------------------------
   EJEMPLO: cómo reemplazar un placeholder por una foto real
   -----------------------------------------------------------
   div.innerHTML = '<img src="assets/img/foto1.jpg" alt="Elí y Lizbeth" loading="lazy">';
   (agrega esta regla en style.css si usas fotos reales:
     .g-item img{width:100%;height:100%;object-fit:cover;})
------------------------------------------------------------ */
