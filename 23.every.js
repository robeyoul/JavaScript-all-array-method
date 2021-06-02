


var ExamNumber= [
   {subject: 'Bangla', number: 70},
   {subject: 'English', number: 60},
   {subject: 'Math', number: 32},
   {subject: 'Computer', number: 80},
   ]
   
   var result= ExamNumber.every((subNum)=>{
      return subNum.number>33
   })
   
   console.log(result); //false
   
   
   