// Init
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var startyear = 2020;
var endyear = 2030;


// Get UI
var getcurmonth = document.getElementById('curmonth');
var getcuryear = document.getElementById('curyear');
var getcaldays = document.getElementById('caldays');

var getddmonth = document.getElementById('months');
var getddyear = document.getElementById('years');

var getyearbtn = document.querySelector('.year-btn');

var month,year;

window.addEventListener('load',function(){
    // console.log("hi");

    var getdate = new Date();
    month = getdate.getMonth();
    year = getdate.getFullYear();
    // console.log(getdate);
    // console.log(month); // 1
    // console.log(year); // 2023

    getcurmonth.innerText = months[month];
    getcuryear.innerText = year;


    initmonth();
    inityear();
    initdays();

});


function initmonth(){
    // console.log("he");

    getddmonth.innerHTML = '';

    for(var x=0; x<months.length; x++){

        var newdiv = document.createElement('div');
        newdiv.textContent = months[x];
        newdiv.classList.add('dropdown-item');

        newdiv.onclick = (function(){
            // console.log('hey');

            return function(){
                initdays();
            }
        })()

        getddmonth.appendChild(newdiv);
    }

}

function inityear(){

    getddyear.innerHTML = '';

    for(var i=startyear; i<endyear; i++){
        // console.log(i);

        var newdiv = document.createElement('div');
        newdiv.innerText = i;
        newdiv.className = 'dropdown-item';

        // console.log(newdiv);
        getddyear.appendChild(newdiv);
    }

}

function initdays(){
    getcaldays.innerHTML = '';

    var tmpdays = new Date(year,month,0);
    // console.log(tmpdays); // Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    var getalldays = alldays(year,month);
    // console.log(getalldays);
    var getweekdays = tmpdays.getDay();
    // console.log(getweekdays); // 2 ( 2 means tuesday);

    // get carry space for previous days
    for(var i = 0; i <= getweekdays; i++){
        // console.log(i);

        var newdiv = document.createElement('div');
        newdiv.className = 'day blank';

        // console.log(newdiv);

        getcaldays.appendChild(newdiv);

    }

    for(var x=0; x<getalldays; x++){
        // console.log(x);

        var addday = x+1;

        var newdiv = document.createElement('div');
        newdiv.textContent = addday;
        newdiv.classList.add('day');

        // console.log(newdiv);

        getcaldays.appendChild(newdiv);

    }

}

function alldays(year,month){
    // console.log(month,year);

    // console.log(new Date()); // Tue Feb 21 2023 08:30:08 GMT+0630 (Myanmar Time)

    // console.log(new Date(2023,1,10)); // Fri Feb 10 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,1,0)); // Tue Jan 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,0,0)); // Sat Dec 31 2022 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,5,0)); // Wed May 31 2023 00:00:00 GMT+0630 (Myanmar Time)
    // console.log(new Date(2023,1,30)); // Thu Mar 02 2023 00:00:00 GMT+0630 (Myanmar Time)

    var curalldays = new Date(year,month+1,0);
    // console.log(curalldays);
    curalldays = curalldays.getDate();
    // console.log(curalldays);

    return curalldays;

}


getyearbtn.addEventListener('click',function(){

    if(this.lastElementChild.classList.contains('show')){
        this.lastElementChild.classList.remove('show');
    }else{
        this.lastElementChild.classList.add('show');
    }

})






