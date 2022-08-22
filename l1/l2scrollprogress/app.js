var getprogressbar = document.getElementById('progress-bar');


window.onscroll = function(){
    scrollpoint();
}

function scrollpoint(){
    // console.log("Hey")

    // st - scrollTop
    // ph - project Height
    // ch - client view Height

    // st * 100 / (ph - ch);


    var getscrollTop = document.documentElement.scrollTop;
    // console.log(getscrollTop);
    var getprojectheight = document.documentElement.scrollHeight;
    // console.log(getprojectheight);
    var getclientviewheight = document.documentElement.clientHeight;
    // console.log(getclientviewheight);

    var calcheight = getprojectheight - getclientviewheight;

    var getfinal = Math.round(getscrollTop * 100 / calcheight);
    // console.log(getfinal);


    getprogressbar.style.width = `${getfinal}%`;


}


function printme(){
    window.print();
}
