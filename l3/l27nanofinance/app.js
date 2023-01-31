// const { transcode } = require("buffer");

// Get UI
const balance = document.getElementById('balance');
const moneydeb = document.getElementById('money-deb');
const moneycrd = document.getElementById('money-crd');

const getform = document.getElementById('form');
const gettranstatuses = document.querySelectorAll('.form-check-input');
const getamount = document.getElementById('amount');
const getdate = document.getElementById('date');
const getremark = document.getElementById('remark');

const openbtn = document.getElementById('open-btn');
const gethistorybox = document.querySelector('.history-box');
const getlistgroup = document.getElementById('list-group');


const dummydatas = [
    {
        id: 1,
        transtatus: '+',
        remark: 'Cash',
        amount: 1000,
        date: '2023-01-20'
    },
    {
        id: 2,
        transtatus: '-',
        remark: 'Pen',
        amount: -20,
        date: '2023-01-21'
    },
    {
        id: 3,
        transtatus: '+',
        remark: 'Other Income',
        amount: 300,
        date: '2023-01-25'
    },
    {
        id: 4,
        transtatus: '-',
        remark: 'Book',
        amount: -10,
        date: '2023-01-25'
    },
    {
        id: 5,
        transtatus: '-',
        remark: 'Water',
        amount: -150,
        date: '2023-01-25'
    },
    {
        id: 6,
        transtatus: '-',
        remark: 'Teamix',
        amount: -100,
        date: '2023-01-25'
    }
];

// console.log(dummydatas);

const getlsdatas = JSON.parse(localStorage.getItem('transaction'));
let gethistories = localStorage.getItem('transaction') !== null ? getlsdatas : [];



function init(){
    getlistgroup.innerHTML = '';

    // Method 1
    // dummydatas.forEach(function(dummydata){
    //     addtoui(dummydata);
    // })

    // Method 2
    // dummydatas.forEach(dummydata=>addtoui(dummydata));

    // Method 3 ****
    // dummydatas.forEach(addtoui);

    gethistories.forEach(addtoui);
}

init();


function addtoui(transaction){
    // console.log(transaction);
    // console.log(transaction.amount, typeof transaction.amount);

    const newli = document.createElement('li');

    newli.innerHTML = `${transaction.remark} <span>${transaction.transtatus}${Math.abs(transaction.amount)}</span><span> ${transaction.date}</span><button type="button" class="delete-btn">&times;</button>`;

    newli.className = 'list-group-item';

    newli.classList.add(transaction.transtatus == '+' ? 'inc' : 'dec');

    getlistgroup.appendChild(newli);

}





var sign = '-';

// get sign
gettranstatuses.forEach(function(gettranstatuse){
    gettranstatuse.addEventListener('change',function(){
        // console.log(this.value);

        if(this.value === 'debit'){
            sign = '+';
        }else if(this.value === 'credit'){
            sign = '-';
        }
    })
})

function newtransaction(e){
    e.preventDefault();
    // console.log(sign);
    // console.log('hey');

    if(isNaN(getamount.value) || getamount.value.trim() == '' || getdate.value.trim() == '' || getremark.value.trim() == ''){
        alert("Ohh!! Some data is missing!");
    }else{

        const transaction = {
            id: 1000,
            transtatus: sign,
            amount: sign == '-' ? Number(-getamount.value) : Number(getamount.value),
            date: getdate.value,
            remark: getremark.value
        }

        // console.log(transaction);

        gethistories.push(transaction);

        addtoui(transaction)
        
    }

}

openbtn.addEventListener('click',function(){
    gethistorybox.classList.toggle('show');
});

getform.addEventListener('submit',newtransaction);




