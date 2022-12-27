// Get UI
const getvideoscreen = document.getElementById('videoscreen');

const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const stopbtn = document.getElementById('stop');

// for range
// const progress = document.getElementById('progress');

const getdisplaytime = document.getElementById('display-time');
const getfullscreen = document.getElementById('fullscreen');

const getcontainer = document.querySelector('.container');

const getopenfullscreen = document.querySelector('.openfullscreen');
const getclosefullscreen = document.querySelector('.closefullscreen');

// for progress container
const getprogressctn = document.querySelector('.progress-container');
const progress = document.getElementById('progress');

const title = document.getElementById('title');


const videos = ['samplevideo1','samplevideo2'];

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(vdo){
    getvideoscreen.src = `./source/${vdo}.mp4`;

    title.textContent = vdo;
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


function updateprogress(e){

    // Method 2 m1
    // console.log(e.target);
    // console.log(e.srcElement);
    // console.log(this)

    // const currentTime = e.target.currentTime;
    // const duration = e.target.duration;
    // console.log(currentTime,duration);

    // M2
    // const {currentTime} = e.target;
    // const {duration} = e.target;
    // console.log(currentTime,duration);


    // Method 2 m3
    // const {currentTime,duration} = e.target
    // console.log(currentTime,duration);

    // Method 2 m4 
    const [currentTime,duration] = [e.target.currentTime,e.srcElement.duration]
    // console.log(currentTime,duration);


    // console.log('hey');

    // currentTime,duration keywords come from video api
    // console.log(getvideoscreen.currentTime);
    // console.log(getvideoscreen.duration);

    // console.log((getvideoscreen.currentTime / getvideoscreen.duration) * 100);

    // FOR RANGE
    // if(getvideoscreen.currentTime === 0){
    //     progress.value = 0
    // }else{
    //     // progress.value = (getvideoscreen.currentTime / getvideoscreen.duration) * 100

    //     progress.value = (currentTime / duration) * 100
    // }
    // progress.value = (getvideoscreen.currentTime / getvideoscreen.duration) * 100


    // For progress container
    if(getvideoscreen.currentTime === 0){
        progress.style.width = '0%';
    }else{
        const progresspercent = (currentTime / duration) * 100;
        progress.style.width = `${progresspercent}%`;
    }

    // progress.value = (getvideoscreen.currentTime / getvideoscreen.duration) * 100;


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


    // Method 2 
    // Noted: partStart(area(target length), startvalue(pad String))must be string data type 
    // const minutevalue = getmins.toString().padStart(2, '0');
    // const secondvalue = getsecs.toString().padStart(2, '0');

    // console.log(minutevalue, secondvalue);
    // console.log(typeof minutevalue, typeof secondvalue);

    // getdisplaytime.innerText = `${minutevalue}:${secondvalue}`;


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


function setprogress(e){
    // console.log('hey');
    // console.log((progress.value*getvideoscreen.duration)/100);

    // for range
    // getvideoscreen.currentTime = (progress.value*getvideoscreen.duration)/100;


    // for progress container
    const getelewidth = this.clientWidth;
    // console.log(getelewidth);

    const getclickx = e.offsetX;
    // console.log(getclickx);

    const duration = getvideoscreen.duration;

    getvideoscreen.currentTime = (getclickx/getelewidth) * duration;
    // console.log(getvideoscreen.currentTime);

    
}



playbtn.addEventListener('click',playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',previousvdo);

getvideoscreen.addEventListener('timeupdate',updateprogress);
getvideoscreen.addEventListener('ended',nextvdo);
getvideoscreen.addEventListener('click',playpausevdo);

// for range
// progress.addEventListener('click',setprogress);

// for progress container
getprogressctn.addEventListener('click',setprogress);

getopenfullscreen.addEventListener('click',openfullscreen);
getclosefullscreen.addEventListener('click',closefullscreen);


