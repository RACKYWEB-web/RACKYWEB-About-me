// Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          e.target.classList.add('visible');
          // Animate skill bars
          const bar = e.target.querySelector('.bar-fill');
          if (bar) {
            setTimeout(() => {
              bar.style.width = bar.dataset.width + '%';
            }, 200);
          }
        }, i * 80);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => obs.observe(el));