var getcheckbox = document.getElementById('toggle-checkbox');
var getlabel = document.getElementById('toggle-label');

var getbasic = document.getElementById('basic');
var getprofessional = document.getElementById('professional');
var getmaster = document.getElementById('master');


getlabel.addEventListener('click',function(){
    // console.log("Hei");

    if(getcheckbox.checked){
        // getbasic.textContent = '10';
        // getprofessional.textContent = '20';
        // getmaster.textContent = '30';

        [getbasic.textContent,getprofessional.textContent,getmaster.textContent] = [10,20,30]
    }else{
        getbasic.textContent = '120';
        getprofessional.textContent = '240';
        getmaster.textContent = '360';
    }

})