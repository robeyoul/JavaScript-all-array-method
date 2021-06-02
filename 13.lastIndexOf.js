/* 
The lastIndexOf() method searches the array for the specified item, and returns its position.


If the item to search for is present more than once, the lastIndexOf method returns the position of the last occurence.


lastindexof এবং indexof প্রায় একই।

তবে দুই বা তার বেশি same elements থাকলে যেই element সবার শেষে থাকে সেই element lastindexof count করে। 

আর indexof  সবার প্রথমে যেই ekement থাকে তাকে count kore।

*/

 var names=['Raju','Elora','Asha','Sohana','Elora','Hasib']

var name=names.lastIndexOf('Elora')

console.log(name); //output: 4