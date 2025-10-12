const arrayToList = array => {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    const newListElement = {
      value: array[i],
      rest: list,
    }

    list = newListElement;
  }

  return list;
}

const listToArray = list => {
  const array = [];

  while (list != null) {
    array.push(list.value);
    list = list.rest
  }

  return array;
}

const prepend = (value, list) => {
  const newListHead = {
    value: value,
    rest: list,
  }

  return newListHead;
}

const nth = (list, position) => {
  let counter = 0;

  while (list != null) {
    if (counter === position) return list.value;

    list = list.rest;
    counter++;
  }

  return undefined;
}

const nthReccursive = (list, position) => {
  if (list == null) return undefined;
  else if (position === 0) return list.value;
  else return nth(list.rest, position - 1);
}