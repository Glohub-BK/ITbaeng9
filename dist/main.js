(() => {
  const steps = [...document.querySelectorAll('.episode-step')];
  const number = document.getElementById('episode-number');
  let scheduled = false;

  function updateNumber() {
    scheduled = false;
    const target = innerHeight * 0.48;
    let active = steps[0];
    let distance = Infinity;
    for (const step of steps) {
      const rect = step.getBoundingClientRect();
      const gap = Math.abs((rect.top + rect.bottom) / 2 - target);
      if (gap < distance) { active = step; distance = gap; }
    }
    if (active && number) number.textContent = active.dataset.number;
  }
  function schedule() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateNumber); }
  }

  addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', schedule);
  updateNumber();

  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !reduce.matches) {
    const cards = steps.map(step => step.querySelector('.episode-card'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: .16});
    document.body.classList.add('motion-ready');
    cards.forEach(card => observer.observe(card));
    reduce.addEventListener('change', event => {
      if (event.matches) {
        observer.disconnect();
        document.body.classList.remove('motion-ready');
      }
    });
  }
})();
