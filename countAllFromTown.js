const countAllFromTown = (listString, indicator) => {
  const myList = listString.split(',');
  const trimmedList = myList.map(s => s.trim());
  let count = 0;

  for (let i = 0; i < trimmedList.length; i++) {
      let currentRegNum = trimmedList[i];
      if (currentRegNum.startsWith(indicator)) {
          count++;
      }
  }
  return count;
}

export default countAllFromTown;
