/* 
reduce and reduceRight are same method.
But there have a difference

reduce method-> apply left to right

reduceRight method-> apply rifht to left


*/


var number= [5,10,15,20,25,30]

var substract= number.reduceRight((prevValue, currValue)=>{
   return prevValue - currValue
})

console.log(substract); //-45

//output: 30+25-20-15-10-5= -45