var countAllFromTown = (listString, indicator) => {
    const myList = listString.split(',');
     const trimmedList = myList.map(s => s.trim());
     let fromStelliesCL = [];
     let fromKuilsriver = [];
     let listLength = myList.length;
     
     for (let i=0; i<listLength; i++){
     let currentRegNum = trimmedList[i];
      if(currentRegNum.startsWith(indicator)){
       fromStelliesCL.push(currentRegNum);
       }
       if(currentRegNum.startsWith(indicator)){
        fromKuilsriver.push(currentRegNum);
       }
     }
    switch(indicator){
      case 'CL':
        return fromStelliesCL.length;
        break;
      case 'CF':
        return fromKuilsriver.length;
        break;
                    
     }
   }