const loop = (start, testFunction, updateFunction, mainFunction) => {
  for (let value = start; testFunction(value); value = updateFunction(value)) {
    mainFunction(value);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);