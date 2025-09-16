// Cambiar idioma
const languageSwitcher = document.getElementById('language-switcher');
languageSwitcher.addEventListener('change', (e) => {
    window.location.href = e.target.value;
});

// Dropdown hover + click persistente
document.querySelectorAll('.dropdown').forEach(drop => {
    const button = drop.querySelector('.menu-btn');

    let isHovered = false;

    drop.addEventListener('mouseenter', () => {
        isHovered = true;
        drop.classList.add('open');
    });

    drop.addEventListener('mouseleave', () => {
        isHovered = false;
        setTimeout(() => {
            if(!isHovered) drop.classList.remove('open');
        }, 200); // retraso pequeño para evitar desaparición inmediata
    });

    button.addEventListener('click', (e) => {
        e.stopPropagation();
        drop.classList.toggle('open');
    });
});

// Click fuera cierra dropdowns
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
});
