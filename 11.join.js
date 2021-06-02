/*
The join() method returns the array as a string.

The elements will be separated by a specified separator. The default separator is comma (,).

Note: this method will not change the original array

join মেথডের মাধ্যমে array কে string এ কনভার্ট বা রূপান্তর করা যায়।



Syntex: array.join(separator)

*/


var names= ['Raju','Elora','Asha','Sohana','Happy']


var stringArray= names.join() // default

console.log(stringArray);

//output: Raju, Elora, Asha, Sohana, Happy

var names2= ['Raju','Elora','Asha','Sohana','Happy']


var stringArray2= names2.join(' | ')

console.log(stringArray2);

//output: Raju | Elora | Asha | Sohana | Happy