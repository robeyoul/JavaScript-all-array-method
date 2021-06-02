/* 
The map() method in JavaScript creates an array by calling a specific function on each element present in the parent array.




 */
 
 var numbers= [1,2,3,4,5,6]
 var sqr= numbers.map((num)=>{
    return Math.pow(num, 2)
 })
 console.log(sqr);
 // output: [1,4,9,16,25,36]
 
 
 
 
 const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate net amount earnings


const calcAmmount= (obj)=>{
  let newObj={}
  newObj.name= obj.name;
  newObj.netEarning= obj.salary+ obj.bonus - obj.tax
  
  return newObj;
}


let newArray= employees.map(calcAmmount)

console.log(newArray);