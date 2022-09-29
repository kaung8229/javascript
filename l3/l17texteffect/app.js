var languages = ['Nodejs','Reactjs','Vuejs','Laravel'];
var colors = ['red','skyblue','violet','yellow'];

const gettextani = document.querySelector('.textani');

// console.log(languages);
// console.log(languages[0]);
// console.log(languages[1]);
// console.log(languages[2]);
// console.log(languages[3]);

// console.log(languages.indexOf('Reactjs'));
// console.log(languages.indexOf('Laravel'));

// console.log(colors[languages.indexOf('Reactjs')]);


// Generator function

// function* genfun(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// console.log(genfun().next());

// const getgen = genfun();

// console.log(getgen.next().value); // 1
// console.log(getgen.next().value); // 2
// console.log(getgen.next().value); // 3
// console.log(getgen.next().value); // undefined
// console.log(getgen.next().value); // undefined


// console.log(getgen.next()); // {value: 1; done: false;}
// console.log(getgen.next()); // {value: 2; done: false;}
// console.log(getgen.next().value); // 3
// console.log(getgen.next().value); // undefined
// console.log(getgen.next().value); // undefined


// return 0 - 3
function* generator(){
    var idx = 0;
    
    while(true){
        yield idx++;

        if(idx > 3){
            idx = 0;
        }

    }

}


// const testnumber = generator();
// console.log(testnumber.next()) // {value: 0; done: false}

// console.log(testnumber.next().value) // 0
// console.log(testnumber.next().value) // 1
// console.log(testnumber.next().value) // 2
// console.log(testnumber.next().value) // 3

// console.log(testnumber.next().value) // 0
// console.log(testnumber.next().value) // 1
// console.log(testnumber.next().value) // 2
// console.log(testnumber.next().value) // 3

let gen = generator();
showwords(languages[gen.next().value]);



function showwords(words){
    // console.log(words);

    let x = 0;
    
    gettextani.innerHTML = '';
    gettextani.classList.add(colors[languages.indexOf(words)])

    // gettextani.innerHTML = words;
    // gettextani.innerHTML += words[0];
    // gettextani.innerHTML += words[1];

    let showintval = setInterval(function(){

        // gettextani.innerHTML = words[0];
        // gettextani.innerHTML = words[1];

        if(x >= words.length){
            clearInterval(showintval);
            deletewords();
        }else{
            gettextani.innerHTML += words[x];
            x++;
        }

    },400)

    // console.log(x);

}

function deletewords(){

    var getword = gettextani.innerHTML;
    // console.log(getword);

    var getlastidx = getword.length - 1;
    // console.log(getlastidx);


    var deleinterval = setInterval(function(){

        if(getlastidx >= 0){
            gettextani.innerHTML = gettextani.innerHTML.substring(0,gettextani.innerHTML.length - 1);
            getlastidx--;
        }else{
            clearInterval(deleinterval);

            showwords(languages[gen.next().value])

            gettextani.classList.remove(colors[languages.indexOf(getword)]);
        }

    },400);


}
// showwords(languages[gen.next().value]);
// showwords(languages[gen.next().value]);
// showwords(languages[gen.next().value]);
// showwords(languages[gen.next().value]);
// showwords(languages[gen.next().value]);





var gettextlights = document.querySelectorAll('.text-light');
// console.log(gettextlights);

gettextlights.forEach(function(gettextlight){
    // console.log(gettextlight);

    let arrtexts = gettextlight.textContent.split('');
    // console.log(arrtexts);

    gettextlight.innerHTML = '';

    arrtexts.forEach(function(arrtext,idx){
        
        let newem = document.createElement('em');
        newem.innerHTML = arrtext;
        newem.style.animationDelay = `${idx * 0.05}s`;

        gettextlight.append(newem); 

    })

})
