(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const bar = document.querySelector('.reading-progress');
  let queued = false;
  function progress() {
    const range = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${range > 0 ? Math.min(1, scrollY / range) : 0})`;
    queued = false;
  }
  addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(progress); } }, { passive: true });
  addEventListener('resize', progress);
  progress();
  if (!reduced.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .08 });
    document.querySelectorAll('.section-header, .about-profile-card, .research-card, .lab-grid, .stats-banner').forEach(el => {
      el.classList.add('reveal-ready'); observer.observe(el);
    });
    reduced.addEventListener('change', () => document.querySelectorAll('.reveal-ready').forEach(el => el.classList.add('is-visible')));
  }
  const menu = document.getElementById('navMenu');
  const toggle = document.getElementById('mobileNavToggle');
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.classList.contains('open')) {
      menu.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); toggle?.focus();
    }
  });
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => document.querySelectorAll('.filter-btn').forEach(item => item.setAttribute('aria-pressed', String(item === button))));
  });
})();
