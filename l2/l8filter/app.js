var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');
// console.log(getli); // HTML Collection

var getsortazm1btn = document.getElementById('sortazm1');
var getsortzam1btn = document.getElementById('sortzam1');
var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');

getinput.addEventListener('keyup',filter);

getsortazm1btn.addEventListener('click',sortingazm1);
getsortzam1btn.addEventListener('click',sortingzam1);
getsortazm2btn.addEventListener('click',sortingazm2);
getsortzam2btn.addEventListener('click',sortingzam2);



function sortingazm2(){

    var shouldswitch = true;
    var switching = true;

    // console.log(getli.length);

    do{
        switching = false;

        var i = 0;

        for(i; i < getli.length-1; i++){

            shouldswitch = false;

            if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }
        }

        if(shouldswitch){

            // element.insertBefore(new,old) / node.insertBefore(new,old)

            getli[i].parentElement.insertBefore(getli[i+1],getli[i]);
            switching = true;

        }

    }while(switching);

}

function sortingzam2(){

    var shouldswitch = true;
    var switching = true;

    // console.log(getli.length);

    do{
        switching = false;

        var i = 0;

        for(i; i < getli.length-1; i++){

            shouldswitch = false;

            if(getli[i].textContent.toLowerCase() < getli[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }
        }

        if(shouldswitch){

            // element.insertBefore(new,old) / node.insertBefore(new,old)

            getli[i].parentElement.insertBefore(getli[i+1],getli[i]);
            switching = true;
            
        }

    }while(switching);

}


// console.log(getli[0].textContent.toLowerCase());
// console.log(getli[1].textContent.toLowerCase());

//                     Ag Ag                     Mg Mg
// if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
//     console.log("true");
// }else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
//     console.log('equal');
// }else{
//     console.log('false')
// }







function sortingazm1(){
    // console.log("Helo")

    var lis = [];

    for(var j = 0; j < getli.length; j++){
        // console.log(getli[j]);
        // console.log(getli[j].textContent);
        lis.push(getli[j].textContent);
    }

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.sort().reverse());

    var azlis = lis.sort();

    getul.innerHTML = '';

    azlis.forEach(function(azli){
        // console.log(azli);
        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = 'javascript:void(0);';
        newlink.appendChild(document.createTextNode(azli));
        newli.appendChild(newlink);
        console.log(newli);

        getul.appendChild(newli);
    })
}

function sortingzam1(){
    // console.log("Helo")

    var lis = [];

    for(var j = 0; j < getli.length; j++){
        // console.log(getli[j]);
        // console.log(getli[j].textContent);
        lis.push(getli[j].textContent);
    }

    // console.log(lis);
    // console.log(lis.sort());
    // console.log(lis.sort().reverse());

    var azlis = lis.sort().reverse();

    getul.innerHTML = '';

    azlis.forEach(function(azli){
        // console.log(azli);
        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = 'javascript:void(0);';
        newlink.appendChild(document.createTextNode(azli));
        newli.appendChild(newlink);
        console.log(newli);

        getul.appendChild(newli);
    })
}




function filter(){
    // console.log('hello')

    var inputfilter = this.value.toLowerCase();
    // console.log(inputfilter);

    for(var i = 0; i < getli.length; i++){
        // console.log(getli[i]);
        // console.log(getli[i].querySelector('a').innerText.toLowerCase());
        // console.log(getli[i].getElementsByTagName('a')[0].innerText.toLowerCase());

        var getavalue = getli[i].querySelector('a').innerText.toLowerCase();

        if(getavalue.indexOf(inputfilter) > -1){
            getli[i].style.display = '';
        }else{
            getli[i].style.display = 'none';
        }



    }

}