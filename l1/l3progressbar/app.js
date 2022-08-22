var progressbar = document.querySelector('.progress-bar');
var downloadbtn = document.querySelector('.download-btn');
var seturl = 'https://linkedin.com';

downloadbtn.addEventListener('click',function(){

    // console.log("hey")

    this.setAttribute('disabled',true)

    var setwidth = 0;

    var setinv = setInterval(progressinc,100);

    function progressinc(){

        if(setwidth >= 100){
            clearInterval(setinv);
            setwidth = 0;

            window.location.href = seturl;

        }else{
            setwidth++;

            progressbar.style.width = `${setwidth}%`;
            progressbar.setAttribute('data-inc',`${setwidth}%`)

        }

    }

})