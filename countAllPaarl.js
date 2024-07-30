export function countAllPaarl(regNo){
    const regNumbers = regNo.split(', ');
    let regNoCount = 0;
    for (i=0; i<regNumbers.length; i++){
    const numbers = regNumbers[i];
      if (numbers.includes('CJ')){
       console.log(numbers);
        regNoCount++;
      }
     }
     return regNoCount;
   }