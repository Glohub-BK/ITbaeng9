(() => {
  const countdown = document.getElementById('countdown');
  const launch = Date.parse('2026-09-18T00:00:00+09:00');
  let timer;

  function updateCountdown() {
    const remaining = Math.max(0, launch - Date.now());
    if (remaining === 0) {
      countdown.textContent = '지금 만나보세요';
      countdown.setAttribute('role', 'status');
      clearInterval(timer);
      return;
    }
    const seconds = Math.floor(remaining / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    countdown.textContent = `${days}일 ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  updateCountdown();
  timer = setInterval(updateCountdown, 1000);

  const steps = [...document.querySelectorAll('.feature-step')];
  const number = document.getElementById('feature-number');
  let pending = false;

  function updateNumber() {
    pending = false;
    const targetY = window.innerHeight * 0.48;
    let closest = steps[0];
    let distance = Infinity;
    for (const step of steps) {
      const rect = step.getBoundingClientRect();
      const gap = Math.abs((rect.top + rect.bottom) / 2 - targetY);
      if (gap < distance) {
        closest = step;
        distance = gap;
      }
    }
    if (closest) number.textContent = closest.dataset.number;
  }

  function scheduleNumber() {
    if (!pending) {
      pending = true;
      requestAnimationFrame(updateNumber);
    }
  }

  addEventListener('scroll', scheduleNumber, { passive: true });
  addEventListener('resize', scheduleNumber);
  updateNumber();

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const cards = steps.map(step => step.querySelector('.feature-card'));
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12 });
    document.body.classList.add('motion-ready');
    cards.forEach(card => observer.observe(card));
    reducedMotion.addEventListener('change', event => {
      if (event.matches) {
        observer.disconnect();
        document.body.classList.remove('motion-ready');
      }
    });
  }
})();
