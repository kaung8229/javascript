var getbox = document.querySelector('.box');
var getboxtitle = document.getElementById('boxtitle');

const getbtns = document.querySelector('.btns');

getbox.addEventListener('click',function(e){
    getbtns.classList.add('show');

    smallmenu(e.target);

})

getbox.addEventListener('dblclick',function(){
    getbtns.classList.remove('show');
})

dragme(getbox);

function dragme(getele){
    // console.log(getele);

    var getcx,getcy,setcx,setcy;

    // design 1
    // getele.onmousedown = getmousedown;

    // design 2
    if(getele){
        getboxtitle.onmousedown = getmousedown;
    }

    function getmousedown(e){
        // console.log(e.target);

        getcx = e.clientX;
        getcy = e.clientY;
        // console.log(getcx,getcy);

        document.onmousemove = dragme;
        document.onmouseup = stopdrageme;

        // getbtns.classList.remove('show');

        function dragme(e){
            // console.log(e.target);

            setcx = getcx - e.clientX;
            setcy = getcy - e.clientY;
            // console.log(getcx, setcx);
            // console.log(getcy, setcy);

            getcx = e.clientX;
            getcy = e.clientY;

            const btnleft = getele.offsetLeft;
            const btntop = getele.offsetTop;
            // console.log(btnleft,btntop);

            getele.style.left = (btnleft - setcx) + 'px';
            getele.style.top = (btntop - setcy) + 'px';
            
            // console.log(btnleft - setcx, btntop - setcy);

            // const getbtnsleft = getbtns.offsetLeft;
            // const getbtnstop = getbtns.offsetTop;

            // getbtns.style.left = (getbtnsleft - setcx) + 'px';
            // getbtns.style.top = (getbtnstop - setcy) + 'px';

            getbtns.classList.remove('show');

        }

        function stopdrageme(){
            document.onmousemove = null;
            document.onmouseup = null;
        }

    }


}


function smallmenu(icobox){
    // console.log(icobox);

    if(icobox.classList.contains('btn-icon')){
        console.log('yes');
    }else{
        console.log('no');
    }


}