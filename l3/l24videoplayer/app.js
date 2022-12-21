// Get UI
const getvideoscreen = document.getElementById('videoscreen');

const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop');

const progress = document.getElementById('progress');
const getdisplaytime = document.getElementById('display-time');
const getfullscreen = document.getElementById('fullscreen');

const getcontainer = document.querySelector('.container');

const getopenfullscreen = document.querySelector('.openfullscreen');
const getclosefullscreen = document.querySelector('.closefullscreen');


const videos = ['samplevideo1','samplevideo2'];

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(vdo){
    getvideoscreen.src = `./source/${vdo}.mp4`;
}



function playvdo(){
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    // play() method is come from video api
    getvideoscreen.play();
}

function pausevdo(){
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    playbtn.querySelector('i.fas').classList.add('fa-play');

    // pause() method is come from video api
    getvideoscreen.pause();
}

function playpausevdo(){

    if(getvideoscreen.paused){
        // getvideoscreen.play();
        playvdo();
    }else{
        // getvideoscreen.pause();
        pausevdo();
    }

}


function nextvdo(){
    curridx++;

    if(curridx > videos.length-1){
        curridx = 0;
    }

    // console.log(curridx);

    loadvideo(videos[curridx]);
    playvdo();
}

function previousvdo(){
    curridx -= 1;

    if(curridx < 0){
        curridx = videos.length-1;
    }

    // console.log(curridx);

    loadvideo(videos[curridx]);
    playvdo();
}


function updateprogress(){
    // console.log('hey');

    // currentTime,duration keywords come from video api
    // console.log(getvideoscreen.currentTime);
    // console.log(getvideoscreen.duration);

    // console.log((getvideoscreen.currentTime / getvideoscreen.duration) * 100);

    progress.value = (getvideoscreen.currentTime / getvideoscreen.duration) * 100;


    let getmins = Math.floor(getvideoscreen.currentTime/60);
    // console.log(getmins);

    if(getmins < 10){
        // getmins = '0' + getmins;
        getmins = '0' + String(getmins);
    }

    let getsecs = Math.floor(getvideoscreen.currentTime%60);
    // console.log(getsecs);

    if(getsecs < 10){
        // getsecs = '0' + getsecs;
        getsecs = '0' + String(getsecs);
    }


    getdisplaytime.innerText = `${getmins}:${getsecs}`;


}


// const getdoce = document.documentElement;

function openfullscreen(){

    if(getcontainer.requestFullscreen){
        getcontainer.requestFullscreen();
    }else if(getcontainer.mozRequestFullscreen){
        getcontainer.mozRequestFullscreen();
    }else if(getcontainer.webkitRequestFullscreen){
        getcontainer.webkitRequestFullscreen();
    }else if(getcontainer.msRequestFullscreen){
        getcontainer.msRequestFullscreen();
    }

    getopenfullscreen.style.display = 'none';
    getclosefullscreen.style.display = 'inline-block';
}

function closefullscreen(){

    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.mozCancelFullscreen){
        document.mozCancelFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }

    getopenfullscreen.style.display = 'inline-block';
    getclosefullscreen.style.display = 'none';
}


function setprogress(){
    // console.log('hey');
    // console.log((progress.value*getvideoscreen.duration)/100);

    getvideoscreen.currentTime = (progress.value*getvideoscreen.duration)/100;
}



playbtn.addEventListener('click',playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',previousvdo);

getvideoscreen.addEventListener('timeupdate',updateprogress);
progress.addEventListener('click',setprogress);

getopenfullscreen.addEventListener('click',openfullscreen);
getclosefullscreen.addEventListener('click',closefullscreen);


