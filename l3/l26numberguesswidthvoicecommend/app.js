// Get UI
const minnum = document.querySelector('.minnum'),
    maxnum = document.querySelector('.maxnum');

const getinput = document.querySelector('#guessnumber');
const getbtn = document.querySelector('#btn');

const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');



let min = 1,
max = 10,
gamelife = 3,
// winningnum = randomnum(min,max);
winningnum = 5;

minnum.innerText = min;
maxnum.textContent = max;


function randomnum(min,max){
    let getrdn = Math.random() * (max-min)+1;
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

    }else{

        

        if(gamelife === 0){
            // Game Over LOSE
        }else{
            // Try Again
        }

    }

})

