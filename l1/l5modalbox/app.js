var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getbtnclose = document.querySelector('.btn-close');

var getopenfull = document.getElementById('btn-openfull');
var getclosefull = document.getElementById('btn-closefull');

var form = document.querySelector('form');


getbtnsignup.addEventListener('click',function(){
    getmodal.style.display = 'block';
})

getbtnclose.addEventListener('click',function(){
    getmodal.style.display = 'none';
})


window.onclick = function(e){
    // console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = 'none'
    }
}


var getde = document.documentElement;

getopenfull.addEventListener('click',function(){

    if(getde.requestFullscreen){
        getde.requestFullscreen();
    }else if(getde.msRequestFullscreen){
        getde.msRequestFullscreen();
    }else if(getde.webkitRequestFullscreen){
        getde.webkitRequestFullscreen();
    }

    getclosefull.style.display = 'inline-block';


})


getclosefull.addEventListener('click',function(){
    
    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }

    getclosefull.style.display = 'none';

})

