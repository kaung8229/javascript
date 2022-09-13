const getmap = document.querySelector('.map-container');

var getsmallcolor = document.getElementById('smallcolor'),
    getmediumcolor = document.getElementById('mediumcolor'),
    getlargecolor = document.getElementById('largecolor');


var circleid = 0;

getmap.addEventListener('click',function(e){
    // console.log("HHI");

    circleid++;

    if(e.target.classList.contains('map-container')){
        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cx,cy);

        const mapleft = e.target.offsetLeft;
        const maptop = e.target.offsetTop;
        // console.log(mapleft,maptop);

        const curx = cx - mapleft;
        const cury = cy - maptop;
        // console.log(curx,cury);

        const circle = document.createElement('span');
        circle.id = circleid;
        circle.classList.add('circle');
        // console.log(circle)
        
        circle.style.left = curx + "px";
        circle.style.top = cury + "px";

        // circle.style.setProperty('--smallcolor','darkblue');
        // circle.style.setProperty('--mediumcolor','steelblue');
        // circle.style.setProperty('--largecolor','skyblue');

        // console.log(getsmallcolor.value);
        // console.log(getsmallcolor.selectedIndex);
        // console.log(getmediumcolor.selectedIndex);
        // console.log(getlargecolor.selectedIndex);

        if(getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex > 0){
            circle.style.setProperty('--smallcolor',getsmallcolor.value);
            circle.style.setProperty('--mediumcolor',getmediumcolor.value);
            circle.style.setProperty('--largecolor',getlargecolor.value);
        }

        // e.target.appendChild(circle);
        this.appendChild(circle);
    }
    
    removepointer(e);

})

function removepointer(e){
    // console.log(e.target);
    // console.log(e.target.id);

    if(e.target.id > 0){
        e.target.remove();
    }

}