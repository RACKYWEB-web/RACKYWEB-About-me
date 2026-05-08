const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
          // Animate skill bars
          const bar = entry.target.querySelector('.skill-tile-bar');
          const pct = entry.target.dataset.bar;
          if (bar && pct) {
            setTimeout(() => { bar.style.width = pct + '%'; }, 300);
          }
        }, i * 90);
      }
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => obs.observe(el));