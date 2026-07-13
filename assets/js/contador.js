/* =========================================================
   CONTADOR.JS — Contador regresivo hacia la boda
   Actualiza días, horas, minutos y segundos cada segundo.
   ========================================================= */

function initContador(fechaISO) {
  const weddingDate = new Date(fechaISO).getTime();
  const countdownEl = document.getElementById('countdown');

  function tick() {
    const diff = weddingDate - new Date().getTime();

    if (diff <= 0) {
      if (countdownEl) {
        countdownEl.innerHTML =
          '<div class="cd-item"><span class="cd-num">💍</span><span class="cd-label">¡Ya es hoy!</span></div>';
      }
      return;
    }

    const days = document.getElementById('cd-days');
    const hours = document.getElementById('cd-hours');
    const min = document.getElementById('cd-min');
    const sec = document.getElementById('cd-sec');

    if (days) days.textContent = String(Math.floor(diff / 86400000)).padStart(2, '0');
    if (hours) hours.textContent = String(Math.floor(diff / 3600000) % 24).padStart(2, '0');
    if (min) min.textContent = String(Math.floor(diff / 60000) % 60).padStart(2, '0');
    if (sec) sec.textContent = String(Math.floor(diff / 1000) % 60).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}
