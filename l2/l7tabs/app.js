var gettablinks = document.getElementsByClassName('tablinks'); //HTML collection
var gettabpanes = document.getElementsByClassName('tab-pane'); //HTML collection

var getbtnclose = document.querySelectorAll('.btn-close'); //NodeList

var tabpanes = Array.from(gettabpanes);


function gettab(event,linkid){

    tabpanes.forEach(function(tabpane){
        tabpane.style.display = 'none';
    })

    document.getElementById(linkid).style.display = 'block';

    for(var i = 0; i < gettablinks.length; i++){
        gettablinks[i].className = gettablinks[i].className.replace(' active', '');

        getbtnclose[i].addEventListener('click',function(){
            // console.log(this.parentElement);
            this.parentElement.style.display = 'none';
        })

    }

    
    // event.target.className += " active";
    // event.target.className = event.target.className.replace('tablinks','tablinks active');
    // event.target.classList.add('active');

    // console.log(event);
    // console.log(event.target);
    // console.log(event.currentTarget);
    event.currentTarget.className += " active";


}

document.getElementById('autoclick').click();