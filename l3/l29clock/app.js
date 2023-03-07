// Get UI
const hourel = document.querySelector('.hour');
const minuteel = document.querySelector('.minute');
const secondel = document.querySelector('.second');

// console.log(hourel,minuteel,secondel);



// function clock(){
//     // console.log('Hey');

//     var now = new Date();
//     // console.log(now);

//     var gettime = now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds()*1 + now.getMilliseconds() / 1000;


//     // change time to degree
//     var hours = gettime / 60 / 12 * 6;
//     var minutes = gettime / 60 * 6;
//     var seconds = gettime * 6;

//     // console.log(hours,minutes,seconds);

//     hourel.style.transform = `rotate(${hours}deg)`;
//     minuteel.style.transform = `rotate(${minutes}deg)`;
//     secondel.style.transform = `rotate(${seconds}deg)`;
// }

// clock();
// setInterval(clock,1000);




function setclock(){

    const now = new Date();
    // console.log(date); //Wed Mar 01 2023 17:26:21 GMT+0630 (Myanmar Time)
    const hours = now.getHours();
    const cvhours = hours%12;
    // console.log(cvhours);
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);


    // Method 2
    // setrotation(hourel,hours/12);
    // setrotation(minuteel,minutes/60);
    // setrotation(secondel,seconds/60);


    // Method 3
    hourel.style.transform = `rotate(${scale(cvhours,0,12,0,360)}deg)`;
    minuteel.style.transform = `rotate(${scale(minutes,0,60,0,360)}deg)`;
    secondel.style.transform = `rotate(${scale(seconds,0,60,0,360)}deg)`;
}

function setrotation(handitem,rotation){
    // console.log(handitem,rotation);

    handitem.style.setProperty('--myrotation',rotation*360);
}

const scale = function(number,inmin,inmax,outmin,outmax){
    return (number - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}

setclock();
setInterval(setclock,1000);



// formula
// function scale(number,inmin,inmax,outmin,outmax){
//     return (number - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
// }








// 1VA