var database = [
    {
        question: "Choose Traffic Light?",
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        correctanswer: "a"
    },
    {
        question: "Choose Mountain?",
        a: "./img/ambulance.jpg",
        b: "./img/mountain.jpg",
        c: "./img/traffic.jpg",
        d: "./img/airport.jpg",
        correctanswer: "b"
    },
    {
        question: "Choose Ambulance?",
        a: "./img/ambulance.jpg",
        b: "./img/airport.jpg",
        c: "./img/traffic.jpg",
        d: "./img/mountain.jpg",
        correctanswer: "a"
    },
    {
        question: "Choose Airport?",
        a: "./img/traffic.jpg",
        b: "./img/mountain.jpg",
        c: "./img/ambulance.jpg",
        d: "./img/airport.jpg",
        correctanswer: "d"
    }
];

// console.log(database);

var getcontainer = document.querySelector('.container');
var getquestion = document.querySelector('.question');
var getanswers = document.querySelectorAll('.answer');
// console.log(getanswer);

var geta_img = document.getElementById('a_img');
var getb_img = document.getElementById('b_img');
var getc_img = document.getElementById('c_img');
var getd_img = document.getElementById('d_img');
// console.log(geta_img);

var getbtn = document.querySelector('.btn');

var currentidx = 0;
var score = 0;

startquestion();

function startquestion(){

    removeselects();

    var currentqes = database[currentidx];

    getquestion.textContent = currentqes.question;
    geta_img.src = currentqes.a;
    getb_img.src = currentqes.b;
    getc_img.src = currentqes.c;
    getd_img.src = currentqes.d;
}

function getsingleanswer(){

    var answer;
    // console.log(answer);

    // console.log(getanswers);

    getanswers.forEach(getanswer=>{

        // console.log(getanswer.id);

        if(getanswer.checked){
            answer = getanswer.id;
        }

    });

    // console.log(answer);
    return answer;
    
}

// getsingleanswer();


getbtn.addEventListener('click',function(){

    var ans = getsingleanswer();

    // console.log(ans);

    if(ans){
        // console.log(ans);

        if(ans === database[currentidx].correctanswer){
            score++;
        }

        // console.log(score);

        currentidx++;

        if(currentidx < database.length){
            startquestion();
        }else{
            // console.log(score);

            getcontainer.innerHTML = `
                <h3>Total Score: ${score*25}</h3>
                <h4>You answered correctly ${score} / ${database.length}</h4>
                <!-- <button type="button" class="btn" ondblclick="location.reload();">Double click to reload</button> -->
                <button type="button" class="btn" onclick="doubleclick()">Double click to reload</button>
            `;

        }


    }else{
        alert("Choose one answer!");
    }

})


function removeselects(){

    getanswers.forEach(getanswer=>{
        return getanswer.checked = false;
    })

}


var clicktimes = 0;

function doubleclick(){

    console.log(clicktimes);

    if(clicktimes === 0){
        // clicktimes = new Date().getTime();
        clicktimes = new Date().getTime();
        // console.log(clicktimes);
    }else{

        if((new Date().getTime() - clicktimes) < 1000){

            // console.log("eh");

            window.location.reload();

            clicktimes = 0;

        }else{

            clicktimes = new Date().getTime();
            
        }

    }

}

