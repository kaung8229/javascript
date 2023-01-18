// Get UI
const minnum = document.querySelector('.minnum'),
    maxnum = document.querySelector('.maxnum');

const getinput = document.querySelector('#guessnumber');
const getbtn = document.querySelector('#btn');

const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');

const getgamectn = document.getElementById('game-container');

const getmicbtn = document.getElementById('mic-btn');

const getvcctn = document.getElementById('voice-container');



let min = 10,
max = 100,
gamelife = 3,
winningnum = randomnum(min,max);
// winningnum = 5;

minnum.innerText = min;
maxnum.textContent = max;

console.log(winningnum);


function randomnum(min,max){
    let getrdn = Math.floor(Math.random() * (max-min)+10);
    return getrdn;
}

// for Chrome Browser Support
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let getrec = new window.SpeechRecognition;

getmicbtn.addEventListener('click',function(){
    // console.log(getrec);

    // start recognition, start() come from recognition api
    getrec.start();

    getrec.addEventListener('result',(e)=>talking(e));
})

function talking(ele){
    // console.log(ele);
    const micresult = ele.results[0][0].transcript;
    // console.log(micresult);

    micmessage(micresult);
    getnumber(micresult);
}

function micmessage(msg){
    getvcctn.innerHTML = `
        <span class="voicemessage">Did you say "${msg}"!</span>
    `;
}

function getnumber(msg){
    const getnum = +msg;

    // console.log(typeof getnum);

    if(Number.isNaN(getnum)){
        getvcctn.innerHTML += `<div>This is not a valid number.</div>`;
        return false;
    }

    getinput.value = getnum;

    // stop recognition, stop() come from recognition api
    getrec.stop();
}


function setmessage1(msg,clr){
    message1.innerText = msg;
    message1.style.color = clr;
}

function setmessage2(msg,clr){
    message2.innerText = msg;
    message2.style.color = clr;
}

function gameover(won,msg){
    let color;

    won === true ? color = 'green' : color = 'red';

    getinput.disabled = true;
    getinput.style.borderColor = color;

    setmessage1(msg,color);

    getbtn.value = 'Play Again';

    getbtn.classList.add('playagain');
}

getbtn.addEventListener('click',function(){
    let guess = +getinput.value;
    // console.log(guess);

    if(guess < min || guess > max || isNaN(guess)){
        setmessage2(`Please enter a number between ${min} to ${max}`,'red');
    }

    if(guess === winningnum){
        // WON

        gameover(true,`You won!! ${guess} is correct.`)

        getvcctn.innerHTML = '';

    }else{

        gamelife--;

        if(gamelife === 0){
            // Game Over LOSE

            gameover(false,`Game Over!, You Lost. The correct number is ${winningnum}`);

        }else{
            // Try Again

            getinput.style.borderColor = 'red';

            getinput.value = '';

            setmessage1(`${guess} is not correct. ${gamelife} guess left.`,'blue');

            if(guess > winningnum){
                getvcctn.innerHTML += `<div>You should go down a bit.</div>`;
            }else if(guess < winningnum){
                getvcctn.innerHTML += `<div>You should go up a bit.</div>`;
            }

        }

    }

})


getgamectn.addEventListener('mousedown',function(e){
    // console.log(e.target);

    if(e.target.classList.contains('playagain')){
        window.location.reload();
    }

})

