# Invitación de Boda — Elí & Lizbeth 💍
### 03 de octubre, 2026 · Comas, Lima

Invitación digital animada, modular y lista para personalizar. No necesita servidor
ni instalación: se abre directamente en cualquier navegador.

---

## 📁 Estructura del proyecto

```
Invitacion_Boda_Eli_Lizbeth_Premium/
├── index.html              → Estructura de la invitación (HTML)
├── style.css               → Todos los estilos visuales
├── script.js                → Orquestador principal (botones, calendario, WhatsApp, música)
├── assets/
│   ├── js/
│   │   ├── animaciones.js  → Apertura del sobre + revelado de secciones al hacer scroll
│   │   ├── contador.js     → Contador regresivo (días, horas, min, seg)
│   │   ├── petalos.js      → Animación de pétalos cayendo
│   │   └── carrusel.js     → Galería de fotos (espacios de ejemplo)
│   ├── audio/
│   │   └── LEEME.txt       → Aquí va tu música de fondo (musica.mp3)
│   └── img/
│       └── LEEME.txt       → Aquí van tus fotos para la galería
└── README.md                → Este archivo
```

---

## 🚀 Cómo usarla

1. Descomprime el .zip completo (mantén la carpeta `assets/` junto a `index.html`, `style.css` y `script.js` — si separas los archivos, la invitación deja de funcionar).
2. Haz doble clic en **index.html** para verla en tu navegador.
3. Para compartirla, sube **toda la carpeta** a un hosting gratuito como Netlify, Vercel o GitHub Pages, o compártela comprimida por WhatsApp/Drive.

---

## ✏️ Qué puedes editar (y dónde)

| Quiero cambiar... | Archivo | Qué buscar |
|---|---|---|
| Nombres, textos, versículo | `index.html` | Busca "Elí", "Lizbeth", el texto directamente |
| Fecha y hora de la boda | `index.html` y `script.js` | `2026-10-03T17:00:00-05:00` (aparece en ambos, deben coincidir) |
| Lugares y links de Google Maps | `index.html` | sección `mini-events` y `Cronograma del evento` |
| Números de WhatsApp (RSVP) | `index.html` | busca `wa.me/51925671694` y `wa.me/51997205834` |
| Datos bancarios / QR de regalo | `index.html` | sección "Mesa de regalos" |
| Colores del diseño | `style.css` | variables al inicio: `--navy`, `--blue`, `--olive`, etc. |
| Música de fondo | `assets/audio/` | agrega tu archivo con el nombre `musica.mp3` |
| Fotos de la galería | `assets/img/` y `assets/js/carrusel.js` | ver instrucciones dentro de `carrusel.js` |
| Cronograma del evento | `index.html` | sección `<!-- CRONOGRAMA -->` |

> 💡 Recuerda: reemplaza los datos bancarios, el QR de Yape/Plin y las fotos de ejemplo con tu información real antes de enviar la invitación.

---

## 🖼️ Cómo agregar fotos reales a la galería

Por defecto, la galería muestra 6 espacios con un ícono decorativo. Para poner fotos reales:

1. Coloca tus imágenes dentro de `assets/img/` (por ejemplo `foto1.jpg`, `foto2.jpg`...).
2. Abre `assets/js/carrusel.js` y reemplaza el ícono por una etiqueta `<img>` apuntando a tu foto (hay un ejemplo comentado al final del archivo).
3. Opcional: agrega esta regla en `style.css` para que las fotos se vean recortadas de forma uniforme:
   ```css
   .g-item img{width:100%; height:100%; object-fit:cover;}
   ```

---

## 🎵 Cómo agregar música de fondo

1. Consigue un archivo `.mp3` (idealmente instrumental, corta duración de carga).
2. Nómbralo exactamente `musica.mp3`.
3. Colócalo dentro de `assets/audio/`.
4. Al abrir la invitación, el botón flotante de música (ícono de nota musical) permitirá reproducirla/pausarla.

> Nota: la mayoría de navegadores bloquean el autoplay con sonido hasta que el usuario interactúa con la página — por eso el sobre "toca para abrir" también intenta iniciar la música al abrirse.

---

## ⚙️ Funcionalidades incluidas

- ✅ Sobre animado de apertura ("Toca el sobre para abrir")
- ✅ Pétalos cayendo de forma continua
- ✅ Contador regresivo en tiempo real
- ✅ Botones para agregar el evento a Google Calendar o descargar archivo `.ics`
- ✅ Botón flotante para compartir por WhatsApp
- ✅ Botón flotante de música (play/pausa)
- ✅ Botón "volver arriba"
- ✅ Revelado progresivo de secciones al hacer scroll
- ✅ Diseño 100% responsive (móvil y escritorio)
- ✅ Sección de cronograma, código de vestimenta, RSVP y mesa de regalos

---

## 📱 Compatibilidad

Funciona en Chrome, Safari, Edge y Firefox (versiones recientes), tanto en escritorio como en móvil. Recomendado: probarla primero en tu propio celular antes de enviarla a los invitados.

---

Hecho con cariño para la boda de **Elí Sobrados A. & Lizbeth Mamani Q.**
