// Just a small script to make the equations appear more randomly
document.addEventListener('DOMContentLoaded', () => {
  const equations = document.querySelectorAll('.equation');
  equations.forEach((eq, index) => {
    eq.style.left = Math.random() * 90 + '%';
    eq.style.animationDuration = (18 + Math.random() * 12) + 's';
    eq.style.animationDelay = (Math.random() * 10) + 's';
  });
});
