/* 
The JavaScript array fill() method fills the elements of the given array with the specified static values. This method modifies the original array. It returns undefined, if no element satisfies the condition.

syntex: 
array.fill(value,start,end)

value - The static value to be filled.

start - It is optional. It represents the index from where the value starts filling. By default, it is 0.

end - It is optional. It represents the index where the value stops filling. By default, it is length-1.

*/


var name= ['Asha', 'Elora', 'Happy']
console.log(name.fill('Raju'));

//output: [Raju, Raju, Raju]




var name1=  ['Asha', 'Elora', 'Happy']
name1.fill('Raju',0,1)
name1.fill('Hasan',2)
console.log(name1);

//output: ['Raju', 'Elora','hasan']





var myArray= new Array(10)
myArray.fill(0)
console.log(myArray);

// output : [0,0,0,0,0,0,0,0,0,0]

