/* 
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:

*/


// sorting string 


var fruits= ['Mango','Banana','Apple','Orange']

var sortingFruits= fruits.sort()

console.log(sortingFruits);

//output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]




// sorting number


var number= [40,100,1,5,25,10]

console.log(number.sort());

//output: [ 1, 10, 100, 25, 40, 5 ]
// it is wrong


// sorting number with compare function


var sortNumber= number.sort((a,b)=>{
   return a-b
})

console.log(sortNumber);
//output: [ 1, 5, 10, 25, 40, 100 ]