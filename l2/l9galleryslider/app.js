var getimgs = document.querySelectorAll('.img');

var getmodal = document.querySelector('.modal');
var getmodalimg = document.querySelector('.modal-img');
var getcaption = document.querySelector('.caption');
var getbtnclose = document.querySelector('.btn-close');


for(var i=0; i<getimgs.length; i++){

    getimgs[i].addEventListener('click',function(){
        shownow(this);
    })

}

function shownow(ele){

    // console.log(ele);
    // console.log(ele.src);
    // console.log(ele.alt);

    getmodal.style.display = 'block';
    getmodalimg.src = ele.src;
    getcaption.textContent = ele.alt;

}

// getbtnclose.addEventListener('click',function(){
//     getmodal.style.display = 'none';
// })

getbtnclose.onclick = function(){
    getmodal.style.display = 'none';
}

document.addEventListener('click',function(e){

    // console.log(e.target);

    if(e.target == getmodal){
        getmodal.style.display = 'none';
    }

})