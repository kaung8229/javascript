var getemail = document.getElementById('emails');
var gettextarea = document.getElementById('message');
var getbtn = document.querySelector('.btn');
var getemcontainer = document.querySelector('.email-container');


getemail.focus();

getemail.addEventListener('keyup',function(e){
    createemailist(e.target.value);
});

function createemailist(inputtext){
    // console.log(inputtext);

    // var eitms = inputtext.split(',');
    // console.log(eitms);

    // remove empty,empty(space)
    // var eitms = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');
    // console.log(eitms);

    // remove text space front and end / empty / empty(space)
    var eitms = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '').map(rmempty=>rmempty.trim());
    // console.log(eitms);

    getemcontainer.innerHTML = '';

    eitms.forEach(function(eitm){
        // console.log(eitm);

        const setnewspan = document.createElement('span');
        setnewspan.classList.add("email-item");
        setnewspan.textContent = eitm;
        // console.log(setnewspan);

        getemcontainer.appendChild(setnewspan);
    })
}

getbtn.addEventListener('click',function(e){
    sendemail();

    e.preventDefault();
})

function sendemail(){
    // console.log("i am working")

    var gettextvalue = gettextarea.value;
    var getaddresses = document.querySelectorAll('.email-item');
    // console.log(gettextvalue);
    // console.log(getaddresses);

    var persons = [];

    if(getaddresses.length > 0 && gettextvalue){
        getaddresses.forEach(function(getaddress){

            persons.push({
                email : getaddress.textContent,
                message : gettextvalue
            })
    
        })
        console.log(persons);
    }else{
        alert("Enter Message!!!");
        gettextarea.focus();
    }
}