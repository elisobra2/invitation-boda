/* =========================================================
   ANIMACIONES.JS — Sobre animado + revelado al hacer scroll
   ========================================================= */

/* Apertura del sobre al tocar/hacer clic */
function initEnvelope() {
  const envWrap = document.getElementById('envWrap');
  const envScreen = document.getElementById('envelope-screen');
  const mainContent = document.getElementById('main-content');
  const audio = document.getElementById('bg-audio');
  if (!envWrap || !envScreen || !mainContent) return;

  envWrap.addEventListener('click', () => {
    if (envWrap.classList.contains('open')) return;
    envWrap.classList.add('open');
    mainContent.style.display = 'block';
    document.body.classList.remove('locked');

    if (audio) {
      audio.play().catch(() => { /* autoplay bloqueado, el usuario puede usar el botón de música */ });
    }

    setTimeout(() => {
      envScreen.classList.add('hidden');
      document.querySelectorAll('.reveal').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) el.classList.add('in');
      });
    }, 1900);
  });
}

/* Revelado progresivo de secciones al hacer scroll */
function initRevealOnScroll() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}
