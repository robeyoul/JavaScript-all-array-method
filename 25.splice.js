/* 
The splice array method changes an existing array by removing, adding and/or replacing specified elements from it. The method mutates the array and returns an array of all elements removed from the array. An empty array is returned if no elements are removed.




#syntex: 
      array.splice(index, howManyRemove, item1, ....., itemX)
*/

var Name= ['Raju','Elora','Asha']
//add item
Name.splice(3,0,'Hasib','Happy')

console.log(Name);

//output : [ 'Raju', 'Elora', 'Asha', 'Hasib', 'Happy' ]




//delete item
Name.splice(1,1)
console.log(Name);

//output: [ 'Raju', 'Asha', 'Hasib', 'Happy' ]




//add and delete itme


Name.splice(3,1,'Elora','Sohana')

console.log(Name);

//output: [ 'Raju', 'Asha', 'Hasib', 'Elora', 'Sohana' ]