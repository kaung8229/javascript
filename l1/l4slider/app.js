var slides = document.getElementsByClassName('carousel-item');
// console.log(slides);
var dots = document.querySelectorAll('.dot');
// console.log(dots);

var currslide = 1;



for(var i = 0; i < dots.length; i++){
    // console.log(i);

    dots[i].addEventListener('click',function(){

        // console.log(currslide)
        // console.log(this.getAttribute('data-bs-slide-to'));
        currslide = this.getAttribute('data-bs-slide-to');
        
        // console.log(currslide)
        carousel(currslide);

    })


}



// Previous btn
document.getElementById('prev').addEventListener('click',function(){
    carousel(--currslide);
    // console.log(currslide);
})

// Next btn
document.getElementById('next').addEventListener('click',function(){
    // console.log(++currslide);
    // console.log(currslide);

    carousel(++currslide);
    // console.log(currslide);

})







carousel(currslide);

function carousel(slidenum){
    // console.log(slidenum);

    for(var x = 0; x < slides.length; x++){
        slides[x].style.display= 'none';
    }

    for(var y = 0; y < dots.length; y++){
        // dots[y].classList.remove('active');
        // dots[y].className = 'dot';
        dots[y].className = dots[y].className.replace('active',' ');
    }


    if(slidenum > slides.length){
        currslide = 1;
    }else if(slidenum < 1){
        currslide = slides.length;
    }

    // console.log(currslide);


    slides[currslide-1].style.display = 'block';

    dots[currslide-1].className = 'dot active';
    // dots[currslide-1].className += ' active';
    // dots[currslide-1].classList.add('active');

}