var gettxtarea = document.getElementById('textarea');
let getdivarea = document.getElementById('divarea');
getdivarea.contentEditable = true;
getdivarea.spellcheck = false;

var getbtns = document.querySelectorAll('.btn');
// console.log(getbtns);
getbtns.forEach(function(getbtn){
    getbtn.addEventListener('click',function(){
        // console.log("hi");
        // var getcommand = getbtn.getAttribute('data-command');
                                //  keyword
        var getcommand = getbtn.dataset['command'];
        // console.log(getcommand);

        if(getcommand === "cleartext"){
            getdivarea.innerHTML = "";
        }else if(getcommand === "createLink" || getcommand === "insertImage"){
                                    // message              default
            let geturl = prompt("Enter your website link","https://");
            document.execCommand(getcommand,false,geturl);
        }else if(getcommand === "foreColor"){
            // console.log(getbtn.value);
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand === "backColor"){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand === "fontName"){
            document.execCommand(getcommand,false,getbtn.value);
        }else if(getcommand === "paste"){
            navigator.clipboard.readText().then(function(cliptext){
                getdivarea.innerHTML += cliptext;
            })
        }else{
            document.execCommand(getcommand,false,null);
        }

       

    });
});



// function boldfun(){
//     // console.log("hi")
//     gettxtarea.style.fontWeight = "bold";
// }

// function italicfun(){
//     // console.log("hi")
//     gettxtarea.style.fontStyle = "italic";
// }

// function underlinefun(){
//     // console.log("hi")
//     gettxtarea.style.textDecoration = "underline";
// }

// function lalgfun(){
//     // console.log("hi")
//     gettxtarea.style.textAlign = "left";
// }

// function calgfun(){
//     // console.log("hi")
//     gettxtarea.style.textAlign = "center";
// }

// function ralgfun(){
//     // console.log("hi")
//     gettxtarea.style.textAlign = "right";
// }

// function upcasefun(){
//     // console.log("hi")
//     gettxtarea.style.textTransform = "uppercase";
// }

// function lwcasefun(){
//     // console.log("hi")
//     gettxtarea.style.textTransform = "lowercase";
// }

// function capcasefun(){
//     // console.log("hi")
//     gettxtarea.style.textTransform = "capitalize";
// }

// function clearfun(){
//     // console.log("hi")
//     gettxtarea.style.fontWeight = "normal";
//     gettxtarea.style.fontStyle = "normal";
//     gettxtarea.style.textDecoration = "none";
//     gettxtarea.style.textAlign = "left";
//     gettxtarea.value = "";
// }

                            // Boolen                Null
// execCommand(aCommandName,aShowDefaultUI,aValueArgument);

// aShowDefaultUI = true,false;


//26TE