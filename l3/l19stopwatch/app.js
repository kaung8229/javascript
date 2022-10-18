// const getdisplay = document.querySelector('.display');
const getdisplay = document.querySelectorAll('.display');
const getstartbtn = document.querySelector('.start');
const getpausebtn = document.querySelector('.pause');
const getresetbtn = document.querySelector('.reset');

const getdlpsec = document.getElementById('dlpsecond');
const getdlpmilsec = document.getElementById('dlpmillisec');

const getmodebtn = document.querySelector('.mode-btn');
// var hours = 0,
//     minutes = 0,
//     seconds = 0,
//     milliseconds = 0;

var [hours,minutes,seconds,milliseconds] = [0,0,0,0];
// console.log(hours)

var setinvdisplay;

// getstartbtn.addEventListener('click',starttime);
// getpausebtn.addEventListener('click',pasuetime);
// getresetbtn.addEventListener('click',resettime);

// function starttime(){
//     // console.log('hey');

//     clearInterval(setinvdisplay);

//     setinvdisplay = setInterval(showdisplay,10);

// }

// function pasuetime(){
//     // console.log('hey');

//     clearInterval(setinvdisplay);

// }

// function resettime(){
//     // console.log('hey');

//     clearInterval(setinvdisplay);
//     [hours,minutes,seconds,milliseconds] = [0,0,0,0];
//     getdisplay.innerHTML = "00 : 00 : 00 : 000";

// }

// function showdisplay(){
//     // console.log('hey hey')

//     milliseconds += 10;
//     // console.log(milliseconds);

//     if(milliseconds === 1000){
//         milliseconds = 0;

//         seconds++;

//         if(seconds === 60){
//             seconds = 0;

//             minutes++;

//             if(minutes === 60){
//                 minutes = 0;

//                 hours++;
//             }
//         }
//     }

//     // console.log(milliseconds);
//     // console.log(seconds);

//     let h = hours < 10 ? '0' + hours : hours;
//     let m = minutes < 10 ? '0' + minutes : minutes;
//     let s = seconds < 10 ? '0' + seconds : seconds;
//     let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds: milliseconds;


//     getdisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

// }


var idx = 0;
getdisplay[idx].style.display = 'block';

getmodebtn.onclick = function(){
    // console.log("hey");

    
    reloadagain();
    [hours,minutes,seconds,milliseconds] = [0,0,0,0];


    getdisplay[idx].style.display = 'none';

    idx++;

    if(idx > 1){
        idx = 0;
    }

    getdisplay[idx].style.display = 'block';

    // console.log(idx)

}

getstartbtn.onclick = function(){
    clearInterval(setinvdisplay);
    setinvdisplay = setInterval(showdisplay, 10);
}

getpausebtn.onclick = function(){
    clearInterval(setinvdisplay);
}

getresetbtn.onclick = function(){
    reloadagain();
}

function reloadagain(){
    if(idx == 0){
        clearInterval(setinvdisplay);
        [hours,minutes,seconds,milliseconds] = [0,0,0,0];
        getdisplay[idx].innerHTML = "00 : 00 : 00 : 000";
    }else{
        clearInterval(setinvdisplay);
        milliseconds = '00';
        seconds = '00';

        getdlpmilsec.innerHTML = milliseconds;
        getdlpsec.innerHTML = seconds;
    }
}


function showdisplay(){
    // console.log('Hey')

    if(idx == 0){
        milliseconds += 10;
        // console.log(milliseconds);
        
        if(milliseconds === 1000){
            milliseconds = 0;
        
            seconds++;
        
            if(seconds === 60){
                seconds = 0;
        
                minutes++;
        
                if(minutes === 60){
                    minutes = 0;
        
                    hours++;
                }
            }
        }
        
        // console.log(milliseconds);
        // console.log(seconds);
        
        let h = hours < 10 ? '0' + hours : hours;
        let m = minutes < 10 ? '0' + minutes : minutes;
        let s = seconds < 10 ? '0' + seconds : seconds;
        let ms = milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds: milliseconds;
        
        
        getdisplay[idx].innerHTML = `${h} : ${m} : ${s} : ${ms}`;
    }else{
        milliseconds++;

        if(milliseconds <= 9){
            getdlpmilsec.innerHTML = "0" + milliseconds;
        }

        if(milliseconds > 9){
            getdlpmilsec.innerHTML = milliseconds;
        }

        if(milliseconds > 99){
            milliseconds = 0;
            seconds++;
            getdlpmilsec.innerHTML = '0' + 0;
            getdlpsec.innerHTML = '0' + seconds;
        }

        if(seconds > 9){
            getdlpsec.innerHTML = seconds;
        }
    }

    

}
