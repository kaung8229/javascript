var getbox = document.querySelector('.box');

dragme(getbox);

function dragme(getele){
    // console.log(getele);

    var getcx,getcy,setcx,setcy;

    getele.onmousedown = getmousedown;

    function getmousedown(e){
        // console.log(e.target);

        getcx = e.clientX;
        getcy = e.clientY;
        // console.log(getcx,getcy);

        document.onmousemove = dragme;

        document.onmouseup = stopdrageme;

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



        }

        function stopdrageme(){
            document.onmousemove = null;
            document.onmouseup = null;
        }

    }


}