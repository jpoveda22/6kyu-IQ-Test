function iqTest(numbers){
    let evenIndices = [];
     let oddIndices  = [];
     numbers.split(' ').forEach(function(num,index) {
       if(num % 2 === 0) {
         evenIndices.push((index+1));
       } else (
         oddIndices.push(index+1));
     });
     
     return (evenIndices.length === 1 ? evenIndices[0] : oddIndices[0]);
   }