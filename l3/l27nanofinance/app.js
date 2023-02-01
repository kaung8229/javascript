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

const getlsdatas = JSON.parse(localStorage.getItem('transactions'));
let gethistories = localStorage.getItem('transactions') !== null ? getlsdatas : [];



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

    totalvalue();
}

init();


function addtoui(transaction){
    // console.log(transaction);
    // console.log(transaction.amount, typeof transaction.amount);

    const newli = document.createElement('li');

    newli.innerHTML = `${transaction.remark} <span>${transaction.transtatus}${Math.abs(transaction.amount)}</span><span> ${transaction.date}</span><button type="button" class="delete-btn" onclick="removetransaction(${transaction.id})">&times;</button>`;

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
            id: generateidx(),
            transtatus: sign,
            amount: sign == '-' ? Number(-getamount.value) : Number(getamount.value),
            date: getdate.value,
            remark: getremark.value
        }

        // console.log(transaction);

        gethistories.push(transaction);

        addtoui(transaction);

        totalvalue();

        updatelocalstorage();

        getamount.value = '';
        getamount.focus();
        getdate.value = '';
        getremark.value = '';
        
    }

}


// update localstorage
function updatelocalstorage(){
    localStorage.setItem('transactions',JSON.stringify(gethistories));
}


function generateidx(){
    return Math.floor(Math.random() * 100000);
}
// console.log(generateidx());

function removetransaction(tranid){
    gethistories = gethistories.filter(gethistory => gethistory.id != tranid);

    init();

    updatelocalstorage();
}


function totalvalue(){
    const amounts = gethistories.map(gethistory=>gethistory.amount);
    // console.log(amounts);

    // Method 1
    // const result = amounts.reduce(function(total,curvalue){
    //     total += curvalue;
    //     return total;
    // },0).toFixed(2);

    // Method 2
    const totalresult = amounts.reduce((total,curvalue)=>total+=curvalue,0).toFixed(2);
    
    const debitresult = amounts.filter(amount=>amount > 0).reduce((total,curvalue)=>total+=curvalue,0).toFixed(2);

    const creditresult = amounts.filter(amount=>amount < 0).reduce((total,curvalue)=>total-=curvalue,0).toFixed(2);


    balance.innerText = `${totalresult}`;
    moneydeb.textContent = `${debitresult}`;
    moneycrd.innerHTML = `${creditresult}`;

    // console.log(totalresult);

}

// totalvalue();

openbtn.addEventListener('click',function(){
    gethistorybox.classList.toggle('show');
});

getform.addEventListener('submit',newtransaction);






// var myarrs = [10,20,30,40,50,60,70,80,90,100];

// reduce() // sum value in array
// array.reduce(function(total,currentValue,currentIndex,array) , initialValue);

// if we use 1 parameter in reduce()
// - total value result is the first value in array
// - curvalue result is all value in array but not first value
// - curidx result is all index in array but not first index
// - arr result is print 9 times arrs

// var result = myarrs.reduce(function(total,curvalue,curidx,arr){
    // console.log('total = ',total);
    // console.log('curvalue = ',curvalue);
    // console.log('curidx = ',curidx);
    // console.log(arr);

    // total += curvalue;

    // return total;
// },0);

// console.log(result);

