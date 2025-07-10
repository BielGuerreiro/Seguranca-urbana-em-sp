// efeito hover no card
const botao = document.querySelector('.botao');
const inner = botao.querySelector('.inner');

botao.addEventListener('mousemove', e => {
  const rect = botao.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  inner.style.setProperty('--mouseX', `${x}px`);
  inner.style.setProperty('--mouseY', `${y}px`);
});

// efeito celular ____________________________________________________________

document.addEventListener("DOMContentLoaded", () => {
  const gps = document.getElementById("gps");

  const observerGps = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gps.classList.add("ligado");
      }
    });
  }, { threshold: 0.4 });

  if (gps) observerGps.observe(gps);

  // efeito universal ________________________________________________________________
  
  const observerVisual = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");
        observerVisual.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".efeito1").forEach((el) => {
    observerVisual.observe(el);
  });

  document.querySelectorAll(".efeito2").forEach((el) => {
    observerVisual.observe(el);
  });

  document.querySelectorAll(".efeito3").forEach((el) => {
    observerVisual.observe(el);
  });
});

