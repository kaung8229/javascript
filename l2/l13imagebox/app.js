const getimageboxes = document.querySelectorAll('.imgBox');
// console.log(getimageboxes);

getimageboxes.forEach(function(getimagebox,idx){
    // console.log(getimagebox);
    // console.log(idx);

    getimagebox.addEventListener('click',function(){
        // console.log(idx);

        showbox(idx)

    })
})

function showbox(idx){
    // console.log(idx);

    getimageboxes.forEach(function(imagebox,curidx){
        // console.log('from parameter = ',idx);
        // console.log('from current = ',curidx);

        if(idx == curidx){
            imagebox.classList.add('show');

            imagebox.addEventListener('click',function(e){
                // console.log(e.target);
                // console.log(e.target.className);

                if(e.target.className == 'btn-close'){
                    imagebox.classList.remove('show');
                }

                if(e.target.className == 'btn'){
                    // const subbtn = imagebox.querySelector('.btn');
                    const subbtn = getimageboxes[idx].querySelector('.btn');

                    subbtn.textContent = "Subscribed";
                }

            })

        }else{
            imagebox.classList.remove('show')
        }
    })
}