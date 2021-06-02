/* 

The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).


findIndex এর মাধ্যমে একটি array থেকে কোন শর্তের মাধ্যমে  কোন একটি element এর index বের করা যায়।

যদি শর্তের সাথে একাধিক element মিলেও যায় তবুও এটি প্রথম element কে আউটপুট হিসাবে দেখাবে।


array.findIndex(function(currentValue, index, arr), thisValue)
 */
 
 
 var numbers= [10,20,30,40,50]
 
var bigThanThirty= numbers.findIndex((num)=>{
    return num>30
 })
 
 console.log('index is:'+ bigThanThirty);
 
 //output : index is : 3
 
 