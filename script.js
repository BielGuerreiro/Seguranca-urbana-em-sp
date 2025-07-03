const botao   = document.querySelector('.botao');
const inner = botao.querySelector('.inner');

botao.addEventListener('mousemove', e => {
  const rect = botao.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  inner.style.setProperty('--mouseX', `${x}px`);
  inner.style.setProperty('--mouseY', `${y}px`);
});
