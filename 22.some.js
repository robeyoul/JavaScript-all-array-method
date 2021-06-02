/* 
This method checks if any of the elements contained in an array passes a set test. If at least one of the elements passes this test, true is returned. This method only returns a Boolean.

*/


var age= [18,24,25,33,30,29]

var result= age.some((age)=>{
   return age>30
})

console.log(result); // true


