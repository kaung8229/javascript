var gettext = document.getElementById('textarea');

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
