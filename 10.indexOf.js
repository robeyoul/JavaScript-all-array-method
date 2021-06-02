

/* 
The indexOf() method searches the array for the specified item, and returns its position.

indexOf এর মাধ্যেমে কোন নির্দিষ্ট element কত নম্বর index এ আছে তা খুঁজে বের করা যায়।

যদি same element একের অধিক থাকে তাহলে প্রথমে যেই element আছে তার index পাওয়া যাবে।



*/

var names=['Raju','Elora','Asha','Sohana','Hasib']

var name=names.indexOf('Elora')

console.log(name); //output: 1


var names=['Raju','Elora','Asha','Sohana','Hasib','Elora']

var name=names.indexOf('Elora')

console.log(name); //output: 1 | beacuse it grab only the first matching element