export default function countAllPaarl(regNo){
    const regNumbers = regNo.split(', ');
    let regNoCount = 0;
    for (let i=0; i<regNumbers.length; i++){
    const numbers = regNumbers[i];
      if (numbers.includes('CJ')){
       console.log(numbers);
        regNoCount++;
      }
     }
     return regNoCount;
   }