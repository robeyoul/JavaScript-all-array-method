/* 

The filter() method creates an array filled with all array elements that pass a test (provided as a function).

বাংলা->

ফিল্টার মেথর্ড একটি array থেকে কোন শর্তের ভিত্তিতে নতুন একটি array তৈরি করে। 

array.filter(function(currentValue, index, arr), thisValue)
*/


var age=[11,12,13,14,15,16,17,18,19,20]

var greeterThanFifteen= age.filter((value)=>{
   return value>15
})

console.log(greeterThanFifteen);

//output: [16,17,18,19,20]




var names=['Raju','Elora','Asha','Happy','sohana']

// কাজ: যে সকল নাম চার অক্ষরের বেশি তাদের নিয়ে একটি array তৈরি করে।

var newName= names.filter((name)=>{
   return name.length>4
})

console.log(newName);

//output : [ 'Elora','Happy','sohana' ]