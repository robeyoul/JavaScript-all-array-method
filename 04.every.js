/* 
The every method checks that each element in an array passes a set test. This method will return true if all the elements pass the set. Once an element that fails the test is found, the method returns false.


for every method, must be use a function


its opposite method is some

*/


var number= [80,51,60,74,100,60]

var x=number.every(num => num>50)

console.log(x); 

//output: true | because all the element are greater than 50.

var age = [20,30,22,25,16].every((x)=>{
   return x>18
})

console.log(age);

//output: false | beacuse all the element is not greater than 18