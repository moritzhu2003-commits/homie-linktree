// Buttons beim Laden animieren
document.querySelectorAll('.link-btn').forEach((btn, i) => {
  btn.style.opacity = '0';
  btn.style.transform = 'translateY(16px)';
  setTimeout(() => {
    btn.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    btn.style.opacity = '1';
    btn.style.transform = 'translateY(0)';
  }, 100 + i * 80);
});
