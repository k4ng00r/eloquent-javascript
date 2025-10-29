let arrays = [[1, 2, 3], [4, 5], [6]];

let arraysSum = arrays.reduce(
  (accumulator, current) => accumulator.concat(current)
);

console.log(arraysSum);

// [1, 2, 3, 4, 5, 6]