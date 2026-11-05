const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightboxImage');
const lightboxClose = document.querySelector('.lightboxClose');
const imageButtons = document.querySelectorAll('.imageButton');

const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightboxOpen');
};

imageButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const image = button.querySelector('img');
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightboxOpen');
    });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});
