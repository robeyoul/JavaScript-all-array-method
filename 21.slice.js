/* 



slice accept negative value

arr.slice(start, end)
*/


var arr1= ['Raju','Elora','Asha','Sohana','Happy']

var newArr1= arr1.slice()
console.log(newArr1);
// output: ['Raju','Elora','Asha','Sohana','Happy']

var newArr2= arr1.slice(2)
console.log(newArr2);
// output: [Asha','Sohana','Happy']


var newArr3= arr1.slice(1,3)
console.log(newArr3);
// output: ['Elora','Asha']

var newArr4= arr1.slice(-1)
console.log(newArr4);

// output: ['happy']    | -1 means at the last element of an array.

