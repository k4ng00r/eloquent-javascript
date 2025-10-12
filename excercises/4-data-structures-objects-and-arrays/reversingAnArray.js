const reverseArray = array => {
  const reversedArray = [];

  for (let i=array.length-1; i>=0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

const reverseArrayInPlace = array => {
  const temporaryArray = [];

  for (let i=array.length-1; i>=0; i--) {
    temporaryArray.push(array[i]);
    array.pop();
  }

  array.push(...temporaryArray);

  return array;
}