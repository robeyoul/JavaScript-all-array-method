/* 
The keys() method returns a new Array Iterator object that contains the keys for each index in the array.


এর সাহায্যে array এর index গুলো পাওয়া যায়।


*/


var names= ['Raju','Elora','Asha','Sohana','Happy']


var iterator= names.keys()


for( index of iterator){
   console.log(index);
}

// output: 1 2 3 4 