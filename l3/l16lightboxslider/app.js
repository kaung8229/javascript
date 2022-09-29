var getimgs = document.querySelectorAll('.img');
// console.log(getimgs);
var getmodal = document.querySelector('.modal');
var getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('viewbox');
// console.log(getviews);

var getprev = document.querySelector('.prev');
var getnext= document.querySelector('.next');

var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');

var getnoactive = document.getElementsByClassName('noactive');
// console.log(getnoactive);



var curidx = 1;


for(var i=0; i<getimgs.length; i++){
    // console.log(getimgs[i]);

    // getimgs[i].addEventListener('click',showmodal);
    getimgs[i].addEventListener('click',function(){
        showmodal();

        // console.log(e.target.alt);
        // console.log(this.alt);

        const findids = this.alt.split('').filter(rmsp=>rmsp.trim() !== '');

        // console.log(findids);
        // console.log(findids[findids.length-1]);

        curidx = Number(findids[findids.length-1]);
        // console.log(curidx);
        // console.log(typeof curidx);

        slideshow(curidx);

    });

}


function showmodal(){
    getmodal.style.display = 'block';   
}


getbtnclose.onclick = function(){
    getmodal.style.display = 'none';
}


document.addEventListener('click',function(e){
    // console.log(e.target);

    if(e.target == getmodal){
        getmodal.style.display = 'none';
    }
})


function currentview(num){
    slideshow(curidx = num);
}

getnext.addEventListener('click',function(){
    // console.log("next");

    slideshow(curidx += 1);

})

getprev.addEventListener('click',function(){
    // console.log("prev");

    slideshow(curidx -= 1);

})

slideshow(curidx);

function slideshow(num){
    // console.log(num);

    var i;

    for(i=0; i<getviews.length; i++){
        getviews[i].style.display = 'none';
    }

    for(i=0; i<getviews.length; i++){
        // getnoactive[i].classList.remove('active');
        getnoactive[i].className = getnoactive[i].className.replace(' active','');
    }

    if(num > getviews.length){
        num = 1;
        curidx = 1;
    }

    if(num < 1){
        num = getviews.length;
        curidx = getviews.length;
    }

    // console.log('curidx',curidx);
    // console.log('num',num);

    getcounter.textContent = `${num} / ${getviews.length}`;

    getviews[num-1].style.display = 'block';
    getnoactive[num-1].className += ' active';

    getcaption.textContent = getnoactive[num-1].alt;

}

