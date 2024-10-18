const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const images = document.querySelectorAll('.gallery-image');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentImageIndex = 0;

// Abrir el lightbox con la imagen seleccionada
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    currentImageIndex = index;
    lightbox.style.display = 'flex';
    lightboxImage.src = images[index].src;
}

// Cerrar el lightbox
document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Mostrar la imagen anterior
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    lightboxImage.src = images[currentImageIndex].src;
});

// Mostrar la imagen siguiente
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    lightboxImage.src = images[currentImageIndex].src;
});

// Cerrar el lightbox al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImage && e.target !== prevBtn && e.target !== nextBtn) {
        lightbox.style.display = 'none';
    }
});
