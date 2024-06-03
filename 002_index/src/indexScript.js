const carousel = document.querySelector('.carouselImage');
const prevButton = document.querySelector('.prevImageCarousel');
const nextButton = document.querySelector('.nextImageCarousel');
const images = document.querySelectorAll('.carousel a');
let index = 0;

function showImage(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', function () {
    index = (index > 0) ? index - 1 : images.length - 1;
    showImage(index);
});

nextButton.addEventListener('click', function () {
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage(index);
});
