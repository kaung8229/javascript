// Get UI
const getvideoscreen = document.getElementById('videoscreen');

const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop');

const progress = document.getElementById('progress');
const getfullscreen = document.getElementById('fullscreen');

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


const getdoce = document.documentElement;

function openfullscreen(){

    if(getdoce.requestFullscreen){
        getdoce.requestFullscreen();
    }else if(getdoce.webkitRequestFullscreen){
        getdoce.webkitRequestFullscreen();
    }else if(getdoce.msRequestFullscreen){
        getdoce.msRequestFullscreen();
    }
}

function closefullscreen(){

    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }
}



playbtn.addEventListener('click',playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',previousvdo);

getfullscreen.addEventListener('click',openfullscreen);


