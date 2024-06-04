const carousel = document.querySelector('.carouselImage');
const prevButton = document.querySelector('.prevImageCarousel');
const nextButton = document.querySelector('.nextImageCarousel');
const images = document.querySelectorAll('.carouselImage a');

let index = 0;


function showImage(index) {
    images.forEach(item => {
        item.classList.replace('carouselImageShowed','carouselImageHidden');
    })
    images[index].classList.replace('carouselImageHidden' , 'carouselImageShowed');
}

prevButton.addEventListener('click', function () {
    index = (index > 0) ? index - 1 : images.length - 1;
    showImage(index);
});

nextButton.addEventListener('click', function () {
    index = (index < images.length - 1) ? index + 1 : 0;
    showImage(index);
});
