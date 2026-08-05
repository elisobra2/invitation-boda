/* =========================================================
   SCRIPT.JS — Orquestador principal de la invitación
   Elí & Lizbeth · 26.09.2026
   Requiere que los archivos de assets/js/ se carguen ANTES
   que este script (ver orden en index.html).
   ========================================================= */

/* ============ INICIALIZAR MÓDULOS ============ */
initEnvelope();
initPetalos();
initContador('2026-09-26T17:00:00-05:00');
initCarrusel(6);
initRevealOnScroll();

/* ============ BOTÓN: VOLVER ARRIBA ============ */
const btnTop = document.getElementById('btn-top');
window.addEventListener('scroll', () => {
  btnTop.classList.toggle('show', window.scrollY > 500);
});
btnTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ============ BOTÓN: COMPARTIR POR WHATSAPP ============ */
const btnWa = document.getElementById('btn-wa');
btnWa.href = 'https://wa.me/?text=' + encodeURIComponent(
  '¡Nos casamos! Elí & Lizbeth te invitan a celebrar con ellos el 26 de septiembre, 2026. Mira todos los detalles aquí: ' + window.location.href
);
btnWa.target = '_blank';
btnWa.rel = 'noopener';

/* ============ BOTÓN: MÚSICA ============ */
const btnMusic = document.getElementById('btn-music');
const audio = document.getElementById('bg-audio');
let musicOn = false;
btnMusic.addEventListener('click', () => {
  if (musicOn) {
    audio.pause();
  } else {
    audio.play().catch(() => {});
  }
  musicOn = !musicOn;
  btnMusic.style.opacity = musicOn ? '1' : '0.6';
});

/* ============ AGREGAR AL CALENDARIO ============ */
document.getElementById('btn-gcal').href =
  'https://calendar.google.com/calendar/render?action=TEMPLATE'
  + '&text=' + encodeURIComponent('Boda de Elí & Lizbeth')
  + '&dates=20260926T220000Z/20260927T040000Z'
  + '&details=' + encodeURIComponent('Ceremonia Civil: Centro Cívico Municipal Comas, 5:00pm. Recepción: Av san Martin 168, Santa Isabel, Carabayllo, 7:00pm.')
  + '&location=' + encodeURIComponent('Centro Cívico Municipal, Comas, Lima');

document.getElementById('btn-ics').addEventListener('click', () => {
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'BEGIN:VEVENT',
    'DTSTART:20260926T220000Z', 'DTEND:20260927T040000Z',
    'SUMMARY:Boda de Elí & Lizbeth',
    'DESCRIPTION:Ceremonia Civil en Centro Cívico Municipal Comas (5:00pm)\\, Recepción en Av San Martin 168\\, Santa Isabel\\, Carabayllo (7:00pm).',
    'LOCATION:Centro Cívico Municipal\\, Comas\\, Lima.',
    'END:VEVENT', 'END:VCALENDAR'
  ].join('\r\n');
  const blob = new Blob([ics], { type: 'text/calendar' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'boda-eli-lizbeth.ics';
  link.click();
});
