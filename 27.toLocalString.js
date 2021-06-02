

var arr= [1,true, 'javascript', new Date()]
console.log(arr);
//output: [ 1, true, 'javascript', 2021-05-25T05:38:47.663Z ]

var string= arr.toLocaleString()
console.log(string);
//output: 1,true,javascript,5/25/2021, 11:38:47 AM


var currency= [100,300,500,400,200]

var BDCurrency= currency.toLocaleString('bn-bd',{
   style: 'currency',
   currency:'BDT'
})

console.log(BDCurrency);

//output: ১০০.০০৳,৩০০.০০৳,৫০০.০০৳,৪০০.০০৳,২০০.০০৳