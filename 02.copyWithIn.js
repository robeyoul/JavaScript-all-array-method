/* 
The copyWithin() method copies array elements to another position in the array, overwriting the existing values.

This method will never add more items to the array.

array.copyWithin(target, start, end)

*/

var name =['Raju', 'Elora','Asha','Sohana','Happy']

var x=name.copyWithin(2,2,0);

console.log(x);