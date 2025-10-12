const range = (start, end, step = 1) => {
  const array = [];

  for (let i=start; step > 0 ? i <= end : i >= end; i += step) {
    array.push(i);
  }

  return array;
}

const sum = collection => collection.reduce((accumulator, current) => accumulator + current, 0);
