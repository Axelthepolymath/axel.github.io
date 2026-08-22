document.addEventListener('DOMContentLoaded', () => {
  // Randomize floating equations
  const equations = [
    'E = mc²', '∇·E = ρ/ε₀', '∫f(x)dx', 'Σₙ₌₁^∞', 'ψ(x,t)',
    'a² + b² = c²', '∂L/∂q', '∀x∃y', 'ℏ∂ψ/∂t', 'Gμν = 8πTμν',
    'P(A|B)', 'softmax(x)', 'KL(P‖Q)', 'lim n→∞', '∞'
  ];

  const container = document.body;
  for (let i = 0; i < 12; i++) {
    const eq = document.createElement('div');
    eq.className = 'equation';
    eq.textContent = equations[Math.floor(Math.random() * equations.length)];
    eq.style.left = Math.random() * 92 + '%';
    eq.style.animationDuration = (16 + Math.random() * 18) + 's';
    eq.style.animationDelay = (Math.random() * 12) + 's';
    eq.style.fontSize = (0.9 + Math.random() * 0.9) + 'rem';
    container.appendChild(eq);
  }
});
