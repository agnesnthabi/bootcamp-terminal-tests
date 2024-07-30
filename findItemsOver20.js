export default function findItemsOver20(fruits) {
  let fruitArray = [];
  for (let i = 0; i < fruits.length; i++) { 
      const fruit = fruits[i];
      if (fruit.qty > 20) {
          console.log(fruit);
          fruitArray.push(fruit);
      }
  }
  return fruitArray;
}

export function findItemsOver(fruits, threshold) {
  let fruitArray = [];
  for (let i = 0; i < fruits.length; i++) { 
      const fruit = fruits[i];
      if (fruit.qty > threshold) {
          console.log(fruit);
          fruitArray.push(fruit);
      }
  }
  return fruitArray;
}


var results = [
  {name: 'pears', qty: 37},
  {name: 'bananas', qty: 27}
];

