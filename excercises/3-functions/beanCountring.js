const countBs = str => {
  return countChar(str, 'B');
}

const countChar = (str, char) => {
  let sum = 0;
  for (let i=0; i<str.length; i++) {
    if (str[i] === char) sum++;
  } return sum;
}