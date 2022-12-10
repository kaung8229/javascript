var gettext = document.getElementById('textarea');
var getdivarea = document.getElementById('divarea');

getdivarea.contentEditable = true;
getdivarea.spellcheck = false;


var getbtns = document.querySelectorAll('.btn');
// console.log(getbtns); // NodeList

getbtns.forEach(function(getbtn){
    getbtn.addEventListener('click',function(){
        // console.log(getbtn.title);
        
        // var getcommand = getbtn.getAttribute('data-command');
        var getcommand = getbtn.dataset['command'];
        // console.log(getcommand);

        if(getcommand == 'cleartxt'){
            getdivarea.innerHTML = '';
        }else if(getcommand == 'createLink' || getcommand == 'insertImage'){
                                // message             default value
            let geturl = prompt('Enter website link','https://');
            document.execCommand(getcommand,false,geturl);
        }else if(getcommand == 'foreColor'){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand == 'backColor'){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand == 'fontName'){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand == 'paste'){
            navigator.clipboard.readText().then(function(cliptxt){
                // console.log(cliptxt);
                getdivarea.innerHTML += cliptxt;
            })
        }else{
            document.execCommand(getcommand,false,null);
        }

        

    })
})





function boldfun(){
    gettext.style.fontWeight = 'bold';
}

function italicfun(){
    gettext.style.fontStyle = 'italic';
}

function underlinefun(){
    gettext.style.textDecoration = 'underline';
}

function lalgfun(){
    gettext.style.textAlign = 'left';
}

function calgfun(){
    gettext.style.textAlign = 'center';
}

function ralgfun(){
    gettext.style.textAlign = 'right';
}

function upcasefun(){
    gettext.style.textTransform = 'uppercase';
}

function lowcasefun(){
    gettext.style.textTransform = 'lowercase';
}

function capcasefun(){
    gettext.style.textTransform = 'capitalize';
}

function clearfun(){
    gettext.style.fontWeight = 'normal';
    gettext.style.fontStyle = 'normal';
    gettext.style.textDecoration = 'none';
    gettext.style.textAlign = 'left';
    gettext.value = '';
}



// document.execCommand(aCommandName,aShowDefaultUI,aValueArgument);


                            // Boolen                Null
// execCommand(aCommandName,aShowDefaultUI,aValueArgument);

// aShowDefaultUI = true,false;
