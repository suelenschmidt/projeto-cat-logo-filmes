const carousel = document.querySelector('.carousel');
let isMouseDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

carousel.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade conforme necessário
    carousel.scrollLeft = scrollLeft - walk;
});

function toggleSynopsis(id) {
    const synopsis = document.getElementById(`synopsis${id}`);
    synopsis.style.display = (synopsis.style.display === 'none') ? 'block' : 'none';
}