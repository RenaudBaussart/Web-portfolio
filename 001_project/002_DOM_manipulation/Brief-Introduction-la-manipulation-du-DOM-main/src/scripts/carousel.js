let imageSelected = 1;
function changeImage(direction){
    let newImage = "../res/carousel/Carousel-";
    if(direction == 'left'){
            imageSelected--;
            if(imageSelected < 1){
                imageSelected = 3
            }
        } 

    if(direction == 'right'){
        imageSelected++;
        if(imageSelected > 3){
            imageSelected = 1
        }   
    }
    document.getElementById('screenCarousel').src = newImage + imageSelected + '.png';
}


