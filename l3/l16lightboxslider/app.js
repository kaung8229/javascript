var getimgs = document.querySelectorAll('.img');
// console.log(getimgs);
var getmodal = document.querySelector('.modal');
var getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('view');

var getprev = document.querySelector('.prev');
var getnext= document.querySelector('.next');

var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');

var getnoactive = document.getElementsByClassName('noactive');


for(var i=0; i<getimgs.length; i++){
    // console.log(getimgs[i]);

    getimgs[i].addEventListener('click',showmodal);

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

