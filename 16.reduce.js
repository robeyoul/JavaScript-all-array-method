/* 
The JavaScript Array reduce() method executes a reducer function on each element of the array and returns a single output value.


reduce method array এর সবগুলো element কে একটি মাত্র element এ নিয়ে আসে।


arr.reduce(callback(accumulator, currentValue), initialValue)
*/



// sum of all value in the array

let arr1= [1,2,3,4,5,6,7,8,9,10]

let sum= arr1.reduce((accumulator,currentValue)=>{
   return accumulator+currentValue
},0)

console.log(sum); //output: 55




// different way

var adding= (accu, currValue)=>{
   return accu+ currValue
}

let sum1= arr1.reduce(adding)

console.log(sum1); //output: 55




// Subtracting Numbers in Array


const number= [1000,200,50,60,3,80,31]

const minus= (accu, currentValue)=>{
   return accu- currentValue
}

const substraction= number.reduce(minus)

console.log(substraction);

//output: 1000-200-50-60-3-80-31= 576