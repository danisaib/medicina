document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    if (ramo.classList.contains('aprobado')) return;

    ramo.classList.add('aprobado');

    const desbloquea = ramo.getAttribute('data-desbloquea');
    if (desbloquea) {
      desbloquea.split(',').forEach(id => {
        const ramoHijo = document.getElementById(id);
        if (ramoHijo) ramoHijo.classList.remove('bloqueado');
      });
    }
  });
});
