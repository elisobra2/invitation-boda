/* =========================================================
   PÉTALOS.JS — Animación de pétalos cayendo
   Genera pétalos SVG que caen desde la parte superior
   de la pantalla de forma continua.
   ========================================================= */

function initPetalos() {
  const petalLayer = document.getElementById('petal-layer');
  if (!petalLayer) return;

  const petalColors = ['#5C82AC', '#7C8A57', '#B7B8A0', '#FFFFFF', '#1E3A5C'];

  function spawnPetal() {
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    p.setAttribute('viewBox', '0 0 16 26');
    p.setAttribute('width', 10 + Math.random() * 10);
    p.setAttribute('height', 16 + Math.random() * 14);
    p.classList.add('petal');

    const color = petalColors[Math.floor(Math.random() * petalColors.length)];
    p.innerHTML = `<use href="#petal-shape" x="8" y="24" fill="${color}" opacity="0.8"/>`;

    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 8;
    const drift = (Math.random() * 160 - 80) + 'px';

    p.style.left = left + 'vw';
    p.style.setProperty('--drift', drift);
    p.style.animation = `fall ${duration}s linear forwards`;

    petalLayer.appendChild(p);
    setTimeout(() => p.remove(), duration * 1000);
  }

  setInterval(spawnPetal, 550);
  for (let i = 0; i < 6; i++) setTimeout(spawnPetal, i * 250);
}
