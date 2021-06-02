/* 
The forEach() method calls a function and iterates over the elements of an array. The forEach() method can also be used on Maps and Sets.



array.forEach(function(currentValue, index, arr), thisValue)



*/


var names= ['asha','Raju','Elora']

names.forEach((name,index)=>{
   console.log(`index : [${index}] - hello ${name}`);
})

//output : 
/*
index : [0] - hello asha
index : [1] - hello Raju
index : [2] - hello Elora
*/

var numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach((num)=>{
   console.log(num*5);
})

// output: 5,10,15,20,25,30,35,40,45,50