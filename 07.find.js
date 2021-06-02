/* 
The find() method returns the value of the first element in an array that pass a test (provided as a function).

find মেথড array এর মধ্যে থেকে কোন শর্তের ভিত্তিতে প্রথম element কে খুজে আনে।
অর্থাৎ যদি array এর দুই বা ততোধিক element শর্তের সাথেও মিলে যায় তবুও এটি প্রথম element কেই receive করবে।সবগুলো element নিবে না।


array.find(function(currentValue, index, arr),thisValue)

*/

var numbers= [10,20,30,40,50,60,70,80,90,100]

var newNumber= numbers.find((num)=>{
   return num>50
})

console.log(newNumber); 

//output : 60 | because it find only the first value Which match the condition